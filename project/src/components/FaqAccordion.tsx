import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/data/types';
import { useLang } from '@/hooks/useLang';

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isFr = lang === 'fr';

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'is-open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span>{isFr ? item.questionFr : item.question}</span>
            <ChevronDown size={20} className={`faq-chevron ${openIndex === i ? 'rotated' : ''}`} />
          </button>
          <div className="faq-answer-wrap">
            <p className="faq-answer">{isFr ? item.answerFr : item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
