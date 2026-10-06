import React from 'react';
import { CONFIG } from '../config';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "h-10", 
  variant = 'color',
  showText = true 
}) => {
  // If user provided an actual URL instead of placeholder
  if (CONFIG.LOGO_URL && CONFIG.LOGO_URL !== "PASTE_LOGO_LINK" && !CONFIG.LOGO_URL.startsWith("PASTE")) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img 
          src={CONFIG.LOGO_URL} 
          alt={CONFIG.company.name} 
          className="h-full w-auto object-contain"
          loading="lazy"
        />
        {showText && (
          <span className={`font-extrabold tracking-wider uppercase text-lg ${
            variant === 'light' ? 'text-white' : 'text-purple-900'
          }`}>
            LUMCAS
          </span>
        )}
      </div>
    );
  }

  // Exact vector reproduction of the Lumcas brand mark from uploaded asset
  const fillColor = variant === 'light' ? '#FFFFFF' : '#8B1FD1';
  const textColor = variant === 'light' ? 'text-white' : 'text-[#8B1FD1]';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <svg 
        viewBox="0 0 240 180" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
        aria-label="Lumcas Realtor Logo Emblem"
      >
        {/* Right Skyscraper Tower Cluster */}
        <path
          d="M175 14L198 22V130H175V14Z"
          fill={fillColor}
        />
        <path
          d="M198 42L225 50V130H198V42Z"
          fill={fillColor}
        />
        <path
          d="M152 78L175 84V130H152V78Z"
          fill={fillColor}
        />

        {/* Skyscraper Windows */}
        <g fill={variant === 'light' ? '#8B1FD1' : '#FFFFFF'}>
          {/* Main Tower Windows */}
          <rect x="180" y="32" width="5" height="7" rx="0.5" />
          <rect x="189" y="32" width="5" height="7" rx="0.5" />
          <rect x="180" y="45" width="5" height="7" rx="0.5" />
          <rect x="189" y="45" width="5" height="7" rx="0.5" />
          <rect x="180" y="58" width="5" height="7" rx="0.5" />
          <rect x="189" y="58" width="5" height="7" rx="0.5" />
          <rect x="180" y="71" width="5" height="7" rx="0.5" />
          <rect x="189" y="71" width="5" height="7" rx="0.5" />
          <rect x="180" y="84" width="5" height="7" rx="0.5" />
          <rect x="189" y="84" width="5" height="7" rx="0.5" />
          <rect x="180" y="97" width="5" height="7" rx="0.5" />
          <rect x="189" y="97" width="5" height="7" rx="0.5" />
          
          {/* Right Tower Windows */}
          <rect x="204" y="60" width="5" height="7" rx="0.5" />
          <rect x="213" y="60" width="5" height="7" rx="0.5" />
          <rect x="204" y="73" width="5" height="7" rx="0.5" />
          <rect x="213" y="73" width="5" height="7" rx="0.5" />
          <rect x="204" y="86" width="5" height="7" rx="0.5" />
          <rect x="213" y="86" width="5" height="7" rx="0.5" />
          <rect x="204" y="99" width="5" height="7" rx="0.5" />
          <rect x="213" y="99" width="5" height="7" rx="0.5" />

          {/* Left Tower Windows */}
          <rect x="157" y="89" width="4" height="6" rx="0.5" />
          <rect x="165" y="89" width="4" height="6" rx="0.5" />
          <rect x="157" y="100" width="4" height="6" rx="0.5" />
          <rect x="165" y="100" width="4" height="6" rx="0.5" />
        </g>

        {/* Foreground Gable Rooflines */}
        {/* Left Roof Outer Contour */}
        <path
          d="M84 72L12 130H28L84 84L140 130H156L84 72Z"
          fill={fillColor}
        />
        {/* Right Intersecting Roof Contour */}
        <path
          d="M148 78L106 112H120L148 89L202 130H218L148 78Z"
          fill={fillColor}
        />

        {/* House Windows (4-Paned) */}
        {/* Left House Window */}
        <g fill={fillColor}>
          <rect x="73" y="102" width="8" height="8" rx="0.5" />
          <rect x="84" y="102" width="8" height="8" rx="0.5" />
          <rect x="73" y="113" width="8" height="8" rx="0.5" />
          <rect x="84" y="113" width="8" height="8" rx="0.5" />
        </g>

        {/* Right House Window */}
        <g fill={fillColor}>
          <rect x="142" y="104" width="7" height="7" rx="0.5" />
          <rect x="151" y="104" width="7" height="7" rx="0.5" />
          <rect x="142" y="113" width="7" height="7" rx="0.5" />
          <rect x="151" y="113" width="7" height="7" rx="0.5" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-black text-xl tracking-[0.2em] uppercase leading-none font-sans ${textColor}`}>
            LUMCAS
          </span>
          <span className={`text-[9px] uppercase tracking-wider font-semibold opacity-80 ${textColor}`}>
            Realtor & Properties
          </span>
        </div>
      )}
    </div>
  );
};
