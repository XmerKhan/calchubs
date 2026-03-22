import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;

      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{trimmed.slice(3)}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold text-foreground mt-6 mb-3">{trimmed.slice(4)}</h3>;
      }
      if (trimmed.startsWith('| ') && trimmed.endsWith('|')) {
        return null; // Tables handled separately below
      }
      if (trimmed.startsWith('- ')) {
        return <li key={i} className="text-muted-foreground ml-4 mb-1">{renderInline(trimmed.slice(2))}</li>;
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return <li key={i} className="text-muted-foreground ml-4 mb-1 list-decimal">{renderInline(trimmed.replace(/^\d+\.\s/, ''))}</li>;
      }

      return <p key={i} className="text-muted-foreground mb-3 leading-relaxed">{renderInline(trimmed)}</p>;
    });
  };

  const renderInline = (text: string) => {
    // Bold
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      }
      // Links
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const linkParts: (string | JSX.Element)[] = [];
      let lastIndex = 0;
      let match;
      while ((match = linkRegex.exec(part)) !== null) {
        if (match.index > lastIndex) linkParts.push(part.slice(lastIndex, match.index));
        linkParts.push(
          <Link key={`link-${i}-${match.index}`} to={match[2]} className="text-primary hover:underline">{match[1]}</Link>
        );
        lastIndex = match.index + match[0].length;
      }
      if (linkParts.length > 0) {
        if (lastIndex < part.length) linkParts.push(part.slice(lastIndex));
        return <span key={i}>{linkParts}</span>;
      }
      return part;
    });
  };

  // Get related posts
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
            "headline": post.title,
            "description": post.description,
            "datePublished": post.date,
            "publisher": { "@type": "Organization", "name": "CalcHub" },
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

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline">{post.category}</Badge>
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            <span className="text-sm text-muted-foreground inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4">{post.description}</p>

          <div className="prose-custom">{renderContent(post.content)}</div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="container max-w-3xl mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="p-4 rounded-xl border border-border hover:bg-secondary/50 transition-colors group">
                  <Badge variant="outline" className="text-xs mb-2">{r.category}</Badge>
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
