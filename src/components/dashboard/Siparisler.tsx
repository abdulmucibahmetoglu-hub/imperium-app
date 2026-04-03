import { useState } from 'react';
import { Plus, Search, Filter, Package, Truck, CheckCircle, Clock, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';

const orders = [
  { id: 'SIP-001', items: 'Çimento (CEM I 42.5R)', quantity: '500 ton', project: 'Metropol Bursa', block: 'A Blok', status: 'Teslim Edildi', date: '20.03.2024', deliveryDate: '28.03.2024' },
  { id: 'SIP-002', items: 'Betonarme Demiri Ø12', quantity: '200 ton', project: 'Maslak Meridian', block: 'Kule 1', status: 'Yolda', date: '22.03.2024', deliveryDate: '30.03.2024' },
  { id: 'SIP-003', items: 'Tuğla 19cm', quantity: '50.000 adet', project: 'Yomra Trend', block: 'B Blok', status: 'Hazırlanıyor', date: '25.03.2024', deliveryDate: '02.04.2024' },
  { id: 'SIP-004', items: 'Seramik 60x60', quantity: '8.000 m²', project: 'Yalıkavak Residences', block: 'Villa 1-5', status: 'Onay Bekliyor', date: '27.03.2024', deliveryDate: '-' },
  { id: 'SIP-005', items: 'Alçıpan 12.5mm', quantity: '3.000 m²', project: 'Metropol Bursa', block: 'C Blok', status: 'Teslim Edildi', date: '15.03.2024', deliveryDate: '22.03.2024' },
];

export default function Siparisler() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = orders.filter((o) => o.items.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Siparişler</h1>
          <p className="text-gray-500 text-sm">Sipariş süreçlerini başından sonuna kadar takip edin</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Siparisler',
              subtitle: 'Siparis takip listesi',
              columns: [
                { header: 'Siparis No', dataKey: 'id' },
                { header: 'Urun', dataKey: 'items' },
                { header: 'Miktar', dataKey: 'quantity' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Siparis Tarihi', dataKey: 'date' },
                { header: 'Teslim Tarihi', dataKey: 'deliveryDate' },
                { header: 'Durum', dataKey: 'status' },
              ],
              data: orders.map((o) => ({ id: o.id, items: o.items, quantity: o.quantity, project: `${o.project} - ${o.block}`, date: o.date, deliveryDate: o.deliveryDate, status: o.status })),
              filename: 'Siparisler.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Yeni Sipariş
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><Package className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold">5</div><div className="text-xs text-gray-500">Toplam</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-yellow-50 rounded-lg"><Clock className="w-5 h-5 text-yellow-600" /></div>
          <div><div className="text-xl font-bold">2</div><div className="text-xs text-gray-500">Bekleyen</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg"><Truck className="w-5 h-5 text-purple-600" /></div>
          <div><div className="text-xl font-bold">1</div><div className="text-xs text-gray-500">Yolda</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold">2</div><div className="text-xs text-gray-500">Teslim Edildi</div></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Sipariş ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
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
              <th className="text-left px-4 py-3 font-medium text-gray-600">Proje / Blok</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Sipariş Tarihi</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Teslim Tarihi</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-blue-600">{o.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{o.items}</td>
                <td className="px-4 py-3 text-gray-500">{o.quantity}</td>
                <td className="px-4 py-3 text-gray-500">{o.project} - {o.block}</td>
                <td className="px-4 py-3 text-gray-500">{o.date}</td>
                <td className="px-4 py-3 text-gray-500">{o.deliveryDate}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    o.status === 'Teslim Edildi' ? 'bg-green-100 text-green-600' :
                    o.status === 'Yolda' ? 'bg-purple-100 text-purple-600' :
                    o.status === 'Hazırlanıyor' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
