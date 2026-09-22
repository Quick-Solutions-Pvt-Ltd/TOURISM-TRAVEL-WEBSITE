interface LocationMapProps {
  /** Free-text address/place to search for, e.g. "Colombo 06, Sri Lanka" */
  address: string;
  /** Optional pixel height of the map (defaults to 320) */
  height?: number;
  /** Optional className for extra styling hooks */
  className?: string;
}

/**
 * Renders a real, working Google Maps embed using the free "maps.google.com/maps?output=embed"
 * endpoint. This does NOT require a Google Maps API key or billing account, so it works
 * immediately in production. It simply geocodes the given address string.
 *
 * If you later get a Google Maps Embed API key, you can swap the `src` below for:
 * `https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=${encodeURIComponent(address)}`
 * for a nicer branded look — but this version works out of the box with zero setup.
 */
export function LocationMap({ address, height = 320, className = '' }: LocationMapProps) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`location-map ${className}`} style={{ height }}>
      <iframe
        title={`Map showing ${address}`}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}