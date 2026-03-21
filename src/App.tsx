import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
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
import MortgageCalculator from "./pages/calculators/MortgageCalculator";
import SimpleInterestCalculator from "./pages/calculators/SimpleInterestCalculator";
import CompoundInterestCalculator from "./pages/calculators/CompoundInterestCalculator";
import SavingsCalculator from "./pages/calculators/SavingsCalculator";
import InvestmentCalculator from "./pages/calculators/InvestmentCalculator";
import RetirementCalculator from "./pages/calculators/RetirementCalculator";
import InflationCalculator from "./pages/calculators/InflationCalculator";

// Math Calculators
import PercentageCalculator from "./pages/calculators/PercentageCalculator";
import AverageCalculator from "./pages/calculators/AverageCalculator";
import FractionCalculator from "./pages/calculators/FractionCalculator";
import RatioCalculator from "./pages/calculators/RatioCalculator";
import SquareRootCalculator from "./pages/calculators/SquareRootCalculator";
import PowerCalculator from "./pages/calculators/PowerCalculator";

// Daily Routine Calculators
import AgeCalculator from "./pages/calculators/AgeCalculator";
import DateDifferenceCalculator from "./pages/calculators/DateDifferenceCalculator";
import TimeDurationCalculator from "./pages/calculators/TimeDurationCalculator";
import TipCalculator from "./pages/calculators/TipCalculator";
import DiscountCalculator from "./pages/calculators/DiscountCalculator";

// Advanced Calculators
import SpeedCalculator from "./pages/calculators/SpeedCalculator";
import ForceCalculator from "./pages/calculators/ForceCalculator";
import WorkEnergyCalculator from "./pages/calculators/WorkEnergyCalculator";
import OhmsLawCalculator from "./pages/calculators/OhmsLawCalculator";
import VoltageCalculator from "./pages/calculators/VoltageCalculator";

// Static Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
import AdSenseInfo from "./pages/AdSenseInfo";

// Blog
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

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
                <Route path="/finance/mortgage-calculator" element={<MortgageCalculator />} />
                <Route path="/finance/simple-interest-calculator" element={<SimpleInterestCalculator />} />
                <Route path="/finance/compound-interest-calculator" element={<CompoundInterestCalculator />} />
                <Route path="/finance/savings-calculator" element={<SavingsCalculator />} />
                <Route path="/finance/investment-calculator" element={<InvestmentCalculator />} />
                <Route path="/finance/retirement-calculator" element={<RetirementCalculator />} />
                <Route path="/finance/inflation-calculator" element={<InflationCalculator />} />

                {/* Math Calculator Routes */}
                <Route path="/math/percentage-calculator" element={<PercentageCalculator />} />
                <Route path="/math/average-calculator" element={<AverageCalculator />} />
                <Route path="/math/fraction-calculator" element={<FractionCalculator />} />
                <Route path="/math/ratio-calculator" element={<RatioCalculator />} />
                <Route path="/math/square-root-calculator" element={<SquareRootCalculator />} />
                <Route path="/math/power-calculator" element={<PowerCalculator />} />

                {/* Daily Routine Calculator Routes */}
                <Route path="/daily-routine/age-calculator" element={<AgeCalculator />} />
                <Route path="/daily-routine/date-difference-calculator" element={<DateDifferenceCalculator />} />
                <Route path="/daily-routine/time-duration-calculator" element={<TimeDurationCalculator />} />
                <Route path="/daily-routine/tip-calculator" element={<TipCalculator />} />
                <Route path="/daily-routine/discount-calculator" element={<DiscountCalculator />} />

                {/* Advanced Calculator Routes */}
                <Route path="/advanced/speed-calculator" element={<SpeedCalculator />} />
                <Route path="/advanced/force-calculator" element={<ForceCalculator />} />
                <Route path="/advanced/work-energy-calculator" element={<WorkEnergyCalculator />} />
                <Route path="/advanced/ohms-law-calculator" element={<OhmsLawCalculator />} />
                <Route path="/advanced/voltage-calculator" element={<VoltageCalculator />} />

                {/* Standalone Aliases Requested */}
                <Route path="/speed-calculator" element={<SpeedCalculator />} />
                <Route path="/force-calculator" element={<ForceCalculator />} />
                <Route path="/work-energy-calculator" element={<WorkEnergyCalculator />} />
                <Route path="/ohms-law-calculator" element={<OhmsLawCalculator />} />
                <Route path="/voltage-calculator" element={<VoltageCalculator />} />

                {/* Static Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/adsense-info" element={<AdSenseInfo />} />

                {/* Blog */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
