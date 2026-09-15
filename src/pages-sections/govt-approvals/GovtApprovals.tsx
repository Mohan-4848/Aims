import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GovtApprovals.css';

// Centralized data structure for the tabs and images
const approvalsData = [
  {
    id: 'essentiality',
    title: 'Essentiality Certificate',
    images: [
      'https://aims.ac.in/wp-content/uploads/2024/03/Essentiality_certificate1-images-1-659x1024.jpg',
      'https://aims.ac.in/wp-content/uploads/2024/03/Essentiality_certificate1-images-2-641x1024.jpg',
      'https://aims.ac.in/wp-content/uploads/2024/03/Essentiality_certificate1-images-3-642x1024.jpg',
      'https://aims.ac.in/wp-content/uploads/2024/03/Essentiality_certificate1-images-4-683x1024.jpg'
    ]
  },
  {
    id: 'knruhs',
    title: 'Affiliation for MBBS by KNRUHS',
    images: [
      'https://aims.ac.in/wp-content/uploads/2024/03/Affiliation_order_from_KNRUHS1-images-1-791x1024.jpg',
      'https://aims.ac.in/wp-content/uploads/2024/03/Affiliation_order_from_KNRUHS1-images-2-791x1024.jpg'
    ]
  },
  {
    id: 'nmc',
    title: 'NMC Approvals',
    images: [
      'https://aims.ac.in/wp-content/uploads/2024/03/letter-of-permission-images-1-724x1024.jpg',
      'https://aims.ac.in/wp-content/uploads/2024/03/letter-of-permission-images-2-724x1024.jpg'
    ]
  },
  {
    id: 'nursing',
    title: 'Nursing Approval',
    images: [
      'https://aims.ac.in/wp-content/uploads/2024/10/Nursing-Inspection-Approval-images-0-724x1024.jpg',
      'https://aims.ac.in/wp-content/uploads/2024/10/Nursing-Inspection-Approval-images-1-724x1024.jpg'
    ]
  }
];

export const GovtApprovals: React.FC = () => {
  const [activeTab, setActiveTab] = useState(approvalsData[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Get the images for the currently selected tab
  const activeContent = approvalsData.find(tab => tab.id === activeTab);
  const currentImages = activeContent?.images || [];

  // Lightbox Navigation Functions
  const openLightbox = (index: number) => setLightboxIndex(index);
  
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  
  const showNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % currentImages.length : null));
  }, [currentImages.length]);
  
  const showPrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + currentImages.length) % currentImages.length : null));
  }, [currentImages.length]);

  // Handle Keyboard interactions for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  // Scroll Reveal Animation Hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section className="section govt-approvals" id="approvals" ref={sectionRef}>
        <div className="container">
          
          <div className="approvals-header reveal">
            <h1 className="section-title">GOVT. Approvals</h1>
            <div className="title-underline-gradient"></div>
          </div>

          {/* Tab Navigation */}
          <div className="tabs-navigation reveal delay-1">
            {approvalsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content (Images) */}
          <div className="tabs-content reveal delay-2">
            {currentImages.map((imgSrc, index) => (
              <div 
                className="document-card fade-in" 
                key={`${activeTab}-${index}`}
                onClick={() => openLightbox(index)}
              >
                <div className="card-gradient-top"></div>
                <img 
                  src={imgSrc} 
                  alt={`${activeContent?.title} - Page ${index + 1}`} 
                  className="document-img"
                  loading="lazy"
                />
                <div className="document-overlay">
                  <span className="expand-icon">⤢</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox Gallery */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} title="Close (Esc)">×</button>
          
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {currentImages.length}
          </div>

          {currentImages.length > 1 && (
            <button className="lightbox-btn prev" onClick={showPrev} title="Previous (Left Arrow)">
              &#10094;
            </button>
          )}
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentImages[lightboxIndex]} 
              alt="Fullscreen Document" 
              className="lightbox-main-img" 
            />
          </div>
          
          {currentImages.length > 1 && (
            <button className="lightbox-btn next" onClick={showNext} title="Next (Right Arrow)">
              &#10095;
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default GovtApprovals;