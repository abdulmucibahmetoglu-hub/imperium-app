import { FileText, Calculator, Receipt, Plus, Search, Filter, Download } from 'lucide-react';

const tabs = [
  { id: 'kesif', label: 'Keşif', icon: FileText },
  { id: 'sozlesme', label: 'Sözleşme', icon: Receipt },
  { id: 'hakedis', label: 'Hakediş', icon: Calculator },
];

const kesifData = [
  { id: 1, name: 'Kaba İnşaat', project: 'Metropol Bursa', amount: '₺2.450.000', status: 'Onaylandı', date: '15.01.2024' },
  { id: 2, name: 'İnce İşler', project: 'Metropol Bursa', amount: '₺1.850.000', status: 'Bekliyor', date: '20.01.2024' },
  { id: 3, name: 'Mekanik Tesisat', project: 'Maslak Meridian', amount: '₺980.000', status: 'Onaylandı', date: '25.01.2024' },
  { id: 4, name: 'Elektrik Tesisat', project: 'Maslak Meridian', amount: '₺750.000', status: 'Revizyon', date: '28.01.2024' },
  { id: 5, name: 'Peyzaj', project: 'Yalıkavak Residences', amount: '₺420.000', status: 'Onaylandı', date: '01.02.2024' },
];

import { useState } from 'react';

export default function TeknikOfis() {
  const [activeTab, setActiveTab] = useState('kesif');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teknik Ofis</h1>
          <p className="text-gray-500 text-sm">Keşif, Sözleşme ve Hakediş yönetimi</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Yeni Kayıt
        </button>
      </div>

      <div className="flex gap-2 bg-white p-1 rounded-lg border w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Ara..." className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          <Filter className="w-4 h-4" /> Filtrele
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
          <Download className="w-4 h-4" /> Dışa Aktar
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="text-sm text-blue-600 font-medium">Toplam Keşif</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">₺6.450.000</div>
          <div className="text-xs text-gray-500 mt-1">5 kalem</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
          <div className="text-sm text-green-600 font-medium">Onaylanan</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">₺3.850.000</div>
          <div className="text-xs text-gray-500 mt-1">3 kalem</div>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
          <div className="text-sm text-orange-600 font-medium">Bekleyen</div>
          <div className="text-2xl font-bold text-gray-900 mt-1">₺2.600.000</div>
          <div className="text-xs text-gray-500 mt-1">2 kalem</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">İş Kalemi</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Proje</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tutar</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {kesifData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                <td className="px-4 py-3 text-gray-500">{item.project}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{item.amount}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'Onaylandı' ? 'bg-green-100 text-green-600' :
                    item.status === 'Revizyon' ? 'bg-red-100 text-red-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{item.status}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
