import { useState } from 'react';
import { Plus, Search, ClipboardCheck, FileCheck, ListChecks, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';

const forms = [
  { id: 1, name: 'Beton Döküm Kontrol Formu', type: 'Yapı Denetim', project: 'Metropol Bursa', completedBy: 'Mehmet K.', date: '28.03.2024', status: 'Tamamlandı', score: '92/100' },
  { id: 2, name: 'İş Güvenliği Denetim Formu', type: 'Güvenlik', project: 'Maslak Meridian', completedBy: 'Ali D.', date: '27.03.2024', status: 'Tamamlandı', score: '88/100' },
  { id: 3, name: 'Yangın Güvenlik Kontrol Listesi', type: 'Kontrol Listesi', project: 'Yalıkavak Residences', completedBy: 'Fatma S.', date: '26.03.2024', status: 'Devam Ediyor', score: '-' },
  { id: 4, name: 'Elektrik Tesisat Kontrol Formu', type: 'Yapı Denetim', project: 'Yomra Trend', completedBy: 'Ahmet Y.', date: '25.03.2024', status: 'Tamamlandı', score: '75/100' },
  { id: 5, name: 'Çevre Düzenleme Değerlendirme', type: 'Değerlendirme', project: 'Metropol Bursa', completedBy: 'Ayşe T.', date: '24.03.2024', status: 'Bekliyor', score: '-' },
];

export default function Denetlemeler() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = forms.filter((f) => f.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Denetlemeler</h1>
          <p className="text-gray-500 text-sm">Anketler, kontrol formları ve denetim raporları</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Denetlemeler',
              subtitle: 'Kontrol formlari ve denetim raporlari',
              columns: [
                { header: 'Form Adi', dataKey: 'name' },
                { header: 'Tur', dataKey: 'type' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Dolduran', dataKey: 'completedBy' },
                { header: 'Tarih', dataKey: 'date' },
                { header: 'Puan', dataKey: 'score' },
                { header: 'Durum', dataKey: 'status' },
              ],
              data: forms.map((f) => ({ name: f.name, type: f.type, project: f.project, completedBy: f.completedBy, date: f.date, score: f.score, status: f.status })),
              filename: 'Denetlemeler.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Yeni Form
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><ClipboardCheck className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold">5</div><div className="text-xs text-gray-500">Toplam Form</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><FileCheck className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold">3</div><div className="text-xs text-gray-500">Tamamlanan</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg"><ListChecks className="w-5 h-5 text-orange-600" /></div>
          <div><div className="text-xl font-bold">2</div><div className="text-xs text-gray-500">Devam Eden</div></div>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        <input type="text" placeholder="Form ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Form Adı</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tür</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Proje</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Dolduran</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Puan</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((f) => (
              <tr key={f.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-900">{f.name}</td>
                <td className="px-4 py-3"><span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{f.type}</span></td>
                <td className="px-4 py-3 text-gray-500">{f.project}</td>
                <td className="px-4 py-3 text-gray-500">{f.completedBy}</td>
                <td className="px-4 py-3 text-gray-500">{f.date}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{f.score}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    f.status === 'Tamamlandı' ? 'bg-green-100 text-green-600' :
                    f.status === 'Devam Ediyor' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{f.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
