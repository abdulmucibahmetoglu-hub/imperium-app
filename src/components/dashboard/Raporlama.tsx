import { BarChart3, Download, Filter, FileText, PieChart as PieChartIcon, TrendingUp, FileDown } from 'lucide-react';
import { exportToPdf } from '../../utils/pdfExport';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const projectData = [
  { name: 'Metropol Bursa', tamamlanan: 85, kalan: 15 },
  { name: 'Maslak Meridian', tamamlanan: 62, kalan: 38 },
  { name: 'Yalıkavak Res.', tamamlanan: 95, kalan: 5 },
  { name: 'Yomra Trend', tamamlanan: 45, kalan: 55 },
  { name: 'Ankara Park', tamamlanan: 30, kalan: 70 },
];

const categoryData = [
  { name: 'Kaba İnşaat', value: 35, color: '#3b82f6' },
  { name: 'İnce İşler', value: 25, color: '#22c55e' },
  { name: 'Tesisat', value: 20, color: '#f59e0b' },
  { name: 'Elektrik', value: 12, color: '#8b5cf6' },
  { name: 'Peyzaj', value: 8, color: '#ec4899' },
];

const reports = [
  { name: 'Aylık İlerleme Raporu', type: 'PDF', date: '01.04.2024', size: '2.4 MB' },
  { name: 'Bütçe Karşılaştırma', type: 'Excel', date: '28.03.2024', size: '1.8 MB' },
  { name: 'İş Gücü Analizi', type: 'PDF', date: '25.03.2024', size: '3.1 MB' },
  { name: 'Kalite Denetim Özeti', type: 'PDF', date: '22.03.2024', size: '1.5 MB' },
  { name: 'Malzeme Kullanım Raporu', type: 'Excel', date: '20.03.2024', size: '2.2 MB' },
];

export default function Raporlama() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Raporlama</h1>
          <p className="text-gray-500 text-sm">İş ve saha operasyonlarınız hakkında detaylı raporlar</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filtrele</button>
          <button
            onClick={() => exportToPdf({
              title: 'Raporlama',
              subtitle: 'Proje bazli ilerleme raporu',
              columns: [
                { header: 'Proje', dataKey: 'name' },
                { header: 'Tamamlanan %', dataKey: 'tamamlanan' },
                { header: 'Kalan %', dataKey: 'kalan' },
              ],
              data: projectData.map((p) => ({ name: p.name, tamamlanan: `${p.tamamlanan}%`, kalan: `${p.kalan}%` })),
              filename: 'Raporlama.pdf',
            })}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <FileDown className="w-4 h-4" /> PDF Rapor
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg"><BarChart3 className="w-5 h-5 text-blue-600" /></div>
          <div><div className="text-xl font-bold">12</div><div className="text-xs text-gray-500">Aktif Proje</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-green-50 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
          <div><div className="text-xl font-bold">68%</div><div className="text-xs text-gray-500">Ort. Tamamlanma</div></div>
        </div>
        <div className="bg-white rounded-xl p-4 border shadow-sm flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg"><PieChartIcon className="w-5 h-5 text-purple-600" /></div>
          <div><div className="text-xl font-bold">₺12.5M</div><div className="text-xs text-gray-500">Toplam Bütçe</div></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Proje Bazlı İlerleme</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={projectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" fontSize={11} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Bar dataKey="tamamlanan" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Tamamlanan %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">İş Kategorisi Dağılımı</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={5}>
                {categoryData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {categoryData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-5 py-4 border-b"><h3 className="font-semibold text-gray-900">Oluşturulan Raporlar</h3></div>
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Rapor Adı</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tür</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Tarih</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">Boyut</th>
              <th className="text-left px-4 py-3 font-medium text-gray-600">İşlem</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {reports.map((r, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-2"><FileText className="w-4 h-4 text-gray-400" /><span className="font-medium text-gray-900">{r.name}</span></td>
                <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded ${r.type === 'PDF' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{r.type}</span></td>
                <td className="px-4 py-3 text-gray-500">{r.date}</td>
                <td className="px-4 py-3 text-gray-500">{r.size}</td>
                <td className="px-4 py-3"><button className="text-blue-600 hover:text-blue-700 flex items-center gap-1"><Download className="w-4 h-4" /> İndir</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
