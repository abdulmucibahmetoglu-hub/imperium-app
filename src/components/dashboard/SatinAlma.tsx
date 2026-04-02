import { useState } from 'react';
import { Plus, Search, Filter, Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const orders = [
  { id: 'SA-001', product: 'Çimento (CEM I 42.5R)', quantity: '500 ton', supplier: 'Bursa Çimento A.Ş.', project: 'Metropol Bursa', status: 'Onaylandı', date: '10.03.2024', amount: '₺875.000' },
  { id: 'SA-002', product: 'Betonarme Demiri (Ø12)', quantity: '200 ton', supplier: 'İstanbul Demir Çelik', project: 'Maslak Meridian', status: 'Bekliyor', date: '12.03.2024', amount: '₺1.240.000' },
  { id: 'SA-003', product: 'Tuğla (19cm)', quantity: '50.000 adet', supplier: 'Kılıç Tuğla', project: 'Yomra Trend', status: 'Teslim Edildi', date: '08.03.2024', amount: '₺225.000' },
  { id: 'SA-004', product: 'Seramik (60x60)', quantity: '15.000 m²', supplier: 'Kale Seramik', project: 'Yalıkavak Residences', status: 'Onaylandı', date: '14.03.2024', amount: '₺1.050.000' },
  { id: 'SA-005', product: 'PVC Pencere Sistemi', quantity: '320 adet', supplier: 'Egepen Deceuninck', project: 'Metropol Bursa', status: 'İptal', date: '05.03.2024', amount: '₺960.000' },
  { id: 'SA-006', product: 'Asansör Sistemi', quantity: '8 adet', supplier: 'Otis Asansör', project: 'Maslak Meridian', status: 'Bekliyor', date: '15.03.2024', amount: '₺2.400.000' },
];

export default function SatinAlma() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = orders.filter((o) => o.product.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Satın Alma</h1>
          <p className="text-gray-500 text-sm">Ürün talepleri ve siparişlerinizi yönetin</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Yeni Talep
        </button>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><Package className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">6</div><div className="text-xs text-gray-500">Toplam Sipariş</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-yellow-50 rounded-lg"><Clock className="w-5 h-5 text-yellow-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">2</div><div className="text-xs text-gray-500">Bekleyen</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">2</div><div className="text-xs text-gray-500">Onaylanan</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg"><XCircle className="w-5 h-5 text-red-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">1</div><div className="text-xs text-gray-500">İptal</div></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Ürün ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filtrele</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Sipariş No</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Ürün</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Miktar</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tedarikçi</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Proje</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tutar</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-blue-600">{order.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{order.product}</td>
                <td className="px-4 py-3 text-gray-500">{order.quantity}</td>
                <td className="px-4 py-3 text-gray-500">{order.supplier}</td>
                <td className="px-4 py-3 text-gray-500">{order.project}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{order.amount}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.status === 'Onaylandı' ? 'bg-green-100 text-green-600' :
                    order.status === 'Teslim Edildi' ? 'bg-blue-100 text-blue-600' :
                    order.status === 'İptal' ? 'bg-red-100 text-red-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{order.status}</span>
                </td>
                <td className="px-4 py-3 text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
