import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

const Settings = () => {
  const [siteName, setSiteName] = useState('O Melhor da Amazônia');
  const [siteDescription, setSiteDescription] = useState('Jornalismo de impacto e tecnologia');
  const [adminEmail, setAdminEmail] = useState('contato@omelhordaamazonia.com.br');

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Configurações do Site</h2>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20 mb-8">
          <h3 className="font-headline-md text-headline-md text-primary mb-6">Configurações Gerais</h3>
          <div className="space-y-6">
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">Nome do Site</label>
              <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:border-secondary" />
            </div>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">Descrição</label>
              <textarea value={siteDescription} onChange={(e) => setSiteDescription(e.target.value)} rows="3" className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:border-secondary" />
            </div>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-2">E-mail do Administrador</label>
              <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:border-secondary" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-label-md hover:bg-primary/90 transition-all">
            Salvar Alterações
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;