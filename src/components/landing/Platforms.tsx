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
    <section id="platformlar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Platformlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bulut Tabanlı <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">YapıBulut</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            İnternete bağlı tüm cihazlardan erişilebilir
          </p>
          <p className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium mt-1">
            YapıBulut ile her nerede olursanız olun 7/24 projelerinize ulaşabilirsiniz
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-14">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activePlatform === p.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <p.icon className="w-4 h-4" />
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              {active.id === 'web' && (
                <div className="w-80 h-56 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center shadow-xl border border-blue-200/50">
                  <Monitor className="w-24 h-24 text-blue-400" />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="text-xs font-bold text-center">7/24<br/>Erişim</span>
                  </div>
                </div>
              )}
              {active.id === 'mobil' && (
                <div className="w-48 h-80 bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-xl border-4 border-white">
                  <Smartphone className="w-20 h-20 text-violet-400" />
                </div>
              )}
              {active.id === 'tablet' && (
                <div className="w-72 h-52 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-xl border-4 border-white">
                  <Tablet className="w-20 h-20 text-emerald-400" />
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">»</span> {active.title}
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{active.desc}</p>
            <div className="space-y-3">
              {active.features.map((feat) => (
                <div key={feat} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
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
