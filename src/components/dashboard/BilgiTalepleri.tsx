import { useState } from 'react';
import { Plus, Search, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const requests = [
  { id: 'BT-001', subject: 'Elektrik projesi revizyon talebi', from: 'Mehmet K.', to: 'Ali D.', project: 'Metropol Bursa', priority: 'Yüksek', status: 'Açık', date: '28.03.2024', dueDate: '02.04.2024' },
  { id: 'BT-002', subject: 'Mekanik tesisat detay çizimi', from: 'Fatma S.', to: 'Ahmet Y.', project: 'Maslak Meridian', priority: 'Orta', status: 'Yanıtlandı', date: '27.03.2024', dueDate: '30.03.2024' },
  { id: 'BT-003', subject: 'Zemin etüdü raporu', from: 'Ali D.', to: 'Mehmet K.', project: 'Yomra Trend', priority: 'Yüksek', status: 'Açık', date: '26.03.2024', dueDate: '01.04.2024' },
  { id: 'BT-004', subject: 'Cephe malzeme onayı', from: 'Ayşe T.', to: 'Fatma S.', project: 'Yalıkavak Residences', priority: 'Düşük', status: 'Kapatıldı', date: '25.03.2024', dueDate: '28.03.2024' },
  { id: 'BT-005', subject: 'Yangın merdiveni detayı', from: 'Mehmet K.', to: 'Ali D.', project: 'Metropol Bursa', priority: 'Orta', status: 'Açık', date: '24.03.2024', dueDate: '31.03.2024' },
];

export default function BilgiTalepleri() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = requests.filter((r) => r.subject.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bilgi Talepleri</h1>
          <p className="text-gray-500 text-sm">Proje ekibinden bilgi talep edin ve takip edin</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Yeni Talep
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg"><AlertCircle className="w-5 h-5 text-red-600" /></div>
          <div><div className="text-xl font-bold">3</div><div className="text-xs text-gray-500">Açık Talepler</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><MessageSquare className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold">1</div><div className="text-xs text-gray-500">Yanıtlanan</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold">1</div><div className="text-xs text-gray-500">Kapatılan</div></div>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        <input type="text" placeholder="Talep ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md" />
      </div>

      <div className="space-y-3">
        {filtered.map((req) => (
          <div key={req.id} className="bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-blue-600">{req.id}</span>
                  <h3 className="font-medium text-gray-900">{req.subject}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    req.priority === 'Yüksek' ? 'bg-red-100 text-red-600' :
                    req.priority === 'Orta' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>{req.priority}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-500">
                  <div>Gönderen: <span className="text-gray-700">{req.from}</span></div>
                  <div>Alıcı: <span className="text-gray-700">{req.to}</span></div>
                  <div>Proje: <span className="text-gray-700">{req.project}</span></div>
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Son tarih: <span className="text-gray-700">{req.dueDate}</span></div>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                req.status === 'Açık' ? 'bg-red-100 text-red-600' :
                req.status === 'Yanıtlandı' ? 'bg-blue-100 text-blue-600' :
                'bg-green-100 text-green-600'
              }`}>{req.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
