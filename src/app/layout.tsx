import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HANULSTUDIO.com — 64-Bit Dolby Atmos 4-Tier Spatial Audio & B2B Functional Sound Therapy',
  description: 'Standard 24-Bit/48kHz 4-Tier Spatial Audio Architecture (Atmos Off/Near/Mid/Far) & ITU-R BS.1770 (-16.0 LUFS / -1.5 dBTP) Certified. 8 Official YouTube Channels & 56 Master Playlists engineered in Fender Studio Pro 8.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070709] text-[#f3f0e6] antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
