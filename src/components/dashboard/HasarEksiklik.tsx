import { useState } from 'react';
import { Plus, Search, Filter, AlertTriangle, CheckCircle, Clock, Camera, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';

const defects = [
  { id: 1, title: 'Duvar çatlağı - B Blok 3. Kat', project: 'Metropol Bursa', location: 'B Blok - Kat 3 - Daire 12', priority: 'Yüksek', status: 'Açık', reportedBy: 'Mehmet K.', date: '28.03.2024', category: 'Yapısal' },
  { id: 2, title: 'Su sızıntısı - Banyo', project: 'Maslak Meridian', location: 'Kule 1 - Kat 8 - Daire 5', priority: 'Yüksek', status: 'İşlemde', reportedBy: 'Ali D.', date: '27.03.2024', category: 'Tesisat' },
  { id: 3, title: 'Boya kabarması - Salon', project: 'Yomra Trend', location: 'A Blok - Kat 5 - Daire 9', priority: 'Orta', status: 'Açık', reportedBy: 'Fatma S.', date: '26.03.2024', category: 'Boya' },
  { id: 4, title: 'Kapı montaj hatası', project: 'Yalıkavak Residences', location: 'Villa 3 - Üst Kat', priority: 'Düşük', status: 'Kapatıldı', reportedBy: 'Ahmet Y.', date: '25.03.2024', category: 'Doğrama' },
  { id: 5, title: 'Zemin seramik kırığı', project: 'Metropol Bursa', location: 'C Blok - Kat 1 - Daire 2', priority: 'Orta', status: 'İşlemde', reportedBy: 'Ayşe T.', date: '24.03.2024', category: 'Seramik' },
  { id: 6, title: 'Elektrik priz arızası', project: 'Maslak Meridian', location: 'Kule 2 - Kat 12 - Daire 3', priority: 'Düşük', status: 'Açık', reportedBy: 'Mehmet K.', date: '23.03.2024', category: 'Elektrik' },
];

export default function HasarEksiklik() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = defects.filter((d) => d.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hasar-Eksiklik Listesi</h1>
          <p className="text-gray-500 text-sm">Eksik ve hasarlı işlerin takibi</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Hasar-Eksiklik Listesi',
              subtitle: 'Eksik ve hasarli islerin takibi',
              columns: [
                { header: 'Baslik', dataKey: 'title' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Konum', dataKey: 'location' },
                { header: 'Oncelik', dataKey: 'priority' },
                { header: 'Durum', dataKey: 'status' },
                { header: 'Kategori', dataKey: 'category' },
                { header: 'Tarih', dataKey: 'date' },
              ],
              data: defects.map((d) => ({ title: d.title, project: d.project, location: d.location, priority: d.priority, status: d.status, category: d.category, date: d.date })),
              filename: 'Hasar_Eksiklik.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Yeni Kayıt
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">3</div><div className="text-xs text-gray-500">Açık</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-yellow-50 rounded-lg"><Clock className="w-5 h-5 text-yellow-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">2</div><div className="text-xs text-gray-500">İşlemde</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold text-gray-900">1</div><div className="text-xs text-gray-500">Kapatıldı</div></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filtrele</button>
      </div>

      <div className="space-y-3">
        {filtered.map((defect) => (
          <div key={defect.id} className="bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-gray-900">{defect.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    defect.priority === 'Yüksek' ? 'bg-red-100 text-red-600' :
                    defect.priority === 'Orta' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>{defect.priority}</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-500">
                  <div>Proje: <span className="text-gray-700">{defect.project}</span></div>
                  <div>Konum: <span className="text-gray-700">{defect.location}</span></div>
                  <div>Bildiren: <span className="text-gray-700">{defect.reportedBy}</span></div>
                  <div>Kategori: <span className="text-gray-700">{defect.category}</span></div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  defect.status === 'Açık' ? 'bg-red-100 text-red-600' :
                  defect.status === 'İşlemde' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>{defect.status}</span>
                <span className="text-xs text-gray-400">{defect.date}</span>
                <button className="text-blue-600 hover:text-blue-700"><Camera className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
