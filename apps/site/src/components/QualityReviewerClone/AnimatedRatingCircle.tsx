"use client";
import React, { useEffect, useState, useRef } from 'react';

interface Props {
  votes: string | number;
  score: string;
  percentage: number;
}

export default function AnimatedRatingCircle({ votes, score, percentage }: Props) {
  const radius = 111;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const circleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const targetOffset = circumference - (percentage / 100) * circumference;
        setOffset(targetOffset);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
    return () => observer.disconnect();
  }, [percentage, circumference]);

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg ref={circleRef} className="transform -rotate-90" width="250" height="250" viewBox="0 0 250 250">
        <circle
          cx="125" cy="125" r={radius}
          fill="transparent"
          stroke="#4682b426"
          strokeWidth="14"
        />
        <circle
          cx="125" cy="125" r={radius}
          fill="transparent"
          stroke="#83D221"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-[1500ms] ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center font-[family-name:var(--font-oswald)]">
        <span className="text-[14px] text-gray-500 uppercase tracking-widest">{votes} Votes</span>
        <span className="text-[42px] font-bold text-[#3A3A3A] leading-none mt-1">{score}</span>
      </div>
    </div>
  );
}
