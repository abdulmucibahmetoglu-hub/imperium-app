import { Link } from 'react-router-dom';
import { Play, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-40 w-64 h-64 bg-violet-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
              <Sparkles className="w-4 h-4" />
              <span>Mobil Uygulamamız Yayında</span>
              <ArrowRight className="w-3 h-3" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              İnşaat projelerinizin yönetimi{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">YapıBulut</span>{' '}
              ile daha kolay
            </h1>

            <p className="text-blue-200/80 text-lg mb-10 leading-relaxed max-w-lg">
              İnşaat projelerinizi tek bir platformdan kolayca yönetin. Saha ile Ofisi
              birbirine bağlayın, Zamanında ve Bütçe dahilinde projelerinizi teslim edin.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/register"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                Ücretsiz Başlayın
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                <span className="font-medium">Tanıtım Videosu</span>
              </button>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-300/70">Aktif Proje</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-blue-300/70">Görev Takibi</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-blue-300/70">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />
            <div className="relative bg-gray-900/80 backdrop-blur rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/90 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded-md px-3 py-1 text-gray-400 text-xs">
                    desktop.yapibulut.com/projePaneli
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">YB</span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">Proje Paneli</div>
                      <div className="text-xs text-gray-400">Yönetici Paneli</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-500 mb-2">Güncel Durum Takibi</div>
                  <div className="h-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg flex items-end px-2 pb-2">
                    <div className="flex items-end gap-1 w-full">
                      {[40, 60, 45, 80, 55, 70, 90, 65, 75, 85, 50, 60].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-2 rounded-lg text-center">
                      <div className="text-lg font-bold text-blue-600">40</div>
                      <div className="text-xs text-gray-500">Aktif Proje</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-100 p-2 rounded-lg text-center">
                      <div className="text-lg font-bold text-emerald-600">156</div>
                      <div className="text-xs text-gray-500">Görev</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-2 rounded-lg text-center">
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
