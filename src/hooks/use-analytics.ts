import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Type definitions for GA4 event parameters
 * Extends the standard GA4 event parameter types
 */
type GA4EventParameters = {
  [key: string]: string | number | boolean | string[] | undefined;
};

type GA4UserProperties = {
  [key: string]: string | number | boolean;
};

/**
 * Custom React hook for Google Analytics 4 tracking
 * Wraps the global gtag function with convenient methods and TypeScript support
 *
 * @returns Object containing analytics tracking methods
 * 
 * @example
 * const { trackEvent, trackPageView } = useAnalytics();
 * 
 * // Track a custom event
 * trackEvent('product_clicked', { product_id: '123' });
 * 
 * // Track page view
 * trackPageView('/products', 'Products Page');
 * 
 * // Get event tracker function for onClick handlers
 * const handleClick = getEventTracker('button_click');
 */
export const useAnalytics = () => {
  /**
   * Check if gtag is available globally
   */
  const isGtagAvailable = useCallback(() => {
    return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
  }, []);

  /**
   * Track a custom event with optional parameters
   * @param eventName - The name of the event to track
   * @param parameters - Optional parameters for the event
   */
  const trackEvent = useCallback(
    (eventName: string, parameters?: GA4EventParameters) => {
      if (!isGtagAvailable()) {
        console.warn('Google Analytics (gtag) is not available');
        return;
      }

      try {
        (window as any).gtag('event', eventName, parameters);
      } catch (error) {
        console.error('Error tracking event:', error);
      }
    },
    [isGtagAvailable]
  );

  /**
   * Track a page view with custom title
   * Useful for tracking navigation and custom page paths
   * @param pagePath - The path of the page
   * @param pageTitle - The title of the page
   */
  const trackPageView = useCallback(
    (pagePath: string, pageTitle: string) => {
      if (!isGtagAvailable()) {
        console.warn('Google Analytics (gtag) is not available');
        return;
      }

      try {
        (window as any).gtag('config', 'G-1DEGE0WQHW', {
          page_path: pagePath,
          page_title: pageTitle,
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    },
    [isGtagAvailable]
  );

  /**
   * Set user properties for the current session
   * Useful for tracking user attributes and segmentation
   * @param properties - Object containing user properties
   */
  const setUserProperties = useCallback(
    (properties: GA4UserProperties) => {
      if (!isGtagAvailable()) {
        console.warn('Google Analytics (gtag) is not available');
        return;
      }

      try {
        (window as any).gtag('set', {
          user_properties: properties,
        });
      } catch (error) {
        console.error('Error setting user properties:', error);
      }
    },
    [isGtagAvailable]
  );

  /**
   * Get an event tracker function for a specific event
   * Useful for onClick handlers and other event listeners
   * @param eventName - The name of the event
   * @returns A function that tracks the event when called
   * 
   * @example
   * const handleClick = getEventTracker('cta_click');
   * <button onClick={handleClick}>Click me</button>
   */
  const getEventTracker = useCallback(
    (eventName: string) => {
      return (parameters?: GA4EventParameters) => {
        trackEvent(eventName, parameters);
      };
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    setUserProperties,
    getEventTracker,
  };
};
