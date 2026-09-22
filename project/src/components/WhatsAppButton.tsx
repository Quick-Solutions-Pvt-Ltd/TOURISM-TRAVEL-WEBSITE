import { MessageCircle } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { whatsappUrl } from '@/utils/whatsapp';

export function WhatsAppButton() {
  const { t } = useLang();
  return (
    <a
      href={whatsappUrl(t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}
