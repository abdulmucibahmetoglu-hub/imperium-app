import { Monitor, Smartphone, Tablet, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const platforms = [
  {
    id: 'web',
    label: 'Web',
    icon: Monitor,
    title: 'Bilgisayarınızdan kurulumsuz erişim',
    desc: "YapıBulut'un endüstri profesyonelleri için bulut tabanlı inşaat yönetim yazılımını kullanarak web üzerinden inşaat projesinin tüm yönlerini yönetin.",
    features: ['Kullanımı kolay', 'Gerçek zamanlı veri aktarımı', 'Şantiye işbirliği', 'Profesyonel iletişim', 'Kolayca erişim'],
  },
  {
    id: 'mobil',
    label: 'Mobil',
    icon: Smartphone,
    title: 'Mobil cihazınızdan her yerde erişim',
    desc: "YapıBulut'un mobil uygulamasını telefonunuzdan kullanarak şantiyeden ofise tüm süreçleri yönetin.",
    features: ['Offline çalışma', 'Fotoğraf ekleme', 'Konum takibi', 'Anlık bildirimler', 'Hızlı erişim'],
  },
  {
    id: 'tablet',
    label: 'Tablet',
    icon: Tablet,
    title: 'Tabletinizden verimli çalışın',
    desc: 'Geniş ekran deneyimiyle sahada daha verimli çalışın, planlarınızı inceleyin ve raporlarınızı oluşturun.',
    features: ['Geniş ekran deneyimi', 'Plan görüntüleme', 'Dokunmatik çizim', 'Hızlı rapor', 'Kolay navigasyon'],
  },
];

export default function Platforms() {
  const [activePlatform, setActivePlatform] = useState('web');
  const active = platforms.find((p) => p.id === activePlatform) || platforms[0];

  return (
    <section id="platformlar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Platformlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bulut Tabanlı <span className="text-blue-600">YapıBulut</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            İnternete bağlı tüm cihazlardan erişilebilir
          </p>
          <p className="text-blue-600">
            YapıBulut ile her nerede olursanız olun 7/24 projelerinize ulaşabilirsiniz
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activePlatform === p.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              {active.id === 'web' && (
                <div className="w-80 h-56 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                  <Monitor className="w-24 h-24 text-blue-300" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <span className="text-xs font-bold text-center">7/24<br/>Erişim</span>
                  </div>
                </div>
              )}
              {active.id === 'mobil' && (
                <div className="w-48 h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center shadow-lg border-4 border-gray-200">
                  <Smartphone className="w-20 h-20 text-blue-300" />
                </div>
              )}
              {active.id === 'tablet' && (
                <div className="w-72 h-52 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg border-4 border-gray-200">
                  <Tablet className="w-20 h-20 text-blue-300" />
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">»</span> {active.title}
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{active.desc}</p>
            <div className="space-y-3">
              {active.features.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
