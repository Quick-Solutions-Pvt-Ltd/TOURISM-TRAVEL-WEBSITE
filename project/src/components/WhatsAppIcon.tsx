interface WhatsAppIconProps {
  size?: number;
  className?: string;
  /** Accepted for drop-in compatibility with lucide-react icons (unused; this glyph is filled, not stroked). */
  strokeWidth?: number;
}

/**
 * The real WhatsApp glyph (phone handset inside a speech bubble), drawn as
 * inline SVG so it matches lucide-react's sizing/stroke API but reads
 * instantly as "WhatsApp" instead of a generic chat-bubble icon.
 * Uses currentColor so it inherits color the same way lucide icons do.
 */
export function WhatsAppIcon({ size = 24, className }: WhatsAppIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.004 2.667c-7.364 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l7.03-1.844a13.26 13.26 0 0 0 6.307 1.607h.006c7.363 0 13.333-5.97 13.333-13.333 0-3.563-1.388-6.913-3.906-9.43a13.244 13.244 0 0 0-9.433-3.666Zm0 24.4h-.005a11.05 11.05 0 0 1-5.633-1.542l-.404-.24-4.172 1.094 1.114-4.067-.264-.42a11.02 11.02 0 0 1-1.696-5.892c0-6.106 4.97-11.075 11.078-11.075a11 11 0 0 1 7.833 3.246 10.99 10.99 0 0 1 3.243 7.833c-.002 6.106-4.97 11.063-11.094 11.063Zm6.073-8.29c-.333-.166-1.966-.97-2.271-1.081-.305-.111-.527-.166-.75.167-.222.333-.86 1.08-1.055 1.303-.194.222-.388.25-.72.083-.334-.167-1.409-.52-2.684-1.657-.992-.885-1.663-1.978-1.858-2.311-.194-.334-.02-.514.147-.68.15-.15.334-.39.5-.584.167-.194.223-.334.334-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.807-1.027-2.475-.27-.65-.545-.562-.75-.573l-.639-.011c-.222 0-.583.083-.888.417-.306.333-1.166 1.14-1.166 2.78s1.194 3.225 1.361 3.447c.167.222 2.35 3.589 5.694 5.034.795.343 1.416.548 1.9.702.798.254 1.524.218 2.098.132.64-.096 1.966-.804 2.244-1.581.278-.777.278-1.443.195-1.581-.084-.139-.306-.222-.639-.389Z" />
    </svg>
  );
}