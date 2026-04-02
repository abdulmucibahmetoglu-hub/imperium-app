import { Cloud, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureLinks = [
  'Siparişler', 'İş Programı', 'Güncel Durum', 'Günlük Rapor',
  'Hasar-Eksiklik', 'Bilgi Talepleri', 'Denetlemeler', 'Satış Durumu',
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Cloud className="w-8 h-8 text-blue-400" />
                <Cloud className="w-5 h-5 text-orange-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-blue-400">
                Yapı<span className="text-white">Bulut</span>
              </span>
            </Link>
            <p className="text-sm mb-2">Görükle Mah. Üniversite 1. Cad. No: 933 Ulutek Teknopark</p>
            <p className="text-sm mb-4">Ofis No: B-025 Nilüfer / Bursa</p>
            <p className="text-sm">Ofis: +90 224 248 09 09</p>
            <p className="text-sm mb-4">Cep: +90 543 442 81 41</p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Özellikler</h4>
            <ul className="space-y-2">
              {featureLinks.map((link) => (
                <li key={link}>
                  <a href="#ozellikler" className="text-sm hover:text-blue-400 transition-colors">
                    {'> '}{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">YapıBulut</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  {'> '}Kullanıcı Sözleşmesi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                  {'> '}Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">E-Bülten</h4>
            <p className="text-sm mb-4">YapıBulut'daki yeniliklerden haberdar olun!</p>
            <p className="text-sm mb-2">E-posta Adresinizi Girin <span className="text-red-500">*</span></p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2019-2024 YapıBulut. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
