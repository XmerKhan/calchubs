import { HeroSlider } from '@/components/home/HeroSlider';
import { CalculatorGrid } from '@/components/home/CalculatorGrid';
import { Features } from '@/components/home/Features';
import { LatestBlogs } from '@/components/home/LatestBlogs';
import { VisitorCounter } from '@/components/home/VisitorCounter';
import { TrustedPartners } from '@/components/home/TrustedPartners';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vidify Calculators - Free Online Calculators for Every Need</title>
        <meta name="description" content="Free online calculators for BMI, EMI, loans, calories, percentages and more. Accurate, fast, and easy to use. No signup required." />
        <meta name="keywords" content="calculator, BMI calculator, EMI calculator, loan calculator, calorie calculator, percentage calculator, free calculator, Vidify" />
        <link rel="canonical" href="https://vidify.site" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Vidify Calculators",
            "url": "https://vidify.site",
            "description": "Free online calculators for everyday calculations",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vidify.site/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <HeroSlider />
      <VisitorCounter />
      <CalculatorGrid />
      <LatestBlogs />
      <TrustedPartners />
      <Features />
    </>
  );
};

export default Index;