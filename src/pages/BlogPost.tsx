import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSheetDBBlogPost } from '@/hooks/useSheetDBBlogs';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, posts, isLoading, isError } = useSheetDBBlogPost(slug);

  if (isLoading) {
    return (
      <div className="container py-16 flex justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (exclude current)
  const related = posts?.filter((p) => p.slug !== post.slug).slice(0, 3) ?? [];

  return (
    <>
      <Helmet>
        <title>{post.title} - CalcHub Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://calchub.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            image: post.image || undefined,
            publisher: { "@type": "Organization", name: "CalcHub" },
          })}
        </script>
      </Helmet>

      <article className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate">{post.title}</span>
          </nav>

          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4">{post.description}</p>

          {post.image && (
            <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8 object-cover max-h-96" />
          )}

          {/* Render HTML content from Google Sheets */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {related.length > 0 && (
          <div className="container max-w-3xl mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors group">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default BlogPost;
