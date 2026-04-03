import { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Cloud,
  LayoutDashboard,
  FolderKanban,
  Ruler,
  ShoppingCart,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  ClipboardList,
  AlertTriangle,
  FileText,
  CalendarDays,
  PackageSearch,
  CheckSquare,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Search,
  Palette,
} from 'lucide-react';
import { useTheme, type ThemeName } from '../context/ThemeContext';

import DashboardHome from '../components/dashboard/DashboardHome';
import ProjeYonetimi from '../components/dashboard/ProjeYonetimi';
import TeknikOfis from '../components/dashboard/TeknikOfis';
import SatinAlma from '../components/dashboard/SatinAlma';
import KaliteGuvenlik from '../components/dashboard/KaliteGuvenlik';
import Finans from '../components/dashboard/Finans';
import Satis from '../components/dashboard/Satis';
import GuncelDurum from '../components/dashboard/GuncelDurum';
import HasarEksiklik from '../components/dashboard/HasarEksiklik';
import GunlukRapor from '../components/dashboard/GunlukRapor';
import IsProgrami from '../components/dashboard/IsProgrami';
import Siparisler from '../components/dashboard/Siparisler';
import Denetlemeler from '../components/dashboard/Denetlemeler';
import BilgiTalepleri from '../components/dashboard/BilgiTalepleri';
import Gorevlendirme from '../components/dashboard/Gorevlendirme';
import Raporlama from '../components/dashboard/Raporlama';
import Ayarlar from '../components/dashboard/Ayarlar';

