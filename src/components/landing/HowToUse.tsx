import { CheckCircle2 } from 'lucide-react';

const steps = [
  'Kolayca yeni projenizi ekleyin veya düzenleyin',
  'Kullanıcılarınızı davet edin (Proje Müdürü, Şantiye Şefi, Taşeron, Ofis Kullanıcısı, Mühendis, Mimar vb..)',
  'Şablonlarınızı oluşturup, Projenizde kullanın',
  'İş atamaları yapın veya atanan işleri inceleyin',
  'Daha sonrasında arkanıza yaslanıp Projenizin takibini sağlayın',
];

export default function HowToUse() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            İşleyiş
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nasıl Kullanılır?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="p-6 bg-gray-100">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm font-medium text-gray-600">Proje Paneli</span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {['Teknik Ofis', 'Satın Alma', 'Proje Yönetimi', 'Finans'].map((item) => (
                    <div key={item} className="bg-blue-50 p-2 rounded text-center">
                      <div className="text-xs text-blue-600 font-medium">{item}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white text-center">
                    <div className="text-2xl font-bold">249</div>
                    <div className="text-xs opacity-80">Toplam İş</div>
                  </div>
                  <div className="bg-white border p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-500 mb-1">Tamamlanan</div>
                    <div className="flex gap-1">
                      {[11, 21, 36].map((n) => (
                        <span key={n} className="bg-green-100 text-green-600 text-xs px-1.5 py-0.5 rounded">{n}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white border p-3 rounded-lg text-center">
                    <div className="text-xs text-gray-500 mb-1">Bekleyen</div>
                    <div className="flex gap-1">
                      {[8, 14, 22].map((n) => (
                        <span key={n} className="bg-orange-100 text-orange-600 text-xs px-1.5 py-0.5 rounded">{n}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Kurulum gerektirmeden <span className="text-blue-600">5 adımda</span> kullanmaya başlayın
            </h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Yönetim süreçlerinde ki yoğun bilgi birikimi gerektiren işlemleri
              basitleştirin, süreçlerin düzen içerisinde ve belirlenen bir yetki
              çerçevesinde ilerlemesini sağlayarak:
            </p>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
