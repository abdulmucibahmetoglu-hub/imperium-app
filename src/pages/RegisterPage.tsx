import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cloud, Eye, EyeOff, User, Mail, Phone, Building2 } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-900" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-80 h-80 bg-violet-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative text-center text-white">
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <div className="relative">
              <Cloud className="w-16 h-16 text-cyan-300" />
              <Cloud className="w-10 h-10 text-orange-300 absolute -top-2 -right-2" />
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              YapıBulut
            </span>
          </Link>
          <h2 className="text-2xl font-bold mb-4">14 Gün Ücretsiz Deneyin</h2>
          <p className="text-blue-300/70 text-lg mb-8">
            İnşaat projelerinizi tek platformdan yönetin
          </p>
          <div className="space-y-4 text-left max-w-sm mx-auto">
            {[
              'Sınırsız proje oluşturma',
              'Tüm modüllere erişim',
              'Mobil uygulama desteği',
              'Teknik destek',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 backdrop-blur border border-white/10 p-3 rounded-xl">
                <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 lg:hidden">
              <div className="relative">
                <Cloud className="w-12 h-12 text-blue-500" />
                <Cloud className="w-7 h-7 text-orange-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                YapıBulut
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-800">Ücretsiz Hesap Oluşturun</h2>
            <p className="text-gray-500 mt-2">14 gün boyunca tüm özellikleri ücretsiz deneyin</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ad Soyad"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <User className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta Adresi"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <Mail className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon Numarası"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <Phone className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
            </div>

            <div className="relative">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Firma Adı"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <Building2 className="w-5 h-5 text-gray-400 absolute right-3 top-3.5" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Şifre"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Şifre Tekrar"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-200 transition-all"
            >
              ÜCRETSİZ BAŞLAYIN
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Zaten hesabınız var mı?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Giriş Yapın
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
