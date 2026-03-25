import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Shield, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AdSenseInfo = () => {
  return (
    <>
      <Helmet>
        <title>Advertise With Us - Vidify Calculators | AdSense Information</title>
        <meta name="description" content="Learn about advertising opportunities on Vidify Calculators. Our calculator website reaches millions of users looking for financial, health, and mathematical tools." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Advertise With Us</h1>
            <p className="text-xl text-muted-foreground">Reach millions of engaged users on Vidify Calculators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary">1M+</p>
                <p className="text-muted-foreground mt-2">Monthly Visitors</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-accent">30+</p>
                <p className="text-muted-foreground mt-2">Calculator Tools</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold text-primary">3min</p>
                <p className="text-muted-foreground mt-2">Avg. Session Duration</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  Why Vidify Calculators is AdSense-Ready
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Original, Quality Content</p>
                      <p className="text-sm text-muted-foreground">Unique calculator tools with educational content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Policy Compliant</p>
                      <p className="text-sm text-muted-foreground">Fully compliant with Google AdSense policies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">User-Friendly Design</p>
                      <p className="text-sm text-muted-foreground">Clean layout with designated ad spaces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Privacy Compliant</p>
                      <p className="text-sm text-muted-foreground">GDPR-ready with proper disclosures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <FileText className="w-5 h-5 text-primary" />
                  Our Content Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Vidify Calculators maintains high content standards that make it an ideal platform for advertisers:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span>All calculators use verified, industry-standard formulas</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span>Educational content accompanies each calculator</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span>No misleading claims or clickbait</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span>Family-friendly content only</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span>Regular content updates and improvements</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  Ad Placement Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We've designed our site with optimal ad placements that balance user experience with visibility:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span><strong className="text-foreground">After Results:</strong> Prime placement when users are most engaged</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span><strong className="text-foreground">Sidebar:</strong> Visible without interrupting the main content</span></li>
                  <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-1" /><span><strong className="text-foreground">Between Sections:</strong> Natural breaks in content flow</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Required Pages Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">All essential pages required for AdSense approval are available:</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <Link to="/about" className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-foreground">About Us</span></Link>
                  <Link to="/contact" className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-foreground">Contact Us</span></Link>
                  <Link to="/privacy-policy" className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-foreground">Privacy Policy</span></Link>
                  <Link to="/terms" className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-foreground">Terms & Conditions</span></Link>
                  <Link to="/disclaimer" className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-foreground">Disclaimer</span></Link>
                  <Link to="/cookie-policy" className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"><CheckCircle className="w-4 h-4 text-accent" /><span className="text-foreground">Cookie Policy</span></Link>
                </div>
              </CardContent>
            </Card>

            <div className="text-center p-8 bg-primary/10 rounded-lg">
              <p className="text-lg text-foreground font-medium mb-2">
                Interested in advertising on Vidify Calculators?
              </p>
              <p className="text-muted-foreground">
                Contact us at <span className="text-primary font-medium">ads@vidify.site</span> for partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdSenseInfo;