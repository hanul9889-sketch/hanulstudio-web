import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HANULSTUDIO.com — 황금비율로 설계된 프리미엄 사운드 테라피',
  description: '우주의 주파수로 당신의 의식을 깨웁니다. 8대 글로벌 전용 채널 56개 마스터 재생목록 • Fender Studio Pro 8. 8D 입체 음향, 바이노럴 비트, 솔페지오 주파수 과학 기반 치유 사운드.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="bg-[#0a0a0c] text-white min-h-screen selection:bg-[#d4af37] selection:text-black">
        <div id="google_translate_element" style={{ display: 'none' }} aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
