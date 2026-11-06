'use client';

import React from 'react';

export function SacredGeometryLogo({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className}>
  <defs>
    <radialGradient id="bgBurst" cx="50%" cy="46%" r="50%">
      <stop offset="0%" stopColor="#1e180a" stopOpacity="0.9"/>
      <stop offset="45%" stopColor="#0e0c07" stopOpacity="0.95"/>
      <stop offset="100%" stopColor="#050506" stopOpacity="1"/>
    </radialGradient>
    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#fff8d6"/>
      <stop offset="20%" stopColor="#ffd700"/>
      <stop offset="45%" stopColor="#f59e0b"/>
      <stop offset="70%" stopColor="#d97706"/>
      <stop offset="90%" stopColor="#ffd700"/>
      <stop offset="100%" stopColor="#92400e"/>
    </linearGradient>
    <linearGradient id="goldHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#ffffff"/>
      <stop offset="30%" stopColor="#ffeaa7"/>
      <stop offset="65%" stopColor="#d4af37"/>
      <stop offset="100%" stopColor="#b47818"/>
    </linearGradient>
    <linearGradient id="goldWave" x1="0%" y1="50%" x2="100%" y2="50%">
      <stop offset="0%" stopColor="#ffd700" stopOpacity="0.2"/>
      <stop offset="25%" stopColor="#ffd700" stopOpacity="0.9"/>
      <stop offset="50%" stopColor="#fff8d6" stopOpacity="1"/>
      <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.9"/>
      <stop offset="100%" stopColor="#ffd700" stopOpacity="0.2"/>
    </linearGradient>
    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="250" cy="250" r="242" fill="url(#bgBurst)" stroke="url(#goldMetallic)" strokeWidth="4"/>
  <circle cx="250" cy="250" r="234" fill="none" stroke="url(#goldMetallic)" strokeWidth="1.2" strokeDasharray="4,4" opacity="0.6"/>
  <g opacity="0.25">
    <line x1="250" y1="230" x2="480.0" y2="230.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="449.2" y2="345.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="365.0" y2="429.2" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="250.0" y2="460.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="135.0" y2="429.2" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="50.8" y2="345.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="20.0" y2="230.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="50.8" y2="115.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="135.0" y2="30.8" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="250.0" y2="0.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="365.0" y2="30.8" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
    <line x1="250" y1="230" x2="449.2" y2="115.0" stroke="url(#goldHighlight)" strokeWidth="1.5" strokeDasharray="12,18" />
  </g>
  <path d="M 80 235 L 155 235 L 165 218 L 175 252 L 185 175 L 195 295 L 205 235 L 295 235 L 305 235 L 315 215 L 325 258 L 335 220 L 345 245 L 355 235 L 420 235" fill="none" stroke="url(#goldWave)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#goldGlow)" />
  <path d="M 85 235 C 130 235, 150 270, 210 295 C 255 315, 290 280, 320 230 C 335 205, 340 180, 325 170 C 305 160, 270 190, 280 240 C 290 290, 330 300, 360 280" fill="none" stroke="url(#goldMetallic)" strokeWidth="2.2" opacity="0.85" filter="url(#goldGlow)" />
  <path d="M 95 238 C 135 240, 155 275, 215 300 C 258 320, 292 285, 322 235 C 337 210, 342 185, 327 175 C 308 165, 275 193, 283 243 C 293 293, 332 302, 362 282" fill="none" stroke="url(#goldMetallic)" strokeWidth="2.2" opacity="0.85" filter="url(#goldGlow)" />
  <path d="M 105 241 C 140 245, 160 280, 220 305 C 262 325, 295 290, 325 240 C 340 215, 345 190, 330 180 C 312 170, 280 196, 287 246 C 297 296, 335 305, 365 285" fill="none" stroke="url(#goldMetallic)" strokeWidth="2.2" opacity="0.85" filter="url(#goldGlow)" />
  <path d="M 115 244 C 145 250, 165 285, 225 310 C 265 330, 298 295, 328 245 C 343 220, 348 195, 333 185 C 315 175, 285 200, 290 250 C 300 300, 338 308, 368 288" fill="none" stroke="url(#goldMetallic)" strokeWidth="2.2" opacity="0.85" filter="url(#goldGlow)" />

    <g filter="url(#goldGlow)">
      {/* Central vertical spine with tapered bevel */}
      <path d="M 264 95 
               C 272 135, 276 185, 275 235 
               C 274 275, 271 315, 269 345
               C 267 375, 255 400, 235 405
               C 215 410, 205 390, 215 375
               C 225 360, 248 360, 252 380
               C 255 395, 240 405, 235 405
               C 250 402, 260 380, 262 350
               C 264 320, 266 270, 266 230
               C 266 180, 262 135, 256 95
               Z" fill="url(#goldMetallic)" stroke="url(#goldHighlight)" strokeWidth="1.5"/>

      {/* Upper Loop of G Clef */}
      <path d="M 260 95
               C 255 70, 240 75, 232 95
               C 220 125, 230 175, 262 215
               C 268 222, 275 230, 275 230
               C 270 215, 238 175, 242 125
               C 245 90, 262 80, 260 95
               Z" fill="url(#goldMetallic)" stroke="url(#goldHighlight)" strokeWidth="1.2"/>

      {/* Large Middle Swirl / Head of Clef */}
      <path d="M 262 215
               C 235 185, 195 210, 195 250
               C 195 295, 245 325, 280 295
               C 310 270, 310 220, 275 195
               C 250 178, 225 195, 225 225
               C 225 245, 242 260, 260 252
               C 270 248, 272 235, 265 230
               C 258 225, 245 230, 245 240
               C 245 248, 252 250, 255 248
               C 242 250, 238 238, 238 228
               C 238 212, 255 198, 272 210
               C 295 228, 295 262, 272 282
               C 245 305, 210 282, 210 250
               C 210 220, 240 200, 262 215
               Z" fill="url(#goldMetallic)" stroke="url(#goldHighlight)" strokeWidth="1.5"/>

      {/* Lower Teardrop Sphere of G-clef */}
      <circle cx="236" cy="388" r="16" fill="url(#goldMetallic)" stroke="url(#goldHighlight)" strokeWidth="1.5"/>
      <circle cx="232" cy="384" r="5" fill="#ffffff" opacity="0.6"/>
    </g>
    
  <circle cx="270" cy="115" r="3.5" fill="#ffffff" filter="url(#goldGlow)"/>
  <circle cx="205" cy="245" r="3" fill="#ffffff" filter="url(#goldGlow)"/>
  <circle cx="300" cy="210" r="3.5" fill="#ffffff" filter="url(#goldGlow)"/>
</svg>
  );
}

export function OfficialHanulLogo({ className = "w-full h-full" }: { className?: string }) {
  return <SacredGeometryLogo className={className} />;
}
