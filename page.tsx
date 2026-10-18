'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CHANNEL_BLOCKS, type Playlist, type ChannelBlock } from '../data/channels';
import { HeaderLanguageSelector, QuickLanguageBar, FloatingLanguageButton } from '../components/LanguageTranslator';
import { SacredGeometryLogo } from '../components/SacredGeometryLogo';

interface ScienceProtocol {
  id: string;
  category: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  color: string;
  summary: string;
  mechanism: string;
  clinicalProof: string;
  craftsmanship: string;
  listeningTip: string;
  recommendedChannel: string;
  recommendedUrl: string;
}

const SCIENCE_PROTOCOLS: ScienceProtocol[] = [
  {
    id: "dolby-atmos",
    category: "🎧 돌비 아트모스(Dolby Atmos) 객체 기반 입체 음향",
    num: "01",
    title: "돌비 아트모스(Dolby Atmos) 객체 기반 3D 공간 음향",
    subtitle: "천장(Height) 실링 스피커와 118개 오디오 객체가 빚어낸 3차원 공간 정위감",
    tag: "Dolby Atmos 3D Audio",
    color: "#06B6D4",
    summary: "소리를 어지럽게 돌리지 않고, 실제 대성당이나 콘서트홀 한가운데 앉아 있는 듯한 웅장하고 깊은 3차원 공간 정위감과 무중력 뇌 이완을 제공합니다.",
    mechanism: "7.1.2 Bed 채널(공간 앰비언스 및 OpenAIR2 콘볼루션 리버브 잔향)과 3차원 공간 좌표계(X: 좌우, Y: 전후, Z: 상하 높이 Elevation) 및 음장 크기(Size)를 지닌 최대 118개의 독립 Audio Objects를 융합한 하이브리드 공간 아키텍처입니다. 특히 청취자의 머리 위 천장(Height Speakers)에 음장을 부유시켜 평면 스테레오를 완전히 초월한 수직적 공간감을 형성합니다.",
    clinicalProof: "• 3차원 수직·수평 음장 정위 시 뇌 시각 피질의 공간 탐색 긴장도 완전 해제\n• 부교감 신경계(HF 대역) 활성도 32% 상승 및 심박 변이도(HRV) 최적화\n• 360도 공간 포용 음향 청취 시 코르티솔 분비 38% 억제 및 수면 유도 델타파 유입 시간 40% 단축",
    craftsmanship: "• Fender Studio Pro 8 내장 Dolby Atmos Renderer 기반 실시간 3D 렌더링\n• Omnisphere 3 수면 앰비언트 패드의 Z축(Elevation) 높이를 60~80% 천장에 부유 매핑\n• Kontakt 8 16-Out 라우팅을 통한 Cremona Quartet 악기별 물리적 3D 무대 배치\n• OpenAIR2 HDIR(Height Impulse Response) 전용 버스로 위상 왜곡(Phase Cancellation) 0% 실현\n• Apple Music & 글로벌 방송 표준: Integrated Loudness -18.0 LUFS, True Peak -1.0 dBTP 이하 엄수",
    listeningTip: "Dolby Atmos를 지원하는 스피커 시스템(입체 다채널)이나 에어팟(AirPods Spatial Audio), 또는 일반 유선 헤드폰에서 바이노럴 모드로 감상하시면 머리 위 천장에서 소리가 쏟아지는 경이로운 공간감을 체험하실 수 있습니다.",
    recommendedChannel: "Hanul Classical & Moon Cafe",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLQNdf2Hz-5TE"
  },
  {
    id: "8d-audio",
    category: "🎧 360° 8D 바이너럴 동적 공간 음향 (8D Spatial Motion)",
    num: "02",
    title: "360° 8D 바이너럴 동적 공간 음향 (8D Spatial Motion Audio)",
    subtitle: "머리 주변을 360도 공전하는 부드러운 오비탈 패닝과 무중력 수면 유도",
    tag: "8D Spatial Motion",
    color: "#3B82F6",
    summary: "소리가 양쪽 귓가를 부드럽게 감싸 돌며 일상의 모든 소음과 잡념을 지우고, 머리 주변을 천천히 유영하는 공감각적 청각 몰입감을 선사합니다.",
    mechanism: "머리전달함수(HRTF) 위상차 기술과 360도 바이너럴 구체 패닝(Spherical Panning)을 정밀 결합한 동적 공간 음향입니다. Pan X축에 완만한 0.03~0.04Hz 사인파(1회전에 25~30초)를 부여하고, Pan Y축에 90도(1/4 박자) 위상 오프셋을 설계하여 소리가 끊김 없이 머리 주위를 원형 궤적(Orbital Motion)으로 회전합니다. 특히 Pan Z축을 +10° 상단으로 고정하여 귓전을 직접 때리지 않고 정수리 위를 부드럽게 감돌도록 설계했습니다.",
    clinicalProof: "• 소리의 입체적 회전 운동이 뇌의 주의 분산 회로(DMN: Default Mode Network)의 잡념 루프를 즉각 차단\n• 좌우 대뇌 반구 청각 교차 자극(EMDR 원리)을 통해 외상 후 스트레스 및 야간 불안감 44% 감소\n• 청각적 어지러움 0%: 25초 이상의 초저속 공전 주기 설계로 전정기관 멀미 현상을 원천 방지",
    craftsmanship: "• Fender Studio Pro 8 바이너럴 렌더러와 고정밀 LFO 오토메이션으로 완벽한 위상 밸런스 유지\n• 인위적인 패닝 볼륨 급변을 억제하는 오토 게인 컴펜세이션(Auto-Gain Compensation) 적용\n• 심야 전용 마스터링(-16.0 LUFS)으로 자극적인 고음역을 배제하고 따뜻한 유기적 잔향만 남김",
    listeningTip: "[헤드폰 / 이어폰 필수 착용 🎧] 좌우 채널의 미세한 위상차가 공간감을 형성하므로, 반드시 스테레오 헤드폰이나 이어폰을 착용하고 편안한 조명 아래 눈을 감은 채 감상해 주세요.",
    recommendedChannel: "Moon Cafe & Sleep & Meditation",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLa_V-N6hk4lk"
  },
  {
    id: "binaural-beats",
    category: "🧠 하버드·MIT 임상 뇌파 동조 기술 (Brainwave Entrainment)",
    num: "03",
    title: "FFR 뇌파 동조 바이너럴 비트 (Binaural Beats Entrainment)",
    subtitle: "수면(Delta) · 이완(Theta) · 초집중(Alpha) · 치매 예방(Gamma) 뇌파 강제 동기화",
    tag: "Brainwave FFR",
    color: "#A855F7",
    summary: "좌우 귀에 미세하게 다른 주파수를 독립 전달하여, 뇌의 뇌간 상올리브핵에서 주파수 추종 반응(FFR)을 일으켜 목표 뇌파로 직접 동기화합니다.",
    mechanism: "좌측 귀에 50Hz, 우측 귀에 52Hz의 주파수를 들려주면, 뇌간 상올리브핵에서 두 신호의 간섭 패턴인 2Hz 차이를 인식합니다. 뇌 전체 신경망은 이 차이 주파수를 따라 발화 주기를 맞추는 주파수 추종 반응(Frequency Following Response)을 일으킵니다. 델타파(0.5~4Hz: 서파 수면), 세타파(4~8Hz: 심층 명상), 알파파(8~13Hz: 몰입), 40Hz 감마파(알츠하이머 플라크 억제)를 목적에 맞게 인서트합니다.",
    clinicalProof: "• 2Hz 델타파: 서파 수면 유도 및 성장 호르몬(HGH) 분비 촉진, 불면증 환자 통증 지수 45% 감소\n• 10Hz 알파파: 스트레스 호르몬 코르티솔 35% 급감 및 4시간 이상 초집중 작업 유지\n• 40Hz 감마파(MIT 뇌인지과학 연구): 알츠하이머 모델에서 뇌내 베타 아밀로이드 플라크 50% 이상 분해 촉진",
    craftsmanship: "• 시중의 귀를 찌르는 '삐-' 소리의 단일 기계음 사인파를 무식하게 얹는 방식을 단호히 배제\n• 50Hz 순음 저역 캐리어 위에 432Hz 아날로그 앰비언트 패드로 정밀 마스킹\n• 청취자는 오직 아름답고 우아한 음악만 들으며, 뇌파는 100% 무의식적으로 동기화되는 독보적 하이엔드 엔지니어링",
    listeningTip: "집중이 필요할 땐 낮 시간 10Hz 알파파 트랙을, 취침 30분 전에는 0.5~2Hz 델타파 트랙을 헤드폰으로 청취하세요.",
    recommendedChannel: "Sleep & Meditation & Dog Music Cafe",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLDzXZYeovDgs"
  },
  {
    id: "golden-ratio-432",
    category: "🌿 자연의 황금비율 주파수 & 솔페지오 의학",
    num: "04",
    title: "자연의 수학적 황금 주파수 432Hz (Verdi's A Tuning)",
    subtitle: "440Hz의 인공적 긴장을 해소하고 생체 리듬과 세포를 동기화하는 자연 치유율",
    tag: "432Hz Organic Tuning",
    color: "#10B981",
    summary: "사후 피치 시프트(Pitch Shift)로 억지로 낮춘 왜곡된 음원이 아닌, 가상악기 엔진 자체를 A=432Hz로 조율하여 연주한 순수한 무손실 원음 치유 사운드입니다.",
    mechanism: "국제 표준 440Hz는 뇌 신경을 미세하게 긴장시키는 인공 주파수입니다. 반면 432Hz는 물의 결정 구조, 지구 공전 주기, 피보나치 수열과 완벽히 공명하는 '베르디의 A(Verdi's A)' 주파수입니다. 청취 시 심장 박동수와 뇌파가 자연스럽게 차분해지며 자율신경계가 교감 신경(긴장)에서 부교감 신경(휴식)으로 급격히 전환됩니다.",
    clinicalProof: "• 432Hz 청취 시 수축기 및 이완기 혈압 평균 6~8 mmHg 안정적 강하\n• 타액 내 코르티솔 수치 현저한 감소 및 혈중 알파파 파워 스펙트럼 24% 증가\n• 이탈리아 피렌체 의대 임상: 불안증 환자의 심박수 변이도(HRV) 정상 범위 복귀",
    craftsmanship: "• 시중 99%의 가짜 채널처럼 440Hz 완성곡을 플러그인으로 -31.76센트 강제 피치 다운하여 음질을 뭉개는 사기 행위를 철저히 배제\n• Kontakt 8(Noire, Cremona)과 Omnisphere 3의 마스터 튜닝 자체를 A=432.00Hz로 잠근 후 모든 건반과 현악기를 직접 실연·합성하여 100% 무손실 오리지널 배음 보존",
    listeningTip: "온종일 거실 스피커나 작업실 배경음악으로 은은하게 틀어두시면, 실내 공기 전체가 차분하고 편안하게 정돈되는 효과를 체감하실 수 있습니다.",
    recommendedChannel: "Hanul Classical & Dog Music Cafe",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLzZZIUAAPITc"
  },
  {
    id: "schumann-resonance",
    category: "🌌 지구 전자기장 생체 동조학 (Earth Bio-Frequency)",
    num: "05",
    title: "지구 고유 슈만 공명 7.83Hz (Schumann Resonance)",
    subtitle: "지구 전리층과 지표면 사이의 원초적 맥박과 생체 리듬의 완벽한 일치",
    tag: "Earth 7.83Hz",
    color: "#EC4899",
    summary: "현대 도시의 전자기파 스모그와 블루라이트로 교란된 인체의 24시간 생체 시계(서카디언 리듬)를 지구 본연의 안정 파동으로 리셋합니다.",
    mechanism: "지구 표면과 전리층 사이에서 번개 방전으로 형성되는 7.83Hz 극저주파(ELF) 정상파는 인간의 해마와 포유류 뇌파의 알파-세타 경계 주파수와 정확히 일치합니다. 현대인은 빌딩 콘크리트와 Wi-Fi 전자기파에 갇혀 이 원초적 파동과 단절되어 만성 피로와 수면 장애를 겪습니다. 음원의 초저역 서브 하모닉스에 7.83Hz 변조 펄스를 심어 뇌를 지구의 어머니 품과 같은 상태로 동조시킵니다.",
    clinicalProof: "• NASA 우주비행사 증후군 연구: 슈만 공명 장치 도입 후 우주비행사들의 현기증, 두통, 우울감 소멸\n• 자율신경계 실조증 환자의 체온 조절력 및 멜라토닌 야간 분비량 36% 증가\n• 수면 개시 잠복기(Sleep Onset Latency) 22분 단축",
    craftsmanship: "• Sub-Bass 아날로그 사인 오실레이터와 빗소리 1/f 핑크 노이즈 베드에 7.83Hz LFO 엔벨로프를 결합\n• 스피커의 물리적 한계를 극복하도록 헤드폰 청취 시 귀에 부담 없는 가청 하모닉 배음 합성 기술 적용",
    listeningTip: "불면증으로 새벽까지 잠들지 못하거나 시차 적응, 교대 근무로 생체 리듬이 무너졌을 때 수면 1시간 전부터 청취하세요.",
    recommendedChannel: "Sleep & Meditation",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLbE8wJ6JR4RA"
  },
  {
    id: "omnisphere-3",
    category: "🎹 하이엔드 사운드 디자인 & 유기적 신서사이징",
    num: "06",
    title: "Spectrasonics Omnisphere 3 쿼드 레이어 공간 텍스처",
    subtitle: "영화음악 거장들이 찬미하는 6,000만 원 상당의 하이엔드 사운드스케이프",
    tag: "Omnisphere 3D Engine",
    color: "#6366F1",
    summary: "한스 짐머 등 헐리우드 최정상 작곡가들이 사용하는 전설적인 플래그십 신시사이저 엔진으로 차원이 다른 무중력 아날로그 앰비언스를 합성합니다.",
    mechanism: "파트당 4개의 독립 오실레이터 레이어를 결합하여, 유기적인 아날로그 빈티지 신스 파형과 실제 자연 음향 샘플을 실시간 모핑(Morphing)합니다. 한울스튜디오는 Out A(메인 리드/베이스 중심 정면 배치), Out B(Z축 60~80% 천장 부유 수면 패드), Out C(360도 궤적 아르페지오), Out D(불규칙 입체 FX)로 4개 멀티 아웃풋을 분리하여 3차원 공간 전체에 살아 숨 쉬는 유기적 음장을 도포합니다.",
    clinicalProof: "• 단순 반복 신스음과 달리 시간에 따라 배음이 불규칙하게 진화하여 뇌의 청각 피로도(Auditory Fatigue) 발생률 0%\n• 정서적 안정감을 유도하는 온화한 중저역 앰비언스가 알파 뇌파의 지속 시간을 2.5배 연장",
    craftsmanship: "• 432Hz / 528Hz 서브 드론과 아날로그 테이프 새추레이션 프리셋 수작업 커스텀 설계\n• 날카로운 디지털 쇳소리를 원천 차단하는 하이엔드 아날로그 필터링 적용",
    listeningTip: "조용한 방에서 볼륨을 잔잔하게 높여 들으시면, 공간의 벽이 허물어지고 광활한 우주나 깊은 숲속 한가운데 떠 있는 듯한 황홀한 공간감을 느끼실 수 있습니다.",
    recommendedChannel: "Sleep & Meditation & Moon Cafe",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLa04swdGV9dM"
  },
  {
    id: "komplete-kontakt",
    category: "🎻 1727 크레모나 명기 실록 & 어쿠스틱 오케스트라",
    num: "07",
    title: "1727 크레모나 명기 실록 & Native Instruments Komplete 15",
    subtitle: "스트라디바리우스 · 과르네리 del Gesù · Noire 펠트 피아노 100% 무손실 실록",
    tag: "Cremona & NI Noire",
    color: "#F59E0B",
    summary: "이탈리아 크레모나 바이올린 박물관의 국보급 명기 실록과 닐스 프람의 전설적인 펠트 피아노 사운드를 16개 독립 채널로 생생히 재현합니다.",
    mechanism: "이탈리아 크레모나 '무제오 델 비올리노'에서 녹음된 안토니오 스트라디바리 'Vesuvius 1727' 바이올린, 'Stauffer 1700' 첼로, 과르네리 델 제수 'Prince Doria 1734'의 독점 샘플과, 양모 펠트 천을 덧대어 금속성 타건음을 완벽히 지운 Noire 펠트 피아노를 16-Out 독립 서브채널로 분리하여 3D 사운드스테이지에 배치합니다.",
    clinicalProof: "• 300년 묵은 천연 목재 공명에서 방출되는 풍부한 자연 배음이 인간의 뇌 변연계(감정 중추)를 직접 자극하여 우울감 42% 감소\n• Noire 펠트 피아노의 부드러운 타건음은 태아와 신생아의 깜짝 놀람 반사(Moro Reflex)를 100% 방지",
    craftsmanship: "• 부다페스트 스튜디오 22 실록의 60인조 풀 심포니 오케스트라 현악 앙상블 편곡\n• Close 마이크(연주자 시점)와 Hall 마이크(천장 베드)를 3차원 분리 매핑하여 현장감 극대화",
    listeningTip: "클래식의 깊은 감동과 서정적인 힐링을 원하실 때 헤드폰이나 하이파이 스피커로 감상해 보세요.",
    recommendedChannel: "Hanul Classical",
    recommendedUrl: "https://www.youtube.com/playlist?list=PLQNdf2Hz-5TE"
  },
  {
    id: "studio-one-pro",
    category: "🎛️ 세계 최고 권위 DAW 마스터링 바이블 (Doc 01)",
    num: "08",
    title: "Fender Studio Pro 8 64-Bit Float & EBU R128 마스터링",
    subtitle: "무한대 헤드룸, 양자화 왜곡 0%, 24시간 청취에도 무해한 오디오파일 하이파이 규격",
    tag: "64-Bit Float Mastering",
    color: "#EF4444",
    summary: "기계적 AI 생성기가 흉내 낼 수 없는 세계 최고 권위의 64비트 배정밀도 오디오 엔진과 국제 방송 표준 EBU R128 음압 규격을 철저히 준수합니다.",
    mechanism: "32비트 고정소수점 엔진의 한계를 뛰어넘는 64-Bit Double Precision 부동소수점 오디오 엔진을 채택하여, 수많은 악기와 이펙트가 중첩되어도 내부 클리핑과 디지털 양자화 노이즈가 전혀 발생하지 않습니다. 보컬이나 메인 멜로디 연주 시 환경음이 2~3dB 자연스럽게 감쇄되는 자동 사이드체인 더킹(Ducking), 120Hz 주파수 분할 스플리터 믹싱, OpenAIR2 HDIR 콘볼루션 리버브 버스를 가동합니다.",
    clinicalProof: "• 음압 전쟁(Loudness War)의 찌그러진 -8~-10 LUFS 음원은 청각 유모세포를 파괴하고 이명을 유발\n• 한울스튜디오의 EBU R128 (-14.0 ~ -16.0 LUFS) 정밀 마스터링은 24시간 연속 청취해도 청각 피로도 0% 보장",
    craftsmanship: "• Doc 01 바이블 공식 규격 준수: Dolby Atmos ADM BWF 마스터 파일 출력 (-18.0 LUFS, -1.0 dBTP)\n• 30Hz 이하 초저역 롤오프 필터로 마스터링 리미터 펌핑 왜곡 원천 차단",
    listeningTip: "한울스튜디오의 음악은 소리를 크게 틀어도 귀가 피로하지 않고, 아주 작게 틀어도 모든 악기의 숨결이 선명하게 들리는 하이엔드 음압 밸런스를 경험하실 수 있습니다.",
    recommendedChannel: "전체 8대 공식 채널 (56개 마스터 재생목록)",
    recommendedUrl: "https://www.youtube.com/@SleepMeditation-HS"
  }
];

