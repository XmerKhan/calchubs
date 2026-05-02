import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Info, Calculator as CalcIcon, Target } from 'lucide-react';
import { deepContent, buildDefaultDeep, type DeepContent } from '@/data/calculatorDeepContent';
import { RichChart } from './RichCharts';

interface Props {
  slug: string;
  toolName: string;
  shortDescription: string;
}

const Section = ({
  icon: Icon,
  heading,
  paragraphs,
  chart,
}: {
  icon: any;
  heading: string;
  paragraphs: string[];
  chart?: any;
}) => (
  <Card className="bg-card border-border">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-foreground">
        <Icon className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold m-0">{heading}</h2>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-base text-muted-foreground leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {chart && <RichChart spec={chart} />}
    </CardContent>
  </Card>
);

export const CalculatorRichSection = ({ slug, toolName, shortDescription }: Props) => {
  const data: DeepContent = deepContent[slug] ?? buildDefaultDeep(slug, toolName, shortDescription);

  return (
    <section className="space-y-8 mt-12 max-w-4xl mx-auto" aria-label={`In-depth information about the ${toolName}`}>
      {/* Top ad slot */}
      <div className="p-4 bg-secondary/40 rounded-lg text-center text-muted-foreground text-xs border border-dashed border-border">
        Advertisement
      </div>

      <Section icon={Info} heading={data.whatIs.heading} paragraphs={data.whatIs.paragraphs} chart={data.whatIs.chart} />
      <Section icon={CalcIcon} heading={data.howTo.heading} paragraphs={data.howTo.paragraphs} chart={data.howTo.chart} />

      {/* Mid ad slot */}
      <div className="p-4 bg-secondary/40 rounded-lg text-center text-muted-foreground text-xs border border-dashed border-border">
        Advertisement
      </div>

      <Section icon={Target} heading={data.understanding.heading} paragraphs={data.understanding.paragraphs} chart={data.understanding.chart} />

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">Frequently Asked Questions</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {data.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`rich-faq-${index}`} className="border-border">
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

      {/* Bottom ad slot */}
      <div className="p-4 bg-secondary/40 rounded-lg text-center text-muted-foreground text-xs border border-dashed border-border">
        Advertisement
      </div>
    </section>
  );
};
