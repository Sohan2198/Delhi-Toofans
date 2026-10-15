import React from "react";
import { Calendar, Mail, Apple, Building2, Monitor } from "lucide-react";

export default function CalendarComponent() {
  const options = [
    {
      label: "Google",
      icon: <Calendar size={50} color="#4285F4" />,
      href: "https://www.addevent.com/event/cR26582037+google",
    },
    {
      label: "Outlook.com",
      icon: <Mail size={50} color="#0072C6" />,
      href: "https://www.addevent.com/event/cR26582037+outlookcom",
    },
    {
      label: "Outlook (Desktop)",
      icon: <Monitor size={50} color="#0072C6" />,
      href: "https://www.addevent.com/event/cR26582037+outlook",
    },
    {
      label: "Microsoft 365",
      icon: <Building2 size={50} color="#F25022" />,
      href: "https://www.addevent.com/event/cR26582037+office365",
    },
    {
      label: "Apple",
      icon: <Apple size={50} color="black" />,
      href: "https://www.addevent.com/event/cR26582037+apple",
    },
    {
      label: "Yahoo",
      icon: <Calendar size={50} color="#720E9E" />,
      href: "https://www.addevent.com/event/cR26582037+yahoo",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Add event to your Calendar
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {options.map((opt, idx) => (
          <a
            key={idx}
            href={opt.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 hover:border-[#3b0067] hover:shadow-md transition-all"
          >
            {opt.icon}
            <p className="mt-3 text-sm font-medium text-gray-700">
              {opt.label}
            </p>
          </a>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="https://www.addevent.com/?utm_source=event&utm_medium=atclinks&utm_id=plg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.addevent.com/web/images/logo-email-plain-fff-t1.png"
            alt="AddEvent"
            className="mx-auto h-4 opacity-70"
          />
        </a>
      </div>
    </div>
  );
}
