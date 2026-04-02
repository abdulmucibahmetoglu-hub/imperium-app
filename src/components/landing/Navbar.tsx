import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Cloud className="w-10 h-10 text-blue-500" />
              <Cloud className="w-6 h-6 text-orange-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-bold text-blue-600">
              Yapı<span className="text-blue-800">Bulut</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#ozellikler" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              ÖZELLİKLER
            </a>
            <a href="#platformlar" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              PLATFORMLAR
            </a>
            <a href="#fiyatlar" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              FİYATLAR
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Giriş Yap
            </Link>
            <Link
              to="/register"
              className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors"
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
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <a href="#ozellikler" className="px-4 py-2 text-gray-600 hover:text-blue-600">ÖZELLİKLER</a>
              <a href="#platformlar" className="px-4 py-2 text-gray-600 hover:text-blue-600">PLATFORMLAR</a>
              <a href="#fiyatlar" className="px-4 py-2 text-gray-600 hover:text-blue-600">FİYATLAR</a>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Link to="/login" className="px-5 py-2 bg-blue-600 text-white rounded-lg text-center">Giriş Yap</Link>
                <Link to="/register" className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-lg text-center">Ücretsiz Deneyin</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
