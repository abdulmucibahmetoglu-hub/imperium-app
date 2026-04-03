import {
  Ruler,
  ShoppingCart,
  FolderKanban,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  ClipboardList,
  AlertTriangle,
  FileText,
  CalendarDays,
  PackageSearch,
  CheckSquare,
  MessageSquare,
  Users,
  BarChart3,
} from 'lucide-react';

const mainFeatures = [
  {
    icon: Ruler,
    title: 'Teknik Ofis',
    desc: "Keşif, Sözleşme ve Hakediş'e tek bir yerden ulaşın, hem hız hem de düzen kazanmayı sağlayın",
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: ShoppingCart,
    title: 'Satın Alma',
    desc: 'Ürün Talepleri ve Siparişlerinizi başından sonuna kadar takip edin',
    gradient: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: FolderKanban,
    title: 'Proje Yönetimi',
    desc: "İş Programı, Güncel Durum Takipleri ve Günlük Raporlar'a tek bir yerden ulaşın",
    gradient: 'from-indigo-500 to-blue-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: ShieldCheck,
    title: 'Kalite & Güvenlik',
    desc: 'Hasar-Eksiklik Listesi, Bilgi talepleri ve Denetlemeler özellikleriyle kontrolü sağlayın',
    gradient: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: DollarSign,
    title: 'Finans',
    desc: 'Tahsilat ve Finansal varlıklarınızı bu alanda yönetin',
    gradient: 'from-amber-500 to-yellow-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Satış',
    desc: 'Müşteriler, Teklifler, Satış Durumu ve Müşteri Değişiklik İstekleri ile süreçlerinizi takip edin',
    gradient: 'from-rose-500 to-pink-400',
    bg: 'bg-rose-500/10',
  },
];

const detailFeatures = [
  {
    icon: ClipboardList,
    title: 'Güncel Durum Takipleri',
    desc: 'Oluşturulan şablonlara bağlı olarak; Daire, Blok, veya Bağımsız bölümlerin Tamamlanma Oranları',
    color: 'text-blue-500',
  },
  {
    icon: AlertTriangle,
    title: 'Hasar-Eksiklik Listesi',
    desc: 'Şantiyenizdeki eksik veya kalite açısından uymayan, telafi edilmesi gereken işlerin Eksikler Tutanağı',
    color: 'text-orange-500',
  },
  {
    icon: FileText,
    title: 'Günlük Rapor',
    desc: 'Şantiyenizin anlık olarak bildirimlerini, değişimlerini görüntüleyin. Kağıt tabanlı bir iş akışının dijitalleşmesiyle, raporlara tek bir yerden ulaşın',
    color: 'text-emerald-500',
  },
  {
    icon: CalendarDays,
    title: 'İş Programı',
    desc: 'Proje planının iş akışını görüntüleyin, tüm ekibin hem hız hem de düzen kazanmasını sağlayın, karışıklığı en aza indirin',
    color: 'text-violet-500',
  },
  {
    icon: PackageSearch,
    title: 'Siparişler',
    desc: "Sipariş süreçlerini başından sonuna kadar takip edin, hangi Blok'a, Kat'a veya Bağımsız Bölüm'e ne kadarlık sipariş geçildiğini raporlayın",
    color: 'text-cyan-500',
  },
  {
    icon: CheckSquare,
    title: 'Denetlemeler',
    desc: 'Anketleriniz, Kontrol Formlarınız, Yapı Denetim Formlarınız, Değerlendirme Formlarınız veya Kontrol Listeleriniz',
    color: 'text-teal-500',
  },
  {
    icon: MessageSquare,
    title: 'Bilgi Talepleri',
    desc: 'Proje ekibindeki bir kişiden veya Taşeron\'dan ihtiyaç duyduğunuz bilgiyi, Maliyet ve Süre etkilerinin saptanabilmesi için yazılı olarak kayıt altında tutun',
    color: 'text-indigo-500',
  },
  {
    icon: Users,
    title: 'Görevlendirme',
    desc: 'Ekip üyelerine görev atayın, atanan görevleri takip edin, ilerleme durumunu inceleyerek raporlar alın',
    color: 'text-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Raporlama',
    desc: 'İş ve saha operasyonlarınız hakkında bilgi edinin, Riski azaltmak, süreçleri kolaylaştırmak ve veriye dayalı kararlar vermek için proje detaylarınıza erişin',
    color: 'text-amber-500',
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Özellikler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neleri Kolaylaştırıyoruz?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">YapıBulut</span> ile ihtiyacınız olan proje yönetim süreçlerini kolayca takip edebilir, projenizi ve
            ekibinizi tek platformda yöneterek daha hızlı ve daha etkili kararlar alabilirsiniz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainFeatures.map((f) => (
            <div key={f.title} className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`relative p-3 rounded-xl ${f.bg} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <f.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="relative text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-900">Detaylı Modüller</h3>
          <p className="text-gray-400 mt-2">Her ihtiyacınız için özel çözümler</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {detailFeatures.map((f) => (
            <div key={f.title} className="group p-5 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
