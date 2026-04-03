import { DollarSign, TrendingUp, TrendingDown, CreditCard, ArrowUpRight, ArrowDownRight, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const monthlyData = [
  { name: 'Oca', gelir: 1200000, gider: 980000 },
  { name: 'Şub', gelir: 1500000, gider: 1100000 },
  { name: 'Mar', gelir: 1800000, gider: 1400000 },
  { name: 'Nis', gelir: 1350000, gider: 1250000 },
  { name: 'May', gelir: 2100000, gider: 1600000 },
  { name: 'Haz', gelir: 1900000, gider: 1500000 },
];

const transactions = [
  { id: 1, desc: 'Çimento ödemesi - Bursa Çimento', type: 'gider', amount: '₺875.000', date: '28.03.2024', project: 'Metropol Bursa' },
  { id: 2, desc: 'Daire satışı - B Blok 5. Kat', type: 'gelir', amount: '₺2.450.000', date: '27.03.2024', project: 'Metropol Bursa' },
  { id: 3, desc: 'İşçilik ödemesi - Mart', type: 'gider', amount: '₺340.000', date: '26.03.2024', project: 'Maslak Meridian' },
  { id: 4, desc: 'Hakediş tahsilatı', type: 'gelir', amount: '₺1.800.000', date: '25.03.2024', project: 'Yalıkavak Residences' },
  { id: 5, desc: 'Elektrik tesisat ödemesi', type: 'gider', amount: '₺520.000', date: '24.03.2024', project: 'Yomra Trend' },
];

export default function Finans() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Finans</h1>
          <p className="text-gray-500 text-sm">Tahsilat ve finansal varlıklarınızı yönetin</p>
        </div>
        <button
          onClick={() => exportToPdf({
            title: 'Finans',
            subtitle: 'Son islemler',
            columns: [
              { header: 'Aciklama', dataKey: 'desc' },
              { header: 'Proje', dataKey: 'project' },
              { header: 'Tarih', dataKey: 'date' },
              { header: 'Tur', dataKey: 'type' },
              { header: 'Tutar', dataKey: 'amount' },
            ],
            data: transactions.map((t) => ({ desc: t.desc, project: t.project, date: t.date, type: t.type === 'gelir' ? 'Gelir' : 'Gider', amount: t.amount })),
            filename: 'Finans.pdf',
          })}
          className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <FileDown className="w-4 h-4" /> PDF
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-50 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
            <div className="flex items-center gap-1 text-green-600 text-sm"><ArrowUpRight className="w-4 h-4" />+12%</div>
          </div>
          <div className="text-2xl font-bold text-gray-900">₺9.85M</div>
          <div className="text-sm text-gray-500">Toplam Gelir</div>
        </div>
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-red-50 rounded-lg"><TrendingDown className="w-5 h-5 text-red-600" /></div>
            <div className="flex items-center gap-1 text-red-500 text-sm"><ArrowDownRight className="w-4 h-4" />+8%</div>
          </div>
          <div className="text-2xl font-bold text-gray-900">₺7.83M</div>
          <div className="text-sm text-gray-500">Toplam Gider</div>
        </div>
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-blue-50 rounded-lg"><DollarSign className="w-5 h-5 text-blue-600" /></div>
          </div>
          <div className="text-2xl font-bold text-gray-900">₺2.02M</div>
          <div className="text-sm text-gray-500">Net Kar</div>
        </div>
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-purple-50 rounded-lg"><CreditCard className="w-5 h-5 text-purple-600" /></div>
          </div>
          <div className="text-2xl font-bold text-gray-900">₺1.45M</div>
          <div className="text-sm text-gray-500">Bekleyen Tahsilat</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Gelir / Gider Karşılaştırma</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value: number) => `₺${(value / 1000000).toFixed(2)}M`} />
              <Bar dataKey="gelir" fill="#22c55e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="gider" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nakit Akış Trendi</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
              <Tooltip formatter={(value: number) => `₺${(value / 1000000).toFixed(2)}M`} />
              <Line type="monotone" dataKey="gelir" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="gider" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-5 py-4 border-b"><h3 className="font-semibold text-gray-900">Son İşlemler</h3></div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Açıklama</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Proje</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
              <th className="text-right px-4 py-3 font-medium text-gray-600">Tutar</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${t.type === 'gelir' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-gray-900">{t.desc}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-500">{t.project}</td>
                <td className="px-4 py-3 text-gray-500">{t.date}</td>
                <td className={`px-4 py-3 text-right font-medium ${t.type === 'gelir' ? 'text-green-600' : 'text-red-600'}`}>
                  {t.type === 'gelir' ? '+' : '-'}{t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
