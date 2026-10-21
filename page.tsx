'use client';
import React, { useState } from 'react';
import { CHANNELS_DATA } from '../data/channels';

export default function HanulStudioV33Page() {
  const [activeCode, setActiveCode] = useState('YT01');
  const activeChannel = CHANNELS_DATA.find((c) => c.code === activeCode) || CHANNELS_DATA[0];

  return (
    <main className="min-h-screen bg-[#07070c] text-[#f4f4f6] px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-3">
            8-ACCOUNT × 7-PLAYLIST : 56 MASTER ECOSYSTEM
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            HanulStudio 8대 글로벌 전용 채널
          </h1>
          <div className="mt-6 w-full overflow-x-auto flex justify-center">
            <p
              className="whitespace-nowrap font-black text-amber-300 text-center tracking-tight px-6 py-3 rounded-full bg-amber-500/15 border-2 border-amber-400/60 shadow-xl shadow-amber-500/20"
              style={{ fontSize: 'clamp(0.82rem, 1.75vw, 1.45rem)' }}
            >
              👇 아래 8개 채널 카드를 클릭하시면 해당 채널의 7개 마스터 재생목록이 바로 아래에 펼쳐집니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {CHANNELS_DATA.map((ch) => (
            <div
              key={ch.code}
              onClick={() => setActiveCode(ch.code)}
              className="cursor-pointer rounded-3xl bg-[#0e0e1a] border-2 border-amber-500/40 hover:border-amber-400 p-5 transition"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{ch.icon}</span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-500/15 text-amber-300 border border-amber-500/40">
                  ● 7 PLAYLISTS
                </span>
              </div>
              <h3 className="text-lg font-black text-white">{ch.name}</h3>
              <p className="text-xs font-bold text-amber-400 mt-0.5">{ch.subtitle}</p>
              <p className="text-[11px] text-slate-400 mt-2">{ch.specs}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-[#0b0b14] border-2 border-amber-500/60 p-6 space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div>
              <h2 className="text-2xl font-black text-white">{activeChannel.name} (7 PLAYLISTS)</h2>
              <p className="text-xs text-amber-400 font-bold">{activeChannel.specs}</p>
            </div>
            <a
              href={`https://www.youtube.com/playlist?list=${activeChannel.playlists[0].plId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white text-black font-black text-xs"
            >
              YouTube 채널 바로가기 ▶
            </a>
          </div>
          {activeChannel.playlists.map((pl) => (
            <div key={pl.code} className="rounded-2xl bg-[#11111e] border border-white/10 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-black text-amber-300">{pl.trackNo} · {pl.tag} · {pl.hz}</div>
                <div className="text-base font-black text-white mt-0.5">{pl.enTitle}</div>
                <div className="text-xs font-bold text-slate-200">{pl.title}</div>
                <div className="text-xs text-slate-400 mt-1">{pl.desc}</div>
              </div>
              <a
                href={`https://www.youtube.com/playlist?list=${pl.plId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-400 text-black font-black text-xs whitespace-nowrap"
              >
                유튜브 듣기 ▶
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
