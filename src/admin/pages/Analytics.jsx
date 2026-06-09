import React from 'react';
import AdminLayout from '../components/AdminLayout';

const Analytics = () => {
  const trafficSources = [
    { name: 'Busca Orgânica', percentage: 54.2, icon: 'search', color: 'bg-primary' },
    { name: 'Redes Sociais', percentage: 22.8, icon: 'share', color: 'bg-secondary' },
    { name: 'Tráfego Direto', percentage: 18.5, icon: 'ads_click', color: 'bg-tertiary-container' },
    { name: 'Newsletter', percentage: 4.5, icon: 'mail', color: 'bg-surface-container-high' }
  ];

  return (
    <AdminLayout>
      <div className="mb-10">
        <h2 className="font-headline-lg text-headline-lg text-primary">Analytics</h2>
        <p className="text-on-surface-variant">Métricas e estatísticas de desempenho do portal.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary-container rounded-lg"><span className="material-symbols-outlined">visibility</span></div>
            <span className="text-secondary text-sm">+12.4%</span>
          </div>
          <p className="text-on-surface-variant font-label-md mb-1">Visualizações</p>
          <h3 className="font-headline-md text-headline-md text-primary">1,284,502</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary-container rounded-lg"><span className="material-symbols-outlined">timer</span></div>
            <span className="text-secondary text-sm">+5.2s</span>
          </div>
          <p className="text-on-surface-variant font-label-md mb-1">Tempo Médio</p>
          <h3 className="font-headline-md text-headline-md text-primary">04m 32s</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-tertiary-container rounded-lg"><span className="material-symbols-outlined">group</span></div>
            <span className="text-secondary text-sm">+8.1%</span>
          </div>
          <p className="text-on-surface-variant font-label-md mb-1">Visitantes</p>
          <h3 className="font-headline-md text-headline-md text-primary">452,118</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-outline-variant rounded-lg"><span className="material-symbols-outlined">trending_up</span></div>
            <span className="text-error text-sm">-2.1%</span>
          </div>
          <p className="text-on-surface-variant font-label-md mb-1">Rejeição</p>
          <h3 className="font-headline-md text-headline-md text-primary">42.8%</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20">
          <h4 className="font-headline-md text-headline-md text-primary mb-8">Fontes de Tráfego</h4>
          <div className="space-y-8">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-xl ${source.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-white">{source.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-label-md text-on-surface">{source.name}</p>
                  <h5 className="font-bold text-xl text-primary">{source.percentage}%</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-xl p-8 shadow-sm border border-outline-variant/20">
          <h4 className="font-headline-md text-headline-md text-primary mb-8">Engajamento Semanal</h4>
          <div className="h-80 flex items-end justify-between gap-2">
            {[45, 60, 85, 55, 70, 40, 90].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-primary/10 rounded-t-lg hover:bg-primary/20" style={{ height: `${height}%` }} />
                <span className="text-xs text-on-surface-variant">{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;