import { useState } from 'react';

interface AvatarProps {
  src?: string;
  name: string;
  className: string;
  fallbackClassName: string;
}

/**
 * Renders a person's photo in a circular frame. If the photo URL is missing
 * or fails to load (broken link, blocked hotlink, 404, etc.) it automatically
 * falls back to a clean initials badge instead of leaving a blank/broken image,
 * which is what was making reviewer faces "disappear".
 */
export function Avatar({ src, name, className, fallbackClassName }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={fallbackClassName}>{name.charAt(0)}</div>;
  }

  return (
    <img
      src={src}
      alt={name}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}