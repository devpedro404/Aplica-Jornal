import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

const Settings = () => {
  const [siteName, setSiteName] = useState('O Melhor da Amazônia');
  const [siteDescription, setSiteDescription] = useState('Jornalismo de impacto e tecnologia');
  const [adminEmail, setAdminEmail] = useState('contato@omelhordaamazonia.com.br');
  const [notifications, setNotifications] = useState(true);

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Configurações do Site</h2>

        <div className="space-y-8">
          {/* Site Settings */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Configurações Gerais</h3>
            <div className="space-y-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Nome do Site</label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:border-secondary focus:ring-0"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Descrição</label>
                <textarea
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:border-secondary focus:ring-0"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">E-mail do Administrador</label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:border-secondary focus:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Notificações</h3>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-label-md text-label-md text-on-surface">Receber notificações por e-mail</p>
                <p className="text-sm text-on-surface-variant">Receba alertas sobre novos comentários e publicações</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:ring-4 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-all">
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;