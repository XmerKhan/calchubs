import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Lightbulb, BookOpen, HelpCircle, Link2 } from 'lucide-react';
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
}

export const CalculatorContent = ({
  example,
  tips,
  faqs,
  relatedCalculators,
}: CalculatorContentProps) => {
  return (
    <div className="space-y-8 mt-8">
      {/* Ad Placeholder */}
      <div className="p-4 bg-secondary/50 rounded-lg text-center text-muted-foreground text-sm border border-dashed border-border">
        Advertisement Space
      </div>

      {/* Real-life Example */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            {example.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-1">Scenario</h4>
            <p className="text-muted-foreground">{example.scenario}</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Calculation</h4>
            <p className="text-muted-foreground font-mono bg-secondary/50 p-3 rounded-lg">{example.calculation}</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-1">Result</h4>
            <p className="text-muted-foreground">{example.result}</p>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Lightbulb className="w-5 h-5 text-accent" />
            Tips for Accurate Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-accent">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-foreground hover:text-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Related Calculators */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Link2 className="w-5 h-5 text-primary" />
            Related Calculators
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

      {/* Ad Placeholder */}
      <div className="p-4 bg-secondary/50 rounded-lg text-center text-muted-foreground text-sm border border-dashed border-border">
        Advertisement Space
      </div>
    </div>
  );
};
