"use client";
import React, { useState } from 'react';

interface Props {
  title: string;
  content: React.ReactNode;
  type: 'look' | 'avoid' | 'reason';
  isOpen?: boolean;
  onToggle?: () => void;
  compact?: boolean;
}

export default function FaqAccordion({
  title,
  content,
  type,
  isOpen: controlledIsOpen,
  onToggle,
  compact = false,
}: Props) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isLook = type === 'look';
  const isReason = type === 'reason';
  
  // Tick and +/- icon color
  const color = isLook ? '#2aa359' : (isReason ? '#3A3A3A' : '#ea1045'); 

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (isControlled && onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!isOpen);
    }
  };

  const Icon = (isLook || isReason)
    ? () => (
        <svg
          className={compact ? "mt-0.5 shrink-0" : "shrink-0 mt-1"}
          width={compact ? "22" : "28"}
          height={compact ? "22" : "28"}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={compact ? "3.5" : "4"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    : () => (
        <svg
          className={compact ? "mt-0.5 shrink-0" : "shrink-0 mt-1"}
          width={compact ? "22" : "28"}
          height={compact ? "22" : "28"}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={compact ? "3.5" : "4"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      );

  return (
    <div className={compact ? "border-b border-gray-200 last:border-0" : "border-b border-gray-200 last:border-0 my-1"}>
      <button
        onClick={handleToggle}
        className={compact ? "w-full flex items-start justify-between py-2.5 text-left focus:outline-none" : "w-full flex items-start justify-between py-4 text-left focus:outline-none"}
      >
        <div className={compact ? "flex items-start gap-2.5 pr-3" : "flex items-start gap-4 md:gap-5 pr-4"}>
          <Icon />
          <span
            style={{ color }}
            className={
              compact
                ? "text-[18px] md:text-[20px] font-bold font-[family-name:var(--font-oswald)] tracking-wide leading-tight"
                : "text-[22px] md:text-[26px] font-bold font-[family-name:var(--font-oswald)] tracking-wide leading-tight"
            }
          >
            {title}
          </span>
        </div>
        <div style={{ color }} className="shrink-0 ml-4 transition-transform duration-300">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          )}
        </div>
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={
              compact
                ? "pb-3 pl-10 pr-1 text-[15px] text-[#4B4F58] font-[family-name:var(--font-arimo)] leading-snug font-semibold"
                : "pb-5 pl-12 text-[18px] text-[#4B4F58] font-[family-name:var(--font-arimo)] leading-relaxed font-bold"
            }
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
