import { useState } from 'react';
import { User, Building2, Bell, Shield, Save } from 'lucide-react';

const tabs = [
  { id: 'profil', label: 'Profil', icon: User },
  { id: 'firma', label: 'Firma', icon: Building2 },
  { id: 'bildirimler', label: 'Bildirimler', icon: Bell },
  { id: 'guvenlik', label: 'Güvenlik', icon: Shield },
];

export default function Ayarlar() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>
        <p className="text-gray-500 text-sm">Hesap ve uygulama ayarlarınızı yönetin</p>
      </div>

      <div className="flex gap-2 bg-white p-1 rounded-lg border w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <tab.icon className="w-4 h-4" /> {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'profil' && (
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Profil Bilgileri</h3>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">AY</div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 mr-2">Fotoğraf Yükle</button>
              <button className="px-4 py-2 border text-sm rounded-lg text-gray-600 hover:bg-gray-50">Kaldır</button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
              <input type="text" defaultValue="Admin Yönetici" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <input type="email" defaultValue="admin@yapibulut.com" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="tel" defaultValue="+90 532 XXX XX XX" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pozisyon</label>
              <input type="text" defaultValue="Proje Müdürü" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            <Save className="w-4 h-4" /> Kaydet
          </button>
        </div>
      )}

      {activeTab === 'firma' && (
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Firma Bilgileri</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Firma Adı</label>
              <input type="text" defaultValue="YapıBulut İnşaat A.Ş." className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vergi No</label>
              <input type="text" defaultValue="1234567890" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
              <textarea rows={3} defaultValue="Görükle Mah. Üniversite 1. Cad. No: 933 Nilüfer / Bursa" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            <Save className="w-4 h-4" /> Kaydet
          </button>
        </div>
      )}

      {activeTab === 'bildirimler' && (
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Bildirim Ayarları</h3>
          <div className="space-y-4">
            {[
              { label: 'E-posta bildirimleri', desc: 'Önemli güncellemeler için e-posta alın', defaultChecked: true },
              { label: 'Görev atamaları', desc: 'Yeni görev atandığında bildirim alın', defaultChecked: true },
              { label: 'Proje güncellemeleri', desc: 'Proje durumu değişikliklerinde bildirim alın', defaultChecked: true },
              { label: 'Sipariş bildirimleri', desc: 'Sipariş durumu değişikliklerinde bildirim alın', defaultChecked: false },
              { label: 'Haftalık özet rapor', desc: 'Her pazartesi proje özet raporu alın', defaultChecked: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={item.defaultChecked} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'guvenlik' && (
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Güvenlik Ayarları</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mevcut Şifre</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 max-w-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Yeni Şifre</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 max-w-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Yeni Şifre Tekrar</label>
              <input type="password" className="w-full px-4 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500 max-w-md" />
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              <Shield className="w-4 h-4" /> Şifreyi Güncelle
            </button>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h4 className="font-medium text-gray-900 mb-4">İki Faktörlü Doğrulama</h4>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="text-sm font-medium text-gray-900">2FA ile hesabınızı koruyun</div>
                <div className="text-xs text-gray-500">SMS veya authenticator uygulaması ile giriş doğrulama</div>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700">Etkinleştir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
