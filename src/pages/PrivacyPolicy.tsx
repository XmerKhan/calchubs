import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Vidify Calculators</title>
        <meta name="description" content="Vidify Calculators' privacy policy explains how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://vidify.site/privacy-policy" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>Welcome to Vidify Calculators. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our calculator website.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you use our calculators, including calculation inputs (not stored permanently), pages visited, and time spent.</li>
                <li><strong className="text-foreground">Device Information:</strong> Browser type, operating system, and device type for optimization purposes.</li>
                <li><strong className="text-foreground">Cookies:</strong> Small data files to improve your experience and for analytics.</li>
                <li><strong className="text-foreground">Contact Information:</strong> Only if you voluntarily submit it through our contact form.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our calculator services</li>
                <li>To improve and optimize our website</li>
                <li>To analyze usage patterns and trends</li>
                <li>To display relevant advertisements through Google AdSense</li>
                <li>To respond to your inquiries</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
              <p>We use third-party services that may collect information about you:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Google Analytics:</strong> For website traffic analysis</li>
                <li><strong className="text-foreground">Google AdSense:</strong> For displaying advertisements</li>
              </ul>
              <p className="mt-4">These services have their own privacy policies governing the use of your information.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of certain data collection (e.g., cookies)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p>If you have questions about this privacy policy, please contact us at privacy@vidify.site.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;