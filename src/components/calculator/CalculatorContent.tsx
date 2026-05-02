import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Lightbulb, BookOpen, HelpCircle, Link2, Info, Calculator as CalcIcon, Target, Users, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedCalculator {
  title: string;
  href: string;
}

interface CalculatorContentProps {
  example: {
    title: string;
    scenario: string;
    calculation: string;
    result: string;
  };
  tips: string[];
  faqs: FAQItem[];
  relatedCalculators: RelatedCalculator[];
  /** Short paragraph(s) explaining what the calculator does and why it matters. */
  introduction?: string | string[];
  /** Plain-language explanation of the formula / method. */
  howItWorks?: string | string[];
  /** What the result actually means in practical terms. */
  understandingResult?: string | string[];
  /** Who benefits from this calculator. */
  useCases?: string[];
  /** Honest pros. */
  benefits?: string[];
  /** Honest cons / things to be aware of. */
  limitations?: string[];
}

const toParagraphs = (value?: string | string[]) =>
  !value ? [] : Array.isArray(value) ? value : [value];

export const CalculatorContent = ({
  example,
  tips,
  faqs,
  relatedCalculators,
  introduction,
  howItWorks,
  understandingResult,
  useCases,
  benefits,
  limitations,
}: CalculatorContentProps) => {
  const introParas = toParagraphs(introduction);
  const howParas = toParagraphs(howItWorks);
  const resultParas = toParagraphs(understandingResult);

  return (
    <article className="space-y-6 mt-10 max-w-4xl mx-auto leading-relaxed">
      {/* Real-life Example */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold m-0">{example.title}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h3 className="font-medium text-foreground mb-1 text-sm">Scenario</h3>
            <p className="text-muted-foreground text-sm">{example.scenario}</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1 text-sm">Calculation</h3>
            <p className="text-muted-foreground font-mono bg-secondary/50 p-3 rounded-lg text-xs">{example.calculation}</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1 text-sm">Result</h3>
            <p className="text-muted-foreground text-sm">{example.result}</p>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      {tips?.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold m-0">Quick Tips</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Related Calculators */}
      {relatedCalculators?.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Link2 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold m-0">Related Calculators</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {relatedCalculators.map((calc, index) => (
                <Link
                  key={index}
                  to={calc.href}
                  className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg text-sm font-medium transition-colors"
                >
                  {calc.title}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </article>
  );
};
