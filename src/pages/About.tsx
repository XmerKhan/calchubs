import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - CalcHub | Our Mission & Story</title>
        <meta name="description" content="Learn about CalcHub's mission to provide free, accurate online calculators for everyone. Discover our story and values." />
        <link rel="canonical" href="https://calchub.com/about" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About CalcHub</h1>
            <p className="text-xl text-muted-foreground">Making calculations simple for everyone</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  CalcHub was founded with a simple mission: to provide free, accurate, and easy-to-use online calculators for everyone. Whether you're planning your finances, monitoring your health, or solving everyday math problems, our tools are designed to give you instant, reliable results.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Target className="w-5 h-5 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To democratize access to calculation tools and empower individuals with the information they need to make informed decisions about their health, finances, and daily life.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Award className="w-5 h-5 text-accent" />
                    Our Promise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every calculator on CalcHub is built with precision and tested for accuracy. We use industry-standard formulas and keep our tools updated with the latest standards.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Heart className="w-5 h-5 text-destructive" />
                  Why We Do This
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We believe that everyone should have access to tools that help them make better decisions. Financial calculators shouldn't be hidden behind paywalls. Health tools shouldn't require subscriptions. Basic math shouldn't need expensive software.
                </p>
                <p className="text-muted-foreground">
                  That's why CalcHub will always be free. We sustain our operations through respectful advertising that doesn't interrupt your experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  CalcHub is built and maintained by a dedicated team of developers, mathematicians, and UX designers who are passionate about creating tools that make a difference. We're constantly working to improve existing calculators and add new ones based on user feedback.
                </p>
              </CardContent>
            </Card>

            <div className="text-center p-8 bg-secondary/50 rounded-lg">
              <p className="text-lg text-foreground font-medium">
                Have suggestions for new calculators or improvements?
              </p>
              <p className="text-muted-foreground mt-2">
                We'd love to hear from you. Reach out through our contact page!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
