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
    <article className="space-y-8 mt-10 max-w-4xl mx-auto leading-relaxed">
      {/* Top Ad Slot */}
      <div className="p-4 bg-secondary/40 rounded-lg text-center text-muted-foreground text-xs border border-dashed border-border">
        Advertisement
      </div>

      {/* Introduction */}
      {introParas.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Info className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold m-0">Introduction</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base text-muted-foreground">
            {introParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </CardContent>
        </Card>
      )}

      {/* How It Works */}
      {howParas.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <CalcIcon className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold m-0">How It Works</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base text-muted-foreground">
            {howParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Real-life Example */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">{example.title}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium text-foreground mb-1 text-base">Scenario</h3>
            <p className="text-muted-foreground">{example.scenario}</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1 text-base">Calculation</h3>
            <p className="text-muted-foreground font-mono bg-secondary/50 p-3 rounded-lg text-sm">{example.calculation}</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-1 text-base">Result</h3>
            <p className="text-muted-foreground">{example.result}</p>
          </div>
        </CardContent>
      </Card>

      {/* Understanding the Result */}
      {resultParas.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Target className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold m-0">Understanding the Result</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base text-muted-foreground">
            {resultParas.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Mid Ad Slot */}
      <div className="p-4 bg-secondary/40 rounded-lg text-center text-muted-foreground text-xs border border-dashed border-border">
        Advertisement
      </div>

      {/* Tips & Best Practices */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Lightbulb className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-semibold m-0">Tips & Best Practices</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-accent mt-1">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Use Cases */}
      {useCases && useCases.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold m-0">Who Should Use This Calculator</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {useCases.map((u, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">→</span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Benefits & Limitations */}
      {(benefits?.length || limitations?.length) ? (
        <div className="grid md:grid-cols-2 gap-6">
          {benefits && benefits.length > 0 && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h2 className="text-lg font-semibold m-0">Benefits</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
          {limitations && limitations.length > 0 && (
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  <h2 className="text-lg font-semibold m-0">Limitations</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {limitations.map((l, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-amber-500 mt-0.5">!</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      ) : null}

      {/* FAQs */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">Frequently Asked Questions</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-foreground hover:text-primary text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
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
            <h2 className="text-xl font-semibold m-0">Related Calculators</h2>
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

      {/* Bottom Ad Slot */}
      <div className="p-4 bg-secondary/40 rounded-lg text-center text-muted-foreground text-xs border border-dashed border-border">
        Advertisement
      </div>
    </article>
  );
};
