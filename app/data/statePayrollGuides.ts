export type StatePayrollGuide = {
  slug: string;
  name: string;
  abbreviation: string;
  title: string;
  description: string;
  heroSummary: string;
  overtimeRule: string;
  finalPayRule: string;
  ptoRule: string;
  paycheckFactors: string[];
  exampleScenario: string;
  officialResources: { label: string; href: string }[];
  relatedGuides: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
};

export const statePayrollGuides: StatePayrollGuide[] = [
  {
    slug: "california",
    name: "California",
    abbreviation: "CA",
    title: "California Payroll Laws: Overtime, Final Paycheck & PTO Guide",
    description:
      "California payroll guide covering daily overtime, final paycheck timing, vacation payout, wage deductions, and paycheck calculator links.",
    heroSummary:
      "California is one of the most employee-protective payroll states. Many non-exempt workers must consider daily overtime, weekly overtime, double time, final pay deadlines, and earned vacation treatment.",
    overtimeRule:
      "California commonly requires overtime after more than 8 hours in a workday, more than 40 hours in a workweek, and double time in some long-day or seventh-consecutive-day situations. Exemptions and industry wage orders can change the analysis.",
    finalPayRule:
      "Employees discharged in California generally must receive final wages immediately. Employees who quit generally must be paid within 72 hours, or on the last day if they gave at least 72 hours of notice.",
    ptoRule:
      "California generally treats earned vacation as wages. Use-it-or-lose-it vacation forfeiture is risky; employers can often cap accrual prospectively, but earned vacation typically must be paid at separation.",
    paycheckFactors: [
      "Daily overtime and weekly overtime can both matter.",
      "Double time may apply after long workdays or on a seventh consecutive workday.",
      "Final check timing depends on whether the worker was discharged or resigned.",
      "Earned vacation payout is usually part of the final wage analysis.",
    ],
    exampleScenario:
      "If a California hourly worker earns $24/hour and works 11 hours in one day, a simple estimate starts with 8 regular hours plus 3 overtime hours at 1.5× before considering weekly totals, premiums, or exemptions.",
    officialResources: [
      { label: "California DIR — Overtime", href: "https://www.dir.ca.gov/dlse/faq_overtime.htm" },
      { label: "California DIR — Final Pay", href: "https://www.dir.ca.gov/dlse/faq_paydays.htm" },
      { label: "California DLSE", href: "https://www.dir.ca.gov/dlse/" },
    ],
    relatedGuides: [
      { label: "California Overtime Calculator", href: "/blog/california-overtime-calculator" },
      { label: "California Final Paycheck Calculator", href: "/blog/california-final-paycheck-calculator" },
      { label: "California PTO Payout Calculator", href: "/blog/california-pto-payout-calculator" },
    ],
    faqs: [
      { question: "Does California overtime start after 8 hours?", answer: "For many non-exempt employees, yes. Daily overtime can apply after more than 8 hours in a workday, plus weekly overtime after more than 40 hours." },
      { question: "Does California require vacation payout?", answer: "Earned vacation is generally treated as wages and is commonly payable at separation, subject to the specific facts and policy wording." },
      { question: "Should I use a state-specific calculator?", answer: "Yes. California rules are different enough that a generic federal-only overtime estimate can miss daily overtime or double time." },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbreviation: "NY",
    title: "New York Payroll Laws: Overtime, Final Pay & Paycheck Guide",
    description:
      "New York payroll guide covering overtime, final paycheck timing, PTO policy issues, deductions, local tax factors, and calculator links.",
    heroSummary:
      "New York payroll questions often involve weekly overtime, final pay by the next regular payday, written wage notices, state income tax, and sometimes New York City or Yonkers local tax factors.",
    overtimeRule:
      "New York generally follows the weekly overtime framework for non-exempt workers, with overtime after 40 hours in a workweek. Some residential employees and covered industries have special rules.",
    finalPayRule:
      "New York generally requires final wages to be paid no later than the regular payday for the pay period in which employment ended.",
    ptoRule:
      "New York vacation/PTO payout often depends on the employer's written policy. Clear written forfeiture or condition language can matter, so review the handbook, offer letter, and separation documents.",
    paycheckFactors: [
      "Weekly overtime over 40 hours is the common starting point.",
      "State income tax and possible local taxes can affect take-home pay.",
      "Final wages are generally due by the next regular payday.",
      "Vacation payout depends heavily on written policy terms.",
    ],
    exampleScenario:
      "If a New York worker earns $25/hour and works 46 eligible hours in a week, a simple gross estimate is 40 regular hours plus 6 overtime hours at 1.5× before deductions and any industry-specific rules.",
    officialResources: [
      { label: "New York Department of Labor", href: "https://dol.ny.gov/" },
      { label: "NY DOL — Wage and Hour", href: "https://dol.ny.gov/wages-and-hours" },
      { label: "NY Tax Department", href: "https://www.tax.ny.gov/" },
    ],
    relatedGuides: [
      { label: "New York Final Paycheck Calculator", href: "/blog/new-york-final-paycheck-calculator" },
      { label: "New York PTO Payout Calculator", href: "/blog/new-york-pto-payout-calculator" },
      { label: "New York Take-Home Pay Calculator", href: "/blog/new-york-take-home-pay-calculator" },
    ],
    faqs: [
      { question: "When is a final paycheck due in New York?", answer: "A common rule is payment by the regular payday for the pay period in which employment ended." },
      { question: "Does New York require PTO payout?", answer: "It often depends on the employer's written vacation/PTO policy and whether the policy clearly limits payout." },
      { question: "Why is New York take-home pay different from gross pay?", answer: "Federal withholding, FICA, New York state tax, benefit deductions, retirement contributions, and sometimes local taxes can all reduce net pay." },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    abbreviation: "FL",
    title: "Florida Payroll Laws: Overtime, Final Paycheck & Take-Home Pay Guide",
    description:
      "Florida payroll guide covering federal overtime, final paycheck questions, PTO policy issues, no state income tax, and calculator links.",
    heroSummary:
      "Florida payroll estimates are often simpler for take-home pay because Florida has no state income tax, but workers still need to consider federal withholding, FICA, overtime eligibility, deductions, and employer PTO policy.",
    overtimeRule:
      "Florida generally relies on federal FLSA overtime rules for covered non-exempt employees, commonly overtime after more than 40 hours in a workweek.",
    finalPayRule:
      "Florida does not have the same detailed final paycheck timing framework as some states, so final pay disputes often turn on wage agreements, regular payday practice, federal law, and available wage claim or court options.",
    ptoRule:
      "Florida PTO or vacation payout is usually policy-driven. If an employer promises payout in a handbook, agreement, or separation document, that promise is important to preserve and review.",
    paycheckFactors: [
      "No Florida state income tax usually makes net pay easier to estimate.",
      "Federal income tax and FICA still apply.",
      "Overtime generally starts with the federal over-40-hours rule.",
      "PTO payout depends on employer policy or agreement language.",
    ],
    exampleScenario:
      "If a Florida worker earns $20/hour and works 45 eligible hours, gross pay estimate starts with 40 regular hours plus 5 overtime hours at 1.5×. Net pay then depends mainly on federal withholding, FICA, and deductions.",
    officialResources: [
      { label: "U.S. DOL — FLSA", href: "https://www.dol.gov/agencies/whd/flsa" },
      { label: "U.S. DOL — Overtime", href: "https://www.dol.gov/agencies/whd/overtime" },
      { label: "Florida Department of Revenue", href: "https://floridarevenue.com/" },
    ],
    relatedGuides: [
      { label: "Florida Final Paycheck Calculator", href: "/blog/florida-final-paycheck-calculator" },
      { label: "Florida PTO Payout Calculator", href: "/blog/florida-pto-payout-calculator" },
      { label: "Florida Take-Home Pay Calculator", href: "/blog/florida-take-home-pay-calculator" },
    ],
    faqs: [
      { question: "Does Florida have state income tax?", answer: "No. Florida does not tax individual wage income at the state level, but federal tax, FICA, and deductions still matter." },
      { question: "Does Florida require PTO payout?", answer: "Florida PTO payout is usually based on employer policy or a written agreement rather than a broad automatic payout rule." },
      { question: "How should Florida overtime be estimated?", answer: "Start with federal FLSA overtime for eligible non-exempt work over 40 hours in a workweek, then review exemptions and employer pay practices." },
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbreviation: "TX",
    title: "Texas Payroll Laws: Overtime, Final Paycheck & PTO Guide",
    description:
      "Texas payroll guide covering Payday Law final paycheck timing, federal overtime, PTO policy issues, no state income tax, and calculator links.",
    heroSummary:
      "Texas payroll questions often involve the Texas Payday Law, final paycheck deadlines, federal overtime rules, no state income tax, and whether employer policy promises PTO payout.",
    overtimeRule:
      "Texas generally uses the federal FLSA overtime framework for covered non-exempt workers, commonly overtime after more than 40 hours in a workweek.",
    finalPayRule:
      "Under the Texas Payday Law, discharged employees are generally due final wages within six days. Employees who resign are generally due final wages by the next regular payday.",
    ptoRule:
      "Texas PTO payout is typically controlled by the employer's written policy or agreement. If the policy promises payout of unused paid leave, keep a copy of that policy with your wage records.",
    paycheckFactors: [
      "No Texas state income tax usually simplifies take-home pay estimates.",
      "Final paycheck timing differs for discharge versus resignation.",
      "Overtime usually starts with the federal over-40-hours rule.",
      "PTO payout is usually a policy or agreement question.",
    ],
    exampleScenario:
      "If a Texas employee is discharged on Monday, the final-pay timing question is different from an employee who resigns. Calculate wages owed first, then compare the deadline to the Texas Payday Law framework.",
    officialResources: [
      { label: "Texas Workforce Commission — Payday Law", href: "https://www.twc.texas.gov/programs/texas-payday-law" },
      { label: "U.S. DOL — Overtime", href: "https://www.dol.gov/agencies/whd/overtime" },
      { label: "Texas Comptroller", href: "https://comptroller.texas.gov/" },
    ],
    relatedGuides: [
      { label: "Texas Overtime Calculator", href: "/blog/texas-overtime-calculator" },
      { label: "Texas PTO Payout Calculator", href: "/blog/texas-pto-payout-calculator" },
      { label: "Overtime Rules by State", href: "/blog/overtime-rules-by-state" },
    ],
    faqs: [
      { question: "When is a final paycheck due in Texas?", answer: "A discharged employee is generally due final wages within six days; an employee who resigns is generally due by the next regular payday." },
      { question: "Does Texas have state income tax?", answer: "No. Texas does not have state wage income tax, though federal withholding, FICA, benefits, and deductions still affect net pay." },
      { question: "Does Texas require PTO payout?", answer: "Usually the written employer policy or agreement controls whether unused PTO is paid out." },
    ],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbreviation: "MA",
    title: "Massachusetts Payroll Laws: Overtime, Final Pay & Vacation Payout Guide",
    description:
      "Massachusetts payroll guide covering final wage timing, overtime, vacation payout, take-home pay factors, and calculator links.",
    heroSummary:
      "Massachusetts payroll rules can be strict around final wages and earned vacation. Workers should review overtime eligibility, discharge versus resignation timing, and whether unused vacation is treated as wages.",
    overtimeRule:
      "Massachusetts overtime often starts with weekly hours over 40 for non-exempt employees, but exemptions and industry-specific rules can matter. Federal and state rules should both be checked.",
    finalPayRule:
      "In Massachusetts, employees who are involuntarily discharged generally must be paid final wages on the day of discharge. Employees who resign are generally due wages by the next regular payday.",
    ptoRule:
      "Massachusetts generally treats earned vacation pay as wages. Unused earned vacation may need to be included in final wage calculations depending on the facts and policy.",
    paycheckFactors: [
      "Final wages can be due very quickly after discharge.",
      "Earned vacation is often treated as wage-related.",
      "State income tax affects take-home pay.",
      "Overtime eligibility depends on job duties and exemptions.",
    ],
    exampleScenario:
      "If a Massachusetts employee is terminated with unpaid regular wages and earned vacation, estimate both wage components before comparing the employer's final check to state wage guidance.",
    officialResources: [
      { label: "Massachusetts Attorney General — Wages", href: "https://www.mass.gov/topics/wages-and-hours" },
      { label: "Massachusetts Department of Revenue", href: "https://www.mass.gov/orgs/massachusetts-department-of-revenue" },
      { label: "U.S. DOL — FLSA", href: "https://www.dol.gov/agencies/whd/flsa" },
    ],
    relatedGuides: [
      { label: "Massachusetts Final Paycheck Calculator", href: "/blog/massachusetts-final-paycheck-calculator" },
      { label: "Massachusetts Overtime Calculator", href: "/blog/massachusetts-overtime-calculator" },
      { label: "Massachusetts PTO Payout Calculator", href: "/blog/massachusetts-pto-payout-calculator" },
      { label: "Massachusetts Take-Home Pay Calculator", href: "/blog/massachusetts-take-home-pay-calculator" },
    ],
    faqs: [
      { question: "When is final pay due in Massachusetts after termination?", answer: "Involuntarily discharged employees are generally due final wages on the day of discharge." },
      { question: "Is vacation payout required in Massachusetts?", answer: "Earned vacation is commonly treated as wages, so it may belong in a final wage calculation depending on the facts." },
      { question: "Does Massachusetts have state income tax?", answer: "Yes. Massachusetts income tax, federal withholding, FICA, and deductions can all affect take-home pay." },
    ],
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbreviation: "RI",
    title: "Rhode Island Payroll Laws: Overtime, Final Paycheck & PTO Guide",
    description:
      "Rhode Island payroll guide covering overtime, final paycheck timing, PTO payout questions, take-home pay factors, and calculator links.",
    heroSummary:
      "Rhode Island payroll estimates should account for weekly overtime, state income tax, final wage timing, employer PTO policy, and special facts such as commissions, deductions, or separation agreements.",
    overtimeRule:
      "Rhode Island overtime commonly starts with eligible non-exempt hours over 40 in a workweek, with exemptions and industry rules that should be reviewed for the specific job.",
    finalPayRule:
      "Rhode Island final wages are generally due by the next regular payday, though special separation situations and agreements can affect what should be reviewed.",
    ptoRule:
      "Rhode Island PTO or vacation payout may depend on the employer's written policy, whether paid leave was earned, and the employee's facts at separation. Keep the handbook and accrual records.",
    paycheckFactors: [
      "Weekly overtime over 40 hours is the usual starting point.",
      "Rhode Island state income tax affects net pay.",
      "Final pay timing should be compared to the next regular payday.",
      "PTO payout depends on policy language and earned leave records.",
    ],
    exampleScenario:
      "If a Rhode Island worker earns $22/hour and works 44 eligible hours, estimate 40 regular hours plus 4 overtime hours at 1.5×, then account for federal tax, FICA, Rhode Island withholding, and deductions.",
    officialResources: [
      { label: "Rhode Island Department of Labor and Training", href: "https://dlt.ri.gov/" },
      { label: "RI DLT — Labor Standards", href: "https://dlt.ri.gov/regulation-and-safety/labor-standards" },
      { label: "Rhode Island Division of Taxation", href: "https://tax.ri.gov/" },
    ],
    relatedGuides: [
      { label: "Rhode Island Final Paycheck Calculator", href: "/blog/rhode-island-final-paycheck-calculator" },
      { label: "Rhode Island Overtime Calculator", href: "/blog/rhode-island-overtime-calculator" },
      { label: "Rhode Island PTO Payout Calculator", href: "/blog/rhode-island-pto-payout-calculator" },
      { label: "Rhode Island Take-Home Pay Calculator", href: "/blog/rhode-island-take-home-pay-calculator" },
    ],
    faqs: [
      { question: "Does Rhode Island have overtime?", answer: "For many non-exempt employees, overtime is estimated after more than 40 eligible hours in a workweek, subject to exemptions." },
      { question: "Does Rhode Island have state income tax?", answer: "Yes. State withholding can affect take-home pay along with federal tax, FICA, benefits, and retirement deductions." },
      { question: "What documents help with a Rhode Island final pay issue?", answer: "Collect pay stubs, time records, the handbook, PTO accrual records, commission plans, and separation paperwork." },
    ],
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbreviation: "IL",
    title: "Illinois Payroll Laws: Final Paycheck, Overtime & Vacation Payout Guide",
    description:
      "Illinois payroll guide covering final compensation, overtime, earned vacation payout, deductions, and calculator links.",
    heroSummary:
      "Illinois payroll issues often involve final compensation, earned vacation, weekly overtime, deductions, and whether all earned wages were included by the next regular payday.",
    overtimeRule:
      "Illinois generally requires overtime for covered non-exempt employees after more than 40 hours in a workweek, subject to exemptions and special rules.",
    finalPayRule:
      "Illinois generally requires final compensation at separation if possible, but no later than the next regularly scheduled payday for the employee.",
    ptoRule:
      "Illinois generally treats earned vacation as part of final compensation when it is due under policy or agreement. Review the handbook and accrual records carefully.",
    paycheckFactors: [
      "Final compensation includes more than just base hourly wages in some cases.",
      "Earned vacation may be part of the final paycheck analysis.",
      "Weekly overtime generally applies after 40 eligible hours.",
      "State income tax and deductions affect net pay.",
    ],
    exampleScenario:
      "If an Illinois employee separates with unpaid regular wages, overtime, and earned unused vacation, estimate each component separately before checking whether the final payment matched the next-payday deadline.",
    officialResources: [
      { label: "Illinois Department of Labor", href: "https://labor.illinois.gov/" },
      { label: "Illinois Wage Payment and Collection Act resources", href: "https://labor.illinois.gov/laws-rules/fls/wpca.html" },
      { label: "Illinois Department of Revenue", href: "https://tax.illinois.gov/" },
    ],
    relatedGuides: [
      { label: "Illinois Final Paycheck Calculator", href: "/blog/illinois-final-paycheck-calculator" },
      { label: "Late Paycheck Laws by State", href: "/blog/late-paycheck-laws-by-state" },
      { label: "Overtime Rules by State", href: "/blog/overtime-rules-by-state" },
    ],
    faqs: [
      { question: "When is final pay due in Illinois?", answer: "Final compensation is generally due at separation if possible, but no later than the next regularly scheduled payday." },
      { question: "Does Illinois require vacation payout?", answer: "Earned vacation may need to be paid as part of final compensation depending on policy, agreement, and accrual records." },
      { question: "What should I include in an Illinois final paycheck estimate?", answer: "Regular wages, overtime, commissions or bonuses if earned, lawful deductions, and earned vacation if applicable." },
    ],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbreviation: "CT",
    title: "Connecticut Payroll Laws: Overtime, Final Paycheck & PTO Guide",
    description:
      "Connecticut payroll guide covering overtime, final pay timing, wage deductions, PTO policy questions, state tax factors, and calculator links.",
    heroSummary:
      "Connecticut payroll questions often involve final wage deadlines, weekly overtime, state withholding, wage deductions, and whether fringe benefits or PTO are owed under written policy.",
    overtimeRule:
      "Connecticut overtime commonly starts with covered non-exempt hours over 40 in a workweek, subject to exemptions and state-specific wage rules.",
    finalPayRule:
      "Connecticut generally requires employees who are discharged to be paid by the next business day, while employees who resign are generally due final wages by the next regular payday.",
    ptoRule:
      "Connecticut vacation/PTO payout can depend on employer policy, contract terms, and whether the benefit was earned under the employer's rules. Written fringe benefit policies are important.",
    paycheckFactors: [
      "Final pay deadlines differ for discharge versus resignation.",
      "State withholding affects take-home pay.",
      "Overtime generally starts after 40 eligible hours in a workweek.",
      "PTO payout is often tied to written policy or agreement language.",
    ],
    exampleScenario:
      "If a Connecticut employee is discharged with 42 eligible hours in the final week, calculate regular wages, 2 overtime hours if applicable, and any policy-based PTO or commissions before checking final pay timing.",
    officialResources: [
      { label: "Connecticut Department of Labor", href: "https://portal.ct.gov/dol" },
      { label: "CT DOL — Wage and Workplace Standards", href: "https://portal.ct.gov/dol/divisions/wage-and-workplace-standards" },
      { label: "Connecticut Department of Revenue Services", href: "https://portal.ct.gov/drs" },
    ],
    relatedGuides: [
      { label: "Overtime Pay Calculator", href: "/tools/overtime-pay-calculator" },
      { label: "Take-Home Pay Estimator", href: "/tools/take-home-pay-estimator" },
      { label: "Late Paycheck Laws by State", href: "/blog/late-paycheck-laws-by-state" },
    ],
    faqs: [
      { question: "When is final pay due in Connecticut after discharge?", answer: "A common Connecticut rule is payment by the next business day after discharge." },
      { question: "Does Connecticut require PTO payout?", answer: "PTO or vacation payout often depends on policy or contract terms, so the written benefit policy matters." },
      { question: "Does Connecticut have state income tax?", answer: "Yes. Connecticut withholding can reduce take-home pay along with federal taxes, FICA, and deductions." },
    ],
  },
];

export function getStatePayrollGuide(slug: string) {
  return statePayrollGuides.find((guide) => guide.slug === slug);
}
