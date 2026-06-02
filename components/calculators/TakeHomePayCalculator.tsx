"use client";

import { useEffect, useState } from "react";
import { calculateTakeHomePay, formatCurrency } from "@/lib/calculator-logic";
import StateSelector from "@/components/StateSelector";
import { useSelectedState } from "@/context/StateContext";
import { US_STATES } from "@/lib/data/states";

export default function TakeHomePayRulesHubulator() {
  const { selectedState } = useSelectedState();
  const [grossPay, setGrossPay] = useState(3000);
  const [filingStatus, setFilingStatus] = useState<
    "single" | "married" | "head_of_household"
  >("single");
  const [federalRate, setFederalRate] = useState(0.12);
  const [stateRate, setStateRate] = useState(0.05);
  const [result, setResult] = useState(
    calculateTakeHomePay(3000, "single", 0.12, 0.05)
  );

  // Auto-fill state tax rate when state is selected
  useEffect(() => {
    if (!selectedState) return;
    const match = US_STATES.find((s) => s.code === selectedState);
    if (match) setStateRate(match.taxRate);
  }, [selectedState]);

  const handleCalculate = () => {
    setResult(
      calculateTakeHomePay(grossPay, filingStatus, federalRate, stateRate)
    );
  };

  const selectedStateLabel = selectedState
    ? US_STATES.find((s) => s.code === selectedState)?.label
    : null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Take-Home Pay Estimator</h2>
        <p className="text-sm text-gray-600 mb-4">
          Rough estimate only — not professional tax advice.
        </p>

        <StateSelector label="Select your state" />

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Gross Pay ($)
            </label>
            <input
              type="number"
              value={grossPay}
              onChange={(e) => setGrossPay(parseFloat(e.target.value))}
              className="input-field w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Filing Status
            </label>
            <select
              value={filingStatus}
              onChange={(e) =>
                setFilingStatus(
                  e.target.value as
                    | "single"
                    | "married"
                    | "head_of_household"
                )
              }
              className="input-field w-full"
            >
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
              <option value="head_of_household">Head of Household</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Federal Tax Rate (%)
            </label>
            <input
              type="number"
              value={federalRate * 100}
              onChange={(e) => setFederalRate(parseFloat(e.target.value) / 100)}
              className="input-field w-full"
            />
            <p className="text-xs text-gray-500 mt-1">Typical: 10-22%</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              State Tax Rate (%)
              {selectedStateLabel && (
                <span className="ml-2 text-teal-600 font-normal">
                  — auto-filled for {selectedStateLabel}
                </span>
              )}
            </label>
            <input
              type="number"
              value={parseFloat((stateRate * 100).toFixed(4))}
              onChange={(e) => setStateRate(parseFloat(e.target.value) / 100)}
              className="input-field w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              {selectedStateLabel
                ? `${selectedStateLabel} estimated rate: ${(stateRate * 100).toFixed(2)}%. You can override this.`
                : "Select a state above to auto-fill, or enter manually (0–13%)."}
            </p>
          </div>

          <button onClick={handleCalculate} className="btn-primary w-full">
            Estimate Take-Home
          </button>
        </div>

        {result && (
          <div className="calculator-result mt-6">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Gross Pay</p>
              <p className="text-2xl font-bold">{formatCurrency(result.gross)}</p>
            </div>

            <div className="border-t border-green-300 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Federal Tax ({(federalRate * 100).toFixed(1)}%)</span>
                <span>−{formatCurrency(result.federalTax)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  State Tax{selectedStateLabel ? ` (${selectedStateLabel})` : ""} ({(stateRate * 100).toFixed(2)}%)
                </span>
                <span>−{formatCurrency(result.stateTax)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Social Security (6.2%)</span>
                <span>−{formatCurrency(result.socialSecurity)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Medicare (1.45%)</span>
                <span>−{formatCurrency(result.medicare)}</span>
              </div>
            </div>

            <div className="border-t border-green-300 mt-4 pt-4">
              <p className="text-sm text-gray-600">Estimated Net Pay</p>
              <p className="text-3xl font-bold text-green-700">
                {formatCurrency(result.netPay)}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p className="text-xs text-gray-700">
            <strong>⚠️ Disclaimer:</strong> This is a simplified estimate. Actual
            take-home depends on deductions, credits, withholding adjustments,
            and state-specific rules. Consult a tax professional for accuracy.
          </p>
        </div>
      </div>
    </div>
  );
}
