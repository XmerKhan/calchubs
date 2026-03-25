import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useSheetDBBlogs } from '@/hooks/useSheetDBBlogs';

const Blog = () => {
  const { data: posts, isLoading, isError } = useSheetDBBlogs();

  return (
    <>
      <Helmet>
        <title>Blog - Vidify Calculators | Tips, Guides & Insights</title>
        <meta name="description" content="Read our latest articles on BMI, EMI, compound interest, percentage tricks, calorie counting, and more." />
        <link rel="canonical" href="https://vidify.site/blog" />
      </Helmet>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Practical guides, calculation tips, and financial insights to help you make smarter decisions.
            </p>
          </div>

          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          )}

          {isError && (
            <p className="text-center text-muted-foreground">Unable to load blog posts. Please try again later.</p>
          )}

          {posts && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post) => (
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
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;