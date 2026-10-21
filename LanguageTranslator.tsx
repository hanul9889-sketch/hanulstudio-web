// src/components/LanguageTranslator.tsx
export interface LanguageItem {
  code: string;
  name: string;
  koreanName: string;
  flag: string;
}

export const TOP_16_LANGUAGES: LanguageItem[] = [
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
  { code: 'bn', name: 'বাংলা', koreanName: '뱅골어', flag: '🇧🇩' },
  { code: 'it', name: 'Italiano', koreanName: '이탈리아어', flag: '🇮🇹' },
  { code: 'vi', name: 'Tiếng Việt', koreanName: '베트남어', flag: '🇻🇳' },
  { code: 'tr', name: 'Türkçe', koreanName: '터키어', flag: '🇹🇷' },
];
