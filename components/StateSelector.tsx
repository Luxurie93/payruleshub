"use client";

import { US_STATES } from "@/lib/data/states";
import { useSelectedState } from "@/context/StateContext";

interface StateSelectorProps {
  label?: string;
}

export default function StateSelector({ label = "Select your state (optional)" }: StateSelectorProps) {
  const { selectedState, setSelectedState } = useSelectedState();

  return (
    <div className="mb-6">
      <label htmlFor="state-select" className="block text-sm font-medium mb-2">
        {label}
      </label>
      <select
        id="state-select"
        value={selectedState || ""}
        onChange={(e) => setSelectedState(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-slate-900"
      >
        <option value="">-- Select your state --</option>
        {US_STATES.map((state) => (
          <option key={state.code} value={state.code}>
            {state.label}
          </option>
        ))}
      </select>
      <p className="text-xs text-slate-500 mt-2">
        Rules vary by state; results are estimates. Consult your employer or state labor department.
      </p>
    </div>
  );
}
