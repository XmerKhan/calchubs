import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSheetDBBlogs } from '@/hooks/useSheetDBBlogs';

export const LatestBlogs = () => {
  const { data: posts, isLoading, isError } = useSheetDBBlogs();
  const latest = posts?.slice(0, 6) ?? [];

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container flex justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  if (isError || latest.length === 0) return null;

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            Latest Articles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Our Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Guides, tips, and insights to help you make better calculations and financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="h-full bg-card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border-border group">
                {post.image && (
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
