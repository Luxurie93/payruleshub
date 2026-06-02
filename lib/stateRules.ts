import { STATE_RULES, type StateRule } from "@/lib/data/stateRules";

export function getStateRule(stateCode: string | null): StateRule {
  if (!stateCode || !STATE_RULES[stateCode]) {
    return STATE_RULES.DEFAULT;
  }
  return STATE_RULES[stateCode];
}

export function getStateNotes(stateCode: string | null): string[] {
  return getStateRule(stateCode).notes;
}
