export interface StateRule {
  overtime: {
    dailyOver8?: boolean;
    dailyOver12Multiplier?: number;
    weeklyOver40Multiplier: number;
  };
  notes: string[];
}

export const STATE_RULES: Record<string, StateRule> = {
  DEFAULT: {
    overtime: {
      weeklyOver40Multiplier: 1.5,
    },
    notes: ["Federal FLSA: 1.5x pay for hours over 40/week", "Rules may vary by role/industry."],
  },
  CA: {
    overtime: {
      dailyOver8: true,
      dailyOver12Multiplier: 2,
      weeklyOver40Multiplier: 1.5,
    },
    notes: [
      "California law: Daily overtime for 8+ hours in a day",
      "Double time (2x) for hours over 12 in a day",
      "Weekly overtime also applies (40+ hours/week at 1.5x)",
      "7th consecutive day premium may apply",
    ],
  },
  NY: {
    overtime: {
      weeklyOver40Multiplier: 1.5,
    },
    notes: [
      "New York: 1.5x for 40+ hours/week",
      "Industry variations may apply (hospitality, healthcare, etc.)",
      "Check local city/county rules",
    ],
  },
  TX: {
    overtime: {
      weeklyOver40Multiplier: 1.5,
    },
    notes: ["Texas: Federal FLSA only (no state-specific premium)", "1.5x for 40+ hours/week"],
  },
};
