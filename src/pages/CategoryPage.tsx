import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCategoryBySlug } from '@/data/calculatorCategories';

const CategoryPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen py-16">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <>
      <Helmet>
        <title>{category.title} - Free Online Tools | CalcHub</title>
        <meta name="description" content={`${category.description} Use our free ${category.title.toLowerCase()} for accurate results.`} />
        <meta name="keywords" content={`${category.title.toLowerCase()}, free calculators, online tools, ${category.calculators.map(c => c.title.toLowerCase()).join(', ')}`} />
        <link rel="canonical" href={`https://calchub.com${category.href}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": category.title,
            "description": category.description,
            "url": `https://calchub.com${category.href}`,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": category.calculators.map((calc, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": calc.title,
                "url": `https://calchub.com${calc.href}`
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen py-8">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{category.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{category.title}</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">{category.description}</p>
          </div>

          {/* Calculator Grid */}
          {category.calculators.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.calculators.map((calculator) => {
                const CalcIcon = calculator.icon;
                return (
                  <Card 
                    key={calculator.href} 
                    className="group bg-card border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <CalcIcon className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg text-foreground">{calculator.title}</CardTitle>
                        </div>
                        {calculator.isPopular && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {calculator.description}
                      </p>
                      <Button asChild className="w-full group-hover:bg-primary transition-colors">
                        <Link to={calculator.href} className="flex items-center justify-center gap-2">
                          Calculate Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="bg-card border-border">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Calculators for this category are coming soon!
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  We're working hard to add new tools. Check back later.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
