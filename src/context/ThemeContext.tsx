import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type ThemeName = 'ocean' | 'emerald' | 'sunset' | 'purple' | 'rose';

interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  primaryBg: string;
  primaryBgHover: string;
  primaryGradientFrom: string;
  primaryGradientTo: string;
  accent: string;
  accentLight: string;
  sidebarBg: string;
  sidebarHover: string;
  sidebarActive: string;
  sidebarBorder: string;
  label: string;
}

const themes: Record<ThemeName, ThemeColors> = {
  ocean: {
    primary: 'text-blue-600',
    primaryLight: 'text-blue-400',
    primaryDark: 'text-blue-800',
    primaryBg: 'bg-blue-600',
    primaryBgHover: 'hover:bg-blue-700',
    primaryGradientFrom: 'from-blue-600',
    primaryGradientTo: 'to-cyan-500',
    accent: 'text-orange-500',
    accentLight: 'text-orange-400',
    sidebarBg: 'bg-slate-900',
    sidebarHover: 'hover:bg-slate-800',
    sidebarActive: 'bg-blue-600',
    sidebarBorder: 'border-slate-800',
    label: 'Okyanus',
  },
  emerald: {
    primary: 'text-emerald-600',
    primaryLight: 'text-emerald-400',
    primaryDark: 'text-emerald-800',
    primaryBg: 'bg-emerald-600',
    primaryBgHover: 'hover:bg-emerald-700',
    primaryGradientFrom: 'from-emerald-600',
    primaryGradientTo: 'to-teal-500',
    accent: 'text-amber-500',
    accentLight: 'text-amber-400',
    sidebarBg: 'bg-gray-900',
    sidebarHover: 'hover:bg-gray-800',
    sidebarActive: 'bg-emerald-600',
    sidebarBorder: 'border-gray-800',
    label: 'Zümrüt',
  },
  sunset: {
    primary: 'text-orange-600',
    primaryLight: 'text-orange-400',
    primaryDark: 'text-orange-800',
    primaryBg: 'bg-orange-600',
    primaryBgHover: 'hover:bg-orange-700',
    primaryGradientFrom: 'from-orange-500',
    primaryGradientTo: 'to-rose-500',
    accent: 'text-blue-500',
    accentLight: 'text-blue-400',
    sidebarBg: 'bg-zinc-900',
    sidebarHover: 'hover:bg-zinc-800',
    sidebarActive: 'bg-orange-600',
    sidebarBorder: 'border-zinc-800',
    label: 'Gün Batımı',
  },
  purple: {
    primary: 'text-violet-600',
    primaryLight: 'text-violet-400',
    primaryDark: 'text-violet-800',
    primaryBg: 'bg-violet-600',
    primaryBgHover: 'hover:bg-violet-700',
    primaryGradientFrom: 'from-violet-600',
    primaryGradientTo: 'to-purple-500',
    accent: 'text-pink-500',
    accentLight: 'text-pink-400',
    sidebarBg: 'bg-gray-900',
    sidebarHover: 'hover:bg-gray-800',
    sidebarActive: 'bg-violet-600',
    sidebarBorder: 'border-gray-800',
    label: 'Mor',
  },
  rose: {
    primary: 'text-rose-600',
    primaryLight: 'text-rose-400',
    primaryDark: 'text-rose-800',
    primaryBg: 'bg-rose-600',
    primaryBgHover: 'hover:bg-rose-700',
    primaryGradientFrom: 'from-rose-500',
    primaryGradientTo: 'to-pink-500',
    accent: 'text-teal-500',
    accentLight: 'text-teal-400',
    sidebarBg: 'bg-slate-900',
    sidebarHover: 'hover:bg-slate-800',
    sidebarActive: 'bg-rose-600',
    sidebarBorder: 'border-slate-800',
    label: 'Gül',
  },
};

interface ThemeContextValue {
  themeName: ThemeName;
  theme: ThemeColors;
  setThemeName: (name: ThemeName) => void;
  allThemes: typeof themes;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('yapibulut-theme');
    return (saved as ThemeName) || 'ocean';
  });

  useEffect(() => {
    localStorage.setItem('yapibulut-theme', themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{ themeName, theme: themes[themeName], setThemeName, allThemes: themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
