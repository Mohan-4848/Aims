import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import this

export function useScrollReveal(threshold = 0.12) {
  const location = useLocation(); // Gets the current URL path

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: observer.unobserve(entry.target); if you only want it to trigger once
          }
        });
      },
      { threshold }
    );

    // We use a tiny timeout to ensure React has finished painting the new DOM
    // elements after the <Link> navigation before we query for them.
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 50);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, location.pathname]); // Re-run the effect whenever the URL changes!
}