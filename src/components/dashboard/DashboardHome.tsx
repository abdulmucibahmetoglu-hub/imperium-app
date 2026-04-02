import {
  FolderKanban,
  Users,
  ClipboardList,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const stats = [
  { label: 'Aktif Projeler', value: '12', icon: FolderKanban, color: 'bg-blue-500', change: '+2', up: true },
  { label: 'Toplam Görev', value: '248', icon: ClipboardList, color: 'bg-green-500', change: '+18', up: true },
  { label: 'Ekip Üyeleri', value: '45', icon: Users, color: 'bg-purple-500', change: '+5', up: true },
  { label: 'Açık Eksiklikler', value: '23', icon: AlertTriangle, color: 'bg-orange-500', change: '-8', up: false },
];

const areaData = [
  { name: 'Oca', tamamlanan: 40, planlanan: 50 },
  { name: 'Şub', tamamlanan: 55, planlanan: 60 },
  { name: 'Mar', tamamlanan: 70, planlanan: 75 },
  { name: 'Nis', tamamlanan: 62, planlanan: 80 },
  { name: 'May', tamamlanan: 85, planlanan: 90 },
  { name: 'Haz', tamamlanan: 92, planlanan: 95 },
];

const barData = [
  { name: 'Proje A', tamamlanan: 85, kalan: 15 },
  { name: 'Proje B', tamamlanan: 65, kalan: 35 },
  { name: 'Proje C', tamamlanan: 92, kalan: 8 },
  { name: 'Proje D', tamamlanan: 45, kalan: 55 },
  { name: 'Proje E', tamamlanan: 78, kalan: 22 },
];

const pieData = [
  { name: 'Tamamlanan', value: 65, color: '#3b82f6' },
  { name: 'Devam Eden', value: 25, color: '#f59e0b' },
  { name: 'Bekleyen', value: 10, color: '#ef4444' },
];

const recentActivities = [
  { user: 'Ahmet Y.', action: 'Günlük rapor ekledi', project: 'Metropol Bursa', time: '5 dk önce', color: 'bg-blue-500' },
  { user: 'Mehmet K.', action: 'Eksiklik kaydı oluşturdu', project: 'Maslak Meridian', time: '15 dk önce', color: 'bg-orange-500' },
  { user: 'Fatma S.', action: 'Sipariş onayladı', project: 'Yalıkavak Residence', time: '1 saat önce', color: 'bg-green-500' },
  { user: 'Ali D.', action: 'İş programı güncelledi', project: 'Yomra Trend', time: '2 saat önce', color: 'bg-purple-500' },
  { user: 'Ayşe T.', action: 'Denetleme formu doldurdu', project: 'Metropol Bursa', time: '3 saat önce', color: 'bg-indigo-500' },
];

const upcomingTasks = [
  { title: 'Beton döküm kontrolü', project: 'Metropol Bursa', date: '02 Nis', priority: 'Yüksek', priorityColor: 'bg-red-100 text-red-600' },
  { title: 'Elektrik tesisatı revizyonu', project: 'Maslak Meridian', date: '03 Nis', priority: 'Orta', priorityColor: 'bg-yellow-100 text-yellow-600' },
  { title: 'Sıva kalite kontrol', project: 'Yomra Trend', date: '04 Nis', priority: 'Normal', priorityColor: 'bg-blue-100 text-blue-600' },
  { title: 'Malzeme siparişi', project: 'Yalıkavak Residence', date: '05 Nis', priority: 'Yüksek', priorityColor: 'bg-red-100 text-red-600' },
];

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ana Panel</h1>
          <p className="text-gray-500 text-sm">Proje yönetim özetiniz</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Son güncelleme: Bugün, 14:30</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${stat.up ? 'text-green-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Proje İlerleme Trendi</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorTamamlanan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Area type="monotone" dataKey="planlanan" stroke="#94a3b8" strokeWidth={2} fill="none" strokeDasharray="5 5" />
              <Area type="monotone" dataKey="tamamlanan" stroke="#3b82f6" strokeWidth={2} fill="url(#colorTamamlanan)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Proje Bazlı Tamamlanma</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" fontSize={12} domain={[0, 100]} />
              <YAxis dataKey="name" type="category" fontSize={12} width={70} />
              <Tooltip />
              <Bar dataKey="tamamlanan" fill="#3b82f6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Görev Durumu</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={5}>
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full ${activity.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.project} · {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Yaklaşan Görevler</h3>
          <div className="space-y-3">
            {upcomingTasks.map((task, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-center flex-shrink-0">
                  <div className="text-xs text-gray-500">{task.date.split(' ')[1]}</div>
                  <div className="text-lg font-bold text-gray-900">{task.date.split(' ')[0]}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{task.title}</p>
                  <p className="text-xs text-gray-500">{task.project}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${task.priorityColor} flex-shrink-0`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
          <TrendingUp className="w-6 h-6 mb-2 opacity-80" />
          <div className="text-2xl font-bold">₺12.5M</div>
          <div className="text-sm opacity-80">Toplam Bütçe</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
          <DollarSign className="w-6 h-6 mb-2 opacity-80" />
          <div className="text-2xl font-bold">₺8.2M</div>
          <div className="text-sm opacity-80">Harcanan</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white">
          <DollarSign className="w-6 h-6 mb-2 opacity-80" />
          <div className="text-2xl font-bold">₺4.3M</div>
          <div className="text-sm opacity-80">Kalan Bütçe</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white">
          <TrendingUp className="w-6 h-6 mb-2 opacity-80" />
          <div className="text-2xl font-bold">65.6%</div>
          <div className="text-sm opacity-80">Bütçe Kullanımı</div>
        </div>
      </div>
    </div>
  );
}
