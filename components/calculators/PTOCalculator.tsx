"use client";

import { useState } from "react";
import { calculatePTOAccrual, formatCurrency } from "@/lib/calculator-logic";
import StateSelector from "@/components/StateSelector";

export default function PTOCalculator() {
  const [accrualRate, setAccrualRate] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [payFrequency, setPayFrequency] = useState<
    "weekly" | "biweekly" | "semimonthly" | "monthly"
  >("biweekly");
  const [result, setResult] = useState(
    calculatePTOAccrual(5, 40, "biweekly")
  );

  const handleCalculate = () => {
    setResult(calculatePTOAccrual(accrualRate, hoursPerWeek, payFrequency));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">PTO Accrual Calculator</h2>

        {/* State Selector */}
        <StateSelector label="Select your state (optional)" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Accrual Rate (% of hours/period)
            </label>
            <input
              type="number"
              value={accrualRate}
              onChange={(e) => setAccrualRate(parseFloat(e.target.value))}
              className="input-field w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Typical: 5% = ~2.6 weeks/year
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Hours per Week
            </label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Pay Frequency
            </label>
            <select
              value={payFrequency}
              onChange={(e) =>
                setPayFrequency(
                  e.target.value as
                    | "weekly"
                    | "biweekly"
                    | "semimonthly"
                    | "monthly"
                )
              }
              className="input-field w-full"
            >
              <option value="weekly">Weekly</option>
              <option value="biweekly">Biweekly</option>
              <option value="semimonthly">Semimonthly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button onClick={handleCalculate} className="btn-primary w-full">
            Calculate Accrual
          </button>
        </div>

        {result && (
          <div className="calculator-result mt-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-600">Per Pay Period</p>
                <p className="text-lg font-bold text-green-600">
                  {result.perPayPeriod.toFixed(2)} hrs
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Monthly</p>
                <p className="text-lg font-bold text-green-600">
                  {result.monthlyAccrual.toFixed(2)} hrs
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Annual</p>
                <p className="text-lg font-bold text-green-600">
                  {result.annualAccrual.toFixed(2)} hrs
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold text-sm mb-2">Common Accrual Methods</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <strong>Front-loaded:</strong> Full year PTO given at start
            </li>
            <li>
              <strong>Per-pay-period:</strong> Accrues gradually throughout year
            </li>
            <li>
              <strong>Hybrid:</strong> Partial upfront + monthly accrual
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
