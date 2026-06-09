import React from 'react';
import AdminLayout from '../components/AdminLayout';
import StatsCard from '../components/StatsCard';

const Dashboard = () => {
  const regionData = [
    { name: 'Amazonas', percentage: 42 },
    { name: 'Pará', percentage: 28 },
    { name: 'Mato Grosso', percentage: 15 },
    { name: 'Outros', percentage: 15 }
  ];

  const recentArticles = [
    { id: 1, title: 'Avanço tecnológico no monitoramento de queimadas', category: 'Tecnologia', views: 142800, time: '06:12', change: '+18%' },
    { id: 2, title: 'Povos Originários e a Economia Criativa', category: 'Cultura', views: 98340, time: '04:45', change: '+12%' },
    { id: 3, title: 'Investimentos em infraestrutura verde batem recorde', category: 'Economia', views: 82100, time: '03:50', change: '-4%' }
  ];

  return (
    <AdminLayout>
      <div className="mb-6">
        <h2 className="font-headline-lg text-headline-lg text-primary text-2xl">Dashboard</h2>
        <p className="text-sm text-on-surface-variant">Bem-vindo ao centro de comando editorial</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard icon="visibility" iconBg="bg-secondary-container" label="Visualizações" value="1,284,502" change="+12.4%" changeType="positive" />
        <StatsCard icon="timer" iconBg="bg-primary-container" label="Tempo Médio" value="04:32" change="+5.2s" changeType="positive" />
        <StatsCard icon="group" iconBg="bg-tertiary-container" label="Visitantes" value="452,118" change="+8.1%" changeType="positive" />
        <StatsCard icon="trending_up" iconBg="bg-outline-variant" label="Rejeição" value="42.8%" change="-2.1%" changeType="negative" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-7 bg-white rounded-lg p-5 shadow-sm border border-outline-variant/20">
          <h3 className="font-semibold text-primary mb-4 text-base">Engajamento Semanal</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {[45, 60, 85, 55, 70, 40, 90].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-primary/10 rounded-t hover:bg-primary/20 transition-all" style={{ height: `${height}%` }} />
                <span className="text-[10px] text-on-surface-variant">{['S', 'T', 'Q', 'Q', 'S', 'S', 'D'][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white rounded-lg p-5 shadow-sm border border-outline-variant/20">
          <h4 className="font-semibold text-primary mb-4 text-base">Acessos por Região</h4>
          <div className="space-y-4">
            {regionData.map((region, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{region.name}</span>
                  <span className="font-semibold text-secondary">{region.percentage}%</span>
                </div>
                <div className="w-full bg-surface-variant h-1.5 rounded-full">
                  <div className="bg-secondary h-full rounded-full" style={{ width: `${region.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden">
        <div className="p-4 border-b border-outline-variant/20">
          <h4 className="font-semibold text-primary">Conteúdo em Destaque</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-surface-container-low">
              <tr className="text-left">
                <th className="px-4 py-2 text-xs font-medium text-on-surface-variant">Artigo</th>
                <th className="px-4 py-2 text-xs font-medium text-on-surface-variant">Categoria</th>
                <th className="px-4 py-2 text-xs font-medium text-on-surface-variant text-right">Views</th>
                <th className="px-4 py-2 text-xs font-medium text-on-surface-variant text-right">Tempo</th>
                <th className="px-4 py-2 text-xs font-medium text-on-surface-variant text-right">Variação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {recentArticles.map((article) => (
                <tr key={article.id} className="hover:bg-primary-fixed/5">
                  <td className="px-4 py-3">{article.title}</td>
                  <td className="px-4 py-3"><span className="px-2 py-0.5 bg-secondary-container/30 text-secondary text-[10px] font-semibold rounded">{article.category}</span></td>
                  <td className="px-4 py-3 text-right">{article.views.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right">{article.time}</td>
                  <td className={`px-4 py-3 text-right font-semibold ${article.change.includes('+') ? 'text-secondary' : 'text-error'}`}>{article.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;