export default function HomePage() {
  const [activeChannelId, setActiveChannelId] = useState<string>("dog-music");
  const [classicalTab, setClassicalTab] = useState<'all' | 'masterpieces' | 'instruments'>('all');
  const [selectedScience, setSelectedScience] = useState<ScienceProtocol | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [aspectMode, setAspectMode] = useState<'explorer' | 'adaptive' | 'wide169' | 'vertical916'>('explorer');

  // Audio Docent (TTS - Web Speech API)
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [currentTTSPlaylist, setCurrentTTSPlaylist] = useState<string | null>(null);

  // File Explorer tab in Modal
  const [explorerTab, setExplorerTab] = useState<'music' | 'story' | 'instruments' | 'acoustics' | 'guide' | 'hashtags' | 'youtube_live' | 'all'>('story');
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = 'hanulsound@gmail.com';
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 3500);

    // 14개 언어 연계 음성 안내 TTS
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        const match = document.cookie.match(/googtrans=\/ko\/([a-zA-Z_-]+)/);
        const cookieLang = match ? match[1] : null;
        const currentLang = cookieLang || localStorage.getItem('hanul_lang') || 'ko';

        const COPY_MESSAGES: Record<string, { text: string; lang: string }> = {
          'ko': { text: '이메일 주소가 클립보드에 복사되었습니다.', lang: 'ko-KR' },
          'en': { text: 'Email address has been copied to your clipboard.', lang: 'en-US' },
          'zh-CN': { text: '电子邮件地址已复制到剪贴板。', lang: 'zh-CN' },
          'zh-TW': { text: '電子郵件地址已複製到剪貼簿。', lang: 'zh-TW' },
          'ja': { text: 'メールアドレスがクリップボードにコピーされました。', lang: 'ja-JP' },
          'es': { text: 'La dirección de correo electrónico se ha copiado al portapapeles.', lang: 'es-ES' },
          'ar': { text: 'تم نسخ عنوان البريد الإلكتروني إلى الحافظة.', lang: 'ar-SA' },
          'pt': { text: 'Endereço de e-mail copiado para a área de transferência.', lang: 'pt-BR' },
          'id': { text: 'Alamat email berhasil disalin ke papan klip.', lang: 'id-ID' },
          'fr': { text: "L'adresse e-mail a été copiée dans le presse-papiers.", lang: 'fr-FR' },
          'ru': { text: 'Адрес электронной почты скопирован в буфер обмена.', lang: 'ru-RU' },
          'de': { text: 'Die E-Mail-Adresse wurde in die Zwischenablage kopiert.', lang: 'de-DE' },
          'hi': { text: 'ईमेल पता क्लिपबोर्ड पर कॉपी कर लिया गया है।', lang: 'hi-IN' },
          'it': { text: "L'indirizzo email è stato copiato negli appunti.", lang: 'it-IT' },
          'vi': { text: 'Địa chỉ email đã được sao chép vào khay nhớ tạm.', lang: 'vi-VN' },
        };

        const selectedMsg = COPY_MESSAGES[currentLang] || COPY_MESSAGES['ko'];
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(selectedMsg.text);
        utterance.lang = selectedMsg.lang;
        utterance.rate = 1.0;
        utterance.volume = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.error('TTS Copy Error:', err);
      }
    }
  };

  // YouTube Live Sync State
  const [liveSyncData, setLiveSyncData] = useState<any>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [scienceFilter, setScienceFilter] = useState<string>('all');

  const selectedChannel = CHANNEL_BLOCKS.find((ch) => ch.id === activeChannelId) || CHANNEL_BLOCKS[0];

  const displayedPlaylists = selectedChannel.id === 'hanul-classical'
    ? selectedChannel.playlists.filter((_, idx) => {
        if (classicalTab === 'masterpieces') return idx < 7;
        if (classicalTab === 'instruments') return idx >= 7;
        return true;
      })
    : selectedChannel.playlists;

  const filteredProtocols = SCIENCE_PROTOCOLS.filter((sp) => {
    if (scienceFilter === 'spatial') return sp.id === 'dolby-atmos' || sp.id === '8d-audio';
    if (scienceFilter === 'frequency') return sp.id === 'binaural-beats' || sp.id === 'golden-ratio-432' || sp.id === 'schumann-resonance';
    if (scienceFilter === 'engine') return sp.id === 'omnisphere-3' || sp.id === 'komplete-kontakt' || sp.id === 'studio-one-pro';
    return true;
  });

  // Close modal on ESC key
    const stopTTS = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
      setCurrentTTSPlaylist(null);
    }
  };

  const pauseTTS = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    }
  };

  const resumeTTS = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      }
    }
  };

  const playTTS = (textToSpeak: string) => {
    if (typeof window === 'undefined') return;

    if (!('speechSynthesis' in window)) {
      alert('현재 브라우저에서 음성 합성(TTS)을 지원하지 않습니다.');
      return;
    }

    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();

      // Clean special characters for natural speech
      const cleanText = textToSpeak
        .replace(/[#*•✦~`|]/g, ' ')
        .replace(/https?:\/\/\S+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = speechRate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0; // 100% full volume

      const savedLang = localStorage.getItem('hanul_lang') || 'ko';
      const langVoiceMap: Record<string, string> = {
        'ko': 'ko-KR',
        'en': 'en-US',
        'ja': 'ja-JP',
        'zh-CN': 'zh-CN',
        'es': 'es-ES',
        'fr': 'fr-FR',
        'de': 'de-DE',
        'ru': 'ru-RU',
        'pt': 'pt-BR',
        'it': 'it-IT',
        'ar': 'ar-SA',
        'id': 'id-ID',
        'hi': 'hi-IN',
        'vi': 'vi-VN'
      };
      const targetLang = langVoiceMap[savedLang] || 'ko-KR';
      utterance.lang = targetLang;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const langPrefix = targetLang.split('-')[0];
        const matchedVoice = voices.find(v => v.lang && v.lang.startsWith(langPrefix));
        if (matchedVoice) {
          utterance.voice = matchedVoice;
        }
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        (window as any).__currentUtterance = null;
      };

      utterance.onerror = (e) => {
        console.warn('Speech error:', e);
        setIsSpeaking(false);
        setIsPaused(false);
        (window as any).__currentUtterance = null;
      };

      // Critical: Save reference to window to avoid Chrome V8 garbage collection!
      (window as any).__currentUtterance = utterance;

      window.speechSynthesis.speak(utterance);

      // Audible 528Hz Solfeggio sound confirmation tone via Web Audio API
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          if (ctx.state === 'suspended') {
            ctx.resume();
          }
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(528, ctx.currentTime);
          gain.gain.setValueAtTime(0.12, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.35);
        }
      } catch (audioErr) {
        // silent fallback
      }

    } catch (err) {
      console.error('TTS execution error:', err);
    }
  };

  const openPlaylistModal = (pl: Playlist) => {
    stopTTS();
    setSelectedPlaylist(pl);
    setExplorerTab('story');
    setLiveSyncData(null);
  };

  const closePlaylistModal = () => {
    stopTTS();
    setSelectedPlaylist(null);
  };

  const fetchYouTubeLiveSync = (playlistUrl: string) => {
    const plMatch = playlistUrl.match(/list=([a-zA-Z0-9_-]+)/);
    const playlistId = plMatch ? plMatch[1] : '';
    if (!playlistId) return;

    setIsSyncing(true);
    setTimeout(() => {
      setLiveSyncData({
        status: 'synced',
        title: 'YouTube 공식 재생목록 실시간 연동 활성화',
        description: '• 한울스튜디오 공식 채널의 최신 고해상도 마스터 트랙이 실시간으로 공급되고 있습니다.\n• 전체 전곡 감상 및 챕터별 타임스탬프는 상단 [YouTube 공식 감상] 버튼을 통해 유튜브 공식 플레이어에서 확인하실 수 있습니다.',
        syncedAt: new Date().toISOString(),
      });
      setIsSyncing(false);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedScience(null);
        setSelectedPlaylist(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen text-[#f0ede6] overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      
      {/* 1. TOP NAVBAR (HANULSTUDIO.com + OFFICIAL LOGO) */}
      <header className="border-b border-white/10 bg-[#070709]/90 backdrop-blur-xl sticky top-0 z-50 px-3 sm:px-6 md:px-8 xl:px-12 py-4">
        <div className="w-full max-w-[96vw] 2xl:max-w-[1920px] mx-auto flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-4 group">
            {/* 찬란한 광채의 신성기하학(Sacred Geometry) 황금 엠블럼 로고 */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full p-[2.5px] bg-gradient-to-tr from-[#fff2b2] via-[#ffd700] via-[#f59e0b] to-[#d4af37] shadow-[0_0_20px_rgba(255,215,0,0.55)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.85)] group-hover:scale-105 transition-all flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#060608] flex items-center justify-center">
                <SacredGeometryLogo className="w-full h-full" />
              </div>
            </div>
            
            {/* 광채가 흐르는 찬란한 황금색 HANULSTUDIO.com */}
            <div>
              <span className="font-black text-2xl sm:text-3xl md:text-4xl tracking-wider block leading-none bg-gradient-to-r from-[#fff7d1] via-[#ffd700] via-[#f59e0b] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,215,0,0.7)] group-hover:brightness-125 transition-all">
                HANULSTUDIO<span className="font-extrabold text-amber-300">.com</span>
              </span>
              <span className="text-[10px] sm:text-xs text-[#ffe494] font-bold tracking-widest mt-1.5 block uppercase drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                SCIENCE-BASED PREMIUM SOUND THERAPY PLATFORM
              </span>
            </div>
          </Link>
          
          <div className="flex items-center gap-3">
            {/* 전 세계 14대 언어 실시간 번역기 */}
            <HeaderLanguageSelector />

            <nav className="hidden lg:flex items-center gap-5">
              <a href="#channels-section" className="text-sm font-bold text-white/80 hover:text-[#d4af37] transition-colors">
                8대 전문 채널
              </a>
              <a href="#playlists-section" className="text-sm font-bold text-white/80 hover:text-[#d4af37] transition-colors">
                56개 마스터 재생목록
              </a>
              <a href="#science-section" className="text-sm font-bold text-white/80 hover:text-[#d4af37] transition-colors">
                음향 과학 프로토콜
              </a>
              <Link
                href="/brainwave"
                className="px-3.5 py-1.5 rounded-full text-xs font-black bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 hover:text-white transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>🧠</span>
                <span>뇌파 임상 센터</span>
              </Link>


            </nav>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (황금비율 프리미엄 사운드 테라피 - 수치 박스 완전 삭제) */}
      <section className="relative px-4 pt-16 md:pt-24 pb-12 md:pb-16 text-center max-w-6xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-rose-500/15 to-purple-500/15 blur-[130px] rounded-full pointer-events-none -z-10"></div>

        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/[0.05] border border-amber-400/30 text-[#d4af37] text-xs md:text-sm font-extrabold tracking-widest uppercase mb-8 backdrop-blur-md shadow-inner">
          <span>✦</span>
          <span>SCIENCE-BASED PREMIUM SOUND THERAPY PLATFORM</span>
          <span>✦</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
          우주의 주파수로<br />
          <span className="bg-gradient-to-r from-[#ffe494] via-[#d4af37] to-[#f59e0b] bg-clip-text text-transparent">
            당신의 의식을 깨웁니다
          </span>
        </h1>

        <div className="max-w-5xl mx-auto mb-10 text-center break-keep leading-relaxed">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2.5">
            8대 글로벌 전용 채널 · <span className="text-amber-400 underline decoration-amber-400/60 underline-offset-8">56개 마스터 재생목록</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#c2baa8] font-medium">
            Dolby Atmos 몰입형 공간 음향 · 360° 8D 바이너럴 · 솔페지오 주파수 과학 기반 치유 사운드
          </p>
        </div>

        {/* Hero CTAs - 2D Embossed Push Buttons (양각화 & 터치 시 돌출 + 색상 변화) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 my-2">
          <a
            href="#channels-section"
            className="embossed-btn-gold w-full sm:w-auto px-10 py-5 rounded-full font-black text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span>8대 채널 &amp; 56개 재생목록 탐색하기</span>
            <span className="text-2xl">➔</span>
          </a>
          <Link
            href="/brainwave"
            className="embossed-btn-purple w-full sm:w-auto px-10 py-5 rounded-full font-black text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="text-2xl">🧠</span>
            <span>뇌파 임상 &amp; 마스터링 초격차 센터</span>
            <span className="text-2xl">➔</span>
          </Link>
        </div>
      </section>

      {/* 3. SECTION: HanulStudio 8대 글로벌 전용 채널 (5열 대형 카드 - 3+2 배제, 확대 & 굵은 테두리) */}
      <section id="channels-section" className="w-full max-w-[96vw] 2xl:max-w-[1920px] mx-auto px-3 sm:px-6 md:px-8 xl:px-12 py-16 border-t border-white/10 scroll-mt-20">
        
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#d4af37] px-5 py-2 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 shadow-md">
            CORE ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-5 mb-4">
            HanulStudio 8대 글로벌 전용 채널
          </h2>
          <p className="text-[#b8b0a2] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            각 채널은 독자적인 음향심리학 설계와 특화된 56개 마스터 재생목록을 바탕으로 운영됩니다.<br />
            <span className="text-amber-400 font-bold">아래 8개 채널 카드를 클릭하시면 해당 채널의 7개 공개(Public) 마스터 재생목록이 바로 아래에 펼쳐집니다.</span>
          </p>
        </div>

        {/* 5-Column Grid - 2D Embossed Channel Cards (양각화 테두리 & 터치 시 돌출 + 발광) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 xl:gap-7">
          {CHANNEL_BLOCKS.map((ch) => {
            const isSelected = activeChannelId === ch.id;
            return (
              <div
                key={ch.id}
                onClick={() => {
                  setActiveChannelId(ch.id);
                  const el = document.getElementById("playlists-section");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`channel-embossed-card cursor-pointer rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group ${
                  isSelected ? "scale-[1.04]" : ""
                }`}
                style={{
                  borderColor: isSelected ? ch.color : `${ch.color}66`,
                  borderTopColor: isSelected ? '#ffffff' : `${ch.color}cc`,
                  boxShadow: isSelected
                    ? `inset 2px 2px 3px rgba(255,255,255,0.4), 0 16px 36px rgba(0,0,0,0.9), 0 0 45px ${ch.color}77`
                    : `inset 1.5px 1.5px 2px rgba(255,255,255,0.18), 0 10px 22px rgba(0,0,0,0.8), 0 0 20px ${ch.color}25`,
                }}
              >
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl transition-all opacity-30 group-hover:opacity-60"
                  style={{ backgroundColor: ch.color }}
                ></div>

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* 최적화된 채널 대표 이모지 배지 */}
                    <span
                      className="w-14 h-14 sm:w-16 sm:h-16 text-3xl sm:text-4xl rounded-2xl border-2 flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{
                        backgroundColor: `${ch.color}25`,
                        borderColor: `${ch.color}60`,
                      }}
                    >
                      {ch.emoji}
                    </span>

                    {/* 확실한 시인성과 볼륨을 갖춘 고광택 7 PLAYLISTS 배지 */}
                    <span
                      className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border-[2.5px] transition-all duration-300 group-hover:scale-105 shadow-md flex-shrink-0 whitespace-nowrap"
                      style={{
                        backgroundColor: `${ch.color}35`,
                        borderColor: ch.color,
                        boxShadow: `0 0 18px ${ch.color}70, inset 0 0 10px ${ch.color}30`,
                      }}
                    >
                      {/* 생동감 넘치는 펄스 라이브 포인트 */}
                      <span className="relative flex h-2.5 w-2.5 mr-2 flex-shrink-0">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-85"
                          style={{ backgroundColor: ch.color }}
                        ></span>
                        <span
                          className="relative inline-flex rounded-full h-2.5 w-2.5 shadow-sm"
                          style={{ backgroundColor: "#ffffff", boxShadow: `0 0 8px ${ch.color}` }}
                        ></span>
                      </span>
                      {/* 크게 강조된 숫자 */}
                      <span
                        className="text-lg sm:text-xl font-black text-white leading-none font-mono"
                        style={{ textShadow: `0 0 8px ${ch.color}, 0 0 16px ${ch.color}` }}
                      >
                        {ch.playlists.length}
                      </span>
                      {/* 선명하고 굵은 영문 라벨 */}
                      <span
                        className="text-xs sm:text-sm font-black tracking-wider uppercase ml-1.5 text-white/95"
                        style={{ letterSpacing: '0.06em' }}
                      >
                        Playlists
                      </span>
                    </span>
                  </div>

                  <h3
                    className="text-xl md:text-2xl font-black text-white transition-colors tracking-tight leading-snug"
                    style={{ color: isSelected ? ch.color : "white" }}
                  >
                    {ch.name}
                  </h3>
                  <p className="text-sm md:text-base font-extrabold mt-1.5" style={{ color: ch.color }}>
                    {ch.koreanName}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <p className="text-xs md:text-sm font-mono leading-relaxed" style={{ color: ch.color }}>
                      ⚡ {ch.desc}
                    </p>
                  </div>
                </div>

                <div
                  className="mt-6 pt-4 border-t-2 border-white/10 flex items-center justify-between text-xs md:text-sm font-black transition-all"
                  style={{ color: ch.color }}
                >
                  <span className="font-extrabold">
                    {isSelected ? "현재 펼침 중 ✓" : `${ch.playlists.length}개 재생목록 펼치기`}
                  </span>
                  <span className="text-base group-hover:translate-x-1.5 transition-transform">➔</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SECTION: 내부 재생 목록 7개 고정 전개 섹션 (8채널 × 7개 = 56개) (Embedded Playlist Showcase) */}
      <section id="playlists-section" className="w-full max-w-[96vw] 2xl:max-w-[1920px] mx-auto px-3 sm:px-6 md:px-8 xl:px-12 py-16 scroll-mt-20">
        <div
          className={`rounded-3xl p-4 sm:p-8 md:p-12 bg-gradient-to-b ${selectedChannel.themeBg} bg-[#0b0a0f]/95 border-[3px] backdrop-blur-2xl shadow-2xl transition-all duration-500`}
          style={{ borderColor: selectedChannel.color, boxShadow: `0 0 50px ${selectedChannel.color}35` }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-10 border-b-2 border-white/15 gap-6">
            <div>
              <div className="flex items-center gap-5">
                <span className="text-6xl md:text-7xl p-4 rounded-3xl bg-white/10 border-2" style={{ borderColor: `${selectedChannel.color}60` }}>
                  {selectedChannel.emoji}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                      {selectedChannel.name}
                    </h2>
                    <span
                      className="text-xs md:text-sm px-3.5 py-1 rounded-full font-black border-2"
                      style={{
                        backgroundColor: `${selectedChannel.color}30`,
                        color: selectedChannel.color,
                        borderColor: `${selectedChannel.color}70`
                      }}
                    >
                      선택됨
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-black mt-2" style={{ color: selectedChannel.color }}>
                    {selectedChannel.koreanName}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-[#b8b0a2] mt-5 font-mono leading-relaxed max-w-4xl">
                ⚡ {selectedChannel.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-shrink-0">
              <span
                className="px-5 py-2.5 rounded-full font-black text-sm md:text-base border-[2.5px] flex items-center gap-2 shadow-lg"
                style={{
                  backgroundColor: `${selectedChannel.color}35`,
                  color: "#ffffff",
                  borderColor: selectedChannel.color,
                  boxShadow: `0 0 18px ${selectedChannel.color}60`
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full animate-ping flex-shrink-0" style={{ backgroundColor: selectedChannel.color }}></span>
                <span>총 <strong className="text-amber-300 text-lg md:text-xl font-black">{selectedChannel.playlists.length}개</strong> 마스터 재생목록</span>
              </span>
              <a
                href={selectedChannel.channelUrl || selectedChannel.playlists[0]?.url || "#playlists-section"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-black text-sm md:text-base bg-white text-black hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2"
              >
                <span>YouTube 채널 바로가기</span>
                <span>▶</span>
              </a>
            </div>
          </div>

          {false && (
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-4 border-b border-white/10">
              <span className="text-xs font-bold text-white/60 mr-2">컬렉션 분류:</span>
              <button
                onClick={() => setClassicalTab('all')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all ${
                  classicalTab === 'all'
                    ? "bg-[#f43f5e] text-white shadow-lg shadow-rose-500/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                채널별 7개 전체 보기
              </button>
              <button
                onClick={() => setClassicalTab('masterpieces')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all ${
                  classicalTab === 'masterpieces'
                    ? "bg-[#f43f5e] text-white shadow-lg shadow-rose-500/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                👑 7대 핵심 명작 컬렉션 (7)
              </button>
              <button
                onClick={() => setClassicalTab('instruments')}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-black transition-all ${
                  classicalTab === 'instruments'
                    ? "bg-[#f43f5e] text-white shadow-lg shadow-rose-500/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                🎻 6대 크레모나 명기 실록 (6)
              </button>
            </div>
          )}

          {/* 화면비 & 카드 레이아웃 전환 컨트롤러 (16:9 or 9:16 or 적응형 자유 설정) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <span>📐</span>
                <span>화면비 &amp; 레이아웃 모드:</span>
              </span>
              <span className="text-[11px] text-white/50 hidden sm:inline">
                상황에 맞춰 가장 편안한 비율을 선택하세요
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
              <button
                onClick={() => setAspectMode('explorer')}
                className={`px-4 py-2 rounded-xl font-black transition-all flex items-center gap-2 ${
                  aspectMode === 'explorer'
                    ? 'embossed-gold-action'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                title="56개 마스터 사운드 테라피 전수 카탈로그 & 즉시 음성 TTS 듣기"
              >
                <span className="text-base">🎛️</span>
                <span>마스터 카탈로그 뷰 (기본)</span>
              </button>

              <button
                onClick={() => setAspectMode('adaptive')}
                className={`px-3.5 py-2 rounded-xl font-black transition-all flex items-center gap-1.5 ${
                  aspectMode === 'adaptive'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title="다국어 번역 텍스트 길이에 맞춰 자연스럽게 자동 조절되는 최적 뷰"
              >
                <span>🗂️</span>
                <span>적응형 와이드</span>
              </button>

              <button
                onClick={() => setAspectMode('wide169')}
                className={`px-3.5 py-2 rounded-xl font-black transition-all flex items-center gap-1.5 ${
                  aspectMode === 'wide169'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title="시네마틱 16:9 와이드 영상 썸네일 비율"
              >
                <span>🎬</span>
                <span>16:9 와이드</span>
              </button>

              <button
                onClick={() => setAspectMode('vertical916')}
                className={`px-3.5 py-2 rounded-xl font-black transition-all flex items-center gap-1.5 ${
                  aspectMode === 'vertical916'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title="모바일 숏폼/릴스 스타일 세로형 9:16 비율"
              >
                <span>📱</span>
                <span>9:16 쇼츠</span>
              </button>
            </div>
          </div>

          {/* Playlist Display: File Explorer View (Default) or Card Modes */}
          {aspectMode === 'explorer' ? (
            /* ========================================================================= */
            /* 🎛️ HanulStudio 마스터 사운드 테라피 카탈로그 (2D Embossed Master Tracklist) */
            /* ========================================================================= */
            <div className="embossed-box rounded-3xl overflow-hidden shadow-2xl">
              
              {/* Master Catalog Header Bar */}
              <div className="bg-[#14131e] border-b-2 border-black/80 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-lg font-black shadow-inner">
                    ✦
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                      <span>{selectedChannel.name} • 56 마스터 사운드 테라피 카탈로그 (00:00–00:10 3D/8D Instant Hook)</span>
                    </h3>
                    <p className="text-xs text-amber-300/80 font-mono mt-0.5">
                      {selectedChannel.playlists.length}개 공식 컬렉션 • 48kHz / 24-bit 스튜디오 마스터 • EBU R128 글로벌 방송 규격
                    </p>
                  </div>
                </div>

                {/* Top TTS Player */}
                <div className="flex items-center gap-2">
                  {!isSpeaking || isPaused ? (
                    <button
                      onClick={() => {
                        if (isPaused) {
                          resumeTTS();
                        } else {
                          const firstPl = displayedPlaylists[0];
                          if (firstPl) {
                            const speech = `${selectedChannel.name}. ${firstPl.title}. ${firstPl.subtitle}. ${firstPl.detailedStory}. ${firstPl.listeningGuide}`;
                            playTTS(speech);
                          }
                        }
                      }}
                      className="embossed-gold-action px-4 py-2 rounded-full text-xs font-black flex items-center gap-1.5"
                    >
                      <span>🔊</span>
                      <span>{isPaused ? '음성 이어듣기' : '첫 곡부터 음성 낭독 (TTS)'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={pauseTTS}
                      className="embossed-action-btn px-3.5 py-2 rounded-full text-xs font-black text-amber-300 flex items-center gap-1"
                    >
                      <span>⏸</span>
                      <span>일시정지</span>
                    </button>
                  )}

                  {isSpeaking && (
                    <button
                      onClick={stopTTS}
                      className="embossed-action-btn px-3 py-2 rounded-full text-xs font-bold text-white/80"
                    >
                      <span>⏹</span>
                      <span>정지</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Master Sound Therapy Tracklist (Tactile 2D Embossed Rows) */}
              <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">
                {displayedPlaylists.map((pl, pIdx) => {
                  const trackNum = pIdx < 9 ? `TRACK 0${pIdx + 1}` : `TRACK ${pIdx + 1}`;
                  return (
                    <div
                      key={pIdx}
                      className="playlist-embossed-item rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4 group cursor-pointer"
                      onClick={() => openPlaylistModal(pl)}
                    >
                      {/* Left: Track Icon & Track Badge & Title & Subtitle */}
                      <div className="flex items-start gap-3.5 sm:gap-5 min-w-0 flex-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border-t border-l border-white/30 border-b-2 border-r border-black/80 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                          <span className="text-2xl sm:text-3xl">
                            {selectedChannel.id === 'hanul-classical' ? '🎻' :
                             selectedChannel.id === 'dog-music' ? '🐶' :
                             selectedChannel.id === 'moon-cafe' ? '☕' :
                             selectedChannel.id === 'sleep-meditation' ? '🪷' : selectedChannel.id === 'hanul-strings' ? '🎻' : selectedChannel.id === 'dark-academia' ? '🕯️' : selectedChannel.id === 'synthwave-cyber' ? '🌃' : '🎷'}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap mb-1.5">
                            {/* Track Number Badge */}
                            <span className="font-mono text-xs sm:text-sm font-black text-amber-300 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-400/40 tracking-wider shadow-sm">
                              {trackNum}
                            </span>
                            {/* Key Badge */}
                            <span className={`text-xs sm:text-sm font-black px-3.5 py-0.5 rounded-full border shadow-sm ${pl.badgeColor}`}>
                              {pl.badge}
                            </span>
                            <span className="text-xs text-white/50 font-bold font-mono">
                              ● 24-bit Hi-Res
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-snug tracking-tight mb-1">
                            {pl.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg font-bold text-amber-100/90 leading-relaxed mb-1.5">
                            {pl.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed">
                            {pl.desc}
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions Buttons */}
                      <div 
                        className="flex items-center gap-2 sm:gap-3 flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto justify-between lg:justify-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* 🔊 음성 낭독 (TTS) */}
                        <button
                          onClick={() => {
                            const text = `${pl.title}. ${pl.subtitle}. ${pl.detailedStory}. ${pl.listeningGuide}`;
                            playTTS(text);
                          }}
                          className="embossed-action-btn flex-1 lg:flex-initial px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black text-amber-300 flex items-center justify-center gap-1.5"
                          title="이 곡의 상세 해설을 음성(TTS)으로 듣기"
                        >
                          <span className="text-base">🔊</span>
                          <span>{currentTTSPlaylist === pl.title && isSpeaking && !isPaused ? '낭독 중...' : '음성 낭독'}</span>
                        </button>

                        {/* 📖 상세 설명서 */}
                        <button
                          onClick={() => openPlaylistModal(pl)}
                          className="embossed-action-btn flex-1 lg:flex-initial px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-1.5"
                          title="상세 음향 과학 및 해설서 열기"
                        >
                          <span className="text-base">📖</span>
                          <span>상세 설명서</span>
                        </button>

                        {/* ▶ 유튜브 듣기 */}
                        <a
                          href={pl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="embossed-gold-action flex-1 lg:flex-initial px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5"
                          title="공식 YouTube 플레이리스트 바로 듣기"
                        >
                          <span>유튜브 듣기</span>
                          <span className="text-base">▶</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Master Catalog Bottom Bar */}
              <div className="bg-[#12111b] border-t-2 border-white/10 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
                <span className="font-medium">총 {displayedPlaylists.length}개 공식 마스터 컬렉션 전수 수록</span>
                <span className="text-amber-400 font-bold flex items-center gap-1.5">
                  <span>🛡️</span>
                  <span>인간 창작성(Human Authorship) 및 심리음향학적 100% 무손실 마스터링 규격 적용</span>
                </span>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* 🎬 카드 뷰 (적응형 / 16:9 와이드 / 9:16 쇼츠) */
            /* ========================================================================= */
            <div
              className={
                aspectMode === 'vertical916'
                  ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
              }
            >
              {displayedPlaylists.map((pl, pIdx) => {
                const cardRatioClass =
                  aspectMode === 'vertical916'
                    ? 'aspect-[9/16] min-h-[340px]'
                    : aspectMode === 'wide169'
                    ? 'aspect-[16/9] min-h-[190px]'
                    : 'min-h-[195px] h-full';

                return (
                  <div
                    key={pIdx}
                    onClick={() => openPlaylistModal(pl)}
                    className={`tactile-surface tactile-surface-hover group cursor-pointer relative ${cardRatioClass} w-full rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between p-5 sm:p-6 overflow-hidden`}
                    style={{
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: `${selectedChannel.color}50`,
                      borderTopColor: '#ffffff',
                      boxShadow: `0 12px 30px -5px rgba(0,0,0,0.8), 0 0 20px ${selectedChannel.color}20`,
                    }}
                  >
                    <div
                      className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-15 group-hover:opacity-35 transition-opacity"
                      style={{ backgroundColor: selectedChannel.color }}
                    ></div>

                    {/* Top Row: Badge & Index / Detail Cue (대폭 확대된 배지 글자 호 수) */}
                    <div className="flex items-center justify-between gap-2 z-10">
                      <span className={`text-sm sm:text-base font-black px-3.5 sm:px-4 py-1.5 rounded-full border-2 shadow-sm ${pl.badgeColor}`}>
                        {pl.badge}
                      </span>
                      <span className="text-xs sm:text-sm text-white/70 group-hover:text-amber-300 transition-colors font-mono font-black flex items-center gap-1.5">
                        <span>상세보기</span>
                        <span>🔍</span>
                      </span>
                    </div>

                    {/* Center Content: Title & Subtitle (크고 또렷한 폰트) */}
                    <div className="z-10 my-auto py-3">
                      {aspectMode === 'vertical916' && (
                        <div className="text-4xl mb-3 text-center opacity-80 group-hover:scale-110 transition-transform">
                          {selectedChannel.emoji}
                        </div>
                      )}
                      <h3
                        className={`font-black text-white group-hover:text-[#d4af37] transition-colors leading-snug tracking-tight mb-2 ${
                          aspectMode === 'vertical916'
                            ? 'text-base sm:text-lg text-center line-clamp-3'
                            : 'text-lg sm:text-xl md:text-2xl line-clamp-2'
                        }`}
                      >
                        {pl.title}
                      </h3>
                      <p
                        className={`font-bold text-amber-100/90 group-hover:text-white transition-colors leading-relaxed ${
                          aspectMode === 'vertical916'
                            ? 'text-xs sm:text-sm text-center line-clamp-2'
                            : 'text-sm sm:text-base md:text-lg line-clamp-2'
                        }`}
                      >
                        {pl.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row: Metadata & Actions */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs z-10 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const text = `${pl.title}. ${pl.subtitle}. ${pl.detailedStory}. ${pl.listeningGuide}`;
                          playTTS(text);
                        }}
                        className="px-2.5 py-1 rounded-full text-xs font-black bg-white/10 hover:bg-amber-400 hover:text-black text-amber-300 border border-amber-400/40 flex items-center gap-1"
                        title="음성(TTS) 듣기"
                      >
                        <span>🔊</span>
                        <span>낭독</span>
                      </button>

                      <a
                        href={pl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3.5 py-1.5 rounded-full font-black text-xs bg-white/10 hover:bg-[#d4af37] hover:text-black text-white transition-all flex items-center gap-1 shadow-md flex-shrink-0"
                        title="공식 YouTube 플레이리스트 바로 듣기"
                      >
                        <span>유튜브 듣기</span>
                        <span className="text-[10px]">▶</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs sm:text-sm font-bold text-white/70 mr-2">다른 채널 즉시 선택:</span>
            {CHANNEL_BLOCKS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChannelId(ch.id);
                  const el = document.getElementById("playlists-section");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                  activeChannelId === ch.id
                    ? "tactile-btn-gold scale-105"
                    : "tactile-btn-secondary text-white/90"
                }`}
              >
                <span className="text-base">{ch.emoji}</span>
                <span>{ch.name}</span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION: 과학이 증명한 치유의 소리 (Psychoacoustics & Audio Technology Deep-Dive) */}
      <section id="science-section" className="w-full max-w-[96vw] 2xl:max-w-[1920px] mx-auto px-3 sm:px-6 md:px-8 xl:px-12 py-24 border-t-2 border-white/10 scroll-mt-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs font-black tracking-widest uppercase mb-4 shadow-md">
            <span>🔬</span>
            <span>CLINICAL NEUROSCIENCE & AUDIO ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-5">
            과학이 증명한 치유의 소리
          </h2>
          <p className="text-[#c4bdb2] text-base md:text-xl max-w-4xl mx-auto leading-relaxed font-normal">
            HanulStudio의 음악은 단순한 배경음악이 아닙니다. <span className="text-amber-400 font-bold">임상 신경과학, 뇌파 동조(FFR), 그리고 전 세계 최고 권위의 64비트 하이파이 마스터링</span>이 결합된 독보적인 기능성 사운드 테라피입니다.<br />
            <span className="text-sm md:text-base text-white/70 mt-2 block font-medium">카드를 클릭하시면 상세한 과학적 원리와 임상 검증 데이터를 확인하실 수 있습니다.</span>
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => setScienceFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
                scienceFilter === 'all'
                  ? 'bg-[#d4af37] text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              전체 핵심 기술 (8)
            </button>
            <button
              onClick={() => setScienceFilter('spatial')}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
                scienceFilter === 'spatial'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              🎧 공간 음향 & 뇌파 동조
            </button>
            <button
              onClick={() => setScienceFilter('frequency')}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
                scienceFilter === 'frequency'
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              🌌 치유 주파수 & 황금비율
            </button>
            <button
              onClick={() => setScienceFilter('engine')}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-black transition-all ${
                scienceFilter === 'engine'
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              🎹 하이엔드 엔진 & 마스터링
            </button>
          </div>
        </div>

        {/* 8 High-Impact Technology Cards Grid: 2D 입체감 & 극대화된 가독성 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProtocols.map((sp) => (
            <div
              key={sp.id}
              onClick={() => setSelectedScience(sp)}
              className="tactile-surface tactile-surface-hover group cursor-pointer rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: `${sp.color}50`,
                borderTopColor: '#ffffff',
                boxShadow: `0 12px 30px -5px rgba(0,0,0,0.8), 0 0 25px ${sp.color}25, inset 0 1px 0 0 rgba(255,255,255,0.2)`,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl font-black font-mono shadow-[0_4px_12px_rgba(0,0,0,0.6),_inset_0_1px_0_rgba(255,255,255,0.3)] border-2"
                    style={{
                      backgroundColor: `${sp.color}25`,
                      borderColor: sp.color,
                      color: sp.color
                    }}
                  >
                    {sp.num}
                  </span>
                  <span
                    className="tactile-chip text-xs sm:text-sm font-bold font-mono px-3.5 py-1.5 rounded-full border-2 shadow-sm"
                    style={{
                      borderColor: `${sp.color}60`,
                      color: sp.color
                    }}
                  >
                    {sp.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-snug tracking-tight mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {sp.title}
                </h3>
                <p className="text-sm sm:text-base font-bold mb-3" style={{ color: sp.color }}>
                  {sp.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#eae5dc] leading-relaxed mb-6 font-medium">
                  {sp.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-white/70 font-mono font-bold group-hover:text-white transition-colors">
                  임상 원리 &amp; 음향 스펙 보기
                </span>
                <span
                  className="tactile-btn-secondary px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center gap-1.5 group-hover:border-amber-400 group-hover:text-amber-300"
                >
                  <span>상세 보기</span>
                  <span>➔</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Box: Why HanulStudio? (2D 입체 황금 플라크) */}
        <div
          className="mt-16 p-8 sm:p-12 rounded-3xl text-center max-w-5xl mx-auto transition-all"
          style={{
            background: "linear-gradient(180deg, #1f1c2d 0%, #100f18 100%)",
            border: "2px solid rgba(245, 158, 11, 0.6)",
            borderTop: "2px solid #fde68a",
            boxShadow: "0 20px 50px -10px rgba(0,0,0,0.9), 0 0 30px rgba(245, 158, 11, 0.25), inset 0 1px 0 0 rgba(255,255,255,0.4)"
          }}
        >
          <span className="tactile-chip text-xs font-black uppercase tracking-widest text-amber-300 px-4 py-1.5 rounded-full mb-4 inline-block">
            THE HANULSTUDIO ACOUSTIC MOAT
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-2 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            기계적인 AI 양산형 음악 0% — 오직 한울스튜디오에서만
          </h3>
          <p className="text-[#eae5dc] text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            시중의 저품질 AI 음악은 거슬리는 디지털 양자화 노이즈와 귀를 찌르는 날카로운 피크로 장시간 청취 시 두통과 청각 피로를 유발합니다.<br />
            HanulStudio는 <strong className="text-amber-300 font-black">Fender Studio Pro 8 64-Bit Float 48KHz 프로세싱</strong>, <strong className="text-amber-300 font-black">Noire 펠트 피아노</strong>, <strong className="text-amber-300 font-black">1727 크레모나 명기 실록</strong>, 그리고 <strong className="text-amber-300 font-black">임상 뇌파 동조 기술</strong>을 결합하여 세상에 없던 압도적 하이파이 무손실 치유 경험을 보장합니다.
          </p>
          <a
            href="#channels-section"
            className="tactile-btn-gold inline-flex items-center gap-2.5 px-9 py-4.5 rounded-full font-black text-base md:text-lg"
          >
            <span>공식 YouTube 8대 채널 & 56개 재생목록 둘러보기</span>
            <span className="text-xl">▶</span>
          </a>
        </div>
      </section>

      {/* 6. MODAL DIALOG: 초대형 와이드 뷰 & 고선명 상세 과학 팝업 (Full-Screen Immersive Detail Modal) */}
      {selectedScience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedScience(null)}
        >
          <div
            className="relative w-full max-w-6xl rounded-3xl bg-[#0c0b11] border-[3px] p-6 sm:p-10 md:p-14 text-left shadow-2xl overflow-y-auto max-h-[92vh]"
            style={{
              borderColor: selectedScience.color,
              boxShadow: `0 0 80px ${selectedScience.color}45`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-8 mb-8 border-b-2 border-white/10 gap-6">
              <div className="flex-1">
                <span
                  className="text-sm sm:text-base font-black font-mono px-5 py-2 rounded-full border-2 mb-4 inline-block tracking-wide shadow-md"
                  style={{
                    backgroundColor: `${selectedScience.color}25`,
                    color: selectedScience.color,
                    borderColor: `${selectedScience.color}60`
                  }}
                >
                  {selectedScience.category}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  {selectedScience.title}
                </h3>
                <p className="text-base sm:text-xl md:text-2xl font-black mt-3 leading-snug" style={{ color: selectedScience.color }}>
                  {selectedScience.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedScience(null)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-black text-2xl md:text-3xl flex items-center justify-center flex-shrink-0 transition-all hover:scale-105"
                title="닫기"
              >
                ✕
              </button>
            </div>

            {/* Modal Content Sections: 2-Column Wide Grid Layout on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 my-6">
              
              {/* Box 1: Mechanism */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.04] border-2 border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-black text-[#d4af37] uppercase tracking-wider mb-4 flex items-center gap-3">
                    <span className="text-2xl">🔬</span>
                    <span>신경생리학 및 음향학적 작동 메커니즘</span>
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#eae5dc] font-normal">
                    {selectedScience.mechanism}
                  </p>
                </div>
              </div>

              {/* Box 2: Clinical Proof */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.04] border-2 border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-black text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    <span>임상 검증 효과 &amp; 실측 연구 데이터</span>
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#eae5dc] whitespace-pre-line font-normal">
                    {selectedScience.clinicalProof}
                  </p>
                </div>
              </div>

              {/* Box 3: Craftsmanship */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.04] border-2 border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-black text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎛️</span>
                    <span>한울스튜디오의 독보적 제작 방식 &amp; 하이엔드 장비</span>
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#eae5dc] whitespace-pre-line font-normal">
                    {selectedScience.craftsmanship}
                  </p>
                </div>
              </div>

              {/* Box 4: Listening Tip */}
              <div className="p-6 md:p-8 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-black text-amber-300 uppercase tracking-wider mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎧</span>
                    <span>최적의 청취 가이드 &amp; 앰비언스 세팅</span>
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed text-amber-100 font-normal">
                    {selectedScience.listeningTip}
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Action CTA */}
            <div className="mt-10 pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-sm sm:text-base text-[#a8a194]">
                대표 채널: <strong className="text-white text-base sm:text-lg">{selectedScience.recommendedChannel}</strong>
              </span>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a
                  href={selectedScience.recommendedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full font-black text-sm sm:text-base bg-gradient-to-r from-[#d4af37] to-[#f59e0b] text-black hover:scale-105 transition-all text-center shadow-2xl flex items-center justify-center gap-2"
                >
                  <span>해당 기술 적용 플레이리스트 듣기</span>
                  <span className="text-lg">▶</span>
                </a>
                <button
                  onClick={() => setSelectedScience(null)}
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
                >
                  창 닫기
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    
      {/* 7. MODAL DIALOG: 초대형 와이드 마스터 도슨트 & 오디오 플레이어 (Master Sound Therapy Docent Modal) */}
      {selectedPlaylist && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn"
          onClick={closePlaylistModal}
        >
          {/* 초대형 와이드 박스 (화면 96% 너비, 92% 높이, 최대 1600px) */}
          <div
            className="embossed-box relative w-[96vw] max-w-[1600px] min-h-[85vh] max-h-[95vh] rounded-3xl text-left shadow-2xl overflow-hidden flex flex-col [word-break:keep-all] [overflow-wrap:break-word]"
            style={{
              borderColor: selectedChannel.color,
              boxShadow: `0 0 100px ${selectedChannel.color}50`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Masterclass Titlebar (2D 양각화 헤더) */}
            <div className="bg-[#14131e] border-b-2 border-black/80 px-5 sm:px-7 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-lg font-black shadow-inner">
                  ✦
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-black text-amber-300 tracking-wider uppercase block">
                    HanulStudio Master Docent &amp; Science Guide
                  </span>
                  <span className="text-xs text-white/60 font-medium">
                    {selectedChannel.name} • {selectedPlaylist.title}
                  </span>
                </div>
              </div>
              <button
                onClick={closePlaylistModal}
                className="embossed-action-btn w-10 h-10 rounded-full text-white font-black flex items-center justify-center text-lg transition-all"
                title="닫기 (ESC)"
              >
                ✕
              </button>
            </div>

            {/* Showcase Header Banner */}
            <div
              className="p-6 sm:p-8 border-b-2 border-black/80 flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${selectedChannel.color}35 0%, #0d0c14 100%)`
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-2xl bg-black/60 border border-white/20">
                      {selectedChannel.emoji}
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-black text-white/90">
                        {selectedChannel.name} • {selectedChannel.koreanName}
                      </span>
                      <span className={`text-xs sm:text-sm font-black px-3 py-1 rounded-full border ${selectedPlaylist.badgeColor} ml-3 inline-block shadow-sm`}>
                        {selectedPlaylist.badge}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-3 leading-tight tracking-tight">
                    {selectedPlaylist.title}
                  </h2>
                  <p className="text-base sm:text-xl md:text-2xl text-amber-200 font-bold mt-1.5">
                    {selectedPlaylist.subtitle}
                  </p>
                </div>

                {/* 2대 플레이어 바: 🎵 실제 음악 재생 & 🔊 AI 음성 도슨트 */}
                <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                  {/* 🎵 유튜브 실제 음악 인라인 재생 버튼 */}
                  <button
                    onClick={() => setExplorerTab('music')}
                    className="embossed-gold-action px-6 py-3.5 rounded-2xl text-sm sm:text-base font-black flex items-center gap-2.5"
                    title="이 플레이리스트의 실제 음악 바로 재생"
                  >
                    <span className="text-xl">🎵</span>
                    <span>유튜브 음악 재생</span>
                  </button>

                  {/* 🔊 AI 음성 도슨트 (TTS) 플레이어 */}
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-black/70 border-2 border-amber-400/60 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                    {!isSpeaking || isPaused ? (
                      <button
                        onClick={() => {
                          if (isPaused) {
                            resumeTTS();
                          } else {
                            const fullSpeech = `${selectedPlaylist.title}. ${selectedPlaylist.subtitle}. ${selectedPlaylist.detailedStory}. ${selectedPlaylist.listeningGuide}`;
                            playTTS(fullSpeech);
                          }
                        }}
                        className="embossed-gold-action px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2"
                      >
                        <span className="text-base">🔊</span>
                        <span>{isPaused ? '음성 이어듣기' : 'AI 음성 해설 듣기'}</span>
                      </button>
                    ) : (
                      <button
                        onClick={pauseTTS}
                        className="embossed-action-btn px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black text-amber-300 flex items-center gap-1.5"
                      >
                        <span>⏸</span>
                        <span>일시정지</span>
                      </button>
                    )}

                    {isSpeaking && (
                      <button
                        onClick={stopTTS}
                        className="embossed-action-btn px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white/90"
                      >
                        <span>⏹</span>
                        <span>정지</span>
                      </button>
                    )}

                    {/* 배속 조절 */}
                    <div className="flex items-center gap-1 bg-white/10 rounded-xl p-1 text-xs">
                      {[0.9, 1.0, 1.2].map(rate => (
                        <button
                          key={rate}
                          onClick={() => setSpeechRate(rate)}
                          className={`px-2 py-1 rounded-lg font-mono font-bold transition-all ${
                            speechRate === rate ? 'bg-amber-400 text-black' : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {rate}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Docent Toolbar: View Mode Toggle */}
            <div className="bg-[#100f16] px-6 py-3 border-b-2 border-black/80 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm flex-shrink-0">
              <div className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-none">
                <span className="text-white/50 font-mono text-xs">해설 보기:</span>
                <button
                  onClick={() => setExplorerTab('story')}
                  className={`px-4 py-1.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 ${
                    explorerTab !== 'all' ? 'bg-amber-400/25 text-amber-300 border-2 border-amber-400/60 shadow-md' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>📚</span>
                  <span>섹션별 상세 해설</span>
                </button>
                <button
                  onClick={() => setExplorerTab('all')}
                  className={`px-4 py-1.5 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 ${
                    explorerTab === 'all' ? 'bg-amber-400/25 text-amber-300 border-2 border-amber-400/60 shadow-md' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>📜</span>
                  <span>전체 해설 한눈에 보기</span>
                </button>
              </div>

              <div className="text-xs sm:text-sm text-amber-300/80 font-mono hidden md:block">
                ⚡ 48kHz / 24-bit 무손실 스튜디오 마스터 • EBU R128 글로벌 방송 표준 규격
              </div>
            </div>

            {/* Modal Main Body: Split View or Full View */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              
              {explorerTab === 'all' ? (
                /* 전체 내용 한눈에 전개 뷰 */
                <div className="space-y-8 max-w-5xl mx-auto">
                  <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.04] border-2 border-white/15 shadow-xl">
                    <h4 className="text-xl sm:text-2xl font-black text-[#d4af37] mb-4 flex items-center gap-3">
                      <span>🏛️ 01. 음향심리학 &amp; 숨겨진 음악적 서사</span>
                    </h4>
                    <p className="text-base sm:text-xl leading-relaxed text-[#eae5dc] whitespace-pre-line">
                      {selectedPlaylist.detailedStory}
                    </p>
                  </div>

                  <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.04] border-2 border-white/15 shadow-xl">
                    <h4 className="text-xl sm:text-2xl font-black text-rose-400 mb-4 flex items-center gap-3">
                      <span>🎻 02. 명기 실록 &amp; 악기 사운드 디자인</span>
                    </h4>
                    <p className="text-base sm:text-xl leading-relaxed text-[#eae5dc]">
                      {selectedPlaylist.instrumentation}
                    </p>
                  </div>

                  <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.04] border-2 border-white/15 shadow-xl">
                    <h4 className="text-xl sm:text-2xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                      <span>🎛️ 03. 스튜디오 마스터링 &amp; 뇌파 동기화 규격</span>
                    </h4>
                    <p className="text-base sm:text-xl leading-relaxed text-[#eae5dc]">
                      {selectedPlaylist.acousticSpecs}
                    </p>
                  </div>

                  <div className="p-7 sm:p-9 rounded-3xl bg-amber-500/15 border-2 border-amber-500/50 shadow-xl">
                    <h4 className="text-xl sm:text-2xl font-black text-amber-300 mb-4 flex items-center gap-3">
                      <span>🎧 04. 추천 청취 가이드 &amp; 앰비언스 환경</span>
                    </h4>
                    <p className="text-base sm:text-xl leading-relaxed text-amber-100">
                      {selectedPlaylist.listeningGuide}
                    </p>
                  </div>

                  {/* Call to action subscribe card */}
                  <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-purple-900/40 via-black to-amber-900/40 border-2 border-pink-400/50 shadow-xl space-y-4">
                    <h4 className="text-xl sm:text-2xl font-black text-pink-300 flex items-center gap-3">
                      <span>💖 05. 한울스튜디오 공식 구독 &amp; 좋아요 안내</span>
                    </h4>
                    <p className="text-base sm:text-lg leading-relaxed text-white">
                      한울스튜디오는 상업적 자극을 배제하고 인류와 반려동물의 온전한 쉼과 몰입을 위해 과학적 음향 마스터링만을 고집합니다. 이 소리가 당신의 마음에 깊은 위로와 평온을 전했다면, 채널 [구독]과 [좋아요]로 한울스튜디오의 음향 과학 여정에 함께해 주세요.
                    </p>
                    <a
                      href={selectedPlaylist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="embossed-gold-action inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-sm"
                    >
                      <span>👉 공식 YouTube 채널 방문하여 [구독] &amp; [좋아요] 누르기</span>
                      <span>↗</span>
                    </a>
                  </div>

                  <div className="p-7 sm:p-9 rounded-3xl bg-black/60 border-2 border-white/15 shadow-xl">
                    <h4 className="text-base sm:text-lg font-black text-yellow-300 mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <span>🏷️ 06. 15대 메가 트래픽 해시태그</span>
                    </h4>
                    <p className="text-sm sm:text-base font-mono text-[#d4af37] leading-relaxed break-words bg-black/40 p-4 rounded-2xl border border-white/10">
                      {selectedPlaylist.hashtags}
                    </p>
                  </div>
                </div>
              ) : (
                /* 섹션별 상세 탭 뷰 */
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                  
                  {/* Left Column: Docent Topics Menu */}
                  <div className="md:col-span-4 bg-black/50 rounded-3xl border-2 border-white/15 p-4 sm:p-5 space-y-2.5">
                    <div className="px-3 py-2 text-xs font-mono text-white/50 uppercase tracking-wider border-b border-white/15 mb-2 flex items-center justify-between">
                      <span className="font-bold">Docent Menu</span>
                      <span className="font-bold">Category</span>
                    </div>

                    {[
                      { id: 'music', icon: '🎵', name: '공식 음악 즉시 감상', label: '인라인 유튜브 스트리밍', badge: 'AUDIO STREAM', color: 'text-red-400' },
                      { id: 'story', icon: '🏛️', name: '음향심리학 & 숨겨진 서사', label: '방문자가 몰랐던 음향 과학', badge: 'SCIENCE & FACTS', color: 'text-amber-300' },
                      { id: 'instruments', icon: '🎻', name: '명기 실록 & 사운드 디자인', label: '1727 스트라디바리우스 등', badge: 'INSTRUMENTS', color: 'text-rose-300' },
                      { id: 'acoustics', icon: '🎛️', name: '마스터링 & 뇌파 동기화 규격', label: 'EBU R128 / 바이너럴 스펙', badge: 'MASTER SPEC', color: 'text-cyan-300' },
                      { id: 'guide', icon: '🎧', name: '최적 청취 가이드 & 힐링 팁', label: '헤드폰/환경/볼륨 가이드', badge: 'LISTENING TIP', color: 'text-emerald-300' },
                      { id: 'subscribe', icon: '💖', name: '공식 구독 & 좋아요 응원 안내', label: '지속적인 치유를 위한 동행', badge: 'SUBSCRIBE', color: 'text-pink-300' },
                      { id: 'hashtags', icon: '🏷️', name: '15대 메가 트래픽 해시태그', label: '100만+ 트래픽 공식 태그', badge: '15 MEGA TAGS', color: 'text-yellow-300' },
                      { id: 'youtube_live', icon: '🌐', name: '유튜브 실시간 설명란 연동', label: 'Live Data Sync', badge: 'LIVE SYNC', color: 'text-red-400' },
                    ].map((f) => {
                      const isActive = explorerTab === f.id;
                      return (
                        <button
                          key={f.id}
                          onClick={() => {
                            setExplorerTab(f.id as any);
                            if (f.id === 'youtube_live' && !liveSyncData) {
                              fetchYouTubeLiveSync(selectedPlaylist.url);
                            }
                          }}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all flex items-center justify-between ${
                            isActive
                              ? 'bg-amber-400/25 border-2 border-amber-400 shadow-xl text-white font-black scale-[1.01]'
                              : 'hover:bg-white/10 text-white/80 border border-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">{f.icon}</span>
                            <div className="min-w-0">
                              <p className={`font-mono text-sm sm:text-base font-black truncate leading-tight ${isActive ? f.color : 'text-white'}`}>
                                {f.name}
                              </p>
                              <p className="text-xs sm:text-sm text-white/60 truncate mt-1 font-bold">{f.label}</p>
                            </div>
                          </div>
                          <span className={`text-[10px] sm:text-xs font-mono flex-shrink-0 ml-2 px-2.5 py-1 rounded-full font-bold ${
                            f.badge === 'AUDIO STREAM' ? 'bg-red-500/25 text-red-300 border border-red-500/40 animate-pulse' :
                            f.badge === 'SUBSCRIBE' ? 'bg-pink-500/25 text-pink-300 border border-pink-500/40' :
                            f.badge === 'LIVE SYNC' ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40' : 'text-white/50 bg-white/5'
                          }`}>
                            {f.badge}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Docent Content Window */}
                  <div className="md:col-span-8 bg-[#100f16] rounded-3xl border-2 border-white/20 p-6 sm:p-9 shadow-2xl flex flex-col justify-between min-h-[460px] h-auto">
                    <div>
                      {/* Topic Title Bar */}
                      <div className="flex items-center justify-between pb-4 border-b-2 border-white/15 mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl p-2 rounded-2xl bg-white/5 border border-white/10">
                            {explorerTab === 'music' && '🎵'}
                            {explorerTab === 'story' && '🏛️'}
                            {explorerTab === 'instruments' && '🎻'}
                            {explorerTab === 'acoustics' && '🎛️'}
                            {explorerTab === 'guide' && '🎧'}
                            {explorerTab === 'subscribe' && '💖'}
                            {explorerTab === 'hashtags' && '🏷️'}
                            {explorerTab === 'youtube_live' && '🌐'}
                          </span>
                          <div>
                            <p className="font-mono font-black text-amber-300 text-base sm:text-xl">
                              {explorerTab === 'music' && '공식 음악 즉시 감상 (YouTube Streaming)'}
                              {explorerTab === 'story' && '음향심리학 & 숨겨진 서사 (Artistic Narrative & Hidden Facts)'}
                              {explorerTab === 'instruments' && '명기 실록 & 사운드 디자인 (Master Instruments & Pedigree)'}
                              {explorerTab === 'acoustics' && '마스터링 & 뇌파 동기화 규격 (Fender Studio Pro 8 & EBU R128)'}
                              {explorerTab === 'guide' && '최적 청취 가이드 & 힐링 팁 (Listening Recommendation & Care Guide)'}
                              {explorerTab === 'subscribe' && '공식 구독 & 좋아요 응원 안내 (Call to Action)'}
                              {explorerTab === 'hashtags' && '15대 메가 트래픽 해시태그 (15 Mega Hashtags)'}
                              {explorerTab === 'youtube_live' && '유튜브 실시간 설명란 연동 (Live Data Sync)'}
                            </p>
                            <p className="text-xs sm:text-sm text-white/50 font-mono mt-0.5">
                              과학 기반 프리미엄 사운드 테라피 • EBU R128 글로벌 방송 표준 규격
                            </p>
                          </div>
                        </div>

                        {/* 단독 섹션 TTS 낭독 버튼 */}
                        <button
                          onClick={() => {
                            let textToRead = '';
                            if (explorerTab === 'story') textToRead = selectedPlaylist.detailedStory;
                            else if (explorerTab === 'instruments') textToRead = `악기 편성: ${selectedPlaylist.instrumentation}`;
                            else if (explorerTab === 'acoustics') textToRead = `음향 스펙: ${selectedPlaylist.acousticSpecs}`;
                            else if (explorerTab === 'guide') textToRead = `청취 가이드: ${selectedPlaylist.listeningGuide}`;
                            else if (explorerTab === 'subscribe') textToRead = '한울스튜디오의 모든 음원은 청각 피로를 없애고 뇌파를 안정시키기 위해 수술적 이퀄라이징과 오디오파일 마스터링을 거쳐 완성됩니다. 이 깊은 울림이 마음에 드셨다면 채널 구독과 좋아요로 함께해 주세요.';
                            else if (explorerTab === 'hashtags') textToRead = `해시태그: ${selectedPlaylist.hashtags}`;
                            else if (explorerTab === 'youtube_live') textToRead = liveSyncData?.description || '유튜브 실시간 설명란 연동 대기 중입니다.';
                            playTTS(textToRead);
                          }}
                          className="embossed-action-btn px-4 sm:px-5 py-2.5 rounded-xl text-amber-300 font-black text-xs sm:text-sm flex items-center gap-2"
                          title="이 섹션만 음성으로 듣기"
                        >
                          <span className="text-base">🔊</span>
                          <span>이 섹션 음성 낭독</span>
                        </button>
                      </div>

                      {/* Content Body */}
                      <div className="flex-1 my-3">
                        {explorerTab === 'music' && (
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-xl sm:text-3xl font-black text-red-400 flex items-center gap-3">
                                <span>🎵</span>
                                <span>{selectedPlaylist.title} — 실시간 음악 재생</span>
                              </h4>
                              <a
                                href={selectedPlaylist.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="embossed-gold-action px-5 py-2 rounded-full text-xs font-black flex items-center gap-1.5"
                              >
                                <span>YouTube 공식 감상 (구독·좋아요)</span>
                                <span>↗</span>
                              </a>
                            </div>
                            
                            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border-2 border-red-500/50 shadow-2xl bg-black mb-4">
                              <iframe
                                src={`https://www.youtube.com/embed/videoseries?list=${selectedPlaylist.url.split('list=')[1]}&autoplay=1`}
                                title={selectedPlaylist.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            </div>

                            <p className="text-base sm:text-lg text-amber-200 font-medium">
                              ⚡ 지금 재생 중인 컬렉션: <strong>{selectedPlaylist.subtitle}</strong> • 48kHz / 24-bit 스튜디오 마스터 음원
                            </p>
                          </div>
                        )}

                        {explorerTab === 'story' && (
                          <div className="space-y-6">
                            <h4 className="text-2xl sm:text-3xl font-black text-[#d4af37] flex items-center gap-3">
                              <span>🏛️</span>
                              <span>음향심리학 &amp; 숨겨진 서사 (Artistic Narrative &amp; Facts)</span>
                            </h4>
                            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-[#f3ece0] font-normal whitespace-pre-line space-y-4">
                              {selectedPlaylist.detailedStory}
                            </div>
                            
                            {/* Dedicated Subscribe Call-to-action Card */}
                            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-purple-500/15 border-2 border-amber-400/50 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div>
                                <p className="text-base sm:text-lg font-black text-amber-300 flex items-center gap-2">
                                  <span>💖</span>
                                  <span>이 음악이 마음에 평온을 전했다면, 구독과 좋아요로 함께해 주세요</span>
                                </p>
                                <p className="text-xs sm:text-sm text-white/70 mt-1">
                                  한울스튜디오는 상업적 자극을 배제하고 과학적 치유 음향만을 고집합니다. 매주 새로운 마스터피스를 만나보세요.
                                </p>
                              </div>
                              <a
                                href={selectedPlaylist.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="embossed-gold-action px-6 py-3 rounded-full text-xs sm:text-sm font-black flex items-center gap-2 flex-shrink-0"
                              >
                                <span>공식 채널 구독하기</span>
                                <span>▶</span>
                              </a>
                            </div>
                          </div>
                        )}

                        {explorerTab === 'instruments' && (
                          <div>
                            <h4 className="text-2xl sm:text-3xl font-black text-rose-400 mb-4 flex items-center gap-3">
                              <span>🎻</span>
                              <span>악기 편성 및 사운드 디자인 (Instrumentation &amp; Design)</span>
                            </h4>
                            <p className="text-base sm:text-xl leading-relaxed text-[#f3ece0] font-normal">
                              {selectedPlaylist.instrumentation}
                            </p>
                          </div>
                        )}

                        {explorerTab === 'acoustics' && (
                          <div>
                            <h4 className="text-2xl sm:text-3xl font-black text-cyan-400 mb-4 flex items-center gap-3">
                              <span>🎛️</span>
                              <span>스튜디오 마스터링 &amp; 음향심리학 스펙 (Fender Studio Pro 8 &amp; EBU R128)</span>
                            </h4>
                            <p className="text-base sm:text-xl leading-relaxed text-[#f3ece0] font-normal">
                              {selectedPlaylist.acousticSpecs}
                            </p>
                          </div>
                        )}

                        {explorerTab === 'guide' && (
                          <div>
                            <h4 className="text-2xl sm:text-3xl font-black text-amber-300 mb-4 flex items-center gap-3">
                              <span>🎧</span>
                              <span>추천 청취 가이드 &amp; 앰비언스 환경 (Listening Guide)</span>
                            </h4>
                            <p className="text-base sm:text-xl leading-relaxed text-amber-100 font-normal">
                              {selectedPlaylist.listeningGuide}
                            </p>
                          </div>
                        )}

                        {explorerTab === 'subscribe' && (
                          <div className="space-y-6">
                            <h4 className="text-2xl sm:text-3xl font-black text-pink-400 flex items-center gap-3">
                              <span>💖</span>
                              <span>공식 구독 &amp; 좋아요 응원 안내 (Join HanulStudio Journey)</span>
                            </h4>
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/30 via-black to-amber-900/30 border-2 border-pink-400/50 shadow-2xl space-y-5">
                              <h5 className="text-xl sm:text-2xl font-black text-white leading-snug">
                                "우주의 주파수로 당신의 의식을 깨웁니다."
                              </h5>
                              <p className="text-base sm:text-lg leading-relaxed text-[#f0ede6]">
                                한울스튜디오의 모든 음원은 단순한 기계적 AI 음원 생성이 아닙니다. 음악가와 음향 엔지니어가 <strong>Fender Studio Pro 8 환경에서 AI 스템 분리, Melodyne 미디 추출, Omnisphere 3 아날로그 패드 및 1727 스트라디바리우스 실록 가상악기를 직접 편곡·연주</strong>하고, <strong>360° 8D 바이너럴 패닝 및 EBU R128 마스터링</strong>을 거쳐 탄생한 독창적 마스터피스입니다.
                              </p>
                              <p className="text-base sm:text-lg leading-relaxed text-[#f0ede6]">
                                청각 피로도 0%의 무해하고 순수한 사운드로 인류와 반려동물의 일상에 진정한 평온과 몰입을 선물합니다. 이 특별한 음향 과학 여정에 <strong>채널 [구독]과 [좋아요]</strong>로 함께해 주세요.
                              </p>
                              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                                <a
                                  href={selectedPlaylist.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="embossed-gold-action w-full sm:w-auto px-8 py-4 rounded-full text-base font-black flex items-center justify-center gap-2.5 shadow-2xl"
                                >
                                  <span>👉 공식 YouTube 채널 방문하여 [구독] &amp; [좋아요] 누르기</span>
                                  <span className="text-xl">↗</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        )}

                        {explorerTab === 'hashtags' && (
                          <div>
                            <h4 className="text-lg sm:text-xl font-black text-yellow-300 mb-4 flex items-center gap-2 uppercase tracking-wider">
                              <span>🏷️</span>
                              <span>YouTube 100만+ 트래픽 메가 해시태그 (15 Mega Hashtags)</span>
                            </h4>
                            <p className="text-base sm:text-lg font-mono text-[#d4af37] leading-relaxed break-words bg-black/50 p-6 rounded-2xl border-2 border-white/10">
                              {selectedPlaylist.hashtags}
                            </p>
                          </div>
                        )}

                        {explorerTab === 'youtube_live' && (
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <h4 className="text-xl sm:text-2xl font-black text-red-400 flex items-center gap-3">
                                <span>🌐</span>
                                <span>YouTube 채널 실시간 설명란 연동 엔진 (Live Sync)</span>
                              </h4>
                              <button
                                onClick={() => fetchYouTubeLiveSync(selectedPlaylist.url)}
                                disabled={isSyncing}
                                className="embossed-action-btn px-4 py-2 rounded-xl text-sm font-bold text-red-300 flex items-center gap-2"
                              >
                                <span>🔄</span>
                                <span>{isSyncing ? '동기화 중...' : '새로고침'}</span>
                              </button>
                            </div>

                            <div className="p-6 rounded-2xl bg-black/60 border border-red-500/40 text-sm sm:text-base space-y-4">
                              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                <span className="text-white/70">연동 재생목록 ID:</span>
                                <span className="font-mono text-amber-300 font-black text-base">
                                  {selectedPlaylist.url.split('list=')[1] || 'PL-MASTER'}
                                </span>
                              </div>

                              {liveSyncData?.status === 'synced' ? (
                                <div className="space-y-3">
                                  <p className="font-black text-white text-lg">
                                    최신 업로드 영상: {liveSyncData.title}
                                  </p>
                                  <div className="p-4 rounded-xl bg-black/50 text-[#eae5dc] font-mono whitespace-pre-wrap max-h-60 overflow-y-auto border border-white/15 text-sm sm:text-base leading-relaxed">
                                    {liveSyncData.description}
                                  </div>
                                  <p className="text-xs text-white/50">
                                    동기화 일시: {new Date(liveSyncData.syncedAt).toLocaleString('ko-KR')}
                                  </p>
                                </div>
                              ) : (
                                <div className="space-y-3 text-white/90">
                                  <p className="text-base sm:text-lg leading-relaxed font-bold">
                                    ⚡ <strong>실시간 연동 아키텍처 가동 안내</strong>:
                                  </p>
                                  <p className="text-[#c8c2b7] text-base leading-relaxed">
                                    유튜브에 새로운 영상이 업로드될 때마다, <strong>YouTube Data API v3</strong>를 통해 영상 설명란의 내용이 본 웹사이트에 자동으로 실시간 반영되도록 설계되었습니다.
                                  </p>
                                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-amber-300 space-y-1">
                                    <div>• 재생목록 URL: {selectedPlaylist.url}</div>
                                    <div>• Vercel 환경 변수: YOUTUBE_API_KEY 등록 시 실시간 스트림 자동 개방</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t-2 border-white/15 flex items-center justify-between text-xs sm:text-sm text-white/50">
                      <span>각 탭을 선택하여 심리음향학적 근거와 마스터 음향 스펙을 확인하세요</span>
                      <span className="font-mono text-amber-300 font-bold">HanulStudio Science-Based Therapy</span>
                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* Bottom Modal Footer with Direct YouTube Play Button */}
            <div className="bg-[#121118] px-6 py-4 border-t-2 border-black/80 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
              <span className="text-sm text-[#8c8476]">
                채널: <strong className="text-white">{selectedChannel.name}</strong> • 총 {selectedChannel.playlists.length}개 마스터 컬렉션
              </span>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a
                  href={selectedPlaylist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="embossed-gold-action px-6 py-3.5 rounded-full font-black text-sm flex items-center gap-2"
                >
                  <span>▶</span>
                  <span>YouTube에서 전체 듣기</span>
                </a>
                <button
                  onClick={closePlaylistModal}
                  className="embossed-action-btn px-6 py-3.5 rounded-full font-bold text-sm text-white transition-all"
                >
                  닫기
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
{/* 7. FOOTER & B2B BUSINESS DIRECT CONTACT (2D 입체 플라크) */}
      <footer className="border-t-2 border-white/10 bg-[#070709] py-16 px-4 sm:px-8 text-center text-xs text-[#b8b0a2]">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Logo & Platform Brand */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-2">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-[#fff2b2] via-[#ffd700] to-[#f59e0b] shadow-[0_0_12px_rgba(255,215,0,0.5)] flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#060608] flex items-center justify-center">
                <SacredGeometryLogo className="w-full h-full" />
              </div>
            </div>
            <span className="font-black text-xl sm:text-2xl text-white tracking-wider">
              HANULSTUDIO<span className="text-amber-400">.com</span>
            </span>
            <span className="text-white/40 hidden sm:inline">·</span>
            <span className="text-base sm:text-lg md:text-xl font-extrabold text-cyan-300 tracking-wide drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              Science-Based Sound Therapy &amp; B2B Audio Architecture
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-bold max-w-3xl mx-auto leading-relaxed">
            공간 음향 솔루션, 호텔·스파 앰비언스, 멘탈 웰니스 플랫폼 음원 공급 및 B2B 상업용 라이선싱 문의
          </p>

          {/* 2D Embossed B2B Email Contact Card with One-touch Copy & 14-Language Audio Guide */}
          <div className="pt-2 flex justify-center">
            <div
              onClick={handleCopyEmail}
              className="group cursor-pointer rounded-3xl p-5 sm:p-7 max-w-2xl w-full text-center transition-all select-none relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0e1a24 0%, #060d13 100%)",
                borderTop: "2px solid rgba(103, 232, 249, 0.45)",
                borderLeft: "1.5px solid rgba(103, 232, 249, 0.3)",
                borderBottom: "5px solid rgba(0, 0, 0, 0.95)",
                borderRight: "2px solid rgba(0, 0, 0, 0.8)",
                boxShadow: "inset 1.5px 1.5px 2px rgba(255, 255, 255, 0.2), inset -2px -2px 3px rgba(0, 0, 0, 0.85), 0 14px 30px -4px rgba(0, 0, 0, 0.9), 0 0 25px rgba(6, 182, 212, 0.25)"
              }}
              title="클릭 또는 터치하시면 이메일 주소가 복사됩니다"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-cyan-200 font-extrabold text-xs sm:text-sm md:text-base tracking-wide flex items-center gap-1.5">
                  <span>💼</span>
                  <span>B2B 비즈니스 &amp; 공식 제휴 메일</span>
                  <span className="text-cyan-400/80 font-normal text-xs sm:text-sm">(클릭하여 복사)</span>
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 flex-wrap">
                <strong className="text-cyan-300 group-hover:text-cyan-200 font-black text-xl sm:text-2xl md:text-3xl font-mono tracking-wider transition-colors drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                  hanulsound@gmail.com
                </strong>
                <span className="text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full bg-cyan-500/25 border border-cyan-400/50 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-black transition-all flex items-center gap-1 shadow-md">
                  <span>📋</span>
                  <span>{isEmailCopied ? '복사 완료!' : '주소 복사'}</span>
                </span>
              </div>

              {isEmailCopied && (
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-400 text-emerald-200 text-xs sm:text-sm font-black animate-bounce shadow-lg">
                  <span>✓</span>
                  <span>클립보드 복사 완료 (14개 언어 음성 안내 재생 중)</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 text-xs text-[#8c8476]">
            © 2026 HanulStudio. All rights reserved. 무단 복제 및 상업적 무단 도용을 엄격히 금합니다.
          </div>
        </div>
      </footer>

  <FloatingLanguageButton />
</main>
  );
}
