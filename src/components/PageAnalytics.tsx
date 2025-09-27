'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { analytics, trackPageView } from '@/lib/analytics';

export default function PageAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    const scrollDepthMarkers = [25, 50, 75, 90, 100];
    const triggeredMarkers: number[] = [];
    const startTime = Date.now();
    let isTracking = true;

    const handleScroll = () => {
      if (!isTracking) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track scroll depth milestones
      scrollDepthMarkers.forEach(marker => {
        if (scrollPercent >= marker && !triggeredMarkers.includes(marker)) {
          triggeredMarkers.push(marker);
          analytics.trackScrollDepth(marker);
        }
      });

      // Stop tracking after 100% scroll
      if (scrollPercent >= 100 && isTracking) {
        isTracking = false;
      }
    };

    const handleBeforeUnload = () => {
      const timeOnPage = (Date.now() - startTime) / 1000;
      analytics.trackPageEngagement(timeOnPage);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
