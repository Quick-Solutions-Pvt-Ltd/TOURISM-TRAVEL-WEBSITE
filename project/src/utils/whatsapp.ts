// Centralized WhatsApp configuration
// Replace this placeholder number with the real Ceylon Soul Travels WhatsApp number
export const WHATSAPP_NUMBER = '94000000000';

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message || 'Hello Ceylon Soul Travels, I would like to know more about your Sri Lanka travel experiences.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
