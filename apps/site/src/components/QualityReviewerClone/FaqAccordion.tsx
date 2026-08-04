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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      )
    : () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      );

  return (
    <div className="border-b border-gray-200 last:border-0 my-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="shrink-0">
             <Icon />
          </div>
          <span style={{ color }} className="font-bold text-xl">{title}</span>
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
