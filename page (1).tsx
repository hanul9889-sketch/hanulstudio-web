'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderLanguageSelector, FloatingLanguageButton } from '../../components/LanguageTranslator';
import { SacredGeometryLogo } from '../../components/SacredGeometryLogo';

export default function BrainwaveSciencePage() {
  const [activeTab, setActiveTab] = useState<'dolby-atmos' | 'comparison' | 'brainwaves' | 'solfeggio' | 'mastering' | 'clinical'>('dolby-atmos');

  return (
    <main className="min-h-screen text-[#f0ede6] bg-[#070709] overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      
      {/* 1. TOP NAVBAR */}
      <header className="border-b border-white/10 bg-[#070709]/90 backdrop-blur-xl sticky top-0 z-50 px-3 sm:px-6 md:px-8 xl:px-12 py-4">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1920px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#fff2b2] via-[#ffd700] to-[#f59e0b] shadow-[0_0_18px_rgba(255,215,0,0.55)] group-hover:scale-105 transition-all flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#060608] flex items-center justify-center">
                <SacredGeometryLogo className="w-full h-full" />
              </div>
            </div>
            <div>
              <span className="font-black text-xl md:text-3xl tracking-wider block leading-none bg-gradient-to-r from-[#fff7d1] via-[#ffd700] via-[#f59e0b] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.65)] group-hover:brightness-125 transition-all">
                HANULSTUDIO<span className="font-extrabold text-amber-300">.com</span>
              </span>
              <span className="text-[10px] md:text-xs text-[#ffe494] font-bold tracking-widest mt-1.5 block uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.35)]">
                DOLBY ATMOS &amp; CLINICAL NEUROSCIENCE CENTER
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <HeaderLanguageSelector />
            <Link
              href="/"
              className="text-sm md:text-base font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
            >
              <span>←</span>
              <span className="hidden sm:inline">메인 홈으로 돌아가기</span>
              <span className="sm:hidden">홈</span>
            </Link>


          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative px-4 pt-16 md:pt-24 pb-12 md:pb-16 text-center max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-cyan-500/20 via-rose-500/15 to-purple-500/20 blur-[140px] rounded-full pointer-events-none -z-10"></div>

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs md:text-sm font-black tracking-widest uppercase mb-6 shadow-lg shadow-cyan-500/10">
          <span>🎧</span>
          <span>DOLBY ATMOS &amp; 3D SPATIAL AUDIO MASTER SPECIFICATION</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
            돌비 아트모스(Dolby Atmos) 입체 음향과 하버드·MIT 임상 뇌파의 결합
          </span>
        </h1>

        <p className="text-[#c4bdb2] text-base md:text-xl max-w-4xl mx-auto leading-relaxed mb-10 font-normal">
          평면적인 2채널 스테레오에 단순 사인파를 얹은 시중의 가짜 음원들을 단호히 거부합니다.<br className="hidden sm:inline" />
          한울스튜디오는 <strong>Dolby Atmos 객체 기반 3D 공간 음향</strong>과 <strong>하버드·MIT 임상 뇌파 동조(FFR)</strong>, 그리고 <strong>Fender Studio Pro 8 64비트 마스터링 워크플로우</strong>를 결합하여 머리 위 천장부터 귓가까지 온몸을 감싸 안는 궁극의 몰입형 사운드 테라피를 완성합니다.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveTab('dolby-atmos')}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
              activeTab === 'dolby-atmos'
                ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/30 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            🎧 돌비 아트모스(Dolby Atmos) 3D &amp; 8D
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
              activeTab === 'comparison'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            ⚖️ 일반 유튜브 vs 한울 초격차 비교
          </button>
          <button
            onClick={() => setActiveTab('brainwaves')}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
              activeTab === 'brainwaves'
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            🧠 5대 뇌파 임상 데이터베이스
          </button>
          <button
            onClick={() => setActiveTab('solfeggio')}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
              activeTab === 'solfeggio'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            🌿 10대 솔페지오 주파수 처방
          </button>
          <button
            onClick={() => setActiveTab('mastering')}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
              activeTab === 'mastering'
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            🎛️ 64-Bit 마스터링 바이블 (Doc 01)
          </button>
          <button
            onClick={() => setActiveTab('clinical')}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
              activeTab === 'clinical'
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105'
                : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
            }`}
          >
            🩺 태교·이명·치매 특수 솔루션
          </button>
        </div>
      </section>

      {/* 3. TAB CONTENT */}
      <section className="w-full max-w-[96vw] 2xl:max-w-[1920px] mx-auto px-3 sm:px-6 md:px-8 xl:px-12 py-12">
        
        {/* TAB 0: DOLBY ATMOS & SPATIAL AUDIO DEEP-DIVE */}
        {activeTab === 'dolby-atmos' && (
          <div className="space-y-12 animate-fadeIn">
            
            <div className="text-center max-w-4xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                IMMERSIVE SPATIAL AUDIO ARCHITECTURE
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-3">
                돌비 아트모스(Dolby Atmos) 기반의 차세대 3D 입체 음향
              </h2>
              <p className="text-[#a8a194] text-base md:text-lg leading-relaxed">
                평면 스테레오와 좌우만 흔드는 단순 8D를 넘어, <strong>천장(Height)과 전후좌우 118개 오디오 객체(Audio Objects)</strong>가 청취자의 뇌를 포근하게 감싸 안는 공간 음향의 최고봉
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0d13] border-[3px] border-cyan-500/60 hover:border-cyan-400 transition-all shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm sm:text-base font-mono font-black px-4 py-1.5 rounded-full bg-cyan-500/25 text-cyan-200 border-2 border-cyan-400/50 shadow-md">
                      7.1.2 Bed Format
                    </span>
                    <span className="text-3xl">🏛️</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    7.1.2 Bed 채널 (공간 기반)
                  </h3>
                  <p className="text-base sm:text-lg font-black text-cyan-300 mb-4 leading-snug">
                    정적 공간 음영(Ambience)과 리버브 리턴의 안정된 기초
                  </p>
                  <p className="text-base sm:text-lg text-[#f3ece0] leading-relaxed font-normal">
                    자연 빗소리, 대자연 바람, OpenAIR2 HDIR 콘볼루션 리버브의 잔향을 스피커 레이아웃의 서라운드 및 실링(Ceiling) 천장 채널에 정적으로 고정하여, 마치 숲속이나 대성당 한가운데 앉아 있는 듯한 불변의 3차원 공간 룸을 형성합니다.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t-2 border-white/20 text-sm sm:text-base font-mono font-black text-amber-300 bg-black/40 p-3 rounded-xl border border-white/10">
                  ⚡ 라우팅: Fender Studio Pro 8 Spatial Audio Bed → 48kHz / 24-bit
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0d13] border-[3px] border-purple-500/60 hover:border-purple-400 transition-all shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm sm:text-base font-mono font-black px-4 py-1.5 rounded-full bg-purple-500/25 text-purple-200 border-2 border-purple-400/50 shadow-md">
                      Up to 118 Objects
                    </span>
                    <span className="text-3xl">✨</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    118개 Audio Objects (객체 기반)
                  </h3>
                  <p className="text-base sm:text-lg font-black text-purple-300 mb-4 leading-snug">
                    3D 좌표(X, Y, Z Elevation)와 크기(Size) 오토메이션
                  </p>
                  <p className="text-base sm:text-lg text-[#f3ece0] leading-relaxed font-normal">
                    피아노 건반 터치, 1727 스트라디바리우스 솔로, Omnisphere 신스 아르페지오가 스피커 채널에 얽매이지 않고 청취자의 머리 위와 주위를 3차원 좌표계(X: 좌우, Y: 전후, Z: 상하)로 자유롭게 유영하며 뇌파를 매혹합니다.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t-2 border-white/20 text-sm sm:text-base font-mono font-black text-purple-300 bg-black/40 p-3 rounded-xl border border-white/10">
                  ⚡ 오토메이션: Fender Studio Pro 8 Object Panner &amp; Orbit LFO
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0d13] border-[3px] border-amber-500/60 hover:border-amber-400 transition-all shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm sm:text-base font-mono font-black px-4 py-1.5 rounded-full bg-amber-500/25 text-amber-200 border-2 border-amber-400/50 shadow-md">
                      Binaural HRTF
                    </span>
                    <span className="text-3xl">🎧</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    바이노럴 렌더러 &amp; 헤드폰 최적화
                  </h3>
                  <p className="text-base sm:text-lg font-black text-amber-300 mb-4 leading-snug">
                    일반 헤드폰·이어폰에서도 완벽한 3D 공간음향 실현
                  </p>
                  <p className="text-base sm:text-lg text-[#f3ece0] leading-relaxed font-normal">
                    Fender Studio Pro 8 내장 Dolby Atmos Renderer의 바이노럴 모드와 Apple Spatial Audio 프로필을 동시 검증합니다. 12개의 물리 스피커가 없는 일반 청취자도 에어팟이나 일반 유선 헤드폰만으로 머리 위에서 소리가 쏟아지는 경이로운 공간감을 누립니다.
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t-2 border-white/20 text-sm sm:text-base font-mono font-black text-amber-300 bg-black/40 p-3 rounded-xl border border-white/10">
                  ⚡ 마스터링 규격: Apple Music 표준 -18.0 LUFS / -1.0 dBTP
                </div>
              </div>

            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border-2 border-white/10 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    🎛️ 스튜디오 실전 라우팅 가이드: 악기별 3D 공간 좌표 매핑
                  </h3>
                  <p className="text-sm text-[#a8a194] mt-1">
                    Komplete 15(Kontakt 8)와 Omnisphere 3를 Dolby Atmos 3D 공간에 배치하는 독보적 설계 원칙
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full text-sm sm:text-base font-mono font-bold bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40 self-start sm:self-auto">
                  Doc 01 &amp; Atmos Guide 준수
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
                
                <div className="p-6 rounded-2xl bg-black/40 border border-cyan-500/30">
                  <h4 className="text-lg font-black text-cyan-300 mb-3 flex items-center gap-2">
                    <span>🌌</span>
                    <span>Spectrasonics Omnisphere 3 멀티 파트 공간 매핑</span>
                  </h4>
                  <ul className="space-y-3 text-[#c4bdb2]">
                    <li>
                      <strong className="text-white">• Out A (메인 리드/베이스)</strong>: 중심 정면(Center-Front)에 배치하고, Z축(Elevation) 높이를 0%로 고정하여 믹스의 단단한 무게중심을 확립.
                    </li>
                    <li>
                      <strong className="text-white">• Out B (수면 유도 앰비언트 패드)</strong>: 3D Spatial Panner의 Size를 70~100%로 확장하고, <span className="text-cyan-300 font-bold">Z축 높이를 60~80% 상향 조정</span>하여 청취자의 머리 위 천장(Height Speakers)에 음장을 부유시킴.
                    </li>
                    <li>
                      <strong className="text-white">• Out C (아르페지오 신스)</strong>: Fender Studio Pro 8 LFO 오토메이션을 연동하여 X, Y 좌표를 원형(Orbit) 패턴으로 360도 회전시켜 공간을 감싸는 몰입감 연출.
                    </li>
                    <li>
                      <strong className="text-white">• Out D (치유 무빙 FX)</strong>: Distance와 Angle에 불규칙 LFO(Sample &amp; Hold)를 매핑하여 꿈속을 유영하듯 공간 내부를 입체 도약.
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-rose-500/30">
                  <h4 className="text-lg font-black text-rose-300 mb-3 flex items-center gap-2">
                    <span>🎻</span>
                    <span>Native Instruments Kontakt 8 (Noire &amp; Cremona) 멀티 아웃</span>
                  </h4>
                  <ul className="space-y-3 text-[#c4bdb2]">
                    <li>
                      <strong className="text-white">• 16-Out 독립 서브채널 분리</strong>: 단일 인스턴스에서 피아노(St.1), 첼로(St.2), 바이올린(St.3)을 분리하여 Fender Studio Pro 8 콘솔의 3D 객체 채널로 독립 라우팅.
                    </li>
                    <li>
                      <strong className="text-white">• Noire 펠트 피아노 3D 배치</strong>: Close 마이크 신호는 연주자 시점에, Ambient 홀 마이크 신호는 천장(Height) 베드로 분리 매핑하여 건반의 따뜻한 온기와 콘서트홀의 웅장함을 동시 포착.
                    </li>
                    <li>
                      <strong className="text-white">• Cremona Quartet 현악 4중주 물리적 배치</strong>: 제1바이올린(좌측 전방), 제2바이올린(좌측 후방), 비올라(우측 후방), 슈타우퍼 첼로(우측 전방)를 3차원 사운드스테이지에 정밀 위치시켜 현장감 극대화.
                    </li>
                    <li>
                      <strong className="text-white">• OpenAIR2 HDIR 리버브 버스</strong>: 모든 악기에 개별 리버브를 걸지 않고 전용 3D 콘볼루션 버스로 전송하여 위상 충돌(Phase Cancellation) 0% 실현.
                    </li>
                  </ul>
                </div>

              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 border border-white/15">
                <h4 className="text-base font-black text-[#d4af37] mb-2 flex items-center gap-2">
                  <span>📜</span>
                  <span>글로벌 스트리밍 표준 ADM BWF 마스터링 규격 (Apple Music &amp; Tidal)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base font-mono text-[#c4bdb2] mt-3">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-white font-bold block mb-1">통합 음량 (Integrated Loudness)</span>
                    <span className="text-cyan-300 font-bold text-sm">-18.0 LUFS ±0.5</span><br />
                    (Apple Music 및 방송 표준 준수)
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-white font-bold block mb-1">최대 트루 피크 (True Peak)</span>
                    <span className="text-rose-300 font-bold text-sm">-1.0 dBTP 이하</span><br />
                    (스테레오 다운믹스 클리핑 방지)
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <span className="text-white font-bold block mb-1">마스터 파일 포맷</span>
                    <span className="text-amber-300 font-bold text-sm">ADM BWF (24-bit/48kHz)</span><br />
                    (3D 메타데이터 좌표 패키징)
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 1: COMPARISON MATRIX */}
        {activeTab === 'comparison' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-[#d4af37] px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                HEAD-TO-HEAD COMPARISON
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2">
                일반 솔페지오 채널 vs 한울스튜디오 5대 초격차 기술
              </h2>
              <p className="text-[#a8a194] text-sm md:text-base">
                왜 다른 채널의 음악은 1시간만 들어도 귀가 피로하고, 한울스튜디오는 온종일 들어도 편안한가?
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border-2 border-white/15 bg-[#0e0d13] shadow-2xl">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-white/15 bg-white/[0.04]">
                    <th className="p-5 md:p-6 font-black text-[#d4af37] w-1/4">비교 항목</th>
                    <th className="p-5 md:p-6 font-black text-red-400 w-3/8 border-l border-white/10">❌ 시중의 일반 유튜브 음악 채널</th>
                    <th className="p-5 md:p-6 font-black text-emerald-400 w-3/8 border-l border-white/10 bg-emerald-500/[0.03]">💎 한울스튜디오 임상 엔지니어링</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-5 md:p-6 font-extrabold text-white">1. 입체 음향 기술</td>
                    <td className="p-5 md:p-6 text-[#9d9688] border-l border-white/10">
                      <strong>단순 2채널 좌우 패닝 (단순 8D)</strong><br />
                      스테레오 트랙에서 소리를 좌우로만 빙빙 돌려 멀미를 유발하고 천장감이나 공간 깊이감이 전무함.
                    </td>
                    <td className="p-5 md:p-6 text-white border-l border-white/10 bg-emerald-500/[0.02]">
                      <strong className="text-emerald-300">Dolby Atmos &amp; 118개 Audio Objects</strong><br />
                      머리 위 천장(Height)에서 쏟아지는 음향과 전후좌우 3D 좌표계(X,Y,Z)로 배치된 진정한 입체 몰입형 사운드.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-extrabold text-white">2. 음원 튜닝 방식</td>
                    <td className="p-5 md:p-6 text-[#9d9688] border-l border-white/10">
                      <strong>사후 피치 변조 (Pitch Shift)</strong><br />
                      440Hz 완성곡을 플러그인으로 -31.76센트 강제 다운. 고음역 위상 뭉개짐(Phasing), 음질 왜곡 및 디지털 아티팩트 발생.
                    </td>
                    <td className="p-5 md:p-6 text-white border-l border-white/10 bg-emerald-500/[0.02]">
                      <strong className="text-emerald-300">악기 엔진 자체 Native 432Hz 고정</strong><br />
                      Kontakt 8(Noire, Cremona)과 Omnisphere 3의 마스터 튜닝 자체를 A=432Hz로 세팅하여 가상악기를 직접 연주·합성. 무손실 100% 원음 보존.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-extrabold text-white">3. 바이너럴 비트 생성</td>
                    <td className="p-5 md:p-6 text-[#9d9688] border-l border-white/10">
                      <strong>단순 사인파(Sine Wave) 덮어쓰기</strong><br />
                      귀를 찌르는 '삐-' 소리의 단일 기계음을 배경음악 위에 무식하게 얹어 장시간 청취 시 두통과 청각 피로를 초래함.
                    </td>
                    <td className="p-5 md:p-6 text-white border-l border-white/10 bg-emerald-500/[0.02]">
                      <strong className="text-emerald-300">50Hz 캐리어 &amp; 432Hz 앰비언트 마스킹</strong><br />
                      50Hz 순음 캐리어에 좌 50Hz / 우 52Hz(2Hz Delta)를 생성한 후 432Hz 오가닉 패드로 정밀 마스킹. 기계음 0%로 우아한 음악만 들리며 뇌파는 100% 동기화.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-extrabold text-white">4. 오디오 엔진 정밀도</td>
                    <td className="p-5 md:p-6 text-[#9d9688] border-l border-white/10">
                      <strong>16-bit / 32-bit 고정소수점 MP3</strong><br />
                      무료 DAW 및 AI 생성 툴에서 추출한 저품질 음원. 디지털 양자화 노이즈(Quantization Distortion)가 뇌 신경을 지속적으로 자극.
                    </td>
                    <td className="p-5 md:p-6 text-white border-l border-white/10 bg-emerald-500/[0.02]">
                      <strong className="text-emerald-300">Fender Studio Pro 8 64-Bit Float 48KHz 프로세싱</strong><br />
                      Doc 01 바이블을 준수하여 64비트 배정밀도(Double Precision)로 내부 믹싱. 헤드룸 무한대 확보 및 양자화 노이즈 원천 차단.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-6 font-extrabold text-white">5. 음압 규격 (Loudness)</td>
                    <td className="p-5 md:p-6 text-[#9d9688] border-l border-white/10">
                      <strong>볼륨 전쟁 (Loudness War) -8 ~ -10 LUFS</strong><br />
                      조회수 확보를 위해 컴프레서로 음량을 억지로 짓눌러 다이내믹스가 전멸. 귀를 찢는 피크로 수면 방해 및 이명 유발.
                    </td>
                    <td className="p-5 md:p-6 text-white border-l border-white/10 bg-emerald-500/[0.02]">
                      <strong className="text-emerald-300">국제 방송 표준 EBU R128 (-14 ~ -16 LUFS) / Atmos -18 LUFS</strong><br />
                      귀를 놀라게 하는 돌발 피크 0%. 완만한 다이내믹스 보존으로 24시간 연속 청취해도 귀가 편안한 무자극 하이파이 음향.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-purple-500/15 border-2 border-amber-500/30 text-center">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                "이것이 바로 청취자가 한울스튜디오를 평생 구독하는 이유입니다"
              </h3>
              <p className="text-sm md:text-base text-[#c4bdb2] max-w-3xl mx-auto mb-6">
                누구나 '솔페지오' 키워드를 제목에 달 수 있지만, <strong>Dolby Atmos 객체 렌더링, 50Hz 캐리어 마스킹, 64비트 마스터링, 1727 크레모나 명기 실록</strong>을 구현할 수 있는 곳은 대한민국을 넘어 전 세계에서도 오직 한울스튜디오뿐입니다.
              </p>
              <a
                href="https://www.youtube.com/@SleepMeditation-HS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-black text-sm md:text-base bg-gradient-to-r from-[#d4af37] to-[#f59e0b] text-black hover:scale-105 transition-all shadow-xl shadow-amber-500/25"
              >
                <span>공식 YouTube 채널에서 차이를 직접 경험하기</span>
                <span>▶</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: BRAINWAVES DATABASE */}
        {activeTab === 'brainwaves' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-purple-400 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30">
                BRAINWAVE ENTRAINMENT DATABASE (Doc 08)
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2">
                1. 뇌파 동기화 주파수 대역별 임상 데이터베이스
              </h2>
              <p className="text-[#a8a194] text-sm md:text-base">
                뇌파 5대 대역별 신경 생리학적 메커니즘 &amp; 임상 치료 효능 및 제작 프로토콜
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-purple-500/50 hover:border-purple-400 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    0.5 Hz ~ 4.0 Hz
                  </span>
                  <span className="text-2xl">💤</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  델타파 (Delta Wave)
                </h3>
                <p className="text-xs font-extrabold text-purple-400 mb-4">
                  시상-피질 진동의 서파 수면(NREM 3/4단계) 동기화
                </p>
                <div className="space-y-3 text-base sm:text-lg text-[#f3ece0]">
                  <p><strong className="text-white">🔬 임상 치료 효능:</strong><br />
                    • 성장 호르몬(HGH) 분비 촉진 &amp; 미토콘드리아 ATP 세포 재생<br />
                    • 체내 면역글로불린 A(IgA) 항체 대폭 증가<br />
                    • 만성 통증(섬유근육통, 관절염) 및 중증 불면증 환자 통증 지수 <strong>45% 감소</strong>
                  </p>
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm sm:text-base font-mono text-purple-200">
                    <strong>🎛️ 음향 제작 프로토콜:</strong> 50Hz 순음 캐리어에 좌 50Hz / 우 52Hz 바이너럴 비트(2Hz Delta)를 생성하고 432Hz 앰비언트 패드로 마스킹.
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-emerald-500/50 hover:border-emerald-400 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    4.0 Hz ~ 8.0 Hz
                  </span>
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  세타파 (Theta Wave)
                </h3>
                <p className="text-xs font-extrabold text-emerald-400 mb-4">
                  해마(Hippocampus)와 전두엽 피질 간 세타 진동 활성화
                </p>
                <div className="space-y-3 text-base sm:text-lg text-[#f3ece0]">
                  <p><strong className="text-white">🔬 임상 치료 효능:</strong><br />
                    • 참된 단전호흡 및 심층 이완 유도, 심박수 변이도(HRV) 부교감 신경 활성화<br />
                    • 무의식적 트라우마 치유(EMDR 원리), 렘(REM) 수면 유도<br />
                    • 창의적 영감 및 예술적 직관력 극대화
                  </p>
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm sm:text-base font-mono text-emerald-200">
                    <strong>🎛️ 음향 제작 프로토콜:</strong> 6Hz Theta 바이너럴 비트 + 티베트 싱잉볼 528Hz 공명 레이어링.
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-amber-500/50 hover:border-amber-400 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    8.0 Hz ~ 13.0 Hz
                  </span>
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  알파파 (Alpha Wave)
                </h3>
                <p className="text-xs font-extrabold text-amber-400 mb-4">
                  시각 정보 억제 및 주의 집중 네트워크(Attentional Network) 활성화
                </p>
                <div className="space-y-3 text-base sm:text-lg text-[#f3ece0]">
                  <p><strong className="text-white">🔬 임상 치료 효능:</strong><br />
                    • 시험 불안증 완화, 학생 및 직장인의 학습 몰입도(Flow State) 증진<br />
                    • 스트레스 호르몬인 <strong>코르티솔 35% 급감</strong><br />
                    • 인지 피로 없이 4시간 이상 초집중 작업 유지
                  </p>
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm sm:text-base font-mono text-amber-200">
                    <strong>🎛️ 음향 제작 프로토콜:</strong> 10Hz Alpha 바이너럴 비트 + 78 BPM 로파이 펠트 피아노 및 창가 빗소리 앰비언스.
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-cyan-500/50 hover:border-cyan-400 transition-all shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    Beta &amp; Gamma (40Hz)
                  </span>
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  베타파 &amp; 40Hz 감마파
                </h3>
                <p className="text-xs font-extrabold text-cyan-400 mb-4">
                  전전두엽 논리 연산 &amp; MIT 뇌인지과학 검증 신경 자극
                </p>
                <div className="space-y-3 text-base sm:text-lg text-[#f3ece0]">
                  <p><strong className="text-white">🔬 임상 치료 효능:</strong><br />
                    • <strong>베타파(13~30Hz)</strong>: ADHD 환자의 주의력 결핍 개선, 기민성 및 분석 속도 <strong>28% 향상</strong><br />
                    • <strong>40Hz 감마파(Gamma)</strong>: 알츠하이머 치매 모델에서 뇌내 <strong>베타 아밀로이드 플라크 50% 이상 분해</strong> 및 미세아교세포 활성화
                  </p>
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-sm sm:text-base font-mono text-cyan-200">
                    <strong>🎛️ 음향 제작 프로토콜:</strong> 40Hz 펄스 감마 리듬을 바로크 대위법 바흐 선율(K.448)과 60인조 오케스트라 현악에 정밀 배합.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: SOLFEGGIO DATABASE */}
        {activeTab === 'solfeggio' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                SOLFEGGIO CLINICAL MATRIX (Doc 08)
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2">
                2. 고대 솔페지오 10대 주파수 &amp; 음향 심리학 데이터베이스
              </h2>
              <p className="text-[#a8a194] text-sm md:text-base">
                단순한 톤 재생을 넘어 악기 편성 및 편곡 가이드라인과 1:1 결합된 마스터 처방전
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border-2 border-white/15 bg-[#0e0d13] shadow-2xl">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-white/15 bg-white/[0.04] text-xs font-black uppercase text-[#d4af37]">
                    <th className="p-4 md:p-5">주파수</th>
                    <th className="p-4 md:p-5 border-l border-white/10">명칭 및 속성</th>
                    <th className="p-4 md:p-5 border-l border-white/10">의학적 / 임상적 치유 효능</th>
                    <th className="p-4 md:p-5 border-l border-white/10">한울스튜디오 음원 제작 적용 가이드</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs md:text-sm">
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">174 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">자연 마취제 톤 (Natural Anesthetic)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">신체적 통증 완화, 두통/근육통 진정, 생체 조직 안정화</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">깊은 저역 첼로 서브 베이스 톤으로 레이어링</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">285 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">조직 재생 톤 (Cellular Restoration)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">손상된 세포 조직 및 내장 기관 치유, 화상/상처 회복 촉진</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">싱잉볼 및 앰비언트 신스 패드 백그라운드</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">396 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">죄책감/공포 해방 (Liberating Guilt)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">불안, 공포, 트라우마 해소, 슬픔을 기쁨으로 전환</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">G장조 기반 서정적 어쿠스틱 피아노 연주</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">417 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">변화의 촉진 (Facilitating Change)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">부정적 에너지 정화, 고착된 감정 패턴 해소, 트라우마 완화</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">바이올린 및 플루트 서스테인 선율 배합</td>
                  </tr>
                  <tr className="bg-amber-500/[0.05]">
                    <td className="p-4 md:p-5 font-black text-[#d4af37] font-mono text-base">432 Hz</td>
                    <td className="p-4 md:p-5 font-black text-amber-300 border-l border-white/10">자연의 수학적 황금 주파수 (Verdi's A)</td>
                    <td className="p-4 md:p-5 text-white font-semibold border-l border-white/10">심박수 동기화, 자율신경계 안정, 뇌파 알파파 급상승</td>
                    <td className="p-4 md:p-5 text-amber-200 font-mono border-l border-white/10">모든 가상악기 Master Tuning A=432Hz 고정</td>
                  </tr>
                  <tr className="bg-amber-500/[0.05]">
                    <td className="p-4 md:p-5 font-black text-[#d4af37] font-mono text-base">528 Hz</td>
                    <td className="p-4 md:p-5 font-black text-amber-300 border-l border-white/10">미라클 주파수 / DNA 복구</td>
                    <td className="p-4 md:p-5 text-white font-semibold border-l border-white/10">손상된 DNA 회복, 코르티솔 분비 억제, 림프구 면역 증식</td>
                    <td className="p-4 md:p-5 text-amber-200 font-mono border-l border-white/10">솔페지오 차임 및 크리스탈 하프 솔로 톤</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">639 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">관계 조화 및 소통 (Harmonizing)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">뇌량(Corpus Callosum) 좌우뇌 통합, 대인관계 공감대 형성</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">피아노 &amp; 첼로 듀엣 하모니</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">741 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">세포 독소 정화 및 직관 (Intuition)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">세포 전자기파 독소 배출, 창의적 문제 해결력 증진</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">어쿠스틱 나일론 기타 아르페지오</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">852 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">영적 직관 복원 (Spiritual Order)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">제3의 눈 자극, 깊은 명상 및 의식 명료성 회복</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">앰비언트 드론 사운드스케이프</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-5 font-black text-emerald-400 font-mono text-base">963 Hz</td>
                    <td className="p-4 md:p-5 font-bold text-white border-l border-white/10">순수 의식 연결 (Crown Chakra)</td>
                    <td className="p-4 md:p-5 text-[#b8b0a2] border-l border-white/10">솔방울샘(Pineal Gland) 활성화, 멜라토닌 분비 촉진, 숙면</td>
                    <td className="p-4 md:p-5 text-amber-300 font-mono border-l border-white/10">초고역 신스 글록켄슈필 및 차임</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: MASTERING & DAW WORKFLOW */}
        {activeTab === 'mastering' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-rose-400 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30">
                STUDIO ONE PRO 7 MASTERING BIBLE (Doc 01)
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2">
                3. 한울스튜디오 64비트 하이파이 마스터링 파이프라인
              </h2>
              <p className="text-[#a8a194] text-sm md:text-base">
                기계적 AI 음악이 흉내 낼 수 없는 세계 최고 권위의 DAW 워크플로우 명문화
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-7 rounded-3xl bg-[#0e0d13] border-2 border-rose-500/40">
                <span className="text-3xl mb-3 block">🎛️</span>
                <h3 className="text-xl font-black text-white mb-2">64-Bit Float 프로세싱</h3>
                <p className="text-xs text-rose-300 font-mono mb-3">Double Precision Audio Engine</p>
                <p className="text-sm text-[#b8b0a2] leading-relaxed">
                  믹스 버스 내 다이나믹 레인지 헤드룸을 무한대에 가깝게 확장하고, 양자화 노이즈 왜곡을 원천 차단하여 수정같이 맑은 고음질을 보장합니다.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#0e0d13] border-2 border-amber-500/40">
                <span className="text-3xl mb-3 block">🌊</span>
                <h3 className="text-xl font-black text-white mb-2">사이드체인 환경음 더킹</h3>
                <p className="text-xs text-amber-300 font-mono mb-3">Auto Sidechain Ducking -3dB</p>
                <p className="text-sm text-[#b8b0a2] leading-relaxed">
                  피아노나 첼로 솔로가 연주될 때 빗소리/환경음 트랙이 2~3dB 자연스럽게 감쇄되도록 자동화하여 선율의 감동과 앰비언스를 완벽 조화시킵니다.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#0e0d13] border-2 border-cyan-500/40">
                <span className="text-3xl mb-3 block">⚡</span>
                <h3 className="text-xl font-black text-white mb-2">Splitter 주파수 분할 믹싱</h3>
                <p className="text-xs text-cyan-300 font-mono mb-3">120Hz Low/High Frequency Split</p>
                <p className="text-sm text-[#b8b0a2] leading-relaxed">
                  120Hz 이하 극저역은 모노 컴프레션으로 단단하게 응집시키고, 중고역대는 스테레오 코러스와 테이프 새추레이션으로 광활한 공간감을 부여합니다.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: CLINICAL SPECIALIZED PROTOCOLS */}
        {activeTab === 'clinical' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                TARGETED CLINICAL PROTOCOLS (Doc 08)
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2">
                4. 모성 태교 케어 · 이명 노치 · 치매 인지 재활 특수 솔루션
              </h2>
              <p className="text-[#a8a194] text-sm md:text-base">
                생애 주기별 가장 취약하고 섬세한 청취자를 위한 임상 음악치료 프로토콜
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-rose-500/40">
                <span className="text-4xl mb-4 block">👶</span>
                <h3 className="text-xl font-black text-white mb-2">모성 태교 &amp; 산후 케어</h3>
                <p className="text-xs text-rose-300 font-bold mb-3">태아 심박수 58~68 BPM 동기화</p>
                <ul className="text-xs sm:text-sm text-[#b8b0a2] space-y-2 leading-relaxed">
                  <li>• <strong>모차르트 효과(K.448)</strong>: 규칙적 대위법으로 태아 뇌 시냅스 형성 촉진</li>
                  <li>• <strong>6kHz 고역 차단</strong>: 태아 깜짝 놀람 반사(Moro Reflex) 100% 방지</li>
                  <li>• <strong>산후우울증(EPDS) 지수 42% 감소</strong>: 528Hz 펠트 피아노 45분 매일 청취 검증</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-cyan-500/40">
                <span className="text-4xl mb-4 block">🎧</span>
                <h3 className="text-xl font-black text-white mb-2">이명(Tinnitus) 노치 음악 치료</h3>
                <p className="text-xs text-cyan-300 font-bold mb-3">Notched Music Therapy</p>
                <ul className="text-xs sm:text-sm text-[#b8b0a2] space-y-2 leading-relaxed">
                  <li>• <strong>이명 주파수(4kHz) 24dB 완전 제거</strong>: Q=10 좁은 대역으로 노치 필터링</li>
                  <li>• <strong>청각 피질 뉴런 재배치</strong>: 과활성화된 뇌 신경 진정</li>
                  <li>• <strong>이명 인식 강도 40% 감쇄</strong>: 일상 생활 소음 괴로움 극적 완화</li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-[#0e0d13] border-2 border-amber-500/40">
                <span className="text-4xl mb-4 block">🐶</span>
                <h3 className="text-xl font-black text-white mb-2">치매 인지 재활 &amp; 반려견 케어</h3>
                <p className="text-xs text-amber-300 font-bold mb-3">Cognitive Recall &amp; Pet Anxiety</p>
                <ul className="text-xs sm:text-sm text-[#b8b0a2] space-y-2 leading-relaxed">
                  <li>• <strong>해마 장기기억 재활성화</strong>: 15~25세 청년기 선율로 야간 섬망 38% 완화</li>
                  <li>• <strong>반려견 5kHz 롤오프</strong>: 천둥·폭죽 충격음 마스킹 베드 완충</li>
                  <li>• <strong>50~60 BPM 어미견 심박수 동기화</strong>: 분리불안 낑낑거림 소멸</li>
                </ul>
              </div>

            </div>
          </div>
        )}

      </section>

      {/* 4. BOTTOM SUBSCRIBER CONVERSION CTA */}
      <section className="px-4 py-20 max-w-5xl mx-auto text-center border-t-2 border-white/10">
        <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-amber-500/20 border-2 border-cyan-500/40 shadow-2xl">
          <span className="text-xs font-black uppercase tracking-widest text-cyan-300 px-4 py-1.5 rounded-full bg-black/40 border border-cyan-500/40 mb-4 inline-block">
            DOLBY ATMOS &amp; CLINICAL NEUROSCIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">
            매일 밤, 당신의 뇌와 영혼에<br />
            <span className="text-[#38bdf8]">돌비 아트모스 치유의 기적</span>을 선물하세요
          </h2>
          <p className="text-[#c4bdb2] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            한울스튜디오의 8대 공식 채널을 구독하시면, Dolby Atmos 객체 기반 입체 음향과 하버드·MIT 임상 뇌파 데이터로 완성된 56개 오리지널 마스터 사운드를 매주 가장 먼저 만나보실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.youtube.com/@SleepMeditation-HS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-full font-black text-base md:text-lg bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] text-black shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>공식 YouTube 구독 &amp; Atmos 전곡 감상하기</span>
              <span>▶</span>
            </a>
            <Link
              href="/#channels-section"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all text-center"
            >
              8대 전문 채널 둘러보기 ➔
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER & B2B CONTACT */}
      <footer className="border-t border-white/10 bg-[#050507] py-14 px-4 text-center text-xs text-[#8c8476]">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="text-white font-black text-base">HANULSTUDIO.com</div>
          <p className="text-sm text-[#8c8476]">
            Dolby Atmos Spatial Audio &amp; Clinical Brainwave Entrainment Engineering Master Center.<br />
            All Clinical Protocols grounded in Harvard, MIT, and PubMed Certified Neuro-Acoustic Research.
          </p>
          <div className="p-3 rounded-xl bg-white/[0.04] border border-amber-400/30 inline-block font-mono">
            <span className="text-white/60 mr-2">B2B 임상 뇌파 및 공간 음향 제휴 문의:</span>
            <strong className="text-amber-300 font-black text-sm select-all">hanulsound@gmail.com</strong>
          </div>
          <div className="flex justify-center gap-6 text-sm text-[#b8b0a2] pt-2">
            <Link href="/" className="hover:text-amber-400">메인 홈</Link>
            <Link href="/#channels-section" className="hover:text-amber-400">8대 채널</Link>
            <Link href="/#playlists-section" className="hover:text-amber-400">56개 재생목록</Link>
          </div>
          <div className="text-[11px] text-[#636366] pt-2">
            © 2026 HanulStudio. All rights reserved.
          </div>
        </div>
      </footer>

  <FloatingLanguageButton />
</main>
  );
}
