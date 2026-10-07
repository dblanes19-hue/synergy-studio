import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'visible' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        filter: isVisible ? 'blur(0)' : 'blur(10px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}