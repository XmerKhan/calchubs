import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Vidify Calculators</title>
        <meta name="description" content="Read Vidify Calculators' disclaimer regarding the use of our online calculators and the limitations of our services." />
        <link rel="canonical" href="https://vidify.site/disclaimer" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">General Information</h2>
              <p>The calculators and information provided on Vidify Calculators are for general informational and educational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the calculators or the information contained on the website.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Not Professional Advice</h2>
              <p>The content on Vidify Calculators does not constitute professional advice. Specifically:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong className="text-foreground">Health Calculators:</strong> Results from BMI, calorie, and other health calculators are not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider.</li>
                <li><strong className="text-foreground">Financial Calculators:</strong> EMI, loan, and other financial calculators provide estimates only. Actual figures may vary. Consult a financial advisor for important financial decisions.</li>
                <li><strong className="text-foreground">General Calculations:</strong> While we use standard formulas, results should be verified for critical applications.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy of Calculations</h2>
              <p>We make every effort to ensure our calculators use accurate formulas and produce correct results. However:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Results are based on the data you input</li>
                <li>Formulas may be simplified versions of complex calculations</li>
                <li>Some calculators use approximations</li>
                <li>Results may not account for all variables in real-world scenarios</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>In no event will Vidify Calculators be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
              <p>Through this website, you may link to other websites which are not under the control of Vidify Calculators. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibility</h2>
              <p>You acknowledge that you use Vidify Calculators at your own risk. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Entering accurate input data</li>
                <li>Verifying results for important decisions</li>
                <li>Seeking professional advice when needed</li>
                <li>Understanding the limitations of online calculators</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p>If you have questions about this disclaimer, please contact us at legal@vidify.site.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;