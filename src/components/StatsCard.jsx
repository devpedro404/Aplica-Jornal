import React from 'react';

const StatsCard = ({ icon, iconBg, label, value, change, changeType }) => {
  return (
    <div className="glass-panel p-6 bg-white rounded-xl shadow-sm border border-outline-variant/20">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 ${iconBg} rounded-lg`}>
          <span className="material-symbols-outlined text-on-secondary-container">{icon}</span>
        </div>
        <span className={`text-sm font-bold ${changeType === 'positive' ? 'text-secondary' : 'text-error'}`}>
          {change}
        </span>
      </div>
      <p className="text-on-surface-variant font-label-md text-label-md mb-1">{label}</p>
      <h3 className="font-headline-md text-headline-md text-primary">{value}</h3>
    </div>
  );
};

export default StatsCard;