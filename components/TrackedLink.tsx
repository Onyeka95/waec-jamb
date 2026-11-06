"use client";

import { trackEvent } from "@/lib/analytics";

type Props = {
  href: string;
  event: string;
  location: string;
  plan?: string;
  className?: string;
  children: React.ReactNode;
};

export default function TrackedLink({
  href,
  event,
  location,
  plan,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackEvent(event, plan ? { location, plan } : { location })
      }
    >
      {children}
    </a>
  );
}