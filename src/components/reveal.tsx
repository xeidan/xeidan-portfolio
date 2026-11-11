
'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    setEnabled(true);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        enabled ? 'reveal' : '',
        visible ? 'reveal-visible' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
