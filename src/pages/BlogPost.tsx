import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useSheetDBBlogPost } from '@/hooks/useSheetDBBlogs';

const AdPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full my-8 py-6 border border-dashed border-border rounded-xl bg-muted/30 flex items-center justify-center">
    <span className="text-xs text-muted-foreground tracking-wide uppercase">{label}</span>
  </div>
);

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

  const related = posts?.filter((p) => p.slug !== post.slug).slice(0, 4) ?? [];

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
          {/* Breadcrumb */}
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

          {/* Ad slot: Top */}
          <AdPlaceholder label="Advertisement" />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4 leading-relaxed">{post.description}</p>

          {post.image && (
            <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8 object-cover max-h-96" />
          )}

          {/* Blog content with improved typography */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-foreground prose-headings:font-bold prose-headings:leading-tight prose-headings:mt-10 prose-headings:mb-4
              prose-p:text-muted-foreground prose-p:leading-[1.85] prose-p:mb-5 prose-p:text-[1.05rem]
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:my-6
              prose-li:text-muted-foreground prose-li:leading-[1.85]
              prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Ad slot: End of article */}
          <AdPlaceholder label="Advertisement" />
        </div>

        {/* Related Blogs */}
        {related.length > 0 && (
          <div className="container max-w-4xl mt-16 pt-10 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                  <Card className="h-full bg-card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border-border overflow-hidden">
                    {r.image && (
                      <div className="aspect-video overflow-hidden">
                        <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {r.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="text-primary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-3 h-3" />
                      </span>
                    </CardContent>
                  </Card>
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
