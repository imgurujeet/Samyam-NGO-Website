
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className, 
  delay = 0,
  once = true 
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              // Add the animate-fade-in class when element is visible
              entry.target.classList.add('animate-fade-in');
              // Also add opacity-100 to ensure text stays visible after animation
              entry.target.classList.add('opacity-100');
            }, delay);
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Only remove animation class, not the opacity class
            entry.target.classList.remove('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay, once]);

  return (
    <div 
      ref={textRef} 
      className={cn('opacity-0 transition-opacity duration-500', className)}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
