import { useState } from 'react';
import { Plus, Search, Filter, UserCheck, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const tasks = [
  { id: 1, title: 'Beton numune alımı', assignee: 'Mehmet K.', assignedBy: 'Ali D.', project: 'Metropol Bursa', priority: 'Yüksek', status: 'Devam Ediyor', startDate: '25.03.2024', dueDate: '02.04.2024', progress: 60 },
  { id: 2, title: 'Kalıp planı hazırlama', assignee: 'Ali D.', assignedBy: 'Ahmet Y.', project: 'Maslak Meridian', priority: 'Orta', status: 'Tamamlandı', startDate: '20.03.2024', dueDate: '28.03.2024', progress: 100 },
  { id: 3, title: 'Sıva kontrol raporu', assignee: 'Fatma S.', assignedBy: 'Mehmet K.', project: 'Yomra Trend', priority: 'Orta', status: 'Devam Ediyor', startDate: '26.03.2024', dueDate: '03.04.2024', progress: 35 },
  { id: 4, title: 'Malzeme listesi güncelleme', assignee: 'Ayşe T.', assignedBy: 'Fatma S.', project: 'Yalıkavak Residences', priority: 'Düşük', status: 'Bekliyor', startDate: '28.03.2024', dueDate: '05.04.2024', progress: 0 },
  { id: 5, title: 'Şantiye fotoğraf çekimi', assignee: 'Mehmet K.', assignedBy: 'Ali D.', project: 'Metropol Bursa', priority: 'Düşük', status: 'Tamamlandı', startDate: '22.03.2024', dueDate: '25.03.2024', progress: 100 },
  { id: 6, title: 'İş güvenliği eğitimi', assignee: 'Ali D.', assignedBy: 'Ahmet Y.', project: 'Maslak Meridian', priority: 'Yüksek', status: 'Gecikmiş', startDate: '18.03.2024', dueDate: '26.03.2024', progress: 70 },
];

export default function Gorevlendirme() {
  const [searchTerm, setSearchTerm] = useState('');
  const filtered = tasks.filter((t) => t.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Görevlendirme</h1>
          <p className="text-gray-500 text-sm">Ekip üyelerine görev atayın ve takip edin</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4" /> Yeni Görev
        </button>
      </div>

      <div className="grid sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><UserCheck className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold">6</div><div className="text-xs text-gray-500">Toplam Görev</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-yellow-50 rounded-lg"><Clock className="w-5 h-5 text-yellow-600" /></div>
          <div><div className="text-xl font-bold">2</div><div className="text-xs text-gray-500">Devam Eden</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold">2</div><div className="text-xs text-gray-500">Tamamlanan</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-red-50 rounded-lg"><AlertCircle className="w-5 h-5 text-red-600" /></div>
          <div><div className="text-xl font-bold">1</div><div className="text-xs text-gray-500">Gecikmiş</div></div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Görev ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filtrele</button>
      </div>

      <div className="space-y-3">
        {filtered.map((task) => (
          <div key={task.id} className="bg-white rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    task.priority === 'Yüksek' ? 'bg-red-100 text-red-600' :
                    task.priority === 'Orta' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>{task.priority}</span>
                </div>
                <p className="text-sm text-gray-500">{task.project}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                task.status === 'Tamamlandı' ? 'bg-green-100 text-green-600' :
                task.status === 'Devam Ediyor' ? 'bg-blue-100 text-blue-600' :
                task.status === 'Gecikmiş' ? 'bg-red-100 text-red-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>{task.status}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
              <div>Atanan: <span className="text-gray-700 font-medium">{task.assignee}</span></div>
              <div>Atayan: <span className="text-gray-700">{task.assignedBy}</span></div>
              <div>{task.startDate} - {task.dueDate}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${
                  task.status === 'Gecikmiş' ? 'bg-red-500' :
                  task.progress === 100 ? 'bg-green-500' :
                  'bg-blue-500'
                }`} style={{ width: `${task.progress}%` }} />
              </div>
              <span className="text-sm font-medium text-gray-600">{task.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
