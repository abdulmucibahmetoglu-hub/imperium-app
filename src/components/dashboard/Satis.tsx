import { useState } from 'react';
import { Plus, Search, Users, TrendingUp, Target, DollarSign, FileDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { exportToPdf } from '../../utils/pdfExport';

const pieData = [
  { name: 'Satıldı', value: 45, color: '#22c55e' },
  { name: 'Opsiyonlu', value: 20, color: '#f59e0b' },
  { name: 'Boş', value: 35, color: '#e5e7eb' },
];

const customers = [
  { id: 1, name: 'Ahmet Yılmaz', phone: '0532 XXX XX XX', project: 'Metropol Bursa', unit: 'A Blok - Daire 12', status: 'Satıldı', amount: '₺2.450.000' },
  { id: 2, name: 'Mehmet Demir', phone: '0545 XXX XX XX', project: 'Maslak Meridian', unit: 'B Blok - Daire 8', status: 'Görüşme', amount: '₺3.200.000' },
  { id: 3, name: 'Ayşe Kaya', phone: '0555 XXX XX XX', project: 'Yalıkavak Residences', unit: 'Villa 5', status: 'Opsiyonlu', amount: '₺8.500.000' },
  { id: 4, name: 'Fatma Öz', phone: '0542 XXX XX XX', project: 'Metropol Bursa', unit: 'C Blok - Daire 3', status: 'Satıldı', amount: '₺1.950.000' },
  { id: 5, name: 'Ali Çelik', phone: '0535 XXX XX XX', project: 'Yomra Trend', unit: 'A Blok - Daire 15', status: 'Teklif', amount: '₺1.750.000' },
];

export default function Satis() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = customers.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Satış</h1>
          <p className="text-gray-500 text-sm">Müşteriler, teklifler ve satış durumu</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Satis',
              subtitle: 'Musteri ve satis listesi',
              columns: [
                { header: 'Musteri', dataKey: 'name' },
                { header: 'Telefon', dataKey: 'phone' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Birim', dataKey: 'unit' },
                { header: 'Tutar', dataKey: 'amount' },
                { header: 'Durum', dataKey: 'status' },
              ],
              data: customers.map((c) => ({ name: c.name, phone: c.phone, project: c.project, unit: c.unit, amount: c.amount, status: c.status })),
              filename: 'Satis.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Yeni Müşteri
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><Users className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">128</div><div className="text-xs text-gray-500">Toplam Müşteri</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">45</div><div className="text-xs text-gray-500">Satılan Birim</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg"><Target className="w-5 h-5 text-orange-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">20</div><div className="text-xs text-gray-500">Opsiyonlu</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg"><DollarSign className="w-5 h-5 text-purple-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">₺85M</div><div className="text-xs text-gray-500">Toplam Satış</div></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input type="text" placeholder="Müşteri ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
          </div>
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Müşteri</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Proje / Birim</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Tutar</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.phone}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-gray-900">{c.project}</div>
                      <div className="text-xs text-gray-500">{c.unit}</div>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">{c.amount}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        c.status === 'Satıldı' ? 'bg-green-100 text-green-600' :
                        c.status === 'Opsiyonlu' ? 'bg-yellow-100 text-yellow-600' :
                        c.status === 'Teklif' ? 'bg-blue-100 text-blue-600' :
                        'bg-purple-100 text-purple-600'
                      }`}>{c.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Satış Dağılımı</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={5}>
                {pieData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
