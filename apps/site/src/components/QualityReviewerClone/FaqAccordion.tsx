"use client";
import React, { useState } from 'react';

interface Props {
  title: string;
  content: React.ReactNode;
  type: 'look' | 'avoid';
}

export default function FaqAccordion({ title, content, type }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const isLook = type === 'look';
  const color = isLook ? '#078a47' : '#dc143c'; 

  const Icon = isLook
    ? () => (
        <svg className="shrink-0 mt-1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    : () => (
        <svg className="shrink-0 mt-1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      );

  return (
    <div className="border-b border-gray-200 last:border-0 my-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-4 text-left focus:outline-none"
      >
        <div className="flex items-start gap-4 md:gap-5 pr-4">
          <Icon />
          <span className="text-[22px] md:text-[26px] font-bold text-[#3A3A3A] font-[family-name:var(--font-oswald)] tracking-wide leading-tight">{title}</span>
        </div>
        <div style={{ color }} className="shrink-0 ml-4">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-5 pl-10 text-[18px] text-[#4B4F58] font-[family-name:var(--font-arimo)] leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}
