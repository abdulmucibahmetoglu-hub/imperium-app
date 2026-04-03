import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cloud, Eye, EyeOff, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative text-center text-white">
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <div className="relative">
              <Cloud className="w-16 h-16 text-blue-400" />
              <Cloud className="w-10 h-10 text-orange-400 absolute -top-2 -right-2" />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              YapıBulut
            </span>
          </Link>
          <p className="text-blue-300/70 text-lg mt-4">İnşaat Yönetim Platformu</p>
          <div className="mt-12 grid grid-cols-2 gap-4 max-w-md mx-auto">
            {['Proje Yönetimi', 'Teknik Ofis', 'Satın Alma', 'Finans'].map((item) => (
              <div key={item} className="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-xl">
                <p className="text-sm font-medium text-blue-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="relative">
                <Cloud className="w-12 h-12 text-blue-500" />
                <Cloud className="w-7 h-7 text-orange-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                YapıBulut
              </span>
            </Link>
            <h2 className="text-xl font-semibold text-gray-800">Hesabınıza giriş yapın</h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Beni hatırla</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Şifremi unuttum?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-200 transition-all"
            >
              GİRİŞ YAP
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Hesabınız yok mu?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Ücretsiz Deneyin
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
