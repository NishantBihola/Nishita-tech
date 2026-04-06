/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 450 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Stylized Arrow Shape */}
      <path 
        d="M0 30L50 75L0 120V30Z" 
        fill="#00AEEF" 
      />
      <path 
        d="M20 10L80 75L20 140V10Z" 
        fill="#00AEEF" 
        fillOpacity="0.6"
      />

      {/* Main Text - Nishita Technic */}
      <text 
        x="90" 
        y="45" 
        fill="#8E44AD" 
        fontFamily="serif" 
        fontWeight="900" 
        fontSize="36" 
        style={{ textTransform: 'uppercase' }}
      >
        NISHITA TECHNIC
      </text>

      {/* Main Text - Technology Ltd. */}
      <text 
        x="90" 
        y="85" 
        fill="#8E44AD" 
        fontFamily="serif" 
        fontWeight="900" 
        fontSize="36" 
        style={{ textTransform: 'uppercase' }}
      >
        TECHNOLOGY LTD.
      </text>

      {/* Subtitle - Electrician & Contractor */}
      <text 
        x="130" 
        y="115" 
        fill="#8E44AD" 
        fontFamily="sans-serif" 
        fontWeight="600" 
        fontSize="22" 
      >
        Electrician & Contractor
      </text>

      {/* Slogan - Safety is a lifestyle */}
      <text 
        x="140" 
        y="145" 
        fill="#E74C3C" 
        fontFamily="sans-serif" 
        fontWeight="700" 
        fontSize="24" 
      >
        Safety is a lifestyle
      </text>
    </svg>
  );
};
