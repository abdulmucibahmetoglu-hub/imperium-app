import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs">Yeni</span>
              Mobil Uygulamamız Yayında
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              İnşaat projelerinizin yönetimi{' '}
              <span className="text-blue-600">YapıBulut</span> ile daha kolay
            </h1>

            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              İnşaat projelerinizi tek bir platformdan kolayca yönetin. Saha ile Ofisi
              birbirine bağlayın, Zamanında ve Bütçe dahilinde projelerinizi teslim edin.
              Kaliteyi arttırın, Maliyetleri düşürün
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/register"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg transition-colors shadow-lg shadow-blue-200"
              >
                Ücretsiz Başlayın
              </Link>
              <button className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 fill-blue-600" />
                </div>
                <span className="font-medium">Tanıtım Videomuzu İzleyin</span>
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-500 rounded-full scale-125 -z-10 opacity-15 blur-3xl" />
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-md px-3 py-1 text-gray-400 text-xs">
                    desktop.yapibulut.com/projePaneli
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-100">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">YB</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">Proje Paneli · Yönetici Paneli</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-500 mb-2">Güncel Durum Takibi</div>
                  <div className="h-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-end px-2 pb-2">
                    <div className="flex items-end gap-1 w-full">
                      {[40, 60, 45, 80, 55, 70, 90, 65, 75, 85, 50, 60].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-blue-400 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="bg-blue-50 p-2 rounded text-center">
                      <div className="text-lg font-bold text-blue-600">40</div>
                      <div className="text-xs text-gray-500">Aktif Proje</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded text-center">
                      <div className="text-lg font-bold text-green-600">156</div>
                      <div className="text-xs text-gray-500">Görev</div>
                    </div>
                    <div className="bg-orange-50 p-2 rounded text-center">
                      <div className="text-lg font-bold text-orange-600">89%</div>
                      <div className="text-xs text-gray-500">Tamamlanan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
