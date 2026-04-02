import { useState } from 'react';
import { Search, Filter, ChevronDown, ChevronRight } from 'lucide-react';

const projects = [
  {
    name: 'Metropol Bursa',
    blocks: [
      { name: 'A Blok', floors: 15, completed: 12, percentage: 80 },
      { name: 'B Blok', floors: 15, completed: 10, percentage: 67 },
      { name: 'C Blok', floors: 12, completed: 12, percentage: 100 },
    ],
  },
  {
    name: 'Maslak Meridian',
    blocks: [
      { name: 'Kule 1', floors: 25, completed: 18, percentage: 72 },
      { name: 'Kule 2', floors: 25, completed: 12, percentage: 48 },
    ],
  },
  {
    name: 'Yomra Trend Evleri',
    blocks: [
      { name: 'A Blok', floors: 8, completed: 5, percentage: 63 },
      { name: 'B Blok', floors: 8, completed: 3, percentage: 38 },
      { name: 'C Blok', floors: 8, completed: 1, percentage: 13 },
    ],
  },
];

export default function GuncelDurum() {
  const [expandedProject, setExpandedProject] = useState<string | null>('Metropol Bursa');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Güncel Durum Takipleri</h1>
        <p className="text-gray-500 text-sm">Daire, Blok veya Bağımsız bölümlerin tamamlanma oranları</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input type="text" placeholder="Proje ara..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 bg-white border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-full" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filtrele</button>
      </div>

      <div className="space-y-4">
        {projects.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map((project) => (
          <div key={project.name} className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {expandedProject === project.name ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  <p className="text-xs text-gray-500">{project.blocks.length} blok</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {Math.round(project.blocks.reduce((a, b) => a + b.percentage, 0) / project.blocks.length)}%
                  </div>
                  <div className="text-xs text-gray-500">Ortalama</div>
                </div>
                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${Math.round(project.blocks.reduce((a, b) => a + b.percentage, 0) / project.blocks.length)}%` }}
                  />
                </div>
              </div>
            </button>

            {expandedProject === project.name && (
              <div className="border-t px-5 py-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.blocks.map((block) => (
                    <div key={block.name} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{block.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          block.percentage === 100 ? 'bg-green-100 text-green-600' :
                          block.percentage >= 50 ? 'bg-blue-100 text-blue-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {block.percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <div
                          className={`h-full rounded-full ${
                            block.percentage === 100 ? 'bg-green-500' :
                            block.percentage >= 50 ? 'bg-blue-500' :
                            'bg-orange-500'
                          }`}
                          style={{ width: `${block.percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Tamamlanan: {block.completed} kat</span>
                        <span>Toplam: {block.floors} kat</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
