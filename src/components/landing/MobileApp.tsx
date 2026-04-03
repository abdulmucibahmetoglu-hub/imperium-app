import { Smartphone, Download } from 'lucide-react';

export default function MobileApp() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1 bg-violet-500/10 text-violet-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Mobil Uygulama
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mobil Uygulamamızdan Takip Edin
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">YapıBulut</span>&apos;un web uygulaması artık cebinizde! Telefonunuzun App Store (Apple)
              veya Play Store (Android) platformlarından indirerek ulaşabilirsiniz!
            </p>
            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all group">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">İndir</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all group">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">İndir</div>
                  <div className="text-sm font-medium">Play Store</div>
                </div>
              </button>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Uygulamayı Akıllı Telefonuz&apos;a indirin!</p>
                <p className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-sm font-medium">YapıBulut</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full blur-3xl" />
              <div className="relative w-64 h-96 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-6 text-white">
                <div className="w-20 h-4 bg-black/20 rounded-full mb-8" />
                <div className="space-y-3 w-full">
                  {[
                    { name: 'Yalıkavak Residences', type: 'Konut', city: 'Muğla' },
                    { name: 'Yomra Trend Evleri', type: 'Konut', city: 'Trabzon' },
                    { name: 'Maslak Meridian', type: 'Konut', city: 'İstanbul' },
                    { name: 'Metropol Bursa', type: 'Konut', city: 'Bursa' },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center gap-3 bg-white/15 backdrop-blur p-3 rounded-xl hover:bg-white/25 transition-colors">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{p.name}</div>
                        <div className="text-xs opacity-70">{p.type} · {p.city}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
