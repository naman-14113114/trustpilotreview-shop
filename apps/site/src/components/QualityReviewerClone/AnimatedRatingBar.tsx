"use client";
import React, { useEffect, useState, useRef } from 'react';

interface Props {
  label: string;
  score: string;
  percentage: number;
}

export default function AnimatedRatingBar({ label, score, percentage }: Props) {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setWidth(percentage);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="flex items-center gap-4 py-3.5 border-b border-[#CCCCCC]">
      <div className="w-44 md:w-56 font-[family-name:var(--font-oswald)] text-[18px] md:text-[20px] font-medium text-[#333] shrink-0 text-left uppercase">
        {label}
      </div>
      <div ref={barRef} className="flex-1 bg-[#EEEEEE] h-[20px] rounded-full relative overflow-hidden flex items-center">
        <div
          className="h-full bg-[#83D221] rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
          style={{ width: `${width}%` }}
        >
          <span className="text-white text-xs font-bold leading-none">
            {width > 0 ? `${percentage}%` : ''}
          </span>
        </div>
      </div>
      <div className="w-16 font-[family-name:var(--font-oswald)] text-[18px] md:text-[20px] font-medium text-[#333] shrink-0 text-right">
        {score}
      </div>
    </div>
  );
}
