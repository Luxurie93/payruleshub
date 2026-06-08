"use client";

import { useState, useRef, useEffect } from "react";

const TOOLS = [
  {
    href: "/tools/overtime-pay-calculator",
    label: "Overtime Pay Calculator",
    desc: "Regular + OT pay with state rules",
  },
  {
    href: "/tools/pto-accrual-calculator",
    label: "PTO Accrual Calculator",
    desc: "Earn per period, month, or year",
  },
  {
    href: "/tools/hourly-to-salary-calculator",
    label: "Hourly to Salary Calculator",
    desc: "Annual, monthly & biweekly equivalents",
  },
  {
    href: "/tools/take-home-pay-estimator",
    label: "Take-Home Pay Estimator",
    desc: "Net pay after taxes & FICA",
  },
  {
    href: "/tools/severance-pay-calculator",
    label: "Severance Pay Calculator",
    desc: "Estimate your separation package",
  },
];

export default function NavDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-slate-700 hover:text-teal-600 transition text-sm"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Tools
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50"
          role="menu"
        >
          {TOOLS.map((tool) => (
            <li key={tool.href} role="none">
              <a
                href={tool.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex flex-col px-4 py-2.5 hover:bg-slate-50 transition"
              >
                <span className="text-sm font-medium text-slate-800">{tool.label}</span>
                <span className="text-xs text-gray-500 mt-0.5">{tool.desc}</span>
              </a>
            </li>
          ))}
          <li role="none" className="border-t border-gray-100 mt-1">
            <a
              href="/tools"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-teal-600 hover:bg-slate-50 transition"
            >
              View all tools →
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
