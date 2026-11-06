'use client';

import React, { useState, useEffect, useRef } from 'react';

export interface LanguageItem {
  code: string;
  name: string;
  koreanName: string;
  flag: string;
}

export const TOP_14_LANGUAGES: LanguageItem[] = [
  { code: 'en', name: 'English', koreanName: '영어', flag: '🇺🇸' },
  { code: 'zh-CN', name: '中文 (简体)', koreanName: '중국어 간체', flag: '🇨🇳' },
  { code: 'zh-TW', name: '中文 (繁體)', koreanName: '중국어 번체', flag: '🇹🇼' },
  { code: 'ja', name: '日本語', koreanName: '일본어', flag: '🇯🇵' },
  { code: 'es', name: 'Español', koreanName: '스페인어', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', koreanName: '아랍어', flag: '🇸🇦' },
  { code: 'pt', name: 'Português', koreanName: '포르투갈어', flag: '🇵🇹' },
  { code: 'id', name: 'Bahasa Indonesia', koreanName: '인도네시아어', flag: '🇮🇩' },
  { code: 'fr', name: 'Français', koreanName: '프랑스어', flag: '🇫🇷' },
  { code: 'ru', name: 'Русский', koreanName: '러시아어', flag: '🇷🇺' },
  { code: 'de', name: 'Deutsch', koreanName: '독일어', flag: '🇩🇪' },
  { code: 'hi', name: 'हिन्दी', koreanName: '힌디어', flag: '🇮🇳' },
  { code: 'it', name: 'Italiano', koreanName: '이탈리아어', flag: '🇮🇹' },
  { code: 'vi', name: 'Tiếng Việt', koreanName: '베트남어', flag: '🇻🇳' },
];

/**
 * 完全 원문(한국어)으로 초기화하는 함수
 * 쿠키와 로컬 스토리지를 완전히 삭제하여 어떤 상황에서도 한국어로 원상 복구합니다.
 */
export function resetToKorean() {
  if (typeof window === 'undefined') return;

  const domain = window.location.hostname;
  const isLocal = domain === 'localhost' || domain === '127.0.0.1';

  // 1. 모든 쿠키 삭제 (루트, 도메인, 서브도메인 레벨 전수 삭제)
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  if (!isLocal) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
  }
  document.cookie = 'googtrans=/ko/ko; path=/;';

  // 2. 저장소 초기화
  localStorage.removeItem('hanul_lang');
  sessionStorage.removeItem('hanul_lang');

  // 3. 페이지 새로고침하여 한국어 원문으로 즉시 복귀
  window.location.reload();
}

/**
 * 특정 언어로 안전하게 번역 적용하는 함수
 */
export function applyLanguage(langCode: string) {
  if (typeof window === 'undefined') return;

  if (langCode === 'ko') {
    resetToKorean();
    return;
  }

  const domain = window.location.hostname;
  const isLocal = domain === 'localhost' || domain === '127.0.0.1';

  // 쿠키 설정
  document.cookie = `googtrans=/ko/${langCode}; path=/;`;
  if (!isLocal) {
    document.cookie = `googtrans=/ko/${langCode}; path=/; domain=.${domain};`;
    document.cookie = `googtrans=/ko/${langCode}; path=/; domain=${domain};`;
  }

  // 개인 기기에만 임시 저장
  localStorage.setItem('hanul_lang', langCode);

  // 구글 콤보박스가 있으면 직접 트리거, 없으면 새로고침
  const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event('change'));
  } else {
    window.location.reload();
  }
}

/**
 * 1. Global Header Language Dropdown
 */
