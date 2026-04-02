import { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'BAŞLANGIÇ',
    monthlyPrice: 19,
    yearlyPrice: 228,
    users: '1 Kullanıcı (Kullanıcı Başına)',
    features: ['Ücretsiz Güncellemeler', 'Günlük Yedekleme'],
    popular: false,
  },
  {
    name: 'STANDART',
    monthlyPrice: 125,
    yearlyPrice: 1500,
    users: '20 Kullanıcı',
    features: ['Sınırsız Proje', 'Ücretsiz Güncellemeler', 'Günlük Yedekleme'],
    popular: false,
  },
  {
    name: 'PROFESYONEL',
    monthlyPrice: 275,
    yearlyPrice: 3300,
    users: '50 Kullanıcı',
    features: ['Sınırsız Proje', 'Sınırsız Destek', 'Ücretsiz Güncellemeler', 'Günlük Yedekleme'],
    popular: true,
  },
  {
    name: 'PREMİUM',
    monthlyPrice: 700,
    yearlyPrice: 8400,
    users: '150 Kullanıcı',
    features: ['Sınırsız Proje', 'Sınırsız Destek', 'Sınırsız Veri Girişi', 'Ücretsiz Güncellemeler', 'Günlük Yedekleme'],
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="fiyatlar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Fiyatlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Önce ilk 14 gün ücretsiz deneyin!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            <span className="text-blue-600 font-medium">YapıBulut</span> işinize en uygun ürünleri seçme esnekliği sunar. Fiyatlandırmamız platformumuzda çalıştırdığınız
            inşaat hacmine dayalı olmakla birlikte, sınırsız iş dizini, görev yönetimi ve raporlama ile birlikte gelir.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className={`font-medium ${!yearly ? 'text-gray-900' : 'text-gray-400'}`}>Aylık</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              yearly ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                yearly ? 'translate-x-7' : 'translate-x-0.5'
              }`}
            />
          </button>
          <span className={`font-medium ${yearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Yıllık{' '}
            <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">%35 daha hesaplı</span>
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl p-6 border-2 transition-shadow hover:shadow-lg ${
                plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-0 -right-0">
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    En Popüler
                  </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-sm font-bold mb-4 ${plan.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${yearly ? plan.monthlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/Aylık</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Yıllık <span className="line-through">${plan.yearlyPrice}</span> faturalandırılır.
                </p>
              </div>

              <div className="bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-6">
                {plan.users}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className={`block text-center py-2.5 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                Ücretsiz Deneyin
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-blue-600 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-blue-100">
              Özel teklifinize bir adım daha yaklaşın;<br />
              On-premise çözümler için kurumsal plan fiyatlandırmanızı öğrenin.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Bizimle İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
}
