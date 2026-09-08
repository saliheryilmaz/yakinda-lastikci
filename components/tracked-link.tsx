'use client';

import Link from 'next/link';
import type { AnalyticsEventName } from '@/lib/analytics';
import { trackEvent } from '@/lib/analytics';

export function TrackedLink({
  href,
  children,
  className,
  eventName = 'service_area_click',
  eventLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName?: AnalyticsEventName;
  eventLabel?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, { event_label: eventLabel || href })}
    >
      {children}
    </Link>
  );
}

