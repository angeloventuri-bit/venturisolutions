import { Check } from 'lucide-react';
import { Card } from './card';
import { Badge } from './badge';

interface TierComparisonProps {
  tiers: {
    name: string;
    price: string;
    budget: string;
    deliverables?: string[];
  }[];
  accentColor: string;
  bgColor: string;
}

export function TierComparison({ tiers, accentColor, bgColor }: TierComparisonProps) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tiers.map((tier, idx) => (
        <Card 
          key={idx} 
          className={`relative overflow-hidden p-5 bg-background/40 border-primary/10 hover:border-primary/30 transition-all ${
            idx === 1 ? 'ring-2 ring-primary/20 scale-105' : ''
          }`}
        >
          {idx === 1 && (
            <Badge className={`absolute top-3 right-3 ${bgColor} border-0 text-xs`}>
              Popular
            </Badge>
          )}
          
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h5 className="mb-1">{tier.name}</h5>
              <div className={`text-2xl ${accentColor} mb-1`}>{tier.price}</div>
              <p className="text-xs text-muted-foreground">{tier.budget}</p>
            </div>

            {/* Deliverables */}
            {tier.deliverables && (
              <ul className="space-y-2">
                {tier.deliverables.map((deliverable, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs">
                    <Check className={`w-3.5 h-3.5 ${accentColor} mt-0.5 flex-shrink-0`} />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
