"use client";

import { useState } from "react";
import { calculateSeverance, formatCurrency } from "@/lib/calculator-logic";
import StateSelector from "@/components/StateSelector";

export default function SeveranceCalculator() {
  const [weeklyPay, setWeeklyPay] = useState(1000);
  const [yearsOfService, setYearsOfService] = useState(5);
  const [formula, setFormula] = useState(1);
  const [result, setResult] = useState(calculateSeverance(1000, 5, 1));

  const handleCalculate = () => {
    setResult(calculateSeverance(weeklyPay, yearsOfService, formula));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Severance Pay Calculator</h2>

        {/* State Selector */}
        <StateSelector label="Select your state (optional)" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Weekly Pay ($)
            </label>
            <input
              type="number"
              value={weeklyPay}
              onChange={(e) => setWeeklyPay(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Years of Service
            </label>
            <input
              type="number"
              value={yearsOfService}
              onChange={(e) => setYearsOfService(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Severance Formula
            </label>
            <select
              value={formula}
              onChange={(e) => setFormula(parseFloat(e.target.value))}
              className="input-field w-full"
            >
              <option value={1}>1 week per year of service</option>
              <option value={2}>2 weeks per year of service</option>
              <option value={0.5}>0.5 weeks per year of service</option>
              <option value={1.5}>1.5 weeks per year of service</option>
            </select>
          </div>

          <button onClick={handleCalculate} className="btn-primary w-full">
            Calculate Severance
          </button>
        </div>

        {result && (
          <div className="calculator-result mt-6">
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Per Year of Service</p>
                <p className="text-xl font-bold">
                  {formatCurrency(result.perYear)}
                </p>
              </div>
              <div className="border-t border-green-300 pt-3">
                <p className="text-sm text-gray-600">
                  Total Severance Package
                </p>
                <p className="text-3xl font-bold text-green-700">
                  {formatCurrency(result.totalSeverance)}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold text-sm mb-2">Common Formulas</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <strong>1x formula:</strong> Most common, 1 week pay per year
            </li>
            <li>
              <strong>2x formula:</strong> More generous, often for management
            </li>
            <li>
              <strong>Varies:</strong> Check your employment agreement
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
