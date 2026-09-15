import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';
    
    // 2. Instantly jump to the top invisibly
    window.scrollTo(0, 0);
    
    // 3. Turn smooth scrolling back on for your normal anchor links
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]); 

  return null;
}