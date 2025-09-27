// Google Analytics utility functions for event tracking
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for common events
export const analytics = {
  // Group-related events
  trackCategorySelection: (categoryName: string) => {
    trackEvent('select_category', 'engagement', categoryName);
  },

  trackGroupClick: (groupName: string, categoryName: string) => {
    trackEvent('click_group', 'engagement', `${categoryName}: ${groupName}`);
  },

  trackGroupRequest: (groupName: string, categoryName: string) => {
    trackEvent('request_group_link', 'conversion', `${categoryName}: ${groupName}`);
  },

  // Navigation events
  trackCTAClick: (ctaText: string, location: string) => {
    trackEvent('click_cta', 'navigation', `${location}: ${ctaText}`);
  },

  trackScrollToGroups: () => {
    trackEvent('scroll_to_groups', 'navigation', 'header_cta');
  },

  // Form events
  trackNewsletterSubmission: (email: string) => {
    trackEvent('newsletter_signup', 'conversion', email.substring(0, 5) + '***');
  },

  trackNewsletterFormStart: () => {
    trackEvent('newsletter_form_start', 'engagement', 'newsletter_section');
  },

  // Social/external link events
  trackExternalLink: (linkType: string, url: string) => {
    trackEvent('click_external_link', 'outbound', `${linkType}: ${url}`);
  },

  trackGitHubClick: () => {
    trackEvent('click_github', 'social', 'footer');
  },

  // Search events
  trackCategorySearch: (searchTerm: string) => {
    trackEvent('search_categories', 'engagement', searchTerm);
  },

  // Scroll depth tracking
  trackScrollDepth: (depth: number) => {
    trackEvent('scroll_depth', 'engagement', `${depth}%`);
  },

  // Page engagement
  trackPageEngagement: (timeOnPage: number) => {
    trackEvent('page_engagement', 'engagement', `${Math.round(timeOnPage)}s`);
  },

  // Error tracking
  trackError: (errorType: string, errorMessage: string) => {
    trackEvent('error', 'error', `${errorType}: ${errorMessage}`);
  },
};

// Enhanced ecommerce tracking for group interactions
export const trackEcommerce = {
  viewItem: (itemId: string, itemName: string, category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_item', {
        currency: 'BRL',
        value: 0, // Groups are free
        items: [{
          item_id: itemId,
          item_name: itemName,
          category: category,
          quantity: 1,
          price: 0
        }]
      });
    }
  },

  selectItem: (itemId: string, itemName: string, category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'select_item', {
        currency: 'BRL',
        value: 0,
        items: [{
          item_id: itemId,
          item_name: itemName,
          category: category,
          quantity: 1,
          price: 0
        }]
      });
    }
  },

  beginCheckout: (itemId: string, itemName: string, category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'begin_checkout', {
        currency: 'BRL',
        value: 0,
        items: [{
          item_id: itemId,
          item_name: itemName,
          category: category,
          quantity: 1,
          price: 0
        }]
      });
    }
  },
};
