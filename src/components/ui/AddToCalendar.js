import React from 'react';
import { Apple, Building2, Calendar, Mail, Monitor } from 'lucide-react';
import { CALENDAR_PROVIDERS } from '../../data/site';

const ICONS = { apple: Apple, building: Building2, calendar: Calendar, mail: Mail, monitor: Monitor };

const AddToCalendar = ({ title = 'Add event to your Calendar', titleId, iconSize = 40 }) => (
  <div className="p-8">
    <h2 id={titleId} className="mb-8 text-center text-2xl font-bold text-gray-800">
      {title}
    </h2>

    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      {CALENDAR_PROVIDERS.map(({ label, href, icon, color }) => {
        const Icon = ICONS[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl border border-gray-200 p-4 transition-all hover:border-toofan-purple hover:shadow-md"
          >
            <Icon size={iconSize} color={color} aria-hidden="true" />
            <span className="mt-3 text-sm font-medium text-gray-700">{label}</span>
          </a>
        );
      })}
    </div>

    <div className="mt-6 text-center">
      <a
        href="https://www.addevent.com/?utm_source=event&utm_medium=atclinks&utm_id=plg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.addevent.com/web/images/logo-email-plain-fff-t1.png"
          alt="Powered by AddEvent"
          className="mx-auto h-4 opacity-70"
          loading="lazy"
        />
      </a>
    </div>
  </div>
);

export default AddToCalendar;
