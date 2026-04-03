import { useState } from 'react';
import { Plus, Search, Calendar, CloudSun, Wind, Thermometer, FileText, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';

const reports = [
  {
    id: 1, date: '28.03.2024', project: 'Metropol Bursa', author: 'Mehmet K.',
    weather: 'Güneşli', temp: '18°C', wind: 'Hafif',
    workers: 45, summary: 'A Blok 12. kat beton döküm tamamlandı. B Blok sıva çalışmaları devam ediyor.',
    issues: 'Malzeme gecikme riski mevcut.',
  },
  {
    id: 2, date: '27.03.2024', project: 'Maslak Meridian', author: 'Ali D.',
    weather: 'Bulutlu', temp: '14°C', wind: 'Orta',
    workers: 62, summary: 'Kule 1 cephe kaplama çalışması devam ediyor. Mekanik tesisat 15. kata ulaştı.',
    issues: 'İş güvenliği denetimi yapıldı, sorun tespit edilmedi.',
  },
  {
    id: 3, date: '26.03.2024', project: 'Yomra Trend', author: 'Fatma S.',
    weather: 'Yağmurlu', temp: '10°C', wind: 'Kuvvetli',
    workers: 28, summary: 'Yağış nedeniyle dış cephe çalışmaları durduruldu. İç mekan ince işler devam etti.',
    issues: 'Hava koşulları nedeniyle 1 gün gecikme bekleniyor.',
  },
];

export default function GunlukRapor() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = reports.filter((r) => r.project.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Günlük Rapor</h1>
          <p className="text-gray-500 text-sm">Şantiye günlük raporlarını görüntüleyin</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Gunluk Rapor',
              subtitle: 'Santiye gunluk raporlari',
              columns: [
                { header: 'Tarih', dataKey: 'date' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Yazar', dataKey: 'author' },
                { header: 'Hava', dataKey: 'weather' },
                { header: 'Sicaklik', dataKey: 'temp' },
                { header: 'Isci', dataKey: 'workers' },
                { header: 'Ozet', dataKey: 'summary' },
              ],
              data: reports.map((r) => ({ date: r.date, project: r.project, author: r.author, weather: r.weather, temp: r.temp, workers: String(r.workers), summary: r.summary })),
              filename: 'Gunluk_Rapor.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Plus className="w-4 h-4" /> Yeni Rapor
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Proje ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((report) => (
          <div key={report.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-gray-50 border-b">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4 text-gray-400" /><span className="font-medium text-gray-900">{report.date}</span></div>
                <span className="text-sm text-gray-500">{report.project}</span>
                <span className="text-xs text-gray-400">Yazan: {report.author}</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"><FileText className="w-4 h-4" /> PDF</button>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg text-sm">
                  <CloudSun className="w-4 h-4 text-blue-500" />{report.weather}
                </div>
                <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg text-sm">
                  <Thermometer className="w-4 h-4 text-orange-500" />{report.temp}
                </div>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg text-sm">
                  <Wind className="w-4 h-4 text-gray-500" />{report.wind}
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-lg text-sm">
                  <span className="text-green-600 font-medium">{report.workers}</span> İşçi
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Yapılan İşler</h4>
                  <p className="text-sm text-gray-600">{report.summary}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Notlar / Sorunlar</h4>
                  <p className="text-sm text-gray-600">{report.issues}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
