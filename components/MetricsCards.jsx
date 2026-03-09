import React from 'react';
import {
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const metricPalette = {
  default: 'from-indigo-500/20 via-slate-900 to-slate-950',
  warning: 'from-amber-400/30 via-slate-900 to-slate-950',
  success: 'from-emerald-400/30 via-slate-900 to-slate-950',
};

const cardBase =
  'flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br p-4 text-slate-50 shadow-lg shadow-black/20 backdrop-blur';

const MetricCard = ({ title, value, icon, tone = 'default', hint }) => (
  <div className={`${cardBase} ${metricPalette[tone] || metricPalette.default}`}>
    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/70">
      <span>{title}</span>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
        {icon}
      </span>
    </div>
    <div className="pt-5 text-3xl font-semibold leading-none text-white">{value}</div>
    {hint ? <p className="text-sm text-white/70">{hint}</p> : null}
  </div>
);

const metrics = [
  {
    title: 'Active Agents',
    value: 12,
    hint: 'Online right now',
    icon: <ShieldCheckIcon className="h-5 w-5" />,
    tone: 'success',
  },
  {
    title: 'Tasks Today',
    value: 48,
    hint: 'Queued assignments',
    icon: <ClipboardDocumentListIcon className="h-5 w-5" />,
    tone: 'default',
  },
  {
    title: 'Escalations',
    value: 3,
    hint: 'Need attention',
    icon: <ExclamationTriangleIcon className="h-5 w-5" />,
    tone: 'warning',
  },
  {
    title: 'System Health',
    value: '99.9%',
    hint: 'Uptime last 24h',
    icon: <CpuChipIcon className="h-5 w-5" />,
    tone: 'success',
  },
];

export const MetricsCards = () => (
  <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
    {metrics.map((metric) => (
      <MetricCard key={metric.title} {...metric} />
    ))}
  </section>
);

export default MetricsCards;
