"use client";

import { useState } from "react";
import { calculateSalary, formatCurrency } from "@/lib/calculator-logic";
import StateSelector from "@/components/StateSelector";

export default function HourlyToSalaryCalculator() {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  const [paidTimeOff, setPaidTimeOff] = useState(0);
  const [result, setResult] = useState(calculateSalary(25, 40, 52, 0));

  const handleCalculate = () => {
    setResult(calculateSalary(hourlyRate, hoursPerWeek, weeksPerYear, paidTimeOff));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Hourly to Salary Calculator
        </h2>

        {/* State Selector */}
        <StateSelector label="Select your state (optional)" />

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
              Weeks per Year
            </label>
            <input
              type="number"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Weeks of Paid Time Off (optional)
            </label>
            <input
              type="number"
              value={paidTimeOff}
              onChange={(e) => setPaidTimeOff(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <button onClick={handleCalculate} className="btn-primary w-full">
            Convert to Salary
          </button>
        </div>

        {result && (
          <div className="calculator-result mt-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Annual Salary</span>
                <span className="font-bold text-lg">
                  {formatCurrency(result.annual)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly</span>
                <span className="font-bold">{formatCurrency(result.monthly)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Biweekly</span>
                <span className="font-bold">{formatCurrency(result.biweekly)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Weekly</span>
                <span className="font-bold">{formatCurrency(result.weekly)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold text-sm mb-2">Note on Paid Time Off</h3>
          <p className="text-sm text-gray-700">
            If you have 3 weeks PTO + 10 holidays, enter 5 weeks total to
            reflect unpaid working days.
          </p>
        </div>
      </div>
    </div>
  );
}