const menuItems = [
  { path: '/dashboard', label: 'Ana Panel', icon: LayoutDashboard },
  { path: '/dashboard/proje-yonetimi', label: 'Proje Yönetimi', icon: FolderKanban },
  { path: '/dashboard/teknik-ofis', label: 'Teknik Ofis', icon: Ruler },
  { path: '/dashboard/satin-alma', label: 'Satın Alma', icon: ShoppingCart },
  { path: '/dashboard/kalite-guvenlik', label: 'Kalite & Güvenlik', icon: ShieldCheck },
  { path: '/dashboard/finans', label: 'Finans', icon: DollarSign },
  { path: '/dashboard/satis', label: 'Satış', icon: TrendingUp },
  { path: '/dashboard/guncel-durum', label: 'Güncel Durum', icon: ClipboardList },
  { path: '/dashboard/hasar-eksiklik', label: 'Hasar-Eksiklik', icon: AlertTriangle },
  { path: '/dashboard/gunluk-rapor', label: 'Günlük Rapor', icon: FileText },
  { path: '/dashboard/is-programi', label: 'İş Programı', icon: CalendarDays },
  { path: '/dashboard/siparisler', label: 'Siparişler', icon: PackageSearch },
  { path: '/dashboard/denetlemeler', label: 'Denetlemeler', icon: CheckSquare },
  { path: '/dashboard/bilgi-talepleri', label: 'Bilgi Talepleri', icon: MessageSquare },
  { path: '/dashboard/gorevlendirme', label: 'Görevlendirme', icon: Users },
  { path: '/dashboard/raporlama', label: 'Raporlama', icon: BarChart3 },
  { path: '/dashboard/ayarlar', label: 'Ayarlar', icon: Settings },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { themeName, setThemeName, theme: colors } = useTheme();

  const themeOptions: { name: ThemeName; label: string; color: string }[] = [
    { name: 'ocean', label: 'Okyanus', color: 'bg-blue-500' },
    { name: 'emerald', label: 'Zümrüt', color: 'bg-emerald-500' },
    { name: 'sunset', label: 'Gün Batımı', color: 'bg-orange-500' },
    { name: 'purple', label: 'Mor', color: 'bg-purple-500' },
    { name: 'rose', label: 'Gül', color: 'bg-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 ${colors.sidebarBg} text-white transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } hidden lg:flex flex-col`}
      >
        <div className={`flex items-center gap-2 p-4 border-b ${colors.sidebarBorder}`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="relative flex-shrink-0">
              <Cloud className={`w-8 h-8 ${colors.accent}`} />
              <Cloud className="w-5 h-5 text-orange-400 absolute -top-1 -right-1" />
            </div>
            {sidebarOpen && (
              <span className={`text-lg font-bold ${colors.accent}`}>
                YapıBulut
              </span>
            )}
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive
                      ? `${colors.sidebarActive} text-white`
                      : `text-gray-300 ${colors.sidebarHover} hover:text-white`
                  }`}
                  title={!sidebarOpen ? item.label : undefined}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-4 border-t ${colors.sidebarBorder} text-gray-400 hover:text-white text-sm`}
        >
          {sidebarOpen ? '« Küçült' : '»'}
        </button>
      </aside>

      {/* Mobile sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileSidebarOpen(false)} />
          <aside className={`absolute left-0 top-0 bottom-0 w-64 ${colors.sidebarBg} text-white overflow-y-auto`}>
            <div className={`flex items-center justify-between p-4 border-b ${colors.sidebarBorder}`}>
              <Link to="/" className="flex items-center gap-2">
                <div className="relative">
                  <Cloud className={`w-8 h-8 ${colors.accent}`} />
                  <Cloud className="w-5 h-5 text-orange-400 absolute -top-1 -right-1" />
                </div>
                <span className={`text-lg font-bold ${colors.accent}`}>
                  YapıBulut
                </span>
              </Link>
              <button onClick={() => setMobileSidebarOpen(false)}>
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            <nav className="space-y-1 p-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? `${colors.sidebarActive} text-white`
                        : `text-gray-300 ${colors.sidebarHover}`
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>
        {/* Top bar */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div className="relative hidden sm:block">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Ara..."
                  className="pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Theme selector */}
              <div className="relative">
                <button
                  onClick={() => { setThemeMenuOpen(!themeMenuOpen); setUserMenuOpen(false); }}
                  className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${colors.primary}`}
                  title="Tema Seç"
                >
                  <Palette className="w-5 h-5" />
                </button>
                {themeMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border py-2 z-50">
                    <p className="px-3 pb-2 text-xs font-semibold text-gray-400 uppercase">Tema Seç</p>
                    {themeOptions.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => { setThemeName(t.name); setThemeMenuOpen(false); }}
                        className={`flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          themeName === t.name ? 'font-semibold text-gray-900' : 'text-gray-600'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full ${t.color} ${themeName === t.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`} />
                        {t.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="relative">
                <Bell className="w-5 h-5 text-gray-500" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="relative">
                <button
                  onClick={() => { setUserMenuOpen(!userMenuOpen); setThemeMenuOpen(false); }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-8 h-8 ${colors.primaryBg} rounded-full flex items-center justify-center text-white text-sm font-medium`}>
                    AY
                  </div>
                  <span className="text-sm text-gray-700 hidden sm:block">Admin</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border py-1 z-50">
                    <Link to="/dashboard/ayarlar" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4" /> Ayarlar
                    </Link>
                    <button
                      onClick={() => navigate('/login')}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" /> Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/proje-yonetimi" element={<ProjeYonetimi />} />
            <Route path="/teknik-ofis" element={<TeknikOfis />} />
            <Route path="/satin-alma" element={<SatinAlma />} />
            <Route path="/kalite-guvenlik" element={<KaliteGuvenlik />} />
            <Route path="/finans" element={<Finans />} />
            <Route path="/satis" element={<Satis />} />
            <Route path="/guncel-durum" element={<GuncelDurum />} />
            <Route path="/hasar-eksiklik" element={<HasarEksiklik />} />
            <Route path="/gunluk-rapor" element={<GunlukRapor />} />
            <Route path="/is-programi" element={<IsProgrami />} />
            <Route path="/siparisler" element={<Siparisler />} />
            <Route path="/denetlemeler" element={<Denetlemeler />} />
            <Route path="/bilgi-talepleri" element={<BilgiTalepleri />} />
            <Route path="/gorevlendirme" element={<Gorevlendirme />} />
            <Route path="/raporlama" element={<Raporlama />} />
            <Route path="/ayarlar" element={<Ayarlar />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