export function HeaderLanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ko');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 현재 쿠키 및 로컬스토리지 확인
    const match = document.cookie.match(/googtrans=\/ko\/([a-zA-Z_-]+)/);
    const cookieLang = match ? match[1] : null;
    const saved = cookieLang || localStorage.getItem('hanul_lang') || 'ko';
    setCurrentLang(saved);

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeItem = TOP_14_LANGUAGES.find((l) => l.code === currentLang);
  const isTranslated = currentLang !== 'ko' && activeItem !== undefined;

  return (
    <div className="relative inline-flex items-center gap-2" ref={dropdownRef}>
      
      {/* 외국어로 번역되어 있을 때 항상 나타나는 [원문 복귀] 안심 버튼 */}
      {isTranslated && (
        <button
          onClick={resetToKorean}
          className="px-3 py-1.5 rounded-full text-xs font-black bg-rose-600 hover:bg-rose-500 text-white shadow-lg animate-pulse flex items-center gap-1 transition-all border border-rose-300"
          title="한국어 원문으로 즉시 되돌리기"
        >
          <span>🇰🇷</span>
          <span>원문 복귀</span>
        </button>
      )}

      {/* 언어 선택 드롭다운 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black bg-white/10 hover:bg-white/20 border-2 border-amber-400/50 hover:border-amber-400 text-white transition-all shadow-md group"
        title="전 세계 14개 언어권 실시간 번역기"
      >
        <span className="text-lg">{isTranslated ? activeItem?.flag : '🌐'}</span>
        <span className="font-extrabold">{isTranslated ? activeItem?.name : '언어 선택'}</span>
        <span className="text-[11px] bg-amber-400/30 text-amber-300 px-2 py-0.5 rounded-full font-bold">14개 언어권</span>
        <span className={`text-xs text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-3xl bg-[#0b0a10] border-[3px] border-amber-400 shadow-[0_25px_70px_rgba(0,0,0,0.98)] z-[9999] p-4 animate-fadeIn" style={{ backgroundColor: "#0b0a10" }}>
          <div className="px-2 py-2 border-b border-white/15 mb-3 flex items-center justify-between">
            <span className="text-base font-black text-amber-300 flex items-center gap-2">
              <span className="text-xl">🌐</span>
              <span>14개 언어권 실시간 선택</span>
            </span>
            <button
              onClick={resetToKorean}
              className="text-xs font-black px-3 py-1 rounded-full bg-rose-500 hover:bg-rose-400 text-white transition-all shadow-md flex items-center gap-1"
            >
              <span>🇰🇷</span>
              <span>한국어 원문</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2 max-h-80 overflow-y-auto pr-1">
            {/* 맨 위에 한국어 원문 고정 */}
            <button
              onClick={resetToKorean}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                currentLang === 'ko'
                  ? 'bg-amber-400 text-black font-black shadow-lg scale-[1.01]'
                  : 'hover:bg-white/10 text-white/90 border border-white/10'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span className="text-2xl flex-shrink-0">🇰🇷</span>
                <span className="text-base sm:text-lg font-black tracking-wide">
                  한국어 (Original)
                </span>
              </div>
              <span className={`text-xs sm:text-sm font-bold ${currentLang === 'ko' ? 'text-black/80' : 'text-amber-300/80'}`}>
                기본 원문
              </span>
            </button>

            {TOP_14_LANGUAGES.map((lang) => {
              const isSelected = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setIsOpen(false);
                    applyLanguage(lang.code);
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                    isSelected
                      ? 'bg-amber-400 text-black font-black shadow-lg scale-[1.01]'
                      : 'hover:bg-white/10 text-white/90 border border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl flex-shrink-0">{lang.flag}</span>
                    <span className="text-base sm:text-lg font-black tracking-wide">
                      {lang.name}
                    </span>
                  </div>
                  <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-black/80' : 'text-amber-300/80'}`}>
                    {lang.koreanName}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/15 px-2 text-[11px] text-white/50 text-center font-mono">
            💡 언어 설정은 고객님의 브라우저에만 적용되며, 다른 방문자에게 영향을 주지 않습니다.
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 2. Hero Quick Language Bar
 */
export function QuickLanguageBar({ onSelect }: { onSelect?: (code: string) => void }) {
  const [currentLang, setCurrentLang] = useState('ko');

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/ko\/([a-zA-Z_-]+)/);
    const cookieLang = match ? match[1] : null;
    const saved = cookieLang || localStorage.getItem('hanul_lang') || 'ko';
    setCurrentLang(saved);

    if (typeof window !== 'undefined' && !(window as any).__googleTranslateScriptLoaded) {
      (window as any).__googleTranslateScriptLoaded = true;
      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'ko',
            includedLanguages: 'en,zh-CN,zh-TW,es,ar,pt,id,fr,ja,ru,de,hi,ko,it,vi',
            autoDisplay: false
          }, 'google_translate_element');
        }
      };
      const s = document.createElement('script');
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="w-full overflow-x-auto py-2 scrollbar-none flex items-center gap-2 sm:gap-2.5 px-1">
      <span className="text-sm font-black text-amber-300 flex items-center gap-1.5 flex-shrink-0 mr-1">
        <span className="text-lg">🌐</span>
        <span>14개 언어권:</span>
      </span>

      {/* 한국어 원문 퀵 버튼 */}
      <button
        onClick={resetToKorean}
        className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-black flex-shrink-0 transition-all ${
          currentLang === 'ko'
            ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105'
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
        }`}
      >
        <span className="text-base">🇰🇷</span>
        <span>한국어 원문</span>
      </button>

      {TOP_14_LANGUAGES.map((lang) => {
        const isSelected = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => {
              applyLanguage(lang.code);
              if (onSelect) onSelect(lang.code);
            }}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-black flex-shrink-0 transition-all ${
              isSelected
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30 scale-105'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * 3. Floating Quick Language Button (한국어 원문 복귀 버튼 결합)
 */
export function FloatingLanguageButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ko');

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/ko\/([a-zA-Z_-]+)/);
    const cookieLang = match ? match[1] : null;
    const saved = cookieLang || localStorage.getItem('hanul_lang') || 'ko';
    setCurrentLang(saved);

    if (typeof window !== 'undefined' && !(window as any).__googleTranslateScriptLoaded) {
      (window as any).__googleTranslateScriptLoaded = true;
      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'ko',
            includedLanguages: 'en,zh-CN,zh-TW,es,ar,pt,id,fr,ja,ru,de,hi,ko,it,vi',
            autoDisplay: false
          }, 'google_translate_element');
        }
      };
      const s = document.createElement('script');
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const activeItem = TOP_14_LANGUAGES.find((l) => l.code === currentLang);
  const isTranslated = currentLang !== 'ko' && activeItem !== undefined;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* 외국어 모드일 때 옆에 뜨는 긴급 [원문 복귀] 버튼 */}
      {isTranslated && (
        <button
          onClick={resetToKorean}
          className="px-4 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-black text-sm shadow-2xl border-2 border-rose-300 animate-bounce flex items-center gap-1.5"
          title="한국어 원문으로 즉시 복귀"
        >
          <span>🇰🇷</span>
          <span>원문 복귀</span>
        </button>
      )}

      {/* 14개 언어권 메인 플로팅 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-sm sm:text-base shadow-2xl shadow-amber-500/50 hover:scale-105 transition-all border-2 border-amber-200"
        title="14개 언어권 실시간 번역기"
      >
        <span className="text-2xl">{isTranslated ? activeItem?.flag : '🌐'}</span>
        <span className="font-black">{isTranslated ? activeItem?.name : '14개 언어권'}</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-3xl bg-[#0b0a10] border-[3px] border-amber-400 shadow-[0_25px_70px_rgba(0,0,0,0.98)] p-4 z-[9999] animate-fadeIn" style={{ backgroundColor: "#0b0a10" }}>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
            <span className="text-base font-black text-amber-300 flex items-center gap-2">
              <span className="text-xl">🌐</span>
              <span>14개 언어권 선택</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col space-y-2 max-h-80 overflow-y-auto pr-1">
            {/* 한국어 원문 복구 옵션 */}
            <button
              onClick={() => {
                setIsOpen(false);
                resetToKorean();
              }}
              className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                currentLang === 'ko'
                  ? 'bg-amber-400 text-black font-black shadow-md'
                  : 'hover:bg-white/10 text-white/90 border border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🇰🇷</span>
                <span className="text-base sm:text-lg font-black">한국어 (Original)</span>
              </div>
              <span className={`text-xs sm:text-sm font-bold ${currentLang === 'ko' ? 'text-black/80' : 'text-amber-300/80'}`}>
                원문 복귀
              </span>
            </button>

            {TOP_14_LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setIsOpen(false);
                  applyLanguage(lang.code);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                  currentLang === lang.code
                    ? 'bg-amber-400 text-black font-black shadow-md'
                    : 'hover:bg-white/10 text-white/90 border border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-base sm:text-lg font-black">{lang.name}</span>
                </div>
                <span className={`text-xs sm:text-sm font-bold ${currentLang === lang.code ? 'text-black/80' : 'text-amber-300/80'}`}>
                  {lang.koreanName}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 px-2 text-[10px] text-white/40 text-center font-mono">
            🔒 번역 상태는 방문자의 개인 기기에만 국한되며, 서버의 원본 데이터에는 영향을 주지 않습니다.
          </div>
        </div>
      )}
    </div>
  );
}
