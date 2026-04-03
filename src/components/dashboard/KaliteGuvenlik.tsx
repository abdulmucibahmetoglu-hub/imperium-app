import { useState } from 'react';
import { ShieldCheck, AlertTriangle, ClipboardCheck, FileSearch, Plus, Search, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';

const inspections = [
  { id: 1, title: 'Beton Döküm Kontrolü', project: 'Metropol Bursa', inspector: 'Mehmet K.', date: '28.03.2024', result: 'Uygun', score: 95 },
  { id: 2, title: 'Demir Bağlama Kontrolü', project: 'Maslak Meridian', inspector: 'Ali D.', date: '27.03.2024', result: 'Uygun', score: 88 },
  { id: 3, title: 'Sıva Kalite Kontrolü', project: 'Yomra Trend', inspector: 'Fatma S.', date: '26.03.2024', result: 'Uygun Değil', score: 62 },
  { id: 4, title: 'Yangın Güvenlik Testi', project: 'Yalıkavak Residences', inspector: 'Ahmet Y.', date: '25.03.2024', result: 'Uygun', score: 91 },
  { id: 5, title: 'Elektrik Tesisat Kontrolü', project: 'Metropol Bursa', inspector: 'Ayşe T.', date: '24.03.2024', result: 'Revizyon', score: 75 },
];

export default function KaliteGuvenlik() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = inspections.filter((i) => i.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kalite & Güvenlik</h1>
          <p className="text-gray-500 text-sm">Denetlemeler ve kalite kontrol süreçleri</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Kalite & Guvenlik',
              subtitle: 'Denetleme listesi',
              columns: [
                { header: 'Denetleme', dataKey: 'title' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Denetci', dataKey: 'inspector' },
                { header: 'Tarih', dataKey: 'date' },
                { header: 'Puan', dataKey: 'score' },
                { header: 'Sonuc', dataKey: 'result' },
              ],
              data: inspections.map((i) => ({ title: i.title, project: i.project, inspector: i.inspector, date: i.date, score: String(i.score), result: i.result })),
              filename: 'Kalite_Guvenlik.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Yeni Denetleme
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg"><ShieldCheck className="w-5 h-5 text-green-600" /></div>
            <div><div className="text-xl font-bold text-gray-900">42</div><div className="text-xs text-gray-500">Toplam Denetleme</div></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg"><ClipboardCheck className="w-5 h-5 text-blue-600" /></div>
            <div><div className="text-xl font-bold text-gray-900">35</div><div className="text-xs text-gray-500">Uygun</div></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 rounded-lg"><FileSearch className="w-5 h-5 text-orange-600" /></div>
            <div><div className="text-xl font-bold text-gray-900">4</div><div className="text-xs text-gray-500">Revizyon</div></div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-50 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
            <div><div className="text-xl font-bold text-gray-900">3</div><div className="text-xs text-gray-500">Uygun Değil</div></div>
          </div>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        <input type="text" placeholder="Denetleme ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Denetleme</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Proje</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Denetçi</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Puan</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Sonuç</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{item.title}</td>
                <td className="px-4 py-3 text-gray-500">{item.project}</td>
                <td className="px-4 py-3 text-gray-500">{item.inspector}</td>
                <td className="px-4 py-3 text-gray-500">{item.date}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.score >= 80 ? 'bg-green-500' : item.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${item.score}%` }} />
                    </div>
                    <span className="text-gray-600">{item.score}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.result === 'Uygun' ? 'bg-green-100 text-green-600' :
                    item.result === 'Revizyon' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>{item.result}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
