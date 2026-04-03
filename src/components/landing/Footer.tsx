import { Cloud, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureLinks = [
  'Siparişler', 'İş Programı', 'Güncel Durum', 'Günlük Rapor',
  'Hasar-Eksiklik', 'Bilgi Talepleri', 'Denetlemeler', 'Satış Durumu',
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Cloud className="w-8 h-8 text-blue-400" />
                <Cloud className="w-5 h-5 text-orange-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                YapıBulut
              </span>
            </Link>
            <p className="text-sm mb-2 text-gray-400">Görükle Mah. Üniversite 1. Cad. No: 933 Ulutek Teknopark</p>
            <p className="text-sm mb-4 text-gray-400">Ofis No: B-025 Nilüfer / Bursa</p>
            <p className="text-sm text-gray-400">Ofis: +90 224 248 09 09</p>
            <p className="text-sm mb-4 text-gray-400">Cep: +90 543 442 81 41</p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Özellikler</h4>
            <ul className="space-y-2">
              {featureLinks.map((link) => (
                <li key={link}>
                  <a href="#ozellikler" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">YapıBulut</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Kullanıcı Sözleşmesi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">E-Bülten</h4>
            <p className="text-sm mb-4 text-gray-400">YapıBulut&apos;daki yeniliklerden haberdar olun!</p>
            <p className="text-sm mb-2 text-gray-400">E-posta Adresinizi Girin <span className="text-red-400">*</span></p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-sm text-gray-500">
          © 2019-2024 YapıBulut. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
