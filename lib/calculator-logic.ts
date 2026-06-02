// Calculator utility functions

export const calculateOvertimePay = (
  hourlyRate: number,
  hoursWorked: number,
  overtimeThreshold: number = 40,
  overtimeMultiplier: number = 1.5
) => {
  const regularHours = Math.min(hoursWorked, overtimeThreshold);
  const overtimeHours = Math.max(0, hoursWorked - overtimeThreshold);

  const regularPay = regularHours * hourlyRate;
  const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier;
  const totalPay = regularPay + overtimePay;

  return { regularPay, overtimePay, totalPay, regularHours, overtimeHours };
};

export const calculatePTOAccrual = (
  accrualRate: number,
  hoursPerWeek: number,
  payFrequency: "weekly" | "biweekly" | "semimonthly" | "monthly"
) => {
  const weeksPerYear = 52;
  let payPeriodsPerYear = 26;

  if (payFrequency === "weekly") payPeriodsPerYear = 52;
  if (payFrequency === "semimonthly") payPeriodsPerYear = 24;
  if (payFrequency === "monthly") payPeriodsPerYear = 12;

  const hoursPerPeriod = hoursPerWeek * (weeksPerYear / payPeriodsPerYear);
  const monthlyAccrual = (accrualRate / 100) * hoursPerPeriod * (payPeriodsPerYear / 12);
  const annualAccrual = monthlyAccrual * 12;

  return {
    monthlyAccrual: Math.round(monthlyAccrual * 100) / 100,
    annualAccrual: Math.round(annualAccrual * 100) / 100,
    perPayPeriod: Math.round(hoursPerPeriod * (accrualRate / 100) * 100) / 100,
  };
};

export const calculateSalary = (
  hourlyRate: number,
  hoursPerWeek: number,
  weeksPerYear: number = 52,
  paidTimeOffWeeks: number = 0
) => {
  const workingWeeks = weeksPerYear - paidTimeOffWeeks;
  const annualSalary = hourlyRate * hoursPerWeek * workingWeeks;
  const monthlySalary = annualSalary / 12;
  const biweeklySalary = (hourlyRate * hoursPerWeek * 2);
  const weeklySalary = hourlyRate * hoursPerWeek;

  return {
    annual: Math.round(annualSalary * 100) / 100,
    monthly: Math.round(monthlySalary * 100) / 100,
    biweekly: Math.round(biweeklySalary * 100) / 100,
    weekly: Math.round(weeklySalary * 100) / 100,
  };
};

export const calculateTakeHomePay = (
  grossPay: number,
  filingStatus: "single" | "married" | "head_of_household",
  federalTaxRate: number = 0.12,
  stateTaxRate: number = 0.05,
  ssRate: number = 0.062,
  medicareRate: number = 0.0145
) => {
  const federalTax = grossPay * federalTaxRate;
  const stateTax = grossPay * stateTaxRate;
  const socialSecurity = Math.min(grossPay * ssRate, 168600 * ssRate / 12); // 2025 limit per month
  const medicare = grossPay * medicareRate;

  const totalDeductions = federalTax + stateTax + socialSecurity + medicare;
  const netPay = grossPay - totalDeductions;

  return {
    gross: Math.round(grossPay * 100) / 100,
    federalTax: Math.round(federalTax * 100) / 100,
    stateTax: Math.round(stateTax * 100) / 100,
    socialSecurity: Math.round(socialSecurity * 100) / 100,
    medicare: Math.round(medicare * 100) / 100,
    totalDeductions: Math.round(totalDeductions * 100) / 100,
    netPay: Math.round(netPay * 100) / 100,
  };
};

export const calculateSeverance = (
  weeklyPay: number,
  yearsOfService: number,
  weeksPerYearFormula: number = 1
) => {
  const totalSeverance = weeklyPay * weeksPerYearFormula * yearsOfService;

  return {
    totalSeverance: Math.round(totalSeverance * 100) / 100,
    perYear: Math.round(weeklyPay * weeksPerYearFormula * 100) / 100,
  };
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
