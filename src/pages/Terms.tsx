import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - CalcHub</title>
        <meta name="description" content="Read CalcHub's terms and conditions for using our free online calculator services." />
        <link rel="canonical" href="https://calchub.com/terms" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using CalcHub, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use of Our Services</h2>
              <p>
                CalcHub provides free online calculators for informational and educational purposes. You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="mt-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use our services for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use automated systems to access our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Calculator Accuracy</h2>
              <p>
                While we strive for accuracy in all our calculators, the results are for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any calculation results.
              </p>
              <p className="mt-4">
                For critical decisions regarding health, finances, or legal matters, please consult with qualified professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                All content on CalcHub, including but not limited to text, graphics, logos, and software, is the property of CalcHub and is protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, CalcHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnification</h2>
              <p>
                You agree to indemnify and hold CalcHub harmless from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p>
                For questions about these Terms, please contact us at legal@calchub.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
