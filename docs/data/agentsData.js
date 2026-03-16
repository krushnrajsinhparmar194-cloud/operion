const agentsData = [
  {
    id: "ops-release-pilot",
    name: "Release Pilot",
    category: "ops",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Owns the release checklist end-to-end and enforces safe deploy cadences.",
      "Monitors canary health, metrics regressions, and rollback readiness in real time."
    ],
    capabilities: [
      "Gate on-call approvals before production deploys",
      "Stream release notes to Slack + status page",
      "Auto-compare canary metrics vs baseline",
      "Raise rollback tasks if error budget is hit"
    ],
    suggestedPrompts: [
      "Walk me through what still blocks tonight's deploy.",
      "Summarize the canary metrics delta vs last release.",
      "Prep the rollback steps for build 2026.03.15."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "biz-project-management",
    name: "Project Management Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Turns briefs into structured plans with phases, tasks, dependencies, and resources while tracking execution in real time.",
      "Highlights critical-path risks, resource overloads, and pending mitigations before they blow up timelines."
    ],
    capabilities: [
      "Generate full project plans (phases, tasks, durations, dependencies) from a goal",
      "Track task progress live and auto-adjust timelines when schedules change",
      "Send daily task summaries to each owner",
      "Identify critical path items and flag delays",
      "Produce weekly stakeholder reports with progress, milestones, and risks",
      "Manage resource allocation across projects and call out overbooked teammates",
      "Maintain risk logs with prompts to assess/mitigate overdue items"
    ],
    suggestedPrompts: [
      "Break this launch brief into a project plan with owners and dependencies.",
      "What’s on today’s plate for the mobile team and who’s blocked?",
      "Send a status report for Project Atlas with risks and upcoming milestones."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 53
    }
  },
  {
    id: "biz-meeting-scheduler",
    name: "Meeting Scheduler Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Coordinates internal and external meetings by reading calendars, policies, and preferences so humans don’t have to juggle logistics.",
      "Books rooms/links, distributes prep, and reports on meeting load to reclaim time."
    ],
    capabilities: [
      "Scan up to 20 calendars to propose optimal slots ranked by convenience",
      "Enforce scheduling rules (e.g., after 9am, buffer breaks, protect focus blocks)",
      "Handle external bookings via smart links with auto-confirmation",
      "Reserve rooms + video links automatically upon confirmation",
      "Manage reschedules/cancellations end-to-end with notifications",
      "Deliver agendas, docs, and context 24h ahead of meetings",
      "Publish monthly analytics on meeting hours, durations, attendees, and reclaimable time"
    ],
    suggestedPrompts: [
      "Find a 45-min slot next week for the growth pod with no back-to-back conflicts.",
      "Share an external booking link for partners that respects our focus blocks.",
      "Send February’s meeting analytics—hours spent, top attendees, and reclaim suggestions."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 48
    }
  },
  {
    id: "biz-document-management",
    name: "Document Management Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps contracts, invoices, proposals, policies, and more organized with smart classification, permissions, and workflow control.",
      "Ensures teams always know which version is current while meeting compliance and audit requirements."
    ],
    capabilities: [
      "Auto-classify uploads into the correct folder structure by document type",
      "Maintain full version history with diffs and easy rollback",
      "Enforce granular access controls for sensitive materials",
      "Send renewal/expiry alerts for contracts, certifications, and compliance docs",
      "Deliver fast internal search by keyword, metadata, or author",
      "Run sequential approval workflows with status tracking",
      "Log detailed audit trails of views, edits, and shares"
    ],
    suggestedPrompts: [
      "File these client contracts and flag any expiring within 60 days.",
      "Show the version history for the Q2 policy doc and restore the March draft.",
      "Who accessed the salary benchmark report last week?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 44
    }
  },
  {
    id: "biz-workflow-automation",
    name: "Workflow Automation Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Observes repetitive business ops and codifies them into reliable, auditable automations.",
      "Keeps humans focused on strategy while workflows handle approvals, routing, and notifications."
    ],
    capabilities: [
      "Automate purchase orders with approval routing and supplier notifications",
      "Trigger onboarding chains when new employees are created (IT, facilities, manager tasks)",
      "Ingest invoices from email, match to POs, route for approval, and forward to AP",
      "Send multi-step follow-up sequences to dormant sales leads",
      "Schedule recurring report generation/distribution (weekly sales, monthly finance, etc.)",
      "Monitor thresholds (inventory, ticket SLA) and fire alerts or actions",
      "Log every workflow run with timestamps, status, and error traces"
    ],
    suggestedPrompts: [
      "Automate purchase orders under $5k with manager approval and supplier notice.",
      "Kick off onboarding for the new marketing hire and confirm when each step is done.",
      "Show last week’s workflow runs and highlight any failures."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 50
    }
  },
  {
    id: "biz-business-analytics",
    name: "Business Analytics Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Connects to sales, finance, HR, and ops data to produce real-time dashboards, variance breakdowns, and decision-ready analysis.",
      "Packages insights in plain language so leaders can act fast."
    ],
    capabilities: [
      "Build executive dashboards covering revenue, cost, CAC, churn, and team KPIs",
      "Run variance analysis vs budget/targets with narrative explanations",
      "Surface revenue trends by product, region, segment, and timeframe",
      "Perform cohort analyses on customer behavior over their lifecycle",
      "Alert leaders when metrics leave acceptable ranges (margin, churn, etc.)",
      "Answer ad-hoc business questions in natural language with data citations",
      "Generate board-ready decks with charts, commentary, and takeaways"
    ],
    suggestedPrompts: [
      "Show today’s exec dashboard with commentary on notable changes.",
      "Explain why Q1 actuals missed budget on gross margin.",
      "Which customer cohort from 2025 Q3 has the best retention curve?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 49
    }
  },
  {
    id: "biz-invoice-billing",
    name: "Invoice & Billing Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Handles the billing lifecycle end-to-end—from invoice creation to reminders, reconciliation, and cash-flow visibility.",
      "Gives finance teams clarity on who owes what and when to chase."
    ],
    capabilities: [
      "Generate invoices automatically from projects, timesheets, or sales orders",
      "Email invoices instantly, tracking opens and views",
      "Schedule reminder cadences (3 days before, due day, 7/14/30 days overdue)",
      "Reconcile incoming payments to open invoices and update AR ledgers",
      "Track client payment speed and flag chronic slow payers",
      "Produce weekly cash-flow forecasts using outstanding invoices + historical behavior",
      "Build AR aging reports split by overdue brackets"
    ],
    suggestedPrompts: [
      "Create invoices for last week’s approved timesheets and send them out.",
      "Show me clients averaging >20 days past due so we can intervene.",
      "Generate this Friday’s cash-flow outlook based on expected payments."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 45
    }
  },
  {
    id: "biz-hr-management",
    name: "HR Management Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Centralizes employee records, attendance, leave, performance, and compliance data to automate everyday HR ops.",
      "Surfaces proactive insights on contracts, reviews, and workforce health so HR can act before issues escalate."
    ],
    capabilities: [
      "Maintain rich digital profiles covering history, compensation, and achievements",
      "Sync attendance from biometric/digital check-ins and flag anomalies",
      "Run end-to-end leave workflows with balance updates and payroll notices",
      "Alert on contract expiries, probation completions, and review deadlines",
      "Automate onboarding tasks—docs, equipment, orientation scheduling",
      "Compile labor-law compliance reports on hours, leave, and diversity stats",
      "Produce workforce analytics (headcount, attrition, absenteeism, gender/grade splits)"
    ],
    suggestedPrompts: [
      "Show me attendance outliers this month for the sales team.",
      "Prep onboarding tasks for the three hires starting Monday.",
      "Generate an attrition + diversity report by department for Q1."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 55
    }
  },
  {
    id: "biz-recruitment-assistant",
    name: "Recruitment Assistant Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Automates the hiring pipeline—job descriptions, resume triage, scheduling, candidate comms, and analytics—so teams hire faster with less manual work.",
      "Surfaces insights on funnel health, channel performance, and bottlenecks."
    ],
    capabilities: [
      "Generate tailored, high-converting job descriptions from hiring manager inputs",
      "Parse and score large resume batches against JD criteria to surface top matches",
      "Send stage-specific candidate communications automatically",
      "Coordinate interviews by checking interviewer calendars and dispatching invites",
      "Produce structured interview question sets aligned to role competencies",
      "Track funnel metrics (applied, screened, interviewed, offered, accepted) per role",
      "Analyze hiring data to reveal best-performing channels and drop-off reasons"
    ],
    suggestedPrompts: [
      "Draft a job post for a senior backend engineer focused on Go + microservices.",
      "Review today’s 120 resumes and shortlist the top 10 that hit the must-haves.",
      "Show funnel stats for the product designer role and where candidates are dropping." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 52
    }
  },
  {
    id: "biz-crm-agent",
    name: "CRM Intelligence Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps every customer touchpoint, deal stage, and relationship signal in one intelligent workspace for revenue teams.",
      "Highlights risks, surfaces context before meetings, and automates nurturing moments."
    ],
    capabilities: [
      "Auto-log emails, calls, meetings, and chats to the right account without manual entry",
      "Track deals through each pipeline stage and alert when follow-up stalls",
      "Generate pre-meeting briefs with full purchase history, conversations, and open issues",
      "Flag at-risk customers based on declining engagement or unresolved tickets",
      "Produce sales forecasts using pipeline value, stage probability, and historical win rates",
      "Segment accounts by revenue, industry, region, behavior, and engagement",
      "Trigger nurture touchpoints for renewals, anniversaries, and post-support follow-ups"
    ],
    suggestedPrompts: [
      "Show me idle deals over 10 days in stage 3 and ping reps to follow up.",
      "What’s the full history for Acme Corp before tomorrow’s EBR?",
      "Build a renewal nurture sequence for customers coming up next month."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 58
    }
  },
  {
    id: "biz-customer-support",
    name: "Customer Support Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Works every inbound channel—chat, email, messaging—to resolve common issues autonomously and prep complex cases for humans.",
      "Understands full account context, sentiment, and recurring trends to improve support quality."
    ],
    capabilities: [
      "Auto-resolve routine tickets (orders, billing, refunds, FAQs, password resets)",
      "Reference full account history for personalized responses",
      "Detect sentiment and escalate high-risk/frustrated customers instantly",
      "Offer multilingual replies, matching the customer’s language",
      "Draft responses for human agents on nuanced cases",
      "Surface unresolved-ticket themes to address root causes",
      "Report on response times, resolution rates, CSAT, and volume by issue"
    ],
    suggestedPrompts: [
      "Handle all order-status questions today and only escalate if the shipment is missing.",
      "Draft a response for this billing dispute with context from past refunds.",
      "Show this week’s unresolved ticket themes and CSAT by channel."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 95,
      load: 57
    }
  },
  {
    id: "qa-product-analyst",
    name: "Product QA Analyst",
    category: "qa",
    status: "online",
    version: "v1.0",
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
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "ops-incident-triage",
    name: "Incident Triage Lead",
    category: "ops",
    status: "online",
    version: "v1.0",
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
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "ops-adoption-coach",
    name: "Customer Adoption Coach",
    category: "ops",
    status: "online",
    version: "v1.0",
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
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "ops-exec-brief",
    name: "Executive Briefing Agent",
    category: "ops",
    status: "online",
    version: "v1.0",
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
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  // Astrology Section
  {
    id: "astro-daily-horoscope",
    name: "Daily Horoscope Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Generates personalized daily horoscopes from sun sign or birth credentials.",
      "Highlights love, career, health, and money trends with lucky cues each day."
    ],
    capabilities: [
      "Accept sun sign or birth date to tailor predictions",
      "Compare today's outlook to yesterday to flag trend shifts",
      "Provide lucky colour, number, and direction suggestions",
      "Trigger morning notification-style summaries automatically",
      "Tag calendar days as auspicious or critical for fast scanning"
    ],
    suggestedPrompts: [
      "Give me today's horoscope for Taurus focusing on career.",
      "Compare yesterday vs today for my Leo forecast.",
      "What's my lucky colour, number, and direction today?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "astro-birth-chart",
    name: "Birth Chart / Kundli Analysis Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds natal charts from birth date, time, and location with divisional insights.",
      "Explains houses, yogas, and dashas in approachable, Q&A-friendly language."
    ],
    capabilities: [
      "Generate Lagna, Navamsa, and other divisional charts automatically",
      "Explain each house (bhava) and planetary placement in plain speech",
      "Identify yogas/doshas (Raj Yoga, Manglik, Kaal Sarp, etc.) with remedies",
      "Forecast career, marriage, health, and wealth themes from dashas",
      "Answer follow-up questions like 'What does my 7th house say?'"
    ],
    suggestedPrompts: [
      "Create my full Kundli with highlights for career and marriage.",
      "Explain any doshas in my chart and the remedies.",
      "What does my 7th house reveal about relationships?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "astro-compatibility",
    name: "Compatibility / Matchmaking Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Calculates compatibility using Kundli Milan and Western synastry in one report.",
      "Breaks down emotional, financial, and long-term fit with practical advice."
    ],
    capabilities: [
      "Perform Ashtakoot (36-gun) matching with detailed scoring",
      "Analyze Western synastry (sun, moon, rising) for balanced context",
      "Detect Manglik or conflicting doshas and recommend remedies",
      "Provide compatibility breakdown for emotions, finance, attraction, longevity",
      "Generate shareable reports for matrimonial platforms"
    ],
    suggestedPrompts: [
      "Compare Kundli compatibility for these two birth details.",
      "Is there any Manglik concern and how do we fix it?",
      "What is our emotional vs financial compatibility score?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "astro-transit",
    name: "Planetary Transit Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Tracks real-time planetary movements and maps impacts onto the user's chart.",
      "Provides alerts and calendars explaining major transits in advance."
    ],
    capabilities: [
      "Monitor Saturn/Jupiter/Rahu-Ketu transits vs natal placements",
      "Explain how upcoming transits influence specific life areas",
      "Publish transit calendars and weekly impact briefs",
      "Send personalized alerts based on rising or moon signs",
      "Advise precautions such as avoiding contracts during Mercury retrograde"
    ],
    suggestedPrompts: [
      "How will Jupiter entering Gemini affect me this year?",
      "Give me next week's transit calendar with highlights.",
      "Alert me when Mercury retrograde begins."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "astro-muhurat",
    name: "Lucky Day & Muhurat Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Uses Panchang plus the user's chart to suggest auspicious dates and times.",
      "Flags inauspicious windows and syncs recommendations into calendars."
    ],
    capabilities: [
      "Recommend muhurats for weddings, launches, travel, surgery, or griha pravesh",
      "Display daily Panchang (Tithi, Nakshatra, Yoga, Karan, Var)",
      "Alert for Rahu Kaal, Yamaganda, and Gulika windows",
      "Return top three dates per event type with reasoning",
      "Block auspicious slots in Google/Apple calendars automatically"
    ],
    suggestedPrompts: [
      "Find the best business launch dates next month.",
      "Show today's Panchang and Rahu Kaal timing.",
      "Block three auspicious wedding muhurats on my calendar."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-gemstone",
    name: "Gemstone Recommendation Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Analyzes the birth chart to spot weak or benefic planets",
      "Recommends gemstones with wearing instructions and upkeep reminders"
    ],
    capabilities: [
      "Identify planets needing support via gemstones",
      "Specify stone, finger, metal, and auspicious day to wear",
      "Warn against incompatible combos (e.g., Ruby + Blue Sapphire)",
      "Offer semi-precious substitutes for tighter budgets",
      "Remind users to cleanse/energize stones monthly"
    ],
    suggestedPrompts: [
      "Which gemstone should I wear for career growth?",
      "Is it safe to combine Neelam with Ruby for my chart?",
      "Remind me to energize my Emerald every Purnima."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-tarot",
    name: "Tarot Reading Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Simulates tarot draws with AI randomization and contextual interpretation.",
      "Supports one-card, Celtic Cross, love, career, and yes/no spreads with history."
    ],
    capabilities: [
      "Offer daily one-card or three-card pulls",
      "Run Celtic Cross, love, career, and yes/no spreads",
      "Include upright + reversed meanings for shadow insight",
      "Let users type questions for contextual readings",
      "Store reading history so patterns can be revisited"
    ],
    suggestedPrompts: [
      "Pull a 3-card spread about my job change.",
      "Give me a yes/no tarot read on this decision.",
      "Show my last five readings to spot recurring themes."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-palm",
    name: "Palm Reading Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Uses vision models to read uploaded palm photos and interpret lines.",
      "Provides personality and future insights with left/right comparisons."
    ],
    capabilities: [
      "Detect heart, head, life, and fate lines with AI",
      "Explain special marks (stars, crosses, triangles, islands)",
      "Compare left vs right hand (inherited vs developed traits)",
      "Summarize leadership, creativity, emotional depth",
      "Track changes when users re-upload photos over time"
    ],
    suggestedPrompts: [
      "Interpret my heart and headline from this photo.",
      "What does the cross on my fate line mean?",
      "Compare my left and right hands to see growth."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-spiritual-guide",
    name: "Spiritual Guidance Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts as a spiritual counselor drawing from Hindu, Buddhist, Sufi, and universal wisdom.",
      "Listens to user challenges and offers practical, compassionate guidance."
    ],
    capabilities: [
      "Receive open-ended life concerns and respond with spiritual frameworks",
      "Recommend daily practices or rituals for current struggles",
      "Suggest sacred texts, quotes, or stories to reflect upon",
      "Offer karmic pattern analysis and mindset reframes",
      "Support grief, anxiety, or relationship pain with gentle exercises"
    ],
    suggestedPrompts: [
      "I'm anxious about work—give me a spiritual perspective.",
      "Suggest a daily practice for grief healing.",
      "Which verse should I read to understand karma better?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-meditation",
    name: "Meditation & Mantra Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Matches planetary periods or emotional states with mantras and meditations.",
      "Provides scripts, chakra plans, and sonic aids for daily practice."
    ],
    capabilities: [
      "Map current Dasha issues to specific planet mantras",
      "Generate guided meditations for calm, focus, sleep, or healing",
      "Suggest chakra balancing routines tied to symptoms",
      "Send daily mantra reminders with chant counters",
      "Curate binaural beats/Solfeggio tones tailored to each chakra"
    ],
    suggestedPrompts: [
      "Recommend a mantra for Saturn troubles.",
      "Give me a 10-minute guided meditation for sleep.",
      "Which chakra routine will ease my anxiety today?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-festival",
    name: "Festival & Cultural Guide Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Maintains a multi-faith festival database with rituals, stories, and reminders.",
      "Helps families (including NRIs) understand regional customs and plan ahead."
    ],
    capabilities: [
      "Display calendars for Hindu, Muslim, Christian, Jain, Sikh, Buddhist traditions",
      "Explain significance, rituals, foods, and folklore for each festival",
      "Send reminders several days before important observances",
      "Highlight regional variations and tips for diaspora families",
      "Provide kid-friendly explanations for cultural education"
    ],
    suggestedPrompts: [
      "What is the significance of Navratri Day 4?",
      "Remind me 3 days before Eid with prep tips.",
      "Explain Diwali customs in Gujarat vs Bengal."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-ritual",
    name: "Ritual & Puja Guide Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Provides step-by-step instructions for performing rituals and pujas at home.",
      "Includes ingredient lists, substitutions, mantras, and timing guidance."
    ],
    capabilities: [
      "Offer full workflows for Satyanarayan, Lakshmi, Ganesh, Navgraha, etc.",
      "List ingredients with suggested substitutes",
      "Provide video-style text walkthroughs with timestamps",
      "Suggest alternatives when items are unavailable",
      "Explain the purpose behind each step so users learn"
    ],
    suggestedPrompts: [
      "Guide me through a Satyanarayan puja at home.",
      "I don't have camphor—what can I substitute?",
      "Outline a Graha Shanti puja for next week."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-yearly",
    name: "Yearly Horoscope Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Generates a 12-month forecast from the user's chart and upcoming transits.",
      "Highlights key months for career, love, health, finance, travel, and more."
    ],
    capabilities: [
      "Provide month-by-month guidance with actionable tips",
      "Map Dasha/Antardasha influences for the year",
      "Flag ideal periods for investing, marrying, launching, or traveling",
      "Warn about challenging windows with mitigation advice",
      "Offer year-end reviews comparing predictions vs reality"
    ],
    suggestedPrompts: [
      "Give me my 2026 yearly horoscope with focus on career.",
      "Which months are best for a job change this year?",
      "Summarize my Dasha influences for the next 12 months."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "astro-spiritual-qa",
    name: "Spiritual Question Answer Agent",
    category: "astrology",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Answers cultural and spiritual questions using multi-tradition references.",
      "Supports multilingual explanations and simplified modes for elders or kids."
    ],
    capabilities: [
      "Compare concepts across Hinduism, Buddhism, Islam, Christianity, etc.",
      "Explain rituals like lighting a diya or fasting",
      "Discuss karma, heaven/hell, moksha, or afterlife perspectives",
      "Provide simplified analogies for children or seniors",
      "Reply in Gujarati, Hindi, Tamil, and other regional languages"
    ],
    suggestedPrompts: [
      "What does karma mean in Hinduism vs Buddhism?",
      "Why do we light a diya during festivals?",
      "Explain moksha in simple Gujarati for my grandmother."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  // News Section
  {
    id: "news-daily-summary",
    name: "Daily News Summary Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Condenses top stories across world, business, tech, sports, and health into a 5-minute brief.",
      "Supports text and audio editions plus bullet or paragraph modes."
    ],
    capabilities: [
      "Crawl vetted sources multiple times per day",
      "Categorize headlines by topic for faster scanning",
      "Offer brief vs detailed summary lengths",
      "Generate audio narration for on-the-go listening",
      "Send end-of-day or weekly digest variants"
    ],
    suggestedPrompts: [
      "Give me this morning's 5-minute news briefing.",
      "Summarize today's top business and tech stories only.",
      "Send an audio version of the evening recap."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "news-breaking-alert",
    name: "Breaking News Alert Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors live feeds and social signals to push confirmed breaking news instantly.",
      "Bundles updates into a single thread until the story resolves."
    ],
    capabilities: [
      "Watch multiple wires/RSS/social firehoses for corroborated reports",
      "Filter by user-defined importance (local, national, global)",
      "Differentiate developing vs confirmed updates",
      "Group follow-up alerts into one conversation",
      "Integrate with wearables, TV, or car displays for urgent alerts"
    ],
    suggestedPrompts: [
      "Alert me for major geopolitical news only.",
      "Track this cyclone story and update me as it evolves.",
      "Mute sports alerts for the next 24 hours."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "news-personalized",
    name: "Personalized News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Learns user interests and reading patterns to curate a custom feed.",
      "Balances relevance with serendipity to avoid echo chambers."
    ],
    capabilities: [
      "Track completion vs skip behavior to refine picks",
      "Let users follow/block topics, sources, or keywords",
      "Maintain separate work vs personal profiles",
      "Send weekly 'you may have missed' digests",
      "Inject critical stories outside usual interests"
    ],
    suggestedPrompts: [
      "Build my feed around AI, cricket, and Indian startups.",
      "Block celebrity gossip and crypto news.",
      "Send a Sunday digest of anything important I skipped."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "news-local",
    name: "Local News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Aggregates hyper-local civic updates, weather, and safety alerts.",
      "Follows neighborhood-level sources often missed by national outlets."
    ],
    capabilities: [
      "Ingest municipal feeds, regional papers, and local blogs",
      "Alert for weather emergencies, traffic, and public safety issues",
      "Cover local government budgets, road work, and school notices",
      "Track local business openings/closings and civic events",
      "Let users follow specific neighborhoods or districts"
    ],
    suggestedPrompts: [
      "Give me today's Surat city civic updates.",
      "Alert me when there's major traffic or flooding nearby.",
      "What local events are happening this weekend?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "news-global",
    name: "Global News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors international wires, foreign press, and global organizations for broad coverage.",
      "Explains how worldwide events and policies ripple into the user's region."
    ],
    capabilities: [
      "Cover geopolitical events such as wars, summits, UN decisions, and trade deals",
      "Provide regional breakdowns for Asia, Europe, Middle East, Africa, and the Americas",
      "Translate foreign-language reports into English or the user's local language",
      "Maintain crisis timelines showing day-by-day developments",
      "Highlight underreported global stories and their impact on the user's country"
    ],
    suggestedPrompts: [
      "Give me today's global headlines with regional breakdowns.",
      "Explain how the latest Fed decision affects India's markets.",
      "Share three underreported stories from Africa this week."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-business",
    name: "Business & Finance News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Aggregates financial news from markets, companies, regulators, and macro indicators.",
      "Explains complex moves in plain language with impact analysis."
    ],
    capabilities: [
      "Deliver real-time updates on indices, sectors, and commodity moves",
      "Track user-selected companies and alert on major news or filings",
      "Break down quarterly earnings reports into simple summaries",
      "Cover central bank (RBI, SEBI, Fed, etc.) announcements with context",
      "Report startup ecosystem news (funding, IPOs, acquisitions, unicorns)",
      "Send weekly economy health reports covering GDP, inflation, employment"
    ],
    suggestedPrompts: [
      "Give me today's market summary with top gainers/losers.",
      "Explain Infosys' quarterly results in simple terms.",
      "Alert me when RBI or Fed announcements affect rates."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-technology",
    name: "Technology News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors tech blogs, research pubs, company launches, and dev communities.",
      "Explains breakthroughs and product updates in accessible language."
    ],
    capabilities: [
      "Cover AI model releases and research from major labs",
      "Track startup funding rounds with investor + valuation details",
      "Explain chip launches, software updates, and frameworks in plain terms",
      "Monitor cybersecurity threats, breaches, and CVEs relevant to users",
      "Aggregate developer news: new APIs, platform changes, open-source releases",
      "Publish weekly 'Big Tech Watch' for Apple, Google, Microsoft, Meta, Amazon"
    ],
    suggestedPrompts: [
      "What are today's biggest AI research announcements?",
      "Explain the new Apple chip in simple terms.",
      "Send this week's Big Tech Watch summary."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-sports",
    name: "Sports News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Pulls live scores, match reports, transfer news, and analysis from global + regional sources.",
      "Keeps fans updated with previews, post-match summaries, and fantasy-ready stats."
    ],
    capabilities: [
      "Deliver ball-by-ball or minute-by-minute commentary for live games",
      "Send post-match summaries within minutes, including key stats and highlights",
      "Cover transfer windows (football), IPL auctions, and contract news",
      "Track favourite teams/players with dedicated news threads",
      "Provide pre-match previews (form, head-to-head, expected lineups)",
      "Surface fantasy sports-relevant metrics for informed decisions"
    ],
    suggestedPrompts: [
      "Give me live text commentary for today's India vs Australia match.",
      "Summarize the Liverpool game within 10 minutes of full-time.",
      "Send me fantasy-relevant stats before tonight's match."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-entertainment",
    name: "Entertainment News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Aggregates news across film industries, music, OTT, and celebrity media.",
      "Alerts users to trailers, releases, awards, and curated OTT schedules."
    ],
    capabilities: [
      "Cover Bollywood, Hollywood, regional cinema, K-drama, and OTT originals",
      "Alert when tracked titles drop trailers, release dates, or reviews",
      "Track celebrity news with filters for professional vs gossip items",
      "Report music releases, chart rankings, concert announcements",
      "Maintain OTT release calendars for Netflix/Amazon/Disney+/etc.",
      "Provide awards-season trackers (Oscars, Filmfare, Grammys) with predictions"
    ],
    suggestedPrompts: [
      "What OTT premieres this week on Netflix and Prime?",
      "Alert me when the next K-drama trailer drops.",
      "Give me the current Oscars buzz and nomination list."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-trending",
    name: "Trending News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Scans social platforms, search trends, and spike data to surface what the internet talks about.",
      "Explains why each topic is trending and tracks its momentum."
    ],
    capabilities: [
      "Display real-time trending topics with context explanations",
      "Separate organic trends from suspicious/bot-driven spikes",
      "Provide background 'Trend Explainer' blurbs for complex topics",
      "Track trend lifecycle (rising, peaking, cooling)",
      "Filter by country, language, or platform (X, Instagram, YouTube, Google)",
      "Generate a daily Top 10 Trending Stories digest"
    ],
    suggestedPrompts: [
      "What are today's top trending topics globally?",
      "Explain why #MarsMission is trending right now.",
      "Send me the daily top 10 trending stories digest."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-fact-check",
    name: "Fact-Check News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Cross-references viral claims against verified databases and official sources.",
      "Rates accuracy clearly and provides citations plus media-literacy coaching."
    ],
    capabilities: [
      "Check WhatsApp forwards or headlines against multiple fact-check databases",
      "Label claims as True, Mostly True, Misleading, Mostly False, or False",
      "Provide source citations explaining each verdict",
      "Monitor viral misinformation in real time and send proactive alerts",
      "Track repeat offenders spreading falsehoods",
      "Give users a media-literacy score based on debunked stories engaged"
    ],
    suggestedPrompts: [
      "Is this WhatsApp forward about fuel prices legit?",
      "Rate this viral claim and cite your sources.",
      "Alert me when misinformation spikes about elections."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-explanation",
    name: "News Explanation Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Takes complex news (economics, law, science, geopolitics) and rewrites it in plain language.",
      "Adds background context, definitions, analogies, and FAQ-style breakdowns."
    ],
    capabilities: [
      "Let users paste confusing articles for friendly explanations",
      "Provide three reading levels: basic, intermediate, detailed",
      "Add background timelines explaining what happened previously",
      "Define technical jargon (legal, financial, scientific) in simple terms",
      "Create text-based visual explainers with analogies",
      "Generate FAQs: What happened? Why it matters? What happens next?"
    ],
    suggestedPrompts: [
      "Explain this geopolitical article in simple language.",
      "Give me a basic/intermediate/detailed breakdown of the new tax bill.",
      "Create an FAQ for this Supreme Court judgment."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-industry",
    name: "Industry News Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Delivers highly targeted sector news (healthcare, real estate, education, agriculture, logistics, manufacturing).",
      "Lets professionals follow multiple industries with clearly segmented feeds."
    ],
    capabilities: [
      "Provide healthcare news: FDA approvals, trials, hospital policy shifts, pharma updates",
      "Send real estate intel: property data, housing schemes, infrastructure announcements",
      "Deliver education/EdTech updates: NEP changes, rankings, funding, exam news",
      "Keep farmers/agri-business informed on crop prices, weather advisories, mandi rates",
      "Track logistics & supply chain: port updates, fuel prices, regulatory changes",
      "Allow users to follow multiple industries simultaneously with segmented cards"
    ],
    suggestedPrompts: [
      "Show today's healthcare compliance updates.",
      "Give me real estate policy news for Gujarat.",
      "Track agriculture prices and weather advisories for Punjab."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "news-morning-brief",
    name: "Morning News Brief Agent",
    category: "news",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Compiles overnight and early-morning news into a structured briefing.",
      "Delivers a 3-minute digest with text and optional audio before the user starts the day."
    ],
    capabilities: [
      "Send morning briefs between 6-8 AM at the user's preferred time",
      "Cover five fixed sections: Top Story, Business, World, Sports, Good News",
      "Provide text and audio versions for commuting or getting ready",
      "Personalize content based on interests and location",
      "Include 'Today to Watch' events (market openings, matches, announcements)",
      "Allow tapping any headline to expand into the full story"
    ],
    suggestedPrompts: [
      "Send me a 3-minute brief at 7am every day.",
      "Play the audio version of today's brief.",
      "What events should I watch today?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  // Lifestyle Section
  {
    id: "life-fitness-coach",
    name: "Fitness Coach Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Designs personalized workout plans based on goals, equipment, and feedback.",
      "Adjusts weekly difficulty, tracks PRs, and nudges active recovery."
    ],
    capabilities: [
      "Collect age, weight, goal, equipment, and constraints",
      "Generate progressive plans for weight loss, muscle gain, or endurance",
      "Provide set/rep/rest instructions with form cues",
      "Integrate wearable data (steps, HR, sleep) to refine plans",
      "Track milestones and celebrate personal records"
    ],
    suggestedPrompts: [
      "Build a 4-week home workout plan for fat loss with dumbbells.",
      "Adjust next week—last plan felt too hard.",
      "Log today's PR: 80kg deadlift x5."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "life-diet-nutrition",
    name: "Diet & Nutrition Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Creates meal plans around preferences, allergies, and health goals.",
      "Explains nutrition rationale and automates grocery planning."
    ],
    capabilities: [
      "Collect dietary style (veg/vegan/keto/etc.) and health targets",
      "Generate 7-day meal plans with macros and calories",
      "Suggest ingredient swaps based on pantry or budget",
      "Design specialty plans (keto, PCOS, diabetic, post-surgery)",
      "Produce grocery lists aligned to the upcoming plan"
    ],
    suggestedPrompts: [
      "Plan a vegetarian, high-protein week for muscle gain.",
      "I only have chickpeas, spinach, and rice—what can I cook?",
      "Explain why this meal fits my calorie deficit."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "life-habit-tracker",
    name: "Habit Tracker Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Helps define habits, schedule reminders, and reinforce behavior change.",
      "Uses streaks, habit stacking, and reports to keep momentum."
    ],
    capabilities: [
      "Create habits with frequency targets and streak tracking",
      "Send context-aware reminders based on completion patterns",
      "Apply habit stacking suggestions for easier adoption",
      "Generate weekly reports with completion rates and streaks",
      "Recommend scaled-down versions when adherence drops"
    ],
    suggestedPrompts: [
      "Set 'Read 10 pages' habit for weekdays at 9pm.",
      "My meditation streak broke—help me restart gently.",
      "Show this week's habit completion summary."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "life-grooming",
    name: "Personal Grooming Advisor Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Analyzes skin type, hair type, lifestyle, climate, and budget to build grooming routines.",
      "Keeps routines updated seasonally and answers troubleshooting questions."
    ],
    capabilities: [
      "Build morning/night skincare steps for oily, dry, combo, or sensitive skin",
      "Suggest haircare routines for specific textures, scalp needs, and styling habits",
      "Recommend products by budget tier (drugstore, mid-range, premium)",
      "Alert users when seasons change so routines can adjust",
      "Provide beard, nail, and body grooming plans for men",
      "Track product start dates and remind when items are running low",
      "Answer grooming questions such as breakout troubleshooting"
    ],
    suggestedPrompts: [
      "Create a monsoon skincare routine for combination skin.",
      "Recommend budget-friendly beard care for sensitive skin.",
      "My skin is breaking out—what tweaks should I make?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-fashion",
    name: "Fashion & Style Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Learns body type, colour preferences, lifestyle, and budget to suggest outfits.",
      "Builds capsule wardrobes, fills gaps, and adapts to trends plus weather."
    ],
    capabilities: [
      "Design personalized capsule wardrobes that mix and match",
      "Suggest outfits from clothes already owned based on occasion and weather",
      "Recommend new pieces to fill wardrobe gaps",
      "Provide styling guidance for office, casual, formal, weddings, travel",
      "Explain colour theory and which tones suit the user's skin",
      "Alert about trending styles and how to integrate them subtly",
      "Adjust outfit suggestions based on local forecast"
    ],
    suggestedPrompts: [
      "Plan five outfits for a Dubai work trip using what I own.",
      "Which colours suit my warm undertone?",
      "How do I add this season's trend without a full wardrobe overhaul?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-hobby",
    name: "Hobby Discovery Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Assesses personality, time, budget, ability, and interests to recommend new hobbies.",
      "Provides starter guides, low-cost trials, and re-entry plans for lapsed hobbies."
    ],
    capabilities: [
      "Ask discovery quiz and suggest five matched hobbies",
      "Provide beginner roadmaps (first steps, tools, time to proficiency)",
      "Distinguish between indoor/outdoor, creative, skill-building hobbies",
      "Suggest low-cost trial methods before investing",
      "Help users restart abandoned hobbies with structured plans",
      "Connect related hobbies (e.g., drawing → animation/pottery)",
      "Track progress and suggest next steps as users advance"
    ],
    suggestedPrompts: [
      "I have 30 minutes nightly—suggest hobbies that fit.",
      "Give me a starter kit plan for learning pottery.",
      "Help me restart guitar after pausing for two years."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-relationship",
    name: "Relationship Advice Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts as a thoughtful, non-judgmental guide for communication and relationship dynamics.",
      "Provides scripts, conflict resolution tips, and coping support across relationship types."
    ],
    capabilities: [
      "Help users articulate feelings before difficult conversations",
      "Offer communication scripts that avoid defensiveness",
      "Guide conflict resolution by explaining perspectives and neutral language",
      "Advise across romantic, friendship, parent-child, and workplace relationships",
      "Identify unhealthy patterns via guided self-reflection",
      "Support breakups, grief, or loneliness with coping strategies",
      "Recommend relationship-building activities for couples/friends"
    ],
    suggestedPrompts: [
      "Help me talk to my partner about feeling unheard.",
      "What's a gentle script to address conflict with a friend?",
      "Suggest activities to rebuild connection with my spouse."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-home-org",
    name: "Home Organization Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Helps users declutter, organize, and maintain living spaces with structured systems.",
      "Builds cleaning schedules, storage plans, and inventory trackers."
    ],
    capabilities: [
      "Guide room-by-room decluttering with KonMari/minimalist frameworks",
      "Create weekly home maintenance checklists tailored to home size/type",
      "Build balanced cleaning schedules across the week",
      "Recommend smart storage solutions for small spaces",
      "Organize kitchens (pantry labels, meal prep zones, expiry tracking)",
      "Provide seasonal deep-clean guides (gutter clearing, curtains, wardrobes)",
      "Track household inventory and suggest restocking lists"
    ],
    suggestedPrompts: [
      "Walk me through decluttering my bedroom step by step.",
      "Build a weekly cleaning schedule for a 2BHK apartment.",
      "Suggest storage ideas for a tiny pantry and track staples."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-shopping",
    name: "Shopping Lifestyle Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts as a personal shopping assistant tuned to needs, preferences, budget, and life stage.",
      "Builds curated bundles, compares options, and tracks wishlist sales."
    ],
    capabilities: [
      "Recommend exact products with reasoning for a described need",
      "Compare categories (premium vs budget, durability vs price, brand vs generic)",
      "Build bundles for life events (new home, baby, home gym, WFH setup)",
      "Track seasonal sales and alert when wishlist items discount",
      "Suggest eco-friendly and sustainable alternatives",
      "Adapt suggestions to life changes (new city, job, fitness goal, hobby)",
      "Analyze shopping history to flag redundant or impulse buys"
    ],
    suggestedPrompts: [
      "I want to start journaling—what should I buy?",
      "Build a minimalist home gym setup under ₹20k.",
      "Alert me when my saved blender drops below ₹5k."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-event-planner",
    name: "Event & Celebration Planner Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Generates end-to-end event planning guides from type, guest count, budget, date, and theme.",
      "Provides timelines, vendor ideas, checklists, and day-of runbooks."
    ],
    capabilities: [
      "Build booking/prep timelines (30 days, 2 weeks, 3 days prior)",
      "Suggest themes, decor, colour palettes, and DIY ideas by budget",
      "Manage guest lists with RSVPs and dietary preferences",
      "Generate shopping lists with quantity estimates",
      "Recommend entertainment (games, activities, playlists, performers)",
      "Adapt logic for corporate events, kids birthdays, weddings, housewarmings, farewells",
      "Provide day-of checklists for smooth execution"
    ],
    suggestedPrompts: [
      "Plan a beach-themed baby shower for 30 guests under ₹30k.",
      "Give me a 2-week countdown checklist for a housewarming.",
      "What entertainment fits a 10-year-old's birthday party?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: { successRate: 95, load: 60 }
  },
  {
    id: "life-travel-lifestyle",
    name: "Travel Lifestyle Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Curates destinations, itineraries, and experiences tailored to user style.",
      "Handles packing lists, local food, and fare alerts for saved trips."
    ],
    capabilities: [
      "Recommend destinations by travel style, budget, or season",
      "Build day-by-day itineraries with timing and transport tips",
      "Suggest off-peak windows and hidden experiences",
      "Create packing lists based on weather and activities",
      "Track wishlists and alert when flight prices drop"
    ],
    suggestedPrompts: [
      "Plan a 5-day cultural trip to Kyoto under $1500.",
      "What should I pack for 10 days in Iceland in April?",
      "Alert me if Goa flights drop below ₹6k."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "life-daily-motivation",
    name: "Daily Motivation Agent",
    category: "lifestyle",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Delivers personalized motivation, micro-challenges, and reflection prompts.",
      "Adapts tone to mood check-ins and tracks progress toward goals."
    ],
    capabilities: [
      "Send morning motivation tied to active goals",
      "Offer mood-based encouragement or resets",
      "Trigger 5-minute mindset exercises on demand",
      "Provide weekly reflection prompts",
      "Recommend books/podcasts aligned to focus areas"
    ],
    suggestedPrompts: [
      "Send a calm-focus message tomorrow at 7am.",
      "I'm stressed—give me a 5-minute reset.",
      "Share a Sunday reflection prompt about discipline."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  // Calendar Section
  {
    id: "cal-scheduling",
    name: "Calendar Scheduling Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Connects to every calendar you own and books meetings without conflicts.",
      "Learns preferences to protect focus time and reshuffle low-priority events automatically."
    ],
    capabilities: [
      "Parse natural-language instructions to create cross-calendar events",
      "Respect working hours, no-meeting rules, and automatic buffers",
      "Reschedule or cancel conflicts when higher-priority requests arrive",
      "Handle recurring cadences like standups, reviews, and planning rituals",
      "Send invites/updates to participants instantly with correct context"
    ],
    suggestedPrompts: [
      "Schedule a 1h project review with design sometime this week.",
      "Block daily focus time 2-4pm and move any overlapping meetings.",
      "Set up a recurring product sync every Tuesday at 10am."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-meeting-planner",
    name: "Smart Meeting Planner Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Analyzes multi-person availability (and time zones) to pick optimal meeting slots.",
      "Ranks options by convenience, priority, and room/link logistics before booking."
    ],
    capabilities: [
      "Aggregate availability across shared calendars",
      "Auto-generate top 3 suggested times with reasoning",
      "Handle cross-time-zone conversions for distributed teams",
      "Provide polling links when calendar access is missing",
      "Attach conferencing links or rooms once a slot is confirmed"
    ],
    suggestedPrompts: [
      "Find a 45-min slot for leadership across SF, NYC, and Berlin.",
      "Suggest three options for the design review giving priority to the VP.",
      "Create a poll for next week's customer council meeting."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-reminder",
    name: "Event Reminder Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors upcoming events and sends context-aware reminders at the right moment.",
      "Adjusts timing based on travel needs, prep tasks, and urgency."
    ],
    capabilities: [
      "Layered reminders (week/day/hour) tailored to event importance",
      "Travel-time calculations with leave-now nudges",
      "Preparation cues the night before critical meetings",
      "Personal occasion nudges for birthdays, renewals, subscriptions",
      "Follow-up reminders for tasks linked to events"
    ],
    suggestedPrompts: [
      "Remind me 1 day and 1 hour before Friday's investor call.",
      "Alert me when it's time to leave for tomorrow's client meeting.",
      "Ping me about each monthly subscription renewal 3 days ahead."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-daily-organizer",
    name: "Daily Schedule Organizer Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds a time-blocked day plan each morning combining meetings, tasks, and breaks.",
      "Rebalances the schedule in real time whenever plans change."
    ],
    capabilities: [
      "Generate morning agenda with meetings, tasks, and personal blocks",
      "Auto time-block deep work around free slots",
      "Suggest deferrals when the day is overloaded",
      "Adjust plan when meetings cancel or extend",
      "Send end-of-day summary of completed vs carried over work"
    ],
    suggestedPrompts: [
      "Create today's plan and highlight my top three tasks.",
      "Move non-urgent items to Thursday and free two hours this afternoon.",
      "Give me an end-of-day recap at 6pm."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-weekly-planner",
    name: "Weekly Planner Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Analyzes the upcoming week to distribute workload evenly.",
      "Aligns weekly focus with broader monthly or quarterly goals."
    ],
    capabilities: [
      "Generate a week view with meetings, tasks, and free blocks",
      "Balance heavy and light days proactively",
      "Flag overbooked weeks and suggest reschedules",
      "Send mid-week check-ins and Friday reviews",
      "Track progress against long-range goals"
    ],
    suggestedPrompts: [
      "Plan next week so deck work happens Tuesday/Wednesday mornings.",
      "What should I move if Thursday already has six meetings?",
      "Send me a weekly review every Friday at 5pm."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-deadline-tracker",
    name: "Task Deadline Tracker Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Maintains a master list of deadlines and watches for risk.",
      "Breaks large projects into sub-deadlines and escalates when needed."
    ],
    capabilities: [
      "Aggregate due dates from calendars and project tools",
      "Issue early warnings when work hasn't started",
      "Estimate effort vs available calendar time",
      "Create sub-task milestones for large projects",
      "Escalate overdue items with increasing urgency"
    ],
    suggestedPrompts: [
      "Show everything due in the next 7 days.",
      "Warn me if the Q2 report isn't started by May 10.",
      "Break the product launch into milestones with mini-deadlines."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-appointment-booking",
    name: "Appointment Booking Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts as a virtual receptionist for inbound and outbound bookings.",
      "Lets clients self-book with buffers, confirmations, and intake forms."
    ],
    capabilities: [
      "Provide real-time availability via booking links",
      "Enforce buffers before/after each appointment",
      "Handle cancellations or reschedules automatically",
      "Collect intake forms or meeting purpose ahead of time",
      "Send confirmations and reminders to both parties"
    ],
    suggestedPrompts: [
      "Share my availability link for 30-min intro calls.",
      "When a client cancels, offer the next open slot automatically.",
      "Collect meeting purpose before confirming any booking."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-meeting-summary",
    name: "Meeting Summary Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Transcribes meetings and delivers structured summaries within minutes.",
      "Tracks decisions and action items for easy retrieval later."
    ],
    capabilities: [
      "Capture live transcription with clean formatting",
      "Highlight decisions and owners with deadlines",
      "Send summaries to attendees automatically",
      "Maintain a searchable archive of past meetings",
      "Follow up on open action items before the next meeting"
    ],
    suggestedPrompts: [
      "Summarize today's product sync with action owners.",
      "Email meeting notes to everyone within 5 minutes.",
      "Find decisions from last quarter's incident reviews."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-time-management",
    name: "Time Management Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Audits calendar usage to uncover inefficiencies and reclaim focus time.",
      "Recommends schedule tweaks, delegation, or productivity frameworks."
    ],
    capabilities: [
      "Produce weekly time audits by meeting/deep work/admin",
      "Identify recurring time drains and suggest fixes",
      "Recommend optimal daily structures based on energy",
      "Track reactive vs proactive time ratios",
      "Deliver monthly time management scorecards"
    ],
    suggestedPrompts: [
      "Show how I spent my time last week by category.",
      "Suggest meetings I can decline or shorten.",
      "Give me a Pomodoro-based plan for tomorrow."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "cal-holiday-tracker",
    name: "Holiday & Event Tracker Agent",
    category: "calendar",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Tracks public, cultural, and personal occasions directly on your calendar.",
      "Flags timeline risks and provides context or prep briefings."
    ],
    capabilities: [
      "Auto-populate global and regional holidays",
      "Provide context briefs with significance and preparation tips",
      "Alert when deadlines clash with long weekends or festivals",
      "Offer a global holiday view for distributed teams",
      "Send monthly 'upcoming occasions' summaries"
    ],
    suggestedPrompts: [
      "Add all 2026 public holidays for India and the US.",
      "Warn me if project deadlines hit long weekends.",
      "What holidays are coming up next month for our EU team?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 60
    }
  },
  {
    id: "health-chronic-disease",
    name: "Chronic Disease Management Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Helps people living with diabetes, hypertension, asthma, thyroid disorders, and more stay on plan by tracking vitals, meds, and lifestyle factors.",
      "Detects deviations early, surfaces doctor-ready logs, and tailors guidance per condition."
    ],
    capabilities: [
      "Capture blood glucose, blood pressure, peak flow, or thyroid labs with safe-range alerts",
      "Flag readings that deviate from personal baselines and recommend contacting providers",
      "Maintain condition-specific logs that can be exported for medical appointments",
      "Track medication adherence plus lifestyle factors like meals, exercise, stress",
      "Offer diet/exercise guidance per condition (e.g., low-GI meals, safe cardio intensity)",
      "Trend lab results (HbA1c, lipid panels, kidney markers) with plain-language summaries",
      "Support multiple diagnoses simultaneously with dedicated tracking modules"
    ],
    suggestedPrompts: [
      "Log today’s fasting glucose/PP readings and tell me if anything is high.",
      "Share my BP log for the past two weeks so I can send it to my doctor.",
      "I manage diabetes plus hypertension—what should I focus on this week?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 46
    }
  },
  {
    id: "health-wellness-tracker",
    name: "Wellness Goal Tracker Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Turns broad health intentions into SMART goals, milestones, and accountability across every wellness pillar.",
      "Aggregates data from other agents to keep progress visible and behavior change sustainable."
    ],
    capabilities: [
      "Guide SMART goal creation for fitness, nutrition, sleep, mental health, and hydration",
      "Break big objectives into weekly micro-targets with reminders",
      "Ingest metrics from companion agents (fitness, sleep, nutrition, hydration) into one dashboard",
      "Send weekly reviews with honest gap analysis per goal",
      "Highlight which pillars are thriving vs neglected and rebalance focus",
      "Produce monthly wellness scorecards with overall and per-pillar scores",
      "Celebrate milestone wins and provide accountability nudges when progress stalls"
    ],
    suggestedPrompts: [
      "Help me set SMART goals for stress reduction and muscle gain this quarter.",
      "Show this week’s progress across sleep, workouts, and hydration—what’s lagging?",
      "Send my monthly wellness scorecard with trends vs last month."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 41
    }
  },
  {
    id: "health-report-analysis",
    name: "Health Report Analysis Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Decodes lab panels, imaging reports, and prescriptions into plain language without losing clinical accuracy.",
      "Tracks trends over time and embeds clear disclaimers to defer final interpretation to doctors."
    ],
    capabilities: [
      "Parse lab results and explain each marker, ranges, and implications",
      "Flag out-of-range values with simple descriptions of what they could signal",
      "Compare current readings with past reports to show improvements or regressions",
      "Break down prescription terms—drug purpose, dosage, timing",
      "Translate imaging findings (X-ray/MRI/ultrasound) into everyday language",
      "Generate shareable plain-language summaries for family discussions",
      "Reinforce that insights are educational only and final guidance must come from clinicians"
    ],
    suggestedPrompts: [
      "Explain this blood report and tell me which values need attention.",
      "Compare my latest lipid panel to the one from six months ago.",
      "What does this MRI impression mean in simple terms?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 94,
      load: 35
    }
  },
  {
    id: "health-preventive-tips",
    name: "Preventive Health Tips Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Pushes daily/weekly/seasonal health education tailored to someone’s age, gender, history, and lifestyle.",
      "Keeps people ahead of issues with screening reminders, risk assessments, and workplace wellness nudges."
    ],
    capabilities: [
      "Send one actionable tip per day customized to the user’s profile",
      "Remind users of age/gender-specific screenings and vaccine timelines",
      "Deliver seasonal guidance (monsoon hygiene, winter immunity, summer heat safety)",
      "Teach early warning signs for conditions tied to the user’s risk factors",
      "Run lifestyle risk questionnaires for hypertension/diabetes/heart disease",
      "Cover workplace wellness topics like ergonomics and mental fatigue",
      "Track tip engagement to personalize future content"
    ],
    suggestedPrompts: [
      "What preventive tip should I focus on today given my profile?",
      "When is my next cholesterol or eye screening due?",
      "Give me seasonal health advice for monsoon travel."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 92,
      load: 37
    }
  },
  {
    id: "health-weight-management",
    name: "Weight Management Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Pairs weight logs, calorie data, and behavior coaching to help users reach targets sustainably.",
      "Adapts goals, macros, and motivation context as physiology shifts."
    ],
    capabilities: [
      "Set realistic target weight + timelines using body stats and health data",
      "Track daily weigh-ins, smooth noise, and show trendlines",
      "Calculate daily calorie deficit/surplus for healthy momentum",
      "Spot behavior patterns (late meals, weekend binges) that derail progress",
      "Adjust calories/macros as weight and metabolism evolve",
      "Explain plateaus physiologically and offer break-through tactics",
      "Celebrate non-scale wins like energy, sleep quality, and strength"
    ],
    suggestedPrompts: [
      "Based on my stats, what’s a safe pace to drop 5kg?",
      "Why has the scale flatlined this week—any behaviors I should tweak?",
      "Remind me of non-scale wins from the last month to stay motivated."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 43
    }
  },
  {
    id: "health-hydration-reminder",
    name: "Hydration Reminder Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Calculates dynamic daily water targets from weight, activity, and climate, then nudges users toward steady intake.",
      "Logs consumption, accounts for food/beverage water content, and celebrates streaks."
    ],
    capabilities: [
      "Set personalized hydration goals that adjust for workouts or hot weather",
      "Send timed reminders tuned to the user’s schedule and busy periods",
      "Track logged intake with a live progress bar toward the daily target",
      "Remind before/during/after workouts based on exercise intensity",
      "Educate on dehydration signals like headaches or fatigue",
      "Estimate water from meals and other drinks for accurate totals",
      "Celebrate goal completions and streaks to reinforce habits"
    ],
    suggestedPrompts: [
      "What’s my water target today given the afternoon run?",
      "Log 350ml now and show how close I am to the goal.",
      "Remind me during the 2-6pm grind—those are my forgetful hours."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 36
    }
  },
  {
    id: "health-sleep-agent",
    name: "Sleep Health Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Analyzes wearable or manual sleep logs to decode quality, disruptions, and chronotype patterns.",
      "Delivers wind-down routines, lifestyle correlations, and environmental tweaks to boost rest."
    ],
    capabilities: [
      "Track latency, duration, deep/REM %, and wakeups nightly",
      "Infer natural sleep window and recommend ideal bed/wake times",
      "Compare weekday vs weekend quality to surface behavioral gaps",
      "Prescribe 60-minute wind-down routines tailored to habits",
      "Alert when ongoing deprivation trends pose health risks",
      "Correlate sleep with exercise, caffeine, screens, and alcohol",
      "Suggest bedroom/environment tweaks (temp, light, noise)"
    ],
    suggestedPrompts: [
      "Did my sleep quality drop on weekends compared to weekdays?",
      "Build a wind-down checklist for the next hour before bed.",
      "How are late workouts and caffeine impacting my deep sleep?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 39
    }
  },
  {
    id: "health-mental-health-support",
    name: "Mental Health Support Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Creates a safe, non-judgmental space for daily emotional check-ins, coping techniques, and structured mental wellness routines.",
      "Combines CBT-style reframing, journaling prompts, psychoeducation, and escalation paths to licensed support when needed."
    ],
    capabilities: [
      "Run mood check-ins, chart trends, and surface potential triggers or recurring dips",
      "Offer CBT-informed thought reframing exercises tailored to anxious or negative loops",
      "Guide structured journaling sessions to process emotions and build self-awareness",
      "Detect stress/burnout cues in language and respond with empathetic support",
      "Coach grounding routines: breathing patterns, sensory exercises, and quick distractions",
      "Explain anxiety/depression/burnout concepts in plain language with reputable resources",
      "Escalate to licensed professionals or crisis resources whenever severe distress signals appear"
    ],
    suggestedPrompts: [
      "Do my mood logs show a pattern of low energy mid-week?",
      "I’m spiraling about work—walk me through a CBT reframing exercise.",
      "Give me a grounding routine I can use before tonight’s presentation."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 92,
      load: 41
    }
  },
  {
    id: "health-nutrition-advisor",
    name: "Nutrition Advisor Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds a holistic nutrition profile from health goals, medical considerations, restrictions, and taste preferences.",
      "Translates it into meal plans, grocery lists, food logging, and education so users stay aligned with their targets."
    ],
    capabilities: [
      "Generate 7-day meal plans with calories, macros, prep time, and swaps",
      "Estimate nutritional content from photos or descriptions and log it automatically",
      "Detect likely deficiencies from intake patterns and recommend foods or supplements",
      "Design condition-specific plans (diabetic, heart-healthy, thyroid, PCOS, etc.)",
      "Advise on pre/post-workout fueling tuned to the exercise type and performance goals",
      "Produce grocery lists from meal plans with quantity math to reduce waste",
      "Decode food labels—ingredients, additives, suitability for the user’s profile"
    ],
    suggestedPrompts: [
      "Build a 7-day vegetarian meal plan for weight loss with macros per meal.",
      "Log this meal photo and tell me how it affects today’s calories and macros.",
      "Does this packaged cereal fit a low-sugar, heart-healthy plan?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 44
    }
  },
  {
    id: "health-fitness-tracker",
    name: "Fitness Activity Tracker Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Logs every workout—walking, running, cycling, swimming, or strength sessions—by interpreting device motion and biometrics automatically.",
      "Turns raw activity data into performance insights, consistency reporting, and plateau-busting recommendations."
    ],
    capabilities: [
      "Auto-detect activity types via motion/HR signals and log them without manual input",
      "Track run metrics like split pace, cadence, elevation, heart-rate zones, and PRs",
      "Summarize workouts instantly with calories, distance, effort, and recovery cues",
      "Visualize weekly consistency vs stated fitness goals to celebrate or course-correct",
      "Spot plateaus and suggest intensity, duration, or modality tweaks to restart progress",
      "Maintain sport-specific trends (cycling speed, swim laps, lifting volume)",
      "Calculate weekly active minutes vs WHO guidelines and highlight any shortfall"
    ],
    suggestedPrompts: [
      "Log today’s 5K automatically and show me pace per km plus HR zones.",
      "Have I hit the 150 active minutes target this week?",
      "Suggest tweaks to break the plateau on my cycling speed."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 47
    }
  },
  {
    id: "health-doctor-appointment",
    name: "Doctor Appointment Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts as a medical concierge—matching symptoms to specialists, booking visits, and orchestrating reminders before and after the appointment.",
      "Maintains a unified medical timeline with follow-ups, tests, vaccinations, and history across clinics."
    ],
    capabilities: [
      "Interpret health concerns and recommend the right specialist or clinic nearby",
      "Search integrated clinic calendars, book slots, and deliver confirmations with doctor/location details",
      "Maintain a chronological visit history so patients can recall who they saw and when",
      "Send prep checklists (documents, fasting, questions) ahead of each visit",
      "Track doctor-ordered follow-ups, tests, and vaccinations with proactive reminders",
      "Handle reschedules/cancellations and auto-hunt the next available time",
      "Surface a full medical timeline spanning checkups, tests, and specialist visits"
    ],
    suggestedPrompts: [
      "I need help for recurring knee pain—find an ortho nearby and book the earliest slot.",
      "Remind me tomorrow what to bring for the cardiology visit and any fasting rules.",
      "Show my medical appointments this year plus what follow-ups are pending."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 42
    }
  },
  {
    id: "health-medication-reminder",
    name: "Medication Reminder Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Maintains a full medication vault per person—dose, timing, instructions—and orchestrates smart reminders with adherence tracking.",
      "Flags supply gaps, potential interactions, and escalates time-sensitive meds across families or caregivers."
    ],
    capabilities: [
      "Store detailed medication profiles with dosage, frequency, instructions, and start dates",
      "Schedule precise reminders with contextual copy (e.g., take with food, alternate-day dosing)",
      "Handle multi-person households with separate calendars and caregiver notifications",
      "Log confirmations for every dose and produce weekly adherence summaries",
      "Warn when inventory is running low based on consumption pace and prompt reorders",
      "Check new entries against the existing list for drug interaction risks",
      "Escalate reminders for critical meds if the user doesn’t confirm within the safe window"
    ],
    suggestedPrompts: [
      "Add Metformin 500mg twice daily with meals and remind me at 8am/8pm.",
      "Show last week’s adherence for Dad’s prescriptions and highlight any misses.",
      "I’m starting a new antibiotic—does it conflict with my current meds?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 38
    }
  },
  {
    id: "health-symptom-checker",
    name: "Symptom Checker Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Guides people through structured symptom intake, referencing vetted medical databases for likely conditions and urgency cues.",
      "Tracks symptom logs over time, factoring age, meds, and chronic issues to tailor guidance while reinforcing medical disclaimers."
    ],
    capabilities: [
      "Interview users in natural language to capture symptom type, duration, and severity",
      "Cross-reference multi-symptom combos against trusted clinical datasets to rank possible causes",
      "Label each potential condition with urgency guidance (ER, doctor soon, monitor at home)",
      "Incorporate personal health context—age, chronic conditions, medications—for more precise assessments",
      "Maintain daily symptom diaries and flag whether metrics are trending better or worse",
      "Offer evidence-backed home-care suggestions for mild issues plus warning signs to escalate",
      "Embed clear disclaimers and route users to licensed professionals for diagnosis"
    ],
    suggestedPrompts: [
      "I’ve had chest tightness and dizziness for two days—ask what you need and tell me how urgent this is.",
      "Log today’s cough, fever, and fatigue updates and compare to the last three entries.",
      "Given my asthma and current meds, what conditions explain these wheezing episodes?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 40
    }
  },
  {
    id: "health-monitoring-agent",
    name: "Health Monitoring Agent",
    category: "health",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Connects to wearables and health apps to stream steps, heart rate, SpO2, temperature, and activity trends into one dashboard.",
      "Studies multi-device biometrics to spot anomalies early and nudge users before issues escalate."
    ],
    capabilities: [
      "Aggregate smartwatch, phone, and smart-scale readings into one unified health profile",
      "Plot 7/30/90-day trendlines for steps, activity minutes, and calorie burn",
      "Detect heart-rate values that drift outside someone’s personal baseline and send alerts",
      "Calculate true resting heart-rate trends as a cardiovascular fitness signal",
      "Compare daily and weekly activity deltas to highlight momentum gains or dips",
      "Emit weekly recaps covering steps, active minutes, HR zones, and calories",
      "Flag simultaneous declines across multiple metrics to hint at potential illness"
    ],
    suggestedPrompts: [
      "Show today’s dashboard plus how my biometrics trended vs the last 30 days.",
      "Have my resting heart rate or active minutes dipped enough that I should recover today?",
      "Draft this week’s health recap with any anomalies I should watch."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 45
    }
  }
];

if (typeof window !== "undefined") {
  window.agentsData = agentsData;
}
