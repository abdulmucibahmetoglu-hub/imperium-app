import { CheckCircle2 } from 'lucide-react';

const steps = [
  { text: 'Kolayca yeni projenizi ekleyin veya düzenleyin', num: '01' },
  { text: 'Kullanıcılarınızı davet edin (Proje Müdürü, Şantiye Şefi, Taşeron, Ofis Kullanıcısı, Mühendis, Mimar vb..)', num: '02' },
  { text: 'Şablonlarınızı oluşturup, Projenizde kullanın', num: '03' },
  { text: 'İş atamaları yapın veya atanan işleri inceleyin', num: '04' },
  { text: 'Daha sonrasında arkanıza yaslanıp Projenizin takibini sağlayın', num: '05' },
];

export default function HowToUse() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1 bg-rose-500/10 text-rose-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            İşleyiş
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nasıl Kullanılır?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-950 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    <span className="text-sm font-medium text-gray-600">Proje Paneli</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {['Teknik Ofis', 'Satın Alma', 'Proje Yönetimi', 'Finans'].map((item) => (
                      <div key={item} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-2 rounded-lg text-center">
                        <div className="text-xs text-blue-600 font-medium">{item}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl text-white text-center">
                      <div className="text-2xl font-bold">249</div>
                      <div className="text-xs opacity-80">Toplam İş</div>
                    </div>
                    <div className="bg-white border border-gray-100 p-3 rounded-xl text-center">
                      <div className="text-xs text-gray-500 mb-1">Tamamlanan</div>
                      <div className="flex gap-1">
                        {[11, 21, 36].map((n) => (
                          <span key={n} className="bg-emerald-100 text-emerald-600 text-xs px-1.5 py-0.5 rounded-md">{n}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border border-gray-100 p-3 rounded-xl text-center">
                      <div className="text-xs text-gray-500 mb-1">Bekleyen</div>
                      <div className="flex gap-1">
                        {[8, 14, 22].map((n) => (
                          <span key={n} className="bg-orange-100 text-orange-600 text-xs px-1.5 py-0.5 rounded-md">{n}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Kurulum gerektirmeden <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">5 adımda</span> kullanmaya başlayın
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Yönetim süreçlerinde ki yoğun bilgi birikimi gerektiren işlemleri
              basitleştirin, süreçlerin düzen içerisinde ve belirlenen bir yetki
              çerçevesinde ilerlemesini sağlayarak:
            </p>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{step.num}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{step.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
