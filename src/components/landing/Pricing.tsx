import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
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
    <section id="fiyatlar" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Fiyatlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Önce ilk 14 gün ücretsiz deneyin!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">YapıBulut</span> işinize en uygun ürünleri seçme esnekliği sunar. Fiyatlandırmamız platformumuzda çalıştırdığınız
            inşaat hacmine dayalı olmakla birlikte, sınırsız iş dizini, görev yönetimi ve raporlama ile birlikte gelir.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className={`font-medium ${!yearly ? 'text-gray-900' : 'text-gray-400'}`}>Aylık</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              yearly ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-gray-300'
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
            <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-0.5 rounded-full">%35 daha hesaplı</span>
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group ${
                plan.popular
                  ? 'border-2 border-blue-500 shadow-lg shadow-blue-100 scale-105'
                  : 'border border-gray-100 hover:border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    En Popüler
                  </div>
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-sm font-bold mb-4 tracking-wider ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${yearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/Aylık</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Yıllık <span className="line-through">${plan.yearlyPrice}</span> faturalandırılır.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-6">
                {plan.users}
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-gray-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className={`block text-center py-3 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 group-hover:bg-blue-50 group-hover:text-blue-600'
                }`}
              >
                Ücretsiz Deneyin
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-blue-200">
              Özel teklifinize bir adım daha yaklaşın;<br />
              On-premise çözümler için kurumsal plan fiyatlandırmanızı öğrenin.
            </p>
          </div>
          <button className="relative mt-4 md:mt-0 px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:shadow-lg transition-all">
            Bizimle İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
}
