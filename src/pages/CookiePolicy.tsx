import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Vidify Calculators</title>
        <meta name="description" content="Learn about how Vidify Calculators uses cookies and similar technologies on our website." />
        <link rel="canonical" href="https://vidify.site/cookie-policy" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
              <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              <p>Vidify Calculators uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly, such as remembering your theme preference (light/dark mode).</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website through tools like Google Analytics.</li>
                <li><strong className="text-foreground">Advertising Cookies:</strong> Used by Google AdSense to display relevant advertisements.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-foreground">Cookie Name</th>
                      <th className="text-left p-4 text-foreground">Purpose</th>
                      <th className="text-left p-4 text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4">theme</td>
                      <td className="p-4">Stores your light/dark mode preference</td>
                      <td className="p-4">1 year</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">_ga</td>
                      <td className="p-4">Google Analytics - distinguishes users</td>
                      <td className="p-4">2 years</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4">_gid</td>
                      <td className="p-4">Google Analytics - distinguishes users</td>
                      <td className="p-4">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
              <p>We use services from third parties that may set their own cookies:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Google Analytics:</strong> For understanding website traffic and usage patterns</li>
                <li><strong className="text-foreground">Google AdSense:</strong> For displaying relevant advertisements</li>
              </ul>
              <p className="mt-4">These third parties have their own privacy and cookie policies which govern how they use the data they collect.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to refuse cookies or delete existing cookies through settings.</li>
                <li><strong className="text-foreground">Opt-Out Tools:</strong> You can opt out of Google Analytics using their browser add-on.</li>
                <li><strong className="text-foreground">Ad Preferences:</strong> Visit Google's ad settings to manage advertising preferences.</li>
              </ul>
              <p className="mt-4">Please note that disabling cookies may affect the functionality of our website.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p>If you have questions about our use of cookies, please contact us at privacy@vidify.site.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;