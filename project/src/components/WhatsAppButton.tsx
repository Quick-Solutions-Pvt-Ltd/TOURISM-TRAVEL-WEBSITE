import { useLang } from '@/hooks/useLang';
import { whatsappUrl } from '@/utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

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
      <WhatsAppIcon size={28} />
    </a>
  );
}