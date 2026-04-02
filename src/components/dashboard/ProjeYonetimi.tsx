import { useState } from 'react';
import { Plus, Search, MapPin, Calendar, Users, MoreVertical, Eye } from 'lucide-react';

const projects = [
  { id: 1, name: 'Metropol Bursa', type: 'Konut', location: 'Bursa/Türkiye', startDate: '01.01.2021', endDate: '17.01.2023', units: 120, progress: 85, status: 'Devam Ediyor', color: 'bg-blue-500' },
  { id: 2, name: 'Maslak Meridian', type: 'Konut', location: 'İstanbul/Türkiye', startDate: '15.03.2022', endDate: '20.06.2024', units: 200, progress: 62, status: 'Devam Ediyor', color: 'bg-green-500' },
  { id: 3, name: 'Yalıkavak Residences', type: 'Konut', location: 'Muğla/Türkiye', startDate: '01.06.2021', endDate: '30.12.2023', units: 80, progress: 95, status: 'Tamamlanıyor', color: 'bg-purple-500' },
  { id: 4, name: 'Yomra Trend Evleri', type: 'Konut', location: 'Trabzon/Türkiye', startDate: '10.09.2022', endDate: '15.03.2025', units: 150, progress: 45, status: 'Devam Ediyor', color: 'bg-orange-500' },
  { id: 5, name: 'Ankara Park Plaza', type: 'Ticari', location: 'Ankara/Türkiye', startDate: '01.02.2023', endDate: '30.06.2025', units: 50, progress: 30, status: 'Devam Ediyor', color: 'bg-indigo-500' },
  { id: 6, name: 'İzmir Marina Tower', type: 'Karma', location: 'İzmir/Türkiye', startDate: '15.04.2023', endDate: '20.12.2025', units: 180, progress: 18, status: 'Başladı', color: 'bg-teal-500' },
];

export default function ProjeYonetimi() {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Proje Yönetimi</h1>
          <p className="text-gray-500 text-sm">Tüm projelerinizi tek panelden yönetin</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" /> Yeni Proje
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Proje ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div className="flex bg-white border rounded-lg overflow-hidden">
          <button onClick={() => setViewMode('grid')} className={`px-3 py-2 text-sm ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}>Kart</button>
          <button onClick={() => setViewMode('list')} className={`px-3 py-2 text-sm ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}>Liste</button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className={`h-2 ${project.color}`} />
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{project.type}</span>
                  </div>
                  <button><MoreVertical className="w-4 h-4 text-gray-400" /></button>
                </div>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {project.location}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {project.startDate} - {project.endDate}</div>
                  <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5" /> {project.units} Bağımsız Bölüm</div>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">İlerleme</span>
                    <span className="font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${project.color} rounded-full`} style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Tamamlanıyor' ? 'bg-green-100 text-green-600' :
                    project.status === 'Başladı' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>{project.status}</span>
                  <button className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-700">
                    <Eye className="w-3.5 h-3.5" /> Detay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Proje Adı</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Konum</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">İlerleme</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filtered.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{project.name}</td>
                  <td className="px-4 py-3 text-gray-500">{project.location}</td>
                  <td className="px-4 py-3 text-gray-500">{project.startDate}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${project.color} rounded-full`} style={{ width: `${project.progress}%` }} />
                      </div>
                      <span className="text-gray-600">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Tamamlanıyor' ? 'bg-green-100 text-green-600' :
                      project.status === 'Başladı' ? 'bg-blue-100 text-blue-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>{project.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
