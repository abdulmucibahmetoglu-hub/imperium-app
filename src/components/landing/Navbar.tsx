import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';
import { useTheme, type ThemeName } from '../../context/ThemeContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const { themeName, setThemeName, allThemes } = useTheme();

  const themeSwatches: Record<ThemeName, string> = {
    ocean: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    sunset: 'bg-orange-500',
    purple: 'bg-violet-500',
    rose: 'bg-rose-500',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Cloud className="w-10 h-10 text-blue-500" />
              <Cloud className="w-6 h-6 text-orange-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              YapıBulut
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#ozellikler" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm tracking-wide">
              ÖZELLİKLER
            </a>
            <a href="#platformlar" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm tracking-wide">
              PLATFORMLAR
            </a>
            <a href="#fiyatlar" className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm tracking-wide">
              FİYATLAR
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme picker */}
            <div className="relative">
              <button
                onClick={() => setThemePickerOpen(!themePickerOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                title="Tema Seç"
              >
                <div className={`w-4 h-4 rounded-full ${themeSwatches[themeName]}`} />
                <span className="text-xs text-gray-500">Tema</span>
              </button>
              {themePickerOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border p-3 z-50 w-44">
                  <p className="text-xs font-medium text-gray-500 mb-2">Tema Seçin</p>
                  {(Object.keys(allThemes) as ThemeName[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => { setThemeName(key); setThemePickerOpen(false); }}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                        themeName === key ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full ${themeSwatches[key]} ring-2 ring-offset-1 ${
                        themeName === key ? 'ring-gray-400' : 'ring-transparent'
                      }`} />
                      {allThemes[key].label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-200 font-medium transition-all text-sm"
            >
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 font-medium transition-colors text-sm"
            >
              Ücretsiz Deneyin
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <a href="#ozellikler" className="px-4 py-2 text-gray-600 hover:text-blue-600">ÖZELLİKLER</a>
              <a href="#platformlar" className="px-4 py-2 text-gray-600 hover:text-blue-600">PLATFORMLAR</a>
              <a href="#fiyatlar" className="px-4 py-2 text-gray-600 hover:text-blue-600">FİYATLAR</a>
              <div className="flex items-center gap-2 px-4 py-2">
                <span className="text-sm text-gray-500">Tema:</span>
                {(Object.keys(allThemes) as ThemeName[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setThemeName(key)}
                    className={`w-6 h-6 rounded-full ${themeSwatches[key]} ${themeName === key ? 'ring-2 ring-offset-1 ring-gray-400' : ''}`}
                    title={allThemes[key].label}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Link to="/login" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full text-center font-medium">Giriş Yap</Link>
                <Link to="/register" className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-full text-center font-medium">Ücretsiz Deneyin</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
