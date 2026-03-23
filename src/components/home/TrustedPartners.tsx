import { Badge } from '@/components/ui/badge';
import { Handshake } from 'lucide-react';

const partners = [
  'Google', 'Microsoft', 'Amazon', 'Apple', 'Meta', 'IBM',
];

export const TrustedPartners = () => {
  return (
    <section className="py-14 border-t border-border">
      <div className="container">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 inline-flex items-center gap-1">
            <Handshake className="w-3 h-3" />
            Trusted By
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Trusted Partners & Technologies
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {partners.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
