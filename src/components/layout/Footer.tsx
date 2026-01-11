import { Link } from 'react-router-dom';
import { Calculator, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Calculator className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CalcHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online calculators for everyday calculations. Accurate, fast, and easy to use.
            </p>
          </div>

          {/* Calculators */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Calculators</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bmi-calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link to="/emi-calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link to="/loan-calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Loan Calculator
                </Link>
              </li>
              <li>
                <Link to="/calorie-calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Calorie Calculator
                </Link>
              </li>
              <li>
                <Link to="/percentage-calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Percentage Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/adsense-info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Advertise With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} CalcHub. All rights reserved. Made with accuracy in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};
