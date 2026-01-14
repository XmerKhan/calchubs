import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";

// Health & Fitness Calculators
import BMICalculator from "./pages/calculators/BMICalculator";
import BMRCalculator from "./pages/calculators/BMRCalculator";
import CalorieCalculator from "./pages/calculators/CalorieCalculator";
import IdealWeightCalculator from "./pages/calculators/IdealWeightCalculator";
import BodyFatCalculator from "./pages/calculators/BodyFatCalculator";
import WaterIntakeCalculator from "./pages/calculators/WaterIntakeCalculator";
import TDEECalculator from "./pages/calculators/TDEECalculator";

// Finance Calculators
import EMICalculator from "./pages/calculators/EMICalculator";
import LoanCalculator from "./pages/calculators/LoanCalculator";

// Math Calculators
import PercentageCalculator from "./pages/calculators/PercentageCalculator";

// Static Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
import AdSenseInfo from "./pages/AdSenseInfo";

const queryClient = new QueryClient();

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout isDark={isDark} toggleTheme={toggleTheme}>
              <Routes>
                {/* Home */}
                <Route path="/" element={<Index />} />

                {/* Category Pages */}
                <Route path="/finance" element={<CategoryPage />} />
                <Route path="/math" element={<CategoryPage />} />
                <Route path="/health-fitness" element={<CategoryPage />} />
                <Route path="/daily-routine" element={<CategoryPage />} />
                <Route path="/advanced" element={<CategoryPage />} />

                {/* Health & Fitness Calculator Routes */}
                <Route path="/health-fitness/bmi-calculator" element={<BMICalculator />} />
                <Route path="/health-fitness/bmr-calculator" element={<BMRCalculator />} />
                <Route path="/health-fitness/calorie-calculator" element={<CalorieCalculator />} />
                <Route path="/health-fitness/ideal-weight-calculator" element={<IdealWeightCalculator />} />
                <Route path="/health-fitness/body-fat-calculator" element={<BodyFatCalculator />} />
                <Route path="/health-fitness/water-intake-calculator" element={<WaterIntakeCalculator />} />
                <Route path="/health-fitness/tdee-calculator" element={<TDEECalculator />} />

                {/* Finance Calculator Routes */}
                <Route path="/finance/emi-calculator" element={<EMICalculator />} />
                <Route path="/finance/loan-calculator" element={<LoanCalculator />} />

                {/* Math Calculator Routes */}
                <Route path="/math/percentage-calculator" element={<PercentageCalculator />} />

                {/* Static Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/adsense-info" element={<AdSenseInfo />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
