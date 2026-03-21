import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export const LatestBlogs = () => {
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Latest from the Blog</h2>
            <p className="text-muted-foreground mt-2">Tips, guides, and insights about calculations and finance.</p>
          </div>
          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border bg-card group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-primary font-medium">
                    <BookOpen className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Link
          to="/blog"
          className="md:hidden flex items-center justify-center gap-2 mt-6 text-sm font-medium text-primary hover:underline"
        >
          View all posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
