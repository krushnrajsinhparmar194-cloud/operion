const agentsData = [
  {
    id: "release-pilot",
    name: "Release Pilot",
    roleSummary: [
      "Owns the release checklist end-to-end and keeps engineering honest on change windows.",
      "Monitors canary health, metrics regressions, and rollback readiness in real time."
    ],
    capabilities: [
      "Gate on-call approvals before production deploys",
      "Stream release notes to Slack + status page",
      "Auto-compare canary metrics vs. baseline",
      "Raise rollback tasks if error budget is hit"
    ],
    suggestedPrompts: [
      "Walk me through what still blocks tonight's deploy.",
      "Summarize the canary metrics delta vs. last release.",
      "Prep the rollback steps for build 2026.03.15."
    ],
    model: "GPT-4o",
    temperature: 0.25
  },
  {
    id: "product-qa",
    name: "Product QA Analyst",
    roleSummary: [
      "Builds targeted test plans for new user journeys before launch.",
      "Triages bugs with repro steps, logs, and severity tags for engineers."
    ],
    capabilities: [
      "Generate regression checklists per feature flag",
      "Capture screenshots + console traces automatically",
      "Sync Jira tickets with QA findings",
      "Tag flaky specs for follow-up"
    ],
    suggestedPrompts: [
      "Draft a smoke test for the upgraded billing flow.",
      "List the top 5 accessibility issues in this build.",
      "Create Jira bugs for the failed device compatibility tests."
    ],
    model: "Claude 3 Opus",
    temperature: 0.35
  },
  {
    id: "incident-triage",
    name: "Incident Triage Lead",
    roleSummary: [
      "Watches SLO dashboards 24/7 and triggers the right playbook within minutes.",
      "Keeps responders aligned with timeline notes, stakeholder updates, and postmortem stubs."
    ],
    capabilities: [
      "Auto-page on-call when error budget burn spikes",
      "Draft stakeholder updates every 15 minutes",
      "Collect timeline snippets from PagerDuty, Slack, Grafana",
      "Pre-fill postmortem template with facts"
    ],
    suggestedPrompts: [
      "Summarize the last 10 minutes of the API outage.",
      "What mitigations are still pending before we close SEV-1?",
      "Draft the customer-facing note for the payments incident."
    ],
    model: "GPT-4o",
    temperature: 0.2
  },
  {
    id: "adoption-coach",
    name: "Customer Adoption Coach",
    roleSummary: [
      "Tracks onboarding KPIs per account and nudges CSMs before engagement dips.",
      "Surfaces playbooks, content, and experiments to lift active usage."
    ],
    capabilities: [
      "Score churn risk from product analytics + CRM",
      "Recommend next-step playbooks per segment",
      "Email drafts for CSM outreach",
      "Log adoption experiments + outcomes"
    ],
    suggestedPrompts: [
      "Show me accounts with <40% weekly active users.",
      "Draft an adoption nudge for Acme's finance team.",
      "Which experiment boosted seat activation last quarter?"
    ],
    model: "Gemini 2.0",
    temperature: 0.45
  },
  {
    id: "exec-brief",
    name: "Executive Briefing Agent",
    roleSummary: [
      "Condenses ops, revenue, and product signals into narratives for leadership.",
      "Highlights risks, asks, and decisions needed before the next staff sync."
    ],
    capabilities: [
      "Merge KPI decks + narrative bullets",
      "Spot anomalies in pipeline, support, infra",
      "Generate talking points + backup slides",
      "Track follow-ups from previous briefings"
    ],
    suggestedPrompts: [
      "Prep tomorrow's exec summary with risks + asks.",
      "Where did net revenue miss plan this week?",
      "List decision blockers for the roadmap briefing."
    ],
    model: "Claude 3 Opus",
    temperature: 0.3
  }
];

if (typeof window !== "undefined") {
  window.agentsData = agentsData;
}

export default agentsData;
