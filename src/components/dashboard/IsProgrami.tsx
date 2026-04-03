import { Calendar, ChevronLeft, ChevronRight, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';
import { useState } from 'react';

const tasks = [
  { id: 1, name: 'Temel Kazı', project: 'Metropol Bursa', start: 1, duration: 4, color: 'bg-blue-500', progress: 100 },
  { id: 2, name: 'Beton Döküm', project: 'Metropol Bursa', start: 3, duration: 6, color: 'bg-blue-400', progress: 85 },
  { id: 3, name: 'Kaba İnşaat', project: 'Maslak Meridian', start: 2, duration: 8, color: 'bg-green-500', progress: 65 },
  { id: 4, name: 'Tesisat', project: 'Yomra Trend', start: 5, duration: 5, color: 'bg-orange-500', progress: 45 },
  { id: 5, name: 'Sıva İşleri', project: 'Metropol Bursa', start: 7, duration: 4, color: 'bg-purple-500', progress: 30 },
  { id: 6, name: 'Boya', project: 'Yalıkavak Residences', start: 9, duration: 3, color: 'bg-pink-500', progress: 10 },
  { id: 7, name: 'Cephe Kaplama', project: 'Maslak Meridian', start: 6, duration: 6, color: 'bg-teal-500', progress: 55 },
  { id: 8, name: 'Peyzaj', project: 'Yalıkavak Residences', start: 10, duration: 3, color: 'bg-emerald-500', progress: 0 },
];

const weeks = ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4', 'Hafta 5', 'Hafta 6', 'Hafta 7', 'Hafta 8', 'Hafta 9', 'Hafta 10', 'Hafta 11', 'Hafta 12'];

export default function IsProgrami() {
  const [currentMonth] = useState('Mart 2024');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">İş Programı</h1>
          <p className="text-gray-500 text-sm">Proje planının iş akışını görüntüleyin</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => exportToPdf({
              title: 'Is Programi',
              subtitle: 'Proje planinin is akisi',
              columns: [
                { header: 'Is Kalemi', dataKey: 'name' },
                { header: 'Proje', dataKey: 'project' },
                { header: 'Baslangic Hafta', dataKey: 'start' },
                { header: 'Sure (Hafta)', dataKey: 'duration' },
                { header: 'Ilerleme', dataKey: 'progress' },
              ],
              data: tasks.map((t) => ({ name: t.name, project: t.project, start: String(t.start), duration: String(t.duration), progress: `${t.progress}%` })),
              filename: 'Is_Programi.pdf',
            })}
            className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <FileDown className="w-4 h-4" /> PDF
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
          <div className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium">{currentMonth}</span>
          </div>
          <button className="p-2 border rounded-lg hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
        <div className="min-w-gantt">
          {/* Header */}
          <div className="grid grid-cols-13 border-b">
            <div className="col-span-1 px-4 py-3 bg-gray-50 font-medium text-sm text-gray-600 border-r">İş Kalemi</div>
            {weeks.map((week) => (
              <div key={week} className="px-2 py-3 bg-gray-50 text-center text-xs text-gray-500 border-r">{week}</div>
            ))}
          </div>

          {/* Tasks */}
          {tasks.map((task) => (
            <div key={task.id} className="grid grid-cols-13 border-b hover:bg-gray-50">
              <div className="col-span-1 px-4 py-3 border-r">
                <div className="text-sm font-medium text-gray-900">{task.name}</div>
                <div className="text-xs text-gray-500">{task.project}</div>
              </div>
              {weeks.map((_, i) => (
                <div key={i} className="relative px-0.5 py-3 border-r">
                  {i + 1 >= task.start && i + 1 < task.start + task.duration && (
                    <div className={`${task.color} h-6 rounded-sm relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" style={{ width: `${task.progress}%` }} />
                      {i + 1 === task.start && (
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">
                          {task.progress}%
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 bg-white rounded-xl border shadow-sm p-4">
        <span className="text-sm font-medium text-gray-600">Projeler:</span>
        {['Metropol Bursa', 'Maslak Meridian', 'Yomra Trend', 'Yalıkavak Residences'].map((project, i) => (
          <div key={project} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${['bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500'][i]}`} />
            <span className="text-sm text-gray-600">{project}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
