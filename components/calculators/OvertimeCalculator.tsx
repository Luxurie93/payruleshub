"use client";

import { useState } from "react";
import { calculateOvertimePay, formatCurrency } from "@/lib/calculator-logic";
import StateSelector from "@/components/StateSelector";
import { useSelectedState } from "@/context/StateContext";
import { getStateNotes } from "@/lib/stateRules";

export default function OvertimeCalculator() {
  const { selectedState } = useSelectedState();
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursWorked, setHoursWorked] = useState(45);
  const [overtimeThreshold, setOvertimeThreshold] = useState(40);
  const [overtimeMultiplier, setOvertimeMultiplier] = useState(1.5);
  const [result, setResult] = useState(
    calculateOvertimePay(25, 45, 40, 1.5)
  );

  const handleCalculate = () => {
    setResult(
      calculateOvertimePay(
        hourlyRate,
        hoursWorked,
        overtimeThreshold,
        overtimeMultiplier
      )
    );
  };

  const stateNotes = getStateNotes(selectedState);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Overtime Pay Calculator</h2>

        {/* State Selector */}
        <StateSelector label="Select your state (optional)" />

        {/* State Notes */}
        {stateNotes.length > 0 && (
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-900 rounded">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              {selectedState ? `${selectedState} Rules:` : "Federal Rules (FLSA):"}
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              {stateNotes.map((note, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Hourly Rate ($)
            </label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Hours Worked
            </label>
            <input
              type="number"
              value={hoursWorked}
              onChange={(e) => setHoursWorked(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Overtime Threshold (hours/week)
            </label>
            <input
              type="number"
              value={overtimeThreshold}
              onChange={(e) => setOvertimeThreshold(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Overtime Multiplier (e.g., 1.5 for time-and-a-half)
            </label>
            <select
              value={overtimeMultiplier}
              onChange={(e) => setOvertimeMultiplier(parseFloat(e.target.value))}
              className="input-field w-full"
            >
              <option value={1.5}>1.5x (time-and-a-half)</option>
              <option value={2}>2x (double time)</option>
              <option value={1.25}>1.25x</option>
            </select>
          </div>

          <button onClick={handleCalculate} className="btn-primary w-full">
            Calculate
          </button>
        </div>

        {result && (
          <div className="calculator-result mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Regular Pay</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(result.regularPay)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Overtime Pay</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(result.overtimePay)}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-green-300">
              <p className="text-sm text-gray-600">Total Pay</p>
              <p className="text-3xl font-bold text-green-700">
                {formatCurrency(result.totalPay)}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
          <h3 className="font-semibold text-sm mb-2 text-yellow-900">⚠️ Disclaimer</h3>
          <p className="text-xs text-yellow-800">
            This is an estimate only. Overtime calculations vary by employer, industry, and state. Verify results with your HR or payroll department. This is not tax or legal advice.
          </p>
        </div>
      </div>
    </div>
  );
}

