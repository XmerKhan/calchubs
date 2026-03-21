import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBlogBySlug, blogPosts } from '@/data/blogPosts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, BookOpen } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('- **')) {
        const items = block.split('\n').map((line, j) => {
          const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)/);
          if (match) return <li key={j} className="mb-1"><strong>{match[1]}</strong>{match[2] ? `: ${match[2]}` : ''}</li>;
          return <li key={j}>{line.replace('- ', '')}</li>;
        });
        return <ul key={i} className="list-disc pl-6 text-muted-foreground space-y-1 mb-4">{items}</ul>;
      }
      if (block.match(/^\d\./)) {
        const items = block.split('\n').map((line, j) => (
          <li key={j} className="mb-1">{line.replace(/^\d+\.\s*/, '')}</li>
        ));
        return <ol key={i} className="list-decimal pl-6 text-muted-foreground space-y-1 mb-4">{items}</ol>;
      }
      // Bold text
      const html = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      return <p key={i} className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />;
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - CalcHub Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://calchub.com/blog/${post.slug}`} />
      </Helmet>

      <div className="container py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{post.title}</h1>
          </div>

          <div className="prose-like">{renderContent(post.content)}</div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(rp => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-border bg-card group">
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="text-xs mb-2">{rp.category}</Badge>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">{rp.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <BookOpen className="w-3 h-3" /> {rp.readTime}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
