import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, BookOpen } from 'lucide-react';

export interface ExplainerSection {
  /** H2 or H3 heading. Level defaults to h3. */
  heading: string;
  level?: 2 | 3;
  /** Plain paragraphs. Use **word** for bold inline. */
  paragraphs?: string[];
  /** Optional bulleted list rendered after paragraphs. Supports **bold**. */
  bullets?: string[];
  /** Optional pre-formatted block (e.g. formula). */
  formula?: string;
}

export interface ExplainerFAQ {
  q: string;
  a: string;
}

export interface ExplainerContent {
  /** Opening intro paragraph(s) below the H1/section title. */
  intro: string[];
  sections: ExplainerSection[];
  faqs: ExplainerFAQ[];
}

/** Render text with **bold** markers converted to <strong>. */
const RichText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-semibold text-foreground">{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
};

interface FinanceExplainerProps {
  /** Section title displayed at the top (e.g. "Understanding the EMI Calculator"). */
  title: string;
  /** Chart(s) that visualize the user's live calculator output. Placed near the top. */
  charts?: ReactNode;
  content: ExplainerContent;
}

export const FinanceExplainer = ({ title, charts, content }: FinanceExplainerProps) => {
  return (
    <article className="mt-10 max-w-4xl mx-auto space-y-6">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">{title}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 leading-relaxed">
          {/* Charts near the top of the content section */}
          {charts && <div className="not-prose">{charts}</div>}

          {/* Intro */}
          {content.intro.map((p, i) => (
            <p key={i} className="text-muted-foreground text-[15px]">
              <RichText text={p} />
            </p>
          ))}

          {/* Sections */}
          {content.sections.map((s, i) => {
            const HeadingTag = (s.level === 2 ? 'h2' : 'h3') as 'h2' | 'h3';
            return (
              <section key={i} className="space-y-3">
                <HeadingTag
                  className={
                    s.level === 2
                      ? 'text-xl font-semibold text-foreground mt-4'
                      : 'text-lg font-semibold text-foreground mt-3'
                  }
                >
                  {s.heading}
                </HeadingTag>
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="text-muted-foreground text-[15px]">
                    <RichText text={p} />
                  </p>
                ))}
                {s.formula && (
                  <p className="font-mono text-sm bg-secondary/50 border border-border p-3 rounded-lg text-foreground">
                    {s.formula}
                  </p>
                )}
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="space-y-2 pl-1">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-muted-foreground text-[15px]">
                        <span className="text-primary mt-1.5 leading-none">•</span>
                        <span>
                          <RichText text={b} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </CardContent>
      </Card>

      {/* FAQs */}
      {content.faqs.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold m-0">Frequently Asked Questions</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
                    <RichText text={f.a} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      )}
    </article>
  );
};
