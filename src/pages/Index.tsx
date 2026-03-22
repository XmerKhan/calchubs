import { HeroSlider } from '@/components/home/HeroSlider';
import { CalculatorGrid } from '@/components/home/CalculatorGrid';
import { Features } from '@/components/home/Features';
import { LatestBlogs } from '@/components/home/LatestBlogs';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CalcHub - Free Online Calculators for Every Need</title>
        <meta name="description" content="Free online calculators for BMI, EMI, loans, calories, percentages and more. Accurate, fast, and easy to use. No signup required." />
        <meta name="keywords" content="calculator, BMI calculator, EMI calculator, loan calculator, calorie calculator, percentage calculator, free calculator" />
        <link rel="canonical" href="https://calchub.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CalcHub",
            "url": "https://calchub.com",
            "description": "Free online calculators for everyday calculations",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://calchub.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <HeroSlider />
      <CalculatorGrid />
      <LatestBlogs />
      <Features />
    </>
  );
};

export default Index;
