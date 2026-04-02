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
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: ShoppingCart,
    title: 'Satın Alma',
    desc: 'Ürün Talepleri ve Siparişlerinizi başından sonuna kadar takip edin',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: FolderKanban,
    title: 'Proje Yönetimi',
    desc: "İş Programı, Güncel Durum Takipleri ve Günlük Raporlar'a tek bir yerden ulaşın",
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Kalite & Güvenlik',
    desc: 'Hasar-Eksiklik Listesi, Bilgi talepleri ve Denetlemeler özellikleriyle kontrolü sağlayın',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: DollarSign,
    title: 'Finans',
    desc: 'Tahsilat ve Finansal varlıklarınızı bu alanda yönetin',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: TrendingUp,
    title: 'Satış',
    desc: 'Müşteriler, Teklifler, Satış Durumu ve Müşteri Değişiklik İstekleri ile süreçlerinizi takip edin',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
];

const detailFeatures = [
  {
    icon: ClipboardList,
    title: 'Güncel Durum Takipleri',
    desc: 'Oluşturulan şablonlara bağlı olarak; Daire, Blok, veya Bağımsız bölümlerin Tamamlanma Oranları',
  },
  {
    icon: AlertTriangle,
    title: 'Hasar-Eksiklik Listesi',
    desc: 'Şantiyenizdeki eksik veya kalite açısından uymayan, telafi edilmesi gereken işlerin Eksikler Tutanağı',
  },
  {
    icon: FileText,
    title: 'Günlük Rapor',
    desc: 'Şantiyenizin anlık olarak bildirimlerini, değişimlerini görüntüleyin. Kağıt tabanlı bir iş akışının dijitalleşmesiyle, raporlara tek bir yerden ulaşın',
  },
  {
    icon: CalendarDays,
    title: 'İş Programı',
    desc: 'Proje planının iş akışını görüntüleyin, tüm ekibin hem hız hem de düzen kazanmasını sağlayın, karışıklığı en aza indirin',
  },
  {
    icon: PackageSearch,
    title: 'Siparişler',
    desc: "Sipariş süreçlerini başından sonuna kadar takip edin, hangi Blok'a, Kat'a veya Bağımsız Bölüm'e ne kadarlık sipariş geçildiğini raporlayın",
  },
  {
    icon: CheckSquare,
    title: 'Denetlemeler',
    desc: 'Anketleriniz, Kontrol Formlarınız, Yapı Denetim Formlarınız, Değerlendirme Formlarınız veya Kontrol Listeleriniz',
  },
  {
    icon: MessageSquare,
    title: 'Bilgi Talepleri',
    desc: 'Proje ekibindeki bir kişiden veya Taşeron\'dan ihtiyaç duyduğunuz bilgiyi, Maliyet ve Süre etkilerinin saptanabilmesi için yazılı olarak kayıt altında tutun',
  },
  {
    icon: Users,
    title: 'Görevlendirme',
    desc: 'Ekip üyelerine görev atayın, atanan görevleri takip edin, ilerleme durumunu inceleyerek raporlar alın',
  },
  {
    icon: BarChart3,
    title: 'Raporlama',
    desc: 'İş ve saha operasyonlarınız hakkında bilgi edinin, Riski azaltmak, süreçleri kolaylaştırmak ve veriye dayalı kararlar vermek için proje detaylarınıza erişin',
  },
];

export default function Features() {
  return (
    <section id="ozellikler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Özellikler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Neleri Kolaylaştırıyoruz?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            <span className="text-blue-600 font-medium">YapıBulut</span> ile ihtiyacınız olan proje yönetim süreçlerini kolayca takip edebilir, projenizi ve
            ekibinizi tek platformda yöneterek daha hızlı ve daha etkili kararlar alabilirsiniz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((f) => (
            <div key={f.title} className="flex items-start gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className={`p-3 rounded-xl ${f.bg} group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailFeatures.map((f) => (
            <div key={f.title} className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="p-2 bg-blue-50 rounded-lg w-fit mb-4">
                <f.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
