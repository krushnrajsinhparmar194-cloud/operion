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
    id: "biz-client-communication",
    name: "Client Communication Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Orchestrates proactive, personalized outreach across the client lifecycle so no relationship goes cold.",
      "Tracks sentiment, milestones, and cadence to keep account teams ahead of issues."
    ],
    capabilities: [
      "Maintain per-client communication calendars with last touch + next action",
      "Draft personalized updates, check-ins, and milestone notes for one-click send",
      "Trigger automated notifications when projects hit key milestones or orders ship",
      "Monitor sentiment trends and alert managers if tone turns negative",
      "Run annual review workflows: schedule, prep summaries, send recaps",
      "Handle onboarding comms (welcomes, guides, 30/60/90-day check-ins)",
      "Publish communication health reports showing dormant/risk/high-engagement accounts"
    ],
    suggestedPrompts: [
      "Who hasn’t heard from us in 45 days and needs a check-in drafted?",
      "Send milestone updates to clients whose projects just cleared QA.",
      "Prepare next week’s annual review packet for Horizon Capital."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 42
    }
  },
  {
    id: "biz-strategy-advisor",
    name: "Business Strategy Advisor Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Blends internal KPIs with market intel, competitor moves, and industry trends to steer strategic decisions.",
      "Surfaces growth bets, risks, and scenario models so leadership can act with confidence."
    ],
    capabilities: [
      "Run SWOT analyses using company data plus external research",
      "Spot high-ROI segments/products/markets for focused investment",
      "Monitor competitor launches, pricing, and positioning with impact summaries",
      "Model strategic scenarios with revenue/profit projections",
      "Evaluate partnership or acquisition opportunities (fit, risk, value)",
      "Track industry trends/regulation shifts and alert on threats/opportunities",
      "Author quarterly strategic review docs with performance, learnings, and next steps"
    ],
    suggestedPrompts: [
      "Produce a SWOT using last quarter’s performance plus current market intel.",
      "Which customer segments delivered the best margin growth this year?",
      "Model the impact of entering the APAC market in Q3."
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
    id: "biz-team-productivity",
    name: "Team Productivity Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Gives managers visibility into workload, goals, meetings, and output so teams stay healthy and balanced.",
      "Feeds individuals their own dashboards so they can self-correct fast."
    ],
    capabilities: [
      "Track completion rates, on-time delivery, and output volume automatically",
      "Spot workload imbalances and recommend redistribution",
      "Monitor OKRs/targets per person and flag early slippage",
      "Send weekly productivity digests highlighting top performers and risks",
      "Analyze meeting load vs deep work time by teammate",
      "Detect macro productivity trends and correlate changes to events",
      "Provide self-serve dashboards for each teammate"
    ],
    suggestedPrompts: [
      "Send this week’s productivity digest with highlights and risks.",
      "Who’s overloaded vs underutilized on the marketing squad?",
      "Show my personal dashboard—I want to see meeting load vs output."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 43
    }
  },
  {
    id: "biz-business-research",
    name: "Business Research Agent",
    category: "business",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Executes structured research on markets, industries, competitors, and customers, delivering decision-ready briefs.",
      "Synthesizes multi-source findings with citations so leaders get reliable context fast."
    ],
    capabilities: [
      "Estimate TAM/SAM/SOM plus growth rates and segments for new products or geos",
      "Build competitor dossiers covering offerings, pricing, positioning, strengths/weaknesses, and latest moves",
      "Prep client meeting briefs with company background, news, finances, stakeholders, and challenges",
      "Monitor industry news/regulations and issue weekly leadership briefings",
      "Benchmark internal metrics vs sector averages",
      "Research suppliers/partners/M&A targets with due diligence summaries",
      "Answer ad-hoc research questions with structured responses and sources"
    ],
    suggestedPrompts: [
      "Size the TAM and growth rate for our proposed Middle East launch.",
      "Create a competitor brief on NovaLearn with pricing, ICP, and latest releases.",
      "What’s the market share of the top 5 Indian EdTech players? Cite sources."
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
    id: "sales-lead-generation",
    name: "Lead Generation Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Scans LinkedIn, company sites, directories, news, and social feeds to populate ICP-aligned prospect lists automatically.",
      "Tracks intent triggers so sellers know who’s ready for outreach."
    ],
    capabilities: [
      "Define ICPs by industry, size, geo, revenue, and buyer titles",
      "Scrape + enrich company/contact data (names, roles, emails, phones)",
      "Detect intent signals (funding, hiring, leadership changes, market moves)",
      "Score and segment leads by ICP fit and urgency",
      "Monitor triggers like expansion, competitor exits, or regulatory shifts",
      "Build territory- or product-specific lead lists and auto-assign reps",
      "Continuously dedupe, refresh, and hygiene the database"
    ],
    suggestedPrompts: [
      "Generate a list of EU fintech scale-ups hiring RevOps leaders.",
      "Show high-intent prospects in APAC after the latest funding announcements.",
      "Clean the outbound list—remove duplicates and flag bounced contacts."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 46
    }
  },
  {
    id: "sales-outreach",
    name: "Sales Outreach Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Takes qualified lists and sends hyper-personalized outreach across channels at the perfect moment.",
      "Learns from engagement data to keep improving response rates."
    ],
    capabilities: [
      "Craft individualized first-touch emails referencing company, role, or news",
      "Build multi-channel cadences (email, LinkedIn, call tasks) with timing rules",
      "A/B test subject lines, hooks, and CTAs to optimize response",
      "Personalize at scale by merging unique variables into templates",
      "Schedule sends per prospect’s time zone and historical engagement",
      "Adjust tone based on seniority (exec vs manager messaging)",
      "Track delivery/open/click/reply metrics and iterate"
    ],
    suggestedPrompts: [
      "Write a first-touch email to each SaaS CFO in this list referencing their recent funding news.",
      "Spin up a 4-step cadence (email, LinkedIn, email, call) for APAC retail leads.",
      "What variant performed best last week and why?"
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
    id: "sales-crm-management",
    name: "CRM Management Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps CRM data trustworthy by automating updates, surfacing pipeline risks, and guiding reps on next actions.",
      "Ensures contacts, deals, and activity logs stay clean so revenue teams can move faster."
    ],
    capabilities: [
      "Auto-create/update contacts and deals from emails, meetings, calls, and calendars",
      "Score pipeline health per deal using engagement, inactivity, size, and stage duration",
      "Alert managers when high-value deals go stale and suggest re-engagement steps",
      "Continuously verify contact info via external sources and refresh records",
      "Enforce data quality—detect missing fields, duplicates, and inconsistencies",
      "Publish deal velocity reports highlighting stage bottlenecks",
      "Send daily prioritized action lists to each rep"
    ],
    suggestedPrompts: [
      "Which Q2 deals are stalling and what should we do next?",
      "Refresh contact info for all enterprise accounts before tomorrow’s review.",
      "Send my prioritized action list for today’s follow-ups."
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
    id: "sales-forecasting",
    name: "Sales Forecasting Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Blends pipeline data, historical win rates, seasonality, and risk signals to generate reliable revenue forecasts from rep to company level.",
      "Keeps leadership ahead of target gaps with proactive alerts and scenario modeling."
    ],
    capabilities: [
      "Produce weekly revenue forecasts by rep, product, region, and company with confidence bands",
      "Score each open deal’s close probability using ML on historical patterns",
      "Flag overvalued deals stuck too long in stage vs successful benchmarks",
      "Model what-if scenarios (deal slips, improved win rates, etc.)",
      "Track forecast vs actual accuracy and self-correct",
      "Alert when pipeline coverage drops below target needs",
      "Maintain a rolling 12-month forecast updated weekly"
    ],
    suggestedPrompts: [
      "Give me this week’s forecast by region with confidence intervals.",
      "Which deals look overvalued based on stage aging?",
      "Model the impact if the top three enterprise deals slip one month."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 93,
      load: 45
    }
  },
  {
    id: "sales-proposal-quotation",
    name: "Proposal & Quotation Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Turns deal notes into polished proposals and quotes that follow pricing rules and showcase the right proof points.",
      "Tracks delivery, approvals, and performance so teams know what messaging wins."
    ],
    capabilities: [
      "Generate formatted proposals (company intro, solution, scope, pricing, timeline, terms) within minutes",
      "Tailor messaging with prospect-specific challenges, goals, and case studies",
      "Enforce pricing/discount rules and trigger approvals when thresholds are exceeded",
      "Track proposal opens/views and schedule follow-ups if unopened",
      "Offer multi-tier pricing (base/recommended/premium) in a single document",
      "Maintain version history across negotiations",
      "Analyze won/lost proposals to learn which structures drive win rates"
    ],
    suggestedPrompts: [
      "Draft a proposal for Apex Retail with logistics pain points and the FashionTech case study.",
      "Generate three pricing tiers for the SmartOps package and route discounts over 15% for approval.",
      "Show which proposal formats had the highest win rate last quarter."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 43
    }
  },
  {
    id: "sales-customer-engagement",
    name: "Customer Engagement Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Handles web chat, messaging apps, and social DMs in real time to qualify prospects, answer questions, and keep customers engaged throughout the lifecycle.",
      "Understands CRM context before replying so every interaction is personal and logged."
    ],
    capabilities: [
      "Engage site visitors instantly, ask qualifying questions, and route hot leads to reps",
      "Answer product/pricing questions 24/7 across channels",
      "Guide decision conversations and drive demos/trials",
      "Detect high-intent behavior from pages visited, time on site, and topics",
      "Maintain ongoing touchpoints with existing customers for renewals/check-ins",
      "Personalize replies using CRM history and prior interactions",
      "Capture contact info from each conversation and update CRM automatically"
    ],
    suggestedPrompts: [
      "Handle live chat on the pricing page and escalate anyone asking about enterprise SLAs.",
      "Send check-ins to customers 30 days before renewal and log feedback.",
      "Show me today’s high-intent visitors and how we handled them."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 46
    }
  },
  {
    id: "sales-social-media-marketing",
    name: "Social Media Marketing Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Runs end-to-end social operations—planning, creation, scheduling, monitoring, and analytics—across every platform.",
      "Keeps the calendar balanced and reactive to trends."
    ],
    capabilities: [
      "Build monthly cross-platform calendars with educational/promotional/engagement mix",
      "Transform core messages into platform-specific copy/assets",
      "Schedule posts at optimal times per channel",
      "Monitor comments/mentions/messages and draft rapid responses",
      "Surface trending topics/hashtags and suggest timely content",
      "Identify best-performing formats per platform and adjust mix",
      "Deliver weekly performance reports (growth, reach, engagement, top posts)"
    ],
    suggestedPrompts: [
      "Plan April’s social calendar with product launches + thought leadership.",
      "Repurpose this webinar announcement for LinkedIn, Instagram, and X.",
      "Send this week’s social report with insights on what to double down on."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 42
    }
  },
  {
    id: "sales-content-marketing",
    name: "Content Marketing Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Runs content strategy end-to-end—research, planning, creation, repurposing, and performance tracking—to attract and convert target audiences.",
      "Keeps every asset on-brand and optimized for both humans and search engines."
    ],
    capabilities: [
      "Perform keyword/topic research aligned to ICP needs and product strengths",
      "Write SEO-optimized long-form articles with proper structure, readability, and metadata",
      "Produce detailed content briefs (audience, key messages, keywords, length, CTA)",
      "Repurpose cornerstone pieces into LinkedIn posts, social captions, newsletters, and video scripts",
      "Enforce consistent brand voice across all formats",
      "Develop pillar/cluster strategies with internal linking plans",
      "Track performance (traffic, leads, conversions) and prioritize future topics"
    ],
    suggestedPrompts: [
      "Research cloud security keywords we should target this quarter.",
      "Write a 1,500-word blog on zero-trust frameworks with on-page SEO best practices.",
      "Turn last week’s AI webinar recap into social, newsletter, and short-video scripts."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 42
    }
  },
  {
    id: "sales-email-marketing",
    name: "Email Marketing Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Owns segmentation, creative, automation, and reporting for targeted email programs that nurture leads and drive revenue.",
      "Protects deliverability while iterating through testing."
    ],
    capabilities: [
      "Segment lists by lifecycle stage, behavior, and purchase history",
      "Build multi-email nurture sequences for new leads",
      "Design/promote product launches, promos, and events with polished templates",
      "Run A/B tests on subject lines, timing, length, and CTAs",
      "Monitor deliverability metrics and adjust sending practices",
      "Trigger behavior-based emails (pricing visits, inactivity, etc.)",
      "Report on opens, CTR, conversions, revenue, unsubscribes with benchmarks"
    ],
    suggestedPrompts: [
      "Create a 6-touch nurture for new freemium signups.",
      "Send a segmented campaign for customers who viewed pricing yesterday.",
      "Compare this week’s email performance to last month’s benchmarks."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "sales-ad-campaign",
    name: "Ad Campaign Management Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Runs paid campaigns end-to-end across Google, Meta, LinkedIn, and more—building structures, testing creative, and optimizing budget for ROI.",
      "Keeps performance on target with real-time adjustments and clear reporting."
    ],
    capabilities: [
      "Create campaign structures (objectives, ad sets/groups, targeting, bidding, budgets)",
      "Write/test multiple ad copy and creative variations",
      "Monitor metrics in real time and adjust bids/budgets/audiences automatically",
      "Pause underperforming sets and scale winning combinations",
      "Manage retargeting audiences tied to site visitors, video viewers, and email lists",
      "Deliver weekly dashboards with impressions, clicks, CPL, CVR, ROAS by campaign",
      "Recommend budget reallocation across platforms based on ROI"
    ],
    suggestedPrompts: [
      "Spin up a LinkedIn demand-gen campaign targeting SaaS CMOs with two creative variants.",
      "Show this week’s ROAS by channel and where to shift budget.",
      "Pause any ad sets exceeding $120 CPL and reassign spend to the top performers."
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
    id: "sales-market-research",
    name: "Market Research Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Collects and synthesizes market, customer, and competitor intelligence so marketing and product teams can move with clarity.",
      "Surfaces unmet needs, positioning insights, and size/growth signals."
    ],
    capabilities: [
      "Profile customer segments (jobs-to-be-done, current solutions, buying criteria, objections)",
      "Produce deep competitor reports covering features, pricing, positioning, channels, strengths/weaknesses",
      "Monitor competitor marketing activity and send weekly intel briefings",
      "Design/distribute surveys, analyze results, and highlight statistically significant findings",
      "Mine complaints/forums/reviews/support data to spot unmet needs",
      "Track market size/growth using public/industry data with quarterly refreshes",
      "Deliver pre-launch research on demand, competition, segments, and positioning"
    ],
    suggestedPrompts: [
      "Profile mid-market HR leaders shopping for analytics tools—what matters to them?",
      "Summarize competitor content launches this week and implications for us.",
      "Estimate 2026 TAM + growth for the LATAM logistics automation market."
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
    id: "sales-analytics",
    name: "Sales Analytics Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Aggregates CRM, activity, and revenue data into real-time dashboards and diagnostics so sales leaders can act quickly.",
      "Highlights funnel bottlenecks, top-performer behaviors, and seasonal patterns."
    ],
    capabilities: [
      "Deliver live dashboards showing revenue vs target by rep/team/product/region",
      "Track win rate, deal size, cycle length, pipeline coverage, and quota attainment",
      "Analyze conversion rates per funnel stage and identify drop-off causes",
      "Compare reps to surface repeatable behaviors",
      "Correlate activity metrics (calls/emails/meetings) with outcomes",
      "Detect seasonal patterns and inform target/resource planning",
      "Run lost-deal analyses with insights by product, industry, and competitor"
    ],
    suggestedPrompts: [
      "Show today’s revenue vs target by team and highlight any red flags.",
      "Where is the biggest funnel drop-off right now and why?",
      "Summarize lost-deal reasons this quarter with actionable takeaways."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 42
    }
  },
  {
    id: "sales-product-promotion",
    name: "Product Promotion Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds integrated promotion strategies for specific products, coordinating messaging and channels to maximize awareness and sales.",
      "Tracks performance in real time and distills post-campaign learnings."
    ],
    capabilities: [
      "Develop go-to-market promotion plans with positioning, audience, messaging, channels, timeline, and KPIs",
      "Tailor promotional messaging per segment (enterprise, SMB, consumer)",
      "Coordinate email, social, paid, content, and sales outreach so campaigns stay aligned",
      "Design urgency-driven offers (countdowns, early-bird pricing, bundles)",
      "Spot underperforming products and launch targeted boosts",
      "Monitor incremental sales lift, acquisition, and revenue vs baseline",
      "Publish post-campaign retros with ROI and recommendations"
    ],
    suggestedPrompts: [
      "Create a GTM promotion brief for the new analytics add-on with enterprise and SMB variants.",
      "Coordinate a two-week promo across email, social, and paid around the spring sale.",
      "Analyze last month’s bundle campaign and report ROI plus next-step recommendations."
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
    id: "sales-feedback-analysis",
    name: "Customer Feedback Analysis Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Centralizes reviews, surveys, tickets, social mentions, and call notes to extract sentiment trends and actionable insights.",
      "Alerts teams to emerging issues and delivers voice-of-customer reports."
    ],
    capabilities: [
      "Aggregate feedback from review sites, apps, surveys, tickets, social, and sales notes",
      "Run sentiment + topic tagging for every entry",
      "Highlight top positive/negative themes and feature requests",
      "Detect spikes in negative feedback tied to specific issues",
      "Track sentiment trends over time with context on drivers",
      "Publish monthly VoC reports with quotes and data",
      "Route critical feedback to the right teams automatically"
    ],
    suggestedPrompts: [
      "Summarize this week’s feedback themes and priority fixes.",
      "Alert engineering if login-related complaints spike more than 20% week over week.",
      "Produce the March voice-of-customer report with quotes."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 43
    }
  },
  {
    id: "sales-seo-optimization",
    name: "SEO Optimization Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Audits technical + content SEO, runs keyword research, and delivers prioritized plans to grow organic traffic.",
      "Monitors rankings, competitors, and link opportunities continuously."
    ],
    capabilities: [
      "Perform full technical SEO audits (speed, links, meta, mobile, crawl issues)",
      "Conduct keyword research based on volume, competition, and intent",
      "Review each page with actionable on-page recommendations",
      "Track keyword rankings weekly and diagnose movement",
      "Monitor competitor rankings to surface keyword/content gaps",
      "Build link acquisition strategies with outreach targets",
      "Publish monthly SEO performance reports (traffic, rankings, new keywords, revenue impact)"
    ],
    suggestedPrompts: [
      "Audit the docs site for technical SEO issues and prioritize fixes.",
      "Which high-intent keywords should we target next quarter?",
      "Send March’s SEO report with ranking changes and traffic impact."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 43
    }
  },
  {
    id: "sales-brand-strategy",
    name: "Brand Strategy Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds and protects the brand foundation—positioning, messaging, identity, and health tracking—so every touchpoint stays aligned.",
      "Translates perception insights into practical brand actions."
    ],
    capabilities: [
      "Define core positioning with clear differentiation",
      "Create messaging architecture per audience with proof points",
      "Analyze perception data (feedback, social, surveys) to compare actual vs intended",
      "Recommend actions to close positioning gaps",
      "Monitor brand health (awareness, preference, NPS) over time",
      "Publish guidelines for consistent voice and visual identity across teams",
      "Advise on brand/extensions or sub-brand strategies for new markets/products"
    ],
    suggestedPrompts: [
      "Craft an updated positioning statement for our AI platform vs legacy vendors.",
      "What does sentiment analysis say about the gap between how we talk about reliability and how customers perceive it?",
      "Recommend whether our SMB product should live under a sub-brand before launch."
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
    id: "sales-influencer-marketing",
    name: "Influencer Marketing Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Finds, vets, and manages influencer partnerships end-to-end so campaigns feel authentic and deliver measurable impact.",
      "Keeps a living database of performance to re-engage the best creators."
    ],
    capabilities: [
      "Search influencers by platform, niche, audience size, engagement, demographics, and collaboration history",
      "Evaluate quality via authenticity metrics, growth patterns, and brand alignment",
      "Segment influencers into mega/macro/micro tiers for the right goals",
      "Manage outreach, contracts, briefs, approvals, publishing, and payments",
      "Track per-influencer performance (reach, engagement, traffic, promo codes, conversions)",
      "Maintain a vetted influencer database with historical results",
      "Spot emerging creators early for long-term partnerships"
    ],
    suggestedPrompts: [
      "Find micro-influencers in sustainable fashion with >8% engagement and eco-friendly content history.",
      "Draft briefs + contracts for the Q2 launch collab and manage approvals.",
      "Report on last month’s influencer campaign with conversions per creator."
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
    id: "sales-campaign-analytics",
    name: "Campaign Performance Analytics Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Unifies performance data across every marketing channel, delivering attribution-aware insights and optimization recommendations in real time.",
      "Keeps marketing and leadership aligned on ROI."
    ],
    capabilities: [
      "Build cross-channel dashboards spanning paid, owned, and earned media",
      "Apply multi-touch attribution models to reveal true conversion paths",
      "Map channel effectiveness by funnel stage",
      "Compare CPL/CPA across channels and suggest budget shifts",
      "Send weekly health reports and monthly exec summaries",
      "Track spend vs revenue to calculate ROI trends",
      "Run post-campaign retros with lessons and next steps"
    ],
    suggestedPrompts: [
      "Show a unified view of all active campaigns with CPL/CPA by channel.",
      "Which touchpoint combos most often precede conversions this quarter?",
      "Summarize the winter promo campaign with ROI and recommendations."
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
    id: "sales-landing-optimization",
    name: "Landing Page Optimization Agent",
    category: "sales",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Audits landing pages with behavioral and conversion data to pinpoint friction and prescribe tests that lift CVR.",
      "Keeps a rolling scorecard so improvements compound over time."
    ],
    capabilities: [
      "Evaluate headlines, value props, CTAs, forms, social proof, speed, and mobile UX",
      "Use heatmaps/scroll maps to identify engagement vs drop-off zones",
      "Prioritize fixes based on expected conversion impact",
      "Design A/B test plans with variant suggestions and run-time guidance",
      "Analyze form abandonment and recommend streamlined flows",
      "Check message match between traffic sources and page content",
      "Produce monthly scorecards with conversion trends and benchmarks"
    ],
    suggestedPrompts: [
      "Audit the webinar signup page and list the highest-impact fixes.",
      "What A/B tests should we run first on the pricing page and why?",
      "Send April’s landing page scorecard with industry benchmark comparisons."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 42
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
  },
  {
    id: "fin-expense-tracking",
    name: "Expense Tracking Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Links bank, card, and wallet data to categorize every transaction automatically and surface spending patterns in real time.",
      "Flags anomalies, splits shared costs, and keeps monthly budgets on track."
    ],
    capabilities: [
      "Import and auto-categorize transactions across all connected accounts",
      "Learn from manual corrections to improve future categorization",
      "Highlight category trends, weekday spending spikes, and top merchants",
      "Detect unusual or suspicious transactions instantly",
      "Split shared expenses for joint household tracking",
      "Publish monthly reports comparing spend vs prior months",
      "Alert when category budgets near or exceed limits"
    ],
    suggestedPrompts: [
      "Show this month’s spend by category vs the 3-month average.",
      "Why was there a spike in dining expenses last weekend?",
      "Split yesterday’s grocery charge 60/40 between me and Alex."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 38
    }
  },
  {
    id: "fin-budget-planning",
    name: "Budget Planning Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds realistic zero-based budgets using income + spend history, then monitors execution with adaptive guidance.",
      "Handles personal, household, and side-business plans in one place."
    ],
    capabilities: [
      "Create zero-based monthly budgets that allocate every rupee",
      "Analyze 3–6 months of history to set achievable targets",
      "Split needs vs wants and show percentage allocations",
      "Adapt budgets dynamically when income fluctuates",
      "Send mid-month check-ins for each category",
      "Flag chronic overspend areas with allocation or behavior recommendations",
      "Maintain separate budget views (personal, household, business)"
    ],
    suggestedPrompts: [
      "Build a budget for April using my last 4 months of spending data.",
      "How much of my income is going to discretionary vs essential categories this month?",
      "Create a separate side-business budget with variable income assumptions."
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
    id: "fin-personal-finance-advisor",
    name: "Personal Finance Advisor Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts as an always-on coach that evaluates income, spend, savings, debt, and goals, then delivers tailored guidance to strengthen overall financial health.",
      "Explains concepts plainly and adapts plans to each life stage."
    ],
    capabilities: [
      "Assess full financial picture and produce health scores across key dimensions",
      "Surface the single highest-impact action each user can take now",
      "Explain financial concepts in simple language on demand",
      "Model scenarios (e.g., increasing savings, accelerating payoff timelines)",
      "Tailor advice to life stage and simultaneous priorities",
      "Spot blind spots such as thin emergency funds, coverage gaps, or concentration risk",
      "Issue monthly reviews with progress, red flags, and next three actions"
    ],
    suggestedPrompts: [
      "Review my current finances and give me a health score plus top priorities.",
      "If I add ₹5,000/month to savings, when can I hit my down payment goal?",
      "Explain term vs whole life insurance in plain language given my situation."
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
    id: "fin-investment-analysis",
    name: "Investment Analysis Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Researches stocks, funds, and other assets to deliver personalized, risk-aware recommendations in plain language.",
      "Monitors holdings and market news so users stay ahead of changes."
    ],
    capabilities: [
      "Build investor profiles using goals, horizon, and risk tolerance",
      "Analyze stocks with key fundamentals (P/E, growth, margins, debt, ROE)",
      "Compare mutual funds on returns, expense ratios, manager track, concentration, risk-adjusted metrics",
      "Screen funds per risk profile and timeline",
      "Detect over-concentration and recommend diversification",
      "Track market news impacting held positions and explain implications",
      "Produce on-demand research briefs for any asset"
    ],
    suggestedPrompts: [
      "Given my moderate risk profile, which equity funds should I evaluate?",
      "Explain how Tata Motors’ latest earnings might affect my holding.",
      "Analyze this mid-cap stock’s fundamentals and suitability for a 7-year horizon."
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
    id: "fin-tax-preparation",
    name: "Tax Preparation Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps income, expense, and investment records organized year-round so filing is effortless and deductions aren’t missed.",
      "Compares tax regimes, tracks limits, and sends deadline reminders."
    ],
    capabilities: [
      "Log tax-relevant transactions continuously across accounts",
      "Compare liability under old vs new regimes with clear savings deltas",
      "Surface every eligible deduction/exemption (80C, HRA, LTA, etc.)",
      "Alert when deduction buckets are underutilized before year-end",
      "Track capital gains and compute STCG vs LTCG tax",
      "Generate accountant-ready income/deduction/tax summaries",
      "Send reminders for advance tax, TDS, Form 16, and ITR deadlines"
    ],
    suggestedPrompts: [
      "Should I pick old or new regime this year given my current deductions?",
      "How much room is left under 80C and 80D before March 31?",
      "Export a summary for my CA with all income, deductions, and TDS paid."
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
    id: "fin-subscription-management",
    name: "Subscription Management Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Uncovers every recurring subscription, tracks renewals and usage, and keeps spend lean by flagging underused services.",
      "Creates proactive alerts before charges hit."
    ],
    capabilities: [
      "Detect recurring transactions across accounts to build a subscription inventory",
      "Show true monthly vs annual costs per service",
      "Flag subscriptions with no engagement for 30+ days",
      "Send 5–7 day renewal alerts to prevent unwanted charges",
      "Highlight price hikes with annualized impact",
      "Categorize spend by subscription type",
      "Estimate savings from cancelling underused services and rank recommendations"
    ],
    suggestedPrompts: [
      "List all active subscriptions with annualized costs.",
      "Which services haven’t been used in the last month and what would canceling save me?",
      "Alert me to any upcoming renewals next week."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 38
    }
  },
  {
    id: "fin-bill-reminder",
    name: "Bill Payment Reminder Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps a master schedule of every recurring bill and delivers layered reminders so nothing slips through and cash flow stays prepared.",
      "Flags anomalies and stores a full payment history for reference."
    ],
    capabilities: [
      "Maintain bill calendars for current and upcoming months",
      "Send reminders 5 days out, 1 day out, and day-of if unpaid",
      "Track paid vs outstanding bills in real time",
      "Forecast 7- and 14-day cash outflow needs",
      "Alert when bill amounts spike vs previous cycles",
      "Log payment history with amount/date/method",
      "Prioritize reminders by severity (EMIs vs low-stakes services)"
    ],
    suggestedPrompts: [
      "Show what bills are due in the next two weeks and total cash needed.",
      "Remind me if any EMI hasn’t been marked paid by the due date.",
      "Flag any utility bill that jumps more than 20% vs last month."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 38
    }
  },

  {
    id: "fin-loan-emi-calculator",
    name: "Loan & EMI Calculator Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Evaluates borrowing options, builds amortization schedules, and designs repayment strategies so users grasp the full cost of loans.",
      "Monitors floating rates and tracks every active loan in one dashboard."
    ],
    capabilities: [
      "Compute EMIs + amortization schedules for any amount/rate/tenure",
      "Compare loan offers on total cost, effective rate, and fees",
      "Model prepayment impact on tenure and interest savings",
      "Balance tenure vs EMI against cash flow constraints",
      "Track outstanding principal, interest paid, and next EMI per loan",
      "Alert users to floating-rate changes with recalculated EMIs",
      "Build debt payoff plans via avalanche or snowball methods"
    ],
    suggestedPrompts: [
      "Compare these two home loan offers and show total interest vs EMI.",
      "If I prepay ₹50k this month, when will my car loan finish and how much interest do I save?",
      "Create a debt snowball plan for my personal loans and credit cards."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "fin-credit-score-monitor",
    name: "Credit Score Monitoring Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Watches credit scores/reports around the clock, explains drivers, and gives step-by-step plans to reach excellent credit while guarding against fraud.",
      "Simulates the impact of future credit moves before you act."
    ],
    capabilities: [
      "Track scores from CIBIL, Experian, Equifax with 12-month trends",
      "Break down payment history, utilization, age, accounts, and inquiries",
      "Send instant alerts for score changes, new accounts, hard pulls, or negatives",
      "Flag suspicious entries and guide dispute workflows",
      "Calculate utilization per card and recommend optimal balances",
      "Deliver prioritized 3/6/12-month improvement plans",
      "Simulate score impact of upcoming decisions (new card, loan, etc.)"
    ],
    suggestedPrompts: [
      "Explain why my Experian score dropped 18 points this month.",
      "What utilization should I target on each card to stay under 30%?",
      "If I apply for a new credit card, how much might my score dip?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "fin-report-analysis",
    name: "Financial Report Analysis Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Turns dense financial statements into plain-language insights, highlighting growth, risk, and comparative strength.",
      "Calculates ratios, flags red flags, and summarizes management commentary."
    ],
    capabilities: [
      "Explain P&L, balance sheet, and cash flow line items in simple terms",
      "Compare multi-year performance to reveal revenue/margin/debt trends",
      "Auto-calc key ratios with industry benchmarks",
      "Spot red flags like rising receivables or cashflow/profit disconnects",
      "Clarify accounting profit vs cash generation",
      "Summarize MD&A sections (strategy, risks, outlook)",
      "Compare competing companies side by side"
    ],
    suggestedPrompts: [
      "Break down this company's FY23 annual report in plain language.",
      "Compare the last three years of margins, debt, and cash flow for Company A.",
      "Which metrics show Company X is financially stronger than Company Y?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 40
    }
  },
  {
    id: "fin-fraud-detection",
    name: "Fraud Detection Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors transactions and account events in real time to spot unauthorized activity, alert users instantly, and walk them through remediation.",
      "Learns normal behavior so anomalies stand out fast."
    ],
    capabilities: [
      "Build behavioral baselines (amounts, merchants, locations, timing)",
      "Alert on fraud patterns: test charges, rapid bursts, unusual geos",
      "Detect account takeover signals (new devices, payees, profile changes)",
      "Flag potential phishing attempts by cross-referencing known scams",
      "Monitor card-not-present activity for anomalies",
      "Guide users through freeze/dispute/report workflows",
      "Track dispute resolution progress until charges are reversed"
    ],
    suggestedPrompts: [
      "This transaction looks unfamiliar—does it match my normal behavior?",
      "I got a message asking me to update banking info; is this a known scam?",
      "Walk me through freezing my card and filing a dispute for this charge."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "fin-savings-optimization",
    name: "Savings Optimization Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Identifies every realistic lever to lift savings rates, from smarter budgeting to higher-yield parking spots for idle cash.",
      "Quantifies the impact of each change over time."
    ],
    capabilities: [
      "Compute savings rate vs recommended benchmarks",
      "Highlight overspending categories with redeployable amounts",
      "Recommend better-yielding parking options for idle cash",
      "Review recurring expenses for cheaper but equivalent alternatives",
      "Set automated savings rules (round-ups, salary-day transfers)",
      "Track cumulative savings impact from implemented changes",
      "Model long-term compounding from incremental savings boosts"
    ],
    suggestedPrompts: [
      "How does my current savings rate compare to what’s recommended for my age?",
      "Where can I cut ₹5,000/month without a huge lifestyle hit?",
      "If I save an extra ₹3,000 monthly, what does that grow to in 10/20/30 years?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 38
    }
  },
  {
    id: "fin-portfolio-management",
    name: "Portfolio Management Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Consolidates every investment, tracks performance vs goals, and recommends rebalancing moves to keep risk in check.",
      "Surfaces inflation-adjusted returns, passive income, and benchmark comparisons."
    ],
    capabilities: [
      "Build unified dashboards with invested capital, current value, absolute/percentage returns, and asset-class splits",
      "Calculate inflation-adjusted (real) returns",
      "Compare actual vs target allocation and suggest rebalancing trades",
      "Track dividends, interest, and maturities to quantify passive income",
      "Assess risk via volatility, correlations, concentration, and beta",
      "Benchmark holdings vs relevant indices and flag persistent laggards",
      "Produce quarterly reviews with performance, risk, allocation, and action items"
    ],
    suggestedPrompts: [
      "Show my consolidated portfolio with real returns and asset allocation drift.",
      "Which holdings have lagged their benchmarks for the past year?",
      "Draft the Q2 portfolio review with rebalancing recommendations."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "fin-goal-planning",
    name: "Financial Goal Planning Agent",
    category: "finance",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Turns long-term dreams into SMART financial goals with clear savings plans, priority rankings, and motivational milestones.",
      "Continuously recalculates contributions so users stay on schedule."
    ],
    capabilities: [
      "Guide SMART goal definition with target amount, deadline, and purpose",
      "Calculate monthly contributions factoring expected returns and inflation",
      "Balance multiple goals via priority-based allocation",
      "Model contribution/return scenarios to show timing trade-offs",
      "Track progress monthly and adjust required contributions",
      "Recommend suitable instruments per time horizon",
      "Celebrate milestones at 25/50/75/100% completion"
    ],
    suggestedPrompts: [
      "Help me plan for a ₹15L house down payment in 4 years.",
      "If I increase my monthly contribution by ₹5k, how much sooner can I reach my wedding fund goal?",
      "What’s the recommended allocation across my home, education, and retirement goals this month?"
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
    id: "dev-coding-assistant",
    name: "Coding Assistant Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Serves as an AI pair programmer that understands your stack and project patterns to write, debug, optimize, and explain code across languages.",
      "Translates between languages, suggests algorithms, and answers syntax questions instantly."
    ],
    capabilities: [
      "Generate production-ready code from natural language requirements",
      "Respect existing architecture, naming, and style conventions",
      "Explain complex or legacy code line by line",
      "Diagnose performance bottlenecks and propose optimized alternatives",
      "Translate code between languages or paradigms (REST⇄GraphQL, SQL⇄NoSQL)",
      "Recommend algorithms/data structures with complexity analysis",
      "Answer language-specific questions across Python, JS, Java, Go, Rust, etc."
    ],
    suggestedPrompts: [
      "Write a Python function that deduplicates a CSV and exports the cleaned file.",
      "Explain this legacy Java class so I can refactor it safely.",
      "Convert this Node.js REST endpoint into a GraphQL resolver.",
      "What algorithm should I use for nearest-neighbor search on this dataset?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 96,
      load: 55
    }
  },
  {
    id: "dev-code-review",
    name: "Code Review Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Performs automated pull-request reviews that enforce best practices, security rules, and team conventions with line-level feedback.",
      "Tracks quality trends so teams can coach intentionally."
    ],
    capabilities: [
      "Pre-screen PRs to catch obvious issues before human review",
      "Check SOLID, design patterns, and clean code compliance with explanations",
      "Flag security risks (SQL injection, secrets, validation, auth gaps)",
      "Apply team style guides consistently",
      "Leave inline comments on the exact lines needing changes",
      "Differentiate blocking vs non-blocking feedback",
      "Track quality trends by developer/module over time"
    ],
    suggestedPrompts: [
      "Review this PR for security and clean-code issues before I assign it.",
      "Explain which SOLID principles this class violates and why.",
      "Show code quality trends for the payments service over the last quarter."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 44
    }
  },
  {
    id: "dev-bug-detection",
    name: "Bug Detection Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Combines static and dynamic analysis to surface logic bugs, memory issues, and edge-case failures before code reaches production.",
      "Delivers root-cause reports with suggested fixes."
    ],
    capabilities: [
      "Run static analysis for null refs, off-by-one, unhandled exceptions, unreachable code, and type mismatches",
      "Parse logs/stack traces to pinpoint crashing lines and causal chains",
      "Detect logic flaws that compilers miss (no-op conditionals, dead branches, zero-iteration loops)",
      "Flag memory/resource leaks (DB connections, file handles, GC pressure)",
      "Stress-test edge cases (null, empty, extremes, type mismatches)",
      "Correlate intermittent failures across logs to find common triggers",
      "Produce bug reports with severity, root cause, locations, and fix suggestions"
    ],
    suggestedPrompts: [
      "Scan this module for null-pointer or off-by-one risks.",
      "Explain why this intermittent prod error occurs and where to patch it.",
      "List unhandled edge cases for this API and how to guard against them."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 43
    }
  },
  {
    id: "dev-api-integration",
    name: "API Integration Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Reads docs, builds client libraries, and troubleshoots connections so developers can integrate REST, GraphQL, and WebSocket APIs faster.",
      "Handles auth flows, testing, mocks, and live monitoring."
    ],
    capabilities: [
      "Generate integration code with correct auth, requests, and parsing",
      "Build typed client libraries from OpenAPI/Swagger specs",
      "Implement OAuth2/API key/JWT flows with refresh logic",
      "Test endpoints with sample requests and validate responses",
      "Detect breaking changes between API versions and flag affected code",
      "Spin up mock servers for development/testing",
      "Monitor live integrations for failures, latency spikes, or format changes"
    ],
    suggestedPrompts: [
      "Create a Node.js client for this OpenAPI spec with typed responses.",
      "Implement the OAuth2 PKCE flow for this third-party API.",
      "Mock this GraphQL API so the frontend can develop before the backend is ready.",
      "Alert me if the Stripe API starts returning unexpected errors."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 42
    }
  },
  {
    id: "dev-automation-script",
    name: "Automation Script Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Writes, tests, and documents automation scripts that eliminate repetitive technical work across ops, data, and deployment workflows.",
      "Handles everything from shell/Python/PowerShell to web scraping and alerting."
    ],
    capabilities: [
      "Generate shell/Python/PowerShell scripts from natural-language tasks",
      "Build ETL scripts with transforms, logging, and error handling",
      "Automate file management with monitoring, naming, routing, and alerts",
      "Create scheduled maintenance tasks (backups, cleanup, cert checks)",
      "Write web scraping jobs with pagination, dynamic content, and validation",
      "Build notification scripts for Slack/email/SMS when thresholds trigger",
      "Document each script with usage instructions and parameter notes"
    ],
    suggestedPrompts: [
      "Write a Bash script to zip logs older than 7 days and push to S3.",
      "Create a Python ETL pipeline that cleans CSV data before loading to Postgres.",
      "Set up a PowerShell task to renew SSL certificates and alert on failures.",
      "Generate a scraper that handles pagination and rate limiting for this site."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 43
    }
  },
  {
    id: "dev-devops-assistant",
    name: "DevOps Assistant Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Designs CI/CD pipelines, IaC templates, container configs, and runbooks while troubleshooting failures and optimizing build reliability.",
      "Helps teams ship faster with consistent DevOps practices."
    ],
    capabilities: [
      "Generate CI/CD configs for GitHub Actions, GitLab CI, Jenkins, etc.",
      "Write Terraform/CloudFormation/Pulumi modules with best practices",
      "Create Docker/Docker Compose setups with minimal images and health checks",
      "Produce Kubernetes manifests with services, ingress, HPA, and resource limits",
      "Debug pipeline failures by analyzing logs and environment settings",
      "Draft deployment runbooks with pre/post checks and rollback steps",
      "Monitor pipeline metrics and recommend optimizations"
    ],
    suggestedPrompts: [
      "Create a GitHub Actions workflow that builds, tests, scans, and deploys to staging.",
      "Write Terraform to provision an AWS ECS cluster with networking.",
      "Generate Kubernetes manifests for this microservice with autoscaling.",
      "Diagnose why this GitLab pipeline is failing during the test stage.",
      "Draft a release runbook including rollback steps for the web app."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 44
    }
  },
  {
    id: "dev-database-management",
    name: "Database Management Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Designs schemas, writes optimized queries, tunes performance, and manages migrations/backups across SQL and NoSQL databases.",
      "Keeps database health visible with monitoring queries and alerting."
    ],
    capabilities: [
      "Model normalized schemas with keys, indexes, and constraints",
      "Translate business questions into advanced SQL",
      "Analyze execution plans to fix slow queries",
      "Recommend indexing strategies and flag unused indexes",
      "Author migration scripts with validation + rollback logic",
      "Propose partitioning strategies for large tables",
      "Generate monitoring queries for size, fragmentation, locks, cache hits, and pool usage"
    ],
    suggestedPrompts: [
      "Design a schema for a multi-tenant subscription app with justification.",
      "Optimize this slow SQL query and explain the execution plan changes.",
      "Write migration scripts to move data from PostgreSQL to BigQuery.",
      "What indexes and partitions should we add to this 1B-row orders table?",
      "Generate monitoring queries for lock waits and cache hit ratios."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 43
    }
  },
  {
    id: "dev-software-testing",
    name: "Software Testing Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Generates comprehensive test suites, manages execution, and highlights coverage gaps so software is validated before production.",
      "Handles unit through end-to-end testing plus flaky test triage."
    ],
    capabilities: [
      "Write unit tests covering happy paths, edges, and error scenarios",
      "Author integration tests for APIs, databases, and external services",
      "Create E2E scripts with Selenium/Playwright/Cypress",
      "Analyze coverage reports and generate missing tests",
      "Produce realistic test data sets (valid/invalid/boundary/special)",
      "Detect flaky tests by analyzing historical runs and suggest fixes",
      "Summarize executions with pass/fail/skip counts and coverage trends"
    ],
    suggestedPrompts: [
      "Generate unit tests for this payment processor class covering edge cases.",
      "Write Cypress tests for the signup → checkout flow.",
      "Analyze our coverage report and tell me which modules need more tests.",
      "Identify flaky tests in the pipeline and explain probable causes." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 43
    }
  },
  {
    id: "dev-cybersecurity-monitoring",
    name: "Cybersecurity Monitoring Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Continuously scans code, dependencies, auth logs, and network activity to surface vulnerabilities and suspicious behavior with remediation guidance.",
      "Keeps teams aligned with security frameworks and best practices."
    ],
    capabilities: [
      "Scan codebases for OWASP Top 10 issues",
      "Monitor auth logs for brute force, unusual locations, and rapid logins",
      "Detect vulnerable dependencies via CVE databases",
      "Analyze network traffic for anomalies and malicious IPs",
      "Track access patterns to flag insider threats or compromised accounts",
      "Run automated web app penetration tests in a controlled environment",
      "Produce security posture reports with severity-ranked remediation"
    ],
    suggestedPrompts: [
      "Scan this repo for OWASP vulnerabilities and list blocking issues.",
      "Alert me if logins occur outside India after midnight.",
      "Which dependencies in this package.json have known CVEs?",
      "Analyze network logs for unusual outbound connections this week.",
      "Generate a SOC 2 readiness report with current gaps."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 42
    }
  },
  {
    id: "dev-system-monitoring",
    name: "System Monitoring Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors infra and app metrics in real time, correlating anomalies across layers to minimize downtime and surface root causes.",
      "Forecasts capacity and produces weekly health reports."
    ],
    capabilities: [
      "Track CPU, memory, disk I/O, network, and process health per server",
      "Establish dynamic baselines to reduce false alerts",
      "Correlate related alerts across app/db/infrastructure layers",
      "Detect capacity trends before they become incidents",
      "Monitor app-layer metrics (API latency, errors, queues, cache hit ratios)",
      "Send incident notifications with rich context and similar-incident history",
      "Generate weekly health reports with uptime, incident trends, and forecasts"
    ],
    suggestedPrompts: [
      "Alert me if API latency, DB queries, and disk I/O spike together.",
      "Which servers will run out of disk within 30 days at current growth?",
      "Send a weekly report with uptime, incidents, and capacity forecasts."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 42
    }
  },
  {
    id: "dev-data-analysis",
    name: "Data Analysis Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Connects to datasets, cleans them, runs statistical + predictive analysis, and presents insights with visuals—no manual coding required.",
      "Delivers stakeholder-ready reports with recommendations."
    ],
    capabilities: [
      "Profile raw datasets for structure, data types, missing values, and quality issues",
      "Answer analytical questions in plain language with supporting figures",
      "Perform EDA to find correlations, outliers, seasonal patterns, and anomalies",
      "Build predictive models for churn, fraud, demand, etc.",
      "Clean/transform data with documented steps",
      "Generate publication-quality visualizations and dashboards",
      "Produce end-to-end analysis reports with methodology and business recommendations"
    ],
    suggestedPrompts: [
      "Analyze this CSV and tell me which category had the highest return rate.",
      "Detect anomalies in weekly sales and visualize them.",
      "Build a churn risk model from this customer dataset and explain top drivers.",
      "Prepare a presentation-ready report summarizing findings and recommendations." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 42
    }
  },
  {
    id: "dev-ml-assistant",
    name: "AI Model Assistant Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Guides the entire ML lifecycle—from data prep and model selection to tuning, deployment, and monitoring—with clear explanations and governance artifacts.",
      "Helps teams build reliable, responsible AI systems faster."
    ],
    capabilities: [
      "Recommend architectures (classification, regression, NLP, CV, time series) based on problem context",
      "Design preprocessing pipelines (normalization, encoding, balancing, feature engineering, splits)",
      "Interpret evaluation metrics in business terms (precision/recall/F1/confusion matrices)",
      "Run structured hyperparameter tuning experiments",
      "Diagnose performance issues (data scarcity, overfit/underfit, leakage, drift)",
      "Build monitoring pipelines for data/prediction drift and trigger retraining",
      "Generate model cards covering use cases, data, metrics, fairness, and limitations"
    ],
    suggestedPrompts: [
      "What model family should we use for this churn dataset and why?",
      "Create a preprocessing pipeline for mixed numeric/categorical data with imbalance.",
      "Explain our F1 score and confusion matrix in plain language for stakeholders.",
      "Run hyperparameter tuning for this XGBoost model and summarize the best params.",
      "Set up monitoring to detect feature drift post-deployment and alert us.",
      "Draft a model card documenting this recommendation system." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 43
    }
  },
  {
    id: "dev-documentation-generator",
    name: "Documentation Generator Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps technical docs in sync with the codebase by auto-generating docstrings, API references, onboarding guides, ADRs, changelogs, and user-facing manuals.",
      "Identifies gaps so teams know what to document next."
    ],
    capabilities: [
      "Write docstrings for functions/classes/modules with parameters, returns, and exceptions",
      "Produce API reference docs from definitions (endpoints, schemas, examples)",
      "Generate developer onboarding guides and architecture overviews",
      "Create architecture decision records with rationale and trade-offs",
      "Detect undocumented code paths and prioritize by usage",
      "Maintain changelogs/release notes from commits and PRs",
      "Translate internal docs into external SDK/integration guides and FAQs"
    ],
    suggestedPrompts: [
      "Document this Python package with docstrings and a README overview.",
      "Generate API reference docs from this OpenAPI spec with examples.",
      "Create onboarding instructions for new backend engineers joining the project.",
      "List undocumented endpoints and rank by call frequency.",
      "Produce release notes for version 2.1 based on these merged PRs." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 41
    }
  },
  {
    id: "dev-version-control",
    name: "Version Control Assistant Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Optimizes Git workflows by writing consistent commits, guiding branch strategy, resolving conflicts, and keeping repos healthy.",
      "Handles search, release management, and standards enforcement."
    ],
    capabilities: [
      "Generate descriptive commit messages following team conventions",
      "Review branch strategies to flag long-lived or stale branches",
      "Analyze merge conflicts with explanations and suggested resolutions",
      "Enforce branch naming, PR descriptions, and reviewer requirements",
      "Search history for when/why a change was made",
      "Audit repo health for dead branches, large binaries, secrets, and gitignore issues",
      "Support releases: tagging, changelog generation, commit inclusion, and rollback plans"
    ],
    suggestedPrompts: [
      "Write a conventional commit message for this diff.",
      "Which branches are more than 30 days old and behind main?",
      "Help resolve this merge conflict and explain the correct outcome.",
      "Search history for when we introduced the new pricing logic.",
      "Generate a changelog and release tag for v1.4 with rollback instructions." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 41
    }
  },
  {
    id: "dev-cloud-management",
    name: "Cloud Management Agent",
    category: "dev",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Oversees multi-cloud infra—costs, utilization, security, automation, and DR—to keep environments efficient and compliant.",
      "Delivers unified dashboards plus monthly governance reports."
    ],
    capabilities: [
      "Provide multi-cloud dashboards for resources, costs, utilization, and health",
      "Analyze spend to highlight idle/oversized resources, RI/Savings plan options, and storage policies",
      "Auto-scale resources based on demand patterns",
      "Enforce security policies (public buckets, permissive SGs, encryption, IAM least privilege)",
      "Automate routine ops: snapshots, log archiving, cert rotation, AMI cleanup, tagging",
      "Manage DR readiness with backup verification and RTO/RPO monitoring",
      "Produce monthly governance reports with cost, security, utilization, and sustainability metrics"
    ],
    suggestedPrompts: [
      "Show a consolidated view of AWS/Azure/GCP costs and top optimization targets.",
      "Alert me if any storage bucket becomes public or unencrypted.",
      "Automate nightly snapshots with 30-day retention for all production volumes.",
      "Are our cross-region replicas meeting RPO targets?",
      "Generate this month’s cloud governance report by team." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.2,
    metrics: {
      successRate: 95,
      load: 42
    }
  },
  {
    id: "travel-trip-planning",
    name: "Trip Planning Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds end-to-end travel itineraries tailored to travelers’ preferences, budgets, and schedules.",
      "Adapts on the fly when plans change so the trip stays smooth."
    ],
    capabilities: [
      "Generate day-by-day plans grouped by proximity to minimize transit",
      "Offer traveler-type variants (family, backpacker, honeymoon, adventure)",
      "Balance iconic landmarks with local experiences",
      "Account for opening hours, peak times, and booking lead times",
      "Provide budget, mid-range, and premium itinerary options",
      "Replan in real time when flights/attractions change",
      "Output printable and mobile-friendly itineraries with maps, contacts, and costs"
    ],
    suggestedPrompts: [
      "Plan a 7-day Kyoto trip for a foodie couple with mid-range budget.",
      "Build budget/mid/premium versions of a Dubai itinerary for 4 friends.",
      "My flight to Paris is delayed—rework Day 1 and shift museum bookings.",
      "Create a printable itinerary plus mobile view with maps and booking links." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "travel-flight-search",
    name: "Flight Search Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Finds and monitors optimal flights across airlines/aggregators based on cost, duration, layovers, and user preferences.",
      "Tracks price trends and alerts when better options appear."
    ],
    capabilities: [
      "Search direct + connecting flights ranked by cost, duration, stops, or ratings",
      "Show flexible-date price calendars",
      "Compare true total costs including baggage, seats, and meals",
      "Track saved routes for price drops or imminent increases",
      "Plan multi-city/open-jaw itineraries and compare separate vs package bookings",
      "Assess layover quality and flag unsafe or opportunity layovers",
      "Monitor booked flights for schedule changes or better fares"
    ],
    suggestedPrompts: [
      "Find the cheapest vs fastest options from Mumbai to Tokyo in July.",
      "Show a price calendar for NYC ↔ Paris flights within ±3 days of Sept 10.",
      "Alert me when the SFO→BKK fare drops below ₹55k.",
      "Plan an open-jaw trip arriving in Rome and departing from Barcelona.",
      "My booked flight just changed—can I rebook for a better fare?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "travel-hotel-recommendation",
    name: "Hotel Recommendation Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Finds accommodations that truly fit the trip—location, policies, amenities, and sentiment—not just headline star ratings.",
      "Tracks price trends and multi-city plans so travelers book with confidence."
    ],
    capabilities: [
      "Filter stays by proximity, cancellation policies, amenities, family/pet needs",
      "Analyze review sentiment for noise, cleanliness, staff, Wi-Fi, etc.",
      "Recommend optimal neighborhoods based on planned itinerary",
      "Compare true value by factoring meals, transfers, and cancellation policies",
      "Track prices for saved properties and alert on drops/spikes",
      "Suggest similar alternatives when first-choice options aren’t ideal",
      "Plan lodging across multi-city trips with recommended night allocations"
    ],
    suggestedPrompts: [
      "Find family-friendly hotels near Rome’s historic center with breakfast and free cancellation.",
      "Analyze reviews for this Bali resort—what do guests really say about cleanliness and Wi-Fi?",
      "Alert me if the Kyoto boutique stay drops below ₹12k/night.",
      "I need comparable alternatives to XYZ Hotel because it’s sold out—what’s nearby?",
      "Plan lodging for a Paris–Lyon–Nice itinerary with suggested nights per city." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 40
    }
  },
  {
    id: "travel-local-guide",
    name: "Local Attraction Guide Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Curates personalized attraction plans that blend must-sees with local gems, plus practical visit logistics tailored to the traveler’s interests.",
      "Steers travelers away from tourist traps and highlights seasonal specials."
    ],
    capabilities: [
      "Recommend attractions based on traveler personas (history, food, adventure, etc.)",
      "Provide visit logistics: address, hours, entry fees, crowd timing, transit, bookings",
      "Highlight hidden gems and local-only experiences",
      "Sequence visits efficiently by proximity/time requirements",
      "Flag tourist traps with honest expectations",
      "Suggest seasonal highlights tied to festivals or natural events",
      "Build themed lists (street art, UNESCO sites, rooftop bars, temples, etc.)"
    ],
    suggestedPrompts: [
      "Plan a photography-focused day in Lisbon with sunrise/sunset spots.",
      "What hidden food markets should I visit in Bangkok next month?",
      "Warn me about overrated attractions in Bali and what to expect.",
      "Create a UNESCO heritage road trip within 2 hours of Rome.",
      "List rooftop bars in Singapore with the best skyline views this season." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 40
    }
  },
  {
    id: "travel-budget-planner",
    name: "Travel Budget Planner Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Plans detailed trip budgets, tracks live spending, and guides adjustments so travelers stay on target without sacrificing experiences.",
      "Handles multi-currency trips and group expense splits."
    ],
    capabilities: [
      "Estimate costs per category (flights, lodging, transport, meals, activities, shopping, contingency)",
      "Benchmark destination costs for meals, taxis, transit, and attractions",
      "Track actual spend vs daily targets in real time",
      "Alert when categories trend over budget with actionable adjustments",
      "Support multi-currency trips with unified home-currency views",
      "Split group expenses and provide settlement summaries",
      "Produce post-trip variance reports with lessons learned"
    ],
    suggestedPrompts: [
      "Create a detailed budget for a 10-day Italy trip with mid-range spending.",
      "Show today’s spend vs daily allowance and which categories are over.",
      "What’s the average cost of meals and taxis in Tokyo so I know if I’m overpaying?",
      "Split group expenses for our Bali trip and show who owes whom.",
      "Summarize where my budget vs actual deviated after the trip." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-weather-advisor",
    name: "Weather Travel Advisor Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Combines forecasts and climate history to advise when to schedule activities, what to pack, and how to adapt plans when weather shifts.",
      "Provides microclimate insights and severe-weather alerts for travelers."
    ],
    capabilities: [
      "Provide 14-day forecasts per destination with morning/afternoon/evening breakdowns",
      "Explain historical climate context vs current forecast",
      "Sequence daily activities based on expected conditions",
      "Alert for severe weather (storms, monsoons, heat/cold snaps)",
      "Advise on microclimates within a region",
      "Translate weather outlook into packing guidance",
      "Monitor ongoing weather vs itinerary and notify when adjustments are needed"
    ],
    suggestedPrompts: [
      "Give me a 2-week forecast for Cape Town with best times for outdoor hikes.",
      "Is this rain pattern in Bali normal for June or unusual?",
      "Which days should I avoid snorkeling in Maui based on wind and surf forecasts?",
      "Warn me if a tropical storm threatens Phuket during my travel window.",
      "What should I pack for a Tokyo trip with temperatures from 5–15°C?" 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-visa-document",
    name: "Visa & Travel Document Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Delivers up-to-date visa, passport, and entry requirement guidance for any nationality/destination combo and tracks applications end-to-end.",
      "Ensures multi-country trips have a realistic visa timeline."
    ],
    capabilities: [
      "Determine visa requirements (visa-free, VOA, e-visa, embassy) with stay durations",
      "Generate document checklists with detailed specs",
      "Validate passport expiry vs destination rules and recommend renewals",
      "Guide e-visa applications step by step including payments and processing times",
      "Track application status and notify when action is needed",
      "Flag entry requirements beyond visas (insurance, onward travel, vaccinations, customs forms)",
      "Plan visa sequencing for complex itineraries"
    ],
    suggestedPrompts: [
      "What visa do Indian passport holders need for Argentina and how long can we stay?",
      "Create a document checklist for a Schengen business visa with specs.",
      "My passport expires in eight months—can I visit Japan and Australia this fall?",
      "Walk me through the Kenya e-visa process and expected timelines.",
      "Plan a visa strategy for a UK→EU→USA trip and tell me when to apply for each." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 38
    }
  },
  {
    id: "travel-transport-guide",
    name: "Transportation Guide Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Explains every transport option—from airport transfers to daily transit and intercity moves—so travelers pick the safest, most efficient choice for each leg.",
      "Builds day-by-day transport plans with costs, timing, and scams to avoid."
    ],
    capabilities: [
      "Detail airport transfer options with costs and travel times",
      "Explain local public transit systems (metro, bus, cards, maps)",
      "Compare intercity transport modes on cost, time, comfort, scenery, booking",
      "List locally dominant transport apps and their safety/cost profiles",
      "Advise on vehicle rentals (requirements, driving culture, reputable companies)",
      "Warn about destination-specific transport scams and avoidance tactics",
      "Build itinerary transport plans specifying mode, boarding points, fares, and precautions"
    ],
    suggestedPrompts: [
      "What’s the best way to get from Narita Airport to Shibuya at midnight?",
      "Explain how to use the Lisbon tram + metro system with passes.",
      "Compare train vs flight vs bus for Barcelona → Madrid next month.",
      "Which ride-hailing apps work in Cairo and how safe are they?",
      "Plan daily transport for my London itinerary with Oyster card usage.",
      "Warn me about common taxi scams in Bangkok and how to avoid them." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-restaurant-recommendation",
    name: "Restaurant Recommendation Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Curates dining experiences across price tiers and dietary needs, highlighting authentic local dishes, reservation tips, and food adventures beyond restaurants.",
      "Helps travelers avoid tourist traps and build balanced dining plans."
    ],
    capabilities: [
      "Recommend street food, mid-range, and fine-dining options per destination",
      "Highlight must-try local dishes and where to eat them authentically",
      "Handle dietary requirements (vegetarian, vegan, halal, kosher, allergen-safe)",
      "Flag restaurants requiring advance reservations with booking guidance",
      "Curate food experiences (cooking classes, market tours, home dining)",
      "Warn about tourist-trap dining zones and suggest better nearby alternatives",
      "Build trip-long dining plans that showcase diverse cuisines without repeats"
    ],
    suggestedPrompts: [
      "Find vegetarian-friendly restaurants in Barcelona across budget/mid/premium tiers.",
      "Where can I eat the best authentic pho in Hanoi that locals recommend?",
      "Book-worthy restaurants in Tokyo that need reservations weeks ahead?",
      "Suggest cooking classes and market tours in Oaxaca focused on mole dishes.",
      "Plan a 5-day dining itinerary in Singapore balancing street food and rooftop spots." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-language-translation",
    name: "Language Translation Travel Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Helps travelers communicate anywhere with real-time translation, pronunciation coaching, cultural norms, and emergency language support.",
      "Understands dialects and warns about false friends so interactions stay respectful."
    ],
    capabilities: [
      "Translate text/speech bidirectionally with dialect awareness",
      "Provide phonetic and audio guides for key phrases",
      "Build destination-specific phrasebooks (food, directions, emergencies, bargaining)",
      "Translate menus/signs/labels via camera input",
      "Warn about false friends or gestures that change meaning",
      "Assist with medical/emergency communication templates",
      "Teach cultural communication etiquette (formality, tone, gratitude expressions)"
    ],
    suggestedPrompts: [
      "Give me essential phrases for Morocco with phonetic pronunciations.",
      "Translate this restaurant menu photo from Japanese to English.",
      "How do I explain my nut allergy and asthma to a pharmacist in Spanish?",
      "What hand gestures should I avoid in Greece and what’s the polite way to say no?",
      "Provide a quick translator for a conversation with a taxi driver in Hanoi." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-safety-advisor",
    name: "Travel Safety Advisor Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Monitors advisories, health alerts, crime data, and natural risks to deliver practical safety guidance before and during trips.",
      "Tailors recommendations to neighborhoods, activities, and traveler profile."
    ],
    capabilities: [
      "Provide pre-departure safety briefings with advisory levels and risk context",
      "Issue real-time alerts for unrest, disasters, outbreaks, or extreme weather",
      "Recommend safe neighborhoods and highlight areas to avoid",
      "Advise on activity-specific safety checks and available medical support",
      "Outline health precautions (vaccines, malaria, food/water safety, first aid kit)",
      "Educate on destination-specific scams and how to avoid them",
      "Compile emergency contacts (local emergency numbers, embassies, hospitals, insurance helplines)"
    ],
    suggestedPrompts: [
      "Give me a safety briefing for Rio next month—what are the key concerns?",
      "Alert me if protests or storms occur in Bangkok during my stay.",
      "Which neighborhoods in Cape Town are safest for tourists and which to avoid?",
      "What health precautions should I take for trekking in Peru’s Sacred Valley?",
      "List common Rome taxi scams and how to avoid them.",
      "Provide all emergency contacts I need for Bali including hospital and embassy info." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-packing-checklist",
    name: "Packing Checklist Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds tailored packing lists that match destinations, climates, activities, and airline rules so travelers bring exactly what they need.",
      "Handles multi-destination trips, document prep, and last-minute reminders."
    ],
    capabilities: [
      "Generate categorized packing lists (clothing, toiletries, docs, electronics, meds, gear)",
      "Calculate clothing quantities based on trip length, laundry access, and activities",
      "Adapt lists for multi-climate itineraries",
      "Include critical document checklists and duplicate storage guidance",
      "Tailor recommendations for business, beach, trekking, ski, cultural trips, etc.",
      "Check against airline baggage rules (prohibited items, liquids, estimated weight, carry-on vs checked)",
      "Send 48-hour reminders with tick-off lists and last-minute items"
    ],
    suggestedPrompts: [
      "Create a packing list for a 10-day Japan trip with city + mountain segments.",
      "How many outfits should I pack for a week in Bali if I’ll have laundry mid-trip?",
      "What documents do I need printed for a Schengen + UK combo trip?",
      "Check this list against Emirates baggage rules—anything I should move to checked?",
      "Send me a final reminder 48 hours before departure with last-minute essentials." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-deal-finder",
    name: "Travel Deal Finder Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Scours flights, hotels, packages, and loyalty promos to surface genuine deals and alert travelers when prices dip below their targets.",
      "Understands historical pricing to separate real savings from fake sales."
    ],
    capabilities: [
      "Monitor saved flight routes daily and alert on drops below target or historical averages",
      "Detect error fares and true flash sales",
      "Compare package prices vs DIY bookings",
      "Track hotel price swings for saved properties",
      "Surface last-minute deals on unsold inventory",
      "Recommend booking windows based on seasonal price patterns",
      "Aggregate loyalty program promos (bonus miles, status challenges, free nights)"
    ],
    suggestedPrompts: [
      "Alert me if Mumbai→New York fares drop under ₹55k anytime this year.",
      "Is this Bali package cheaper than booking flights + hotel separately?",
      "Find last-minute hotel + flight deals for Phuket next weekend.",
      "When is the best window to book Tokyo flights for cherry blossom season?",
      "Notify me of any Qatar Airways status challenges or Hilton bonus points promos." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-cultural-etiquette",
    name: "Cultural Etiquette Guide Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Helps travelers engage respectfully by teaching local customs, religious protocols, negotiation norms, and behavioral expectations for any destination.",
      "Covers gender norms, gift giving, and behaviors to avoid."
    ],
    capabilities: [
      "Deliver destination-specific dos/don’ts (dress, greetings, photography, taboo behaviors)",
      "Explain dining etiquette, tipping expectations, and home invitations",
      "Guide religious site protocols (head coverings, restricted areas, prayer etiquette)",
      "Teach negotiation culture and respectful bargaining practices",
      "Provide gender-specific norms and interaction expectations",
      "Advise on gift-giving customs and presentation rituals",
      "Flag common traveler behaviors that may offend locally"
    ],
    suggestedPrompts: [
      "What etiquette rules should I know before visiting temples in Thailand?",
      "Is tipping expected in Japan and how should I handle restaurant bills?",
      "How should I negotiate at Marrakech souks without offending vendors?",
      "What dress code and greetings apply when meeting business partners in Dubai?",
      "Which gifts are appropriate when invited to a local home in Seoul?",
      "What public behaviors should I avoid in Rome to stay respectful?" 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "travel-real-time-updates",
    name: "Real-Time Travel Update Agent",
    category: "travel",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps tabs on every booking and destination condition, alerting travelers instantly with actionable guidance whenever plans change.",
      "Delivers daily briefings so surprises don’t derail the itinerary."
    ],
    capabilities: [
      "Monitor flights for delays, gate changes, cancellations, and schedule shifts",
      "Detect missed-connection risks and recommend rebooking options early",
      "Remind travelers when check-in opens with links and seat tips",
      "Track accommodation issues (outages, construction) and suggest alternatives",
      "Watch destination transit networks for disruptions and strikes",
      "Flag local events impacting movement (festivals, protests, holidays)",
      "Send morning briefings with activities, transport, weather, and alerts"
    ],
    suggestedPrompts: [
      "Notify me if any flight on my Europe trip changes gates or is delayed.",
      "What’s the connection risk for my Doha layover if my Mumbai flight is 45 minutes late?",
      "Ping me when online check-in opens for Emirates EK501 with seat advice.",
      "Let me know if my Rome hotel reports outages or major construction.",
      "Send daily briefings at 7am local time covering weather, transport, and alerts." 
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.25,
    metrics: {
      successRate: 94,
      load: 40
    }
  },
  {
    id: "shop-product-recommendation",
    name: "Product Recommendation Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds a living household profile from purchases, preferences, and routines so recommendations are always contextual.",
      "Times suggestions around life events, seasons, and budget priorities to feel proactive instead of pushy."
    ],
    capabilities: [
      "Capture family size, ages, dietary rules, health needs, pets, and lifestyle habits to tailor every suggestion.",
      "Detect life events (moves, newborns, seasonal shifts) and surface curated essentials right when they're needed.",
      "Recommend complementary items intelligently after purchases (accessories, refills, care kits).",
      "Ask for feedback on declined items and update the preference model automatically.",
      "Filter catalogs by user values such as eco-friendly, cruelty-free, local sourcing, or organic standards.",
      "Track recurring purchases and alert when better-rated, upgraded, or more cost-effective options appear.",
      "Segment recommendations by urgency—need now, plan soon, explore later—with budget cues."
    ],
    suggestedPrompts: [
      "Review my household profile and tell me what we should restock this month.",
      "I just bought a new espresso machine—what accessories or care kits should I grab?",
      "Winter's coming and we have a toddler—plan the priority shopping list with eco-friendly picks."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 95,
      load: 38
    }
  },
  {
    id: "shop-price-comparison",
    name: "Price Comparison Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Audits live prices, fees, rewards, and retailer reliability to surface the true cheapest way to buy any product.",
      "Tracks price history and unit economics so you know when to buy now, wait for a sale, or switch formats."
    ],
    capabilities: [
      "Calculate net cost per retailer by combining base price, delivery/membership fees, cashback, coupons, and loyalty points.",
      "Graph price history to show if today's price is exceptional or if waiting typically saves more.",
      "Compare pack sizes and formats to output cost per gram/litre/item, spotting better bulk value.",
      "Detect private-label equivalents produced by the same manufacturer as premium brands for parity savings.,
      "Send real-time alerts when a watched item truly drops in price (filtering out fake discount theatre).",
      "Model subscription vs one-off purchases and show the break-even cadence where subscriptions win.",
      "Score each retailer on delivery speed, authenticity, and returns so the lowest price still meets reliability needs."
    ],
    suggestedPrompts: [
      "Track this air purifier across Amazon, Flipkart, Croma, and Reliance Digital—who has the best delivered cost right now?",
      "Is today's price on the 5kg dog food bag actually good vs the last six months of sales?",
      "Should I subscribe to detergent refills or keep buying single packs? Show the break-even point."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "shop-deal-discount",
    name: "Deal & Discount Finder Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Continuously scrapes coupons, cashbacks, loyalty perks, newsletters, and flash sales tied to what the household actually needs.",
      "Times major purchases so you capture every available offer—stacking codes, payment promos, and membership perks when allowed."
    ],
    capabilities: [
      "Auto-test and apply valid coupon stacks against the active cart while respecting retailer terms.",
      "Monitor cashback portals for each planned purchase and route through whichever is offering the best rate right now.",
      "Track loyalty/credit card points balances and expiries, nudging you before any points lapse with suggested redemptions.",
      "Map predictable discount cycles (festive sales, year-end clearances) for big-ticket items and advise when to buy or wait.",
      "Aggregate bank, credit-card, and BNPL promotions so every payment method rebate is captured.",
      "Flag bulk-buy windows where temporary discounts make stocking up on staples genuinely cheaper over the next few months.",
      "Model whether paid memberships (Prime, loyalty clubs) are worth the fee based on your historical purchase volume and actual savings."
    ],
    suggestedPrompts: [
      "I'm about to buy a washing machine—when's the next major discount wave and which offers can stack?",
      "Which cashback portal + bank/card combo gives the best net price for this Nykaa cart today?",
      "My loyalty points across airlines and grocery chains are expiring soon—show me the smartest way to redeem them."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 44
    }
  },
  {
    id: "shop-smart-shopping",
    name: "Smart Shopping Assistant Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Acts like a personal shopper that interviews you, researches specs/reviews, and shortlists the best-fit products for any purchase.",
      "Explains technical tradeoffs and true cost of ownership in plain language so decisions feel informed and confident."
    ],
    capabilities: [
      "Guide users through structured discovery (budget, must-haves, nice-to-haves, deal breakers) and return a top-3 shortlist.",
      "Translate technical specs—processors, thread counts, energy ratings, safety standards—into outcomes that matter to the user.",
      "Flag upsells where premium features add cost without fitting the stated use case.",
      "Surface reliability warnings (recalls, durability complaints, service issues) before a purchase is locked in.",
      "Compare total cost of ownership by factoring maintenance, consumables, and energy usage, not just sticker price.",
      "Score each recommendation by confidence (review depth, sentiment consistency, expert tests, brand track record).",
      "Handle multiple categories within one conversation so the user can jump from appliances to toys to pantry staples."
    ],
    suggestedPrompts: [
      "Help me pick a laptop under ₹80k for photo editing—what three models actually fit my needs?",
      "I need a child-safe air fryer: explain the specs and any reliability issues I should know about.",
      "Compare two washing machines over five years of energy + consumable costs and tell me which is smarter."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 95,
      load: 45
    }
  },
  {
    id: "shop-grocery-management",
    name: "Grocery List Management Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds live grocery lists from meal plans, pantry inventory, and household consumption patterns.",
      "Organizes shopping by store, aisle, or delivery slot so every grocery run (or order) is efficient and accurate."
    ],
    capabilities: [
      "Generate weekly lists from meal plans, calculating exact ingredient quantities and subtracting what's already in-stock.",
      "Arrange lists by supermarket aisle/product category to eliminate backtracking during store runs.",
      "Maintain separate lists per store (supermarket, specialty market, wholesale club) with layouts tailored to each.",
      "Learn consumption cadence for staples and auto-add replenishment items before the household runs out.",
      "Ingest recipes, scale servings, and add only the missing ingredients in correct quantities.",
      "Track price changes on recurring staples and flag spikes with suggested substitutes or alternate retailers.",
      "Support shared, real-time list updates so multiple shoppers can add/complete items without duplication."
    ],
    suggestedPrompts: [
      "Build this week's grocery list from our 7-day meal plan and tell me what we already have.",
      "Show me the Costco vs farmers market lists separately and order them by aisle so the trip is faster.",
      "We're making biryani for 8 people—add the missing ingredients and flag anything that's gone up in price."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 47
    }
  },
  {
    id: "shop-household-inventory",
    name: "Household Inventory Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps a live inventory of pantry items, cleaning supplies, toiletries, meds, and household essentials with smart alerts.",
      "Learns consumption + expiry patterns so nothing runs out or goes bad before the household can use it."
    ],
    capabilities: [
      "Monitor stock levels item-by-item and trigger alerts below minimum thresholds with one-tap re-order links.",
      "Model consumption cadence for each item to time reorders before supplies actually run out.",
      "Track expiry dates for perishables/medications and suggest recipes or use-cases to consume them in time.",
      "Maintain a full medicine cabinet log (dosages, expiry, remaining quantity) with low/expired alerts.",
      "Produce on-demand household audits showing stock, last purchase date, average burn rate, and days to reorder.",
      "Analyze supply spend by category month-over-month to highlight rising costs or savings.",
      "Flag bulk-buy opportunities when a monitored item is discounted and matches the household's consumption velocity."
    ],
    suggestedPrompts: [
      "Show me what's about to run out this week and drop the quick order links in priority order.",
      "Give me an audit of pantry + cleaning supplies with days of stock left and last purchase dates.",
      "Which meds expire next month and are any of them already below the minimum quantity?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 46
    }
  },
  {
    id: "shop-order-tracking",
    name: "Order Tracking Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Consolidates every online order across retailers/carriers into one live dashboard with milestone alerts.",
      "Handles delays, missed deliveries, returns, and refunds automatically so users never chase status emails."
    ],
    capabilities: [
      "Parse confirmation emails automatically to create tracking entries without manual number entry.",
      "Show a unified timeline of all active deliveries with current status, ETA, carrier, and retailer metadata.",
      "Send meaningful milestone notifications (dispatched, out for delivery, delivered, failed attempt) right when they matter.",
      "Detect delays by comparing promised vs actual progress and surface revised estimates instantly.",
      "Generate pre-filled retailer/carrier complaints for missing or damaged items with tracking history attached.",
      "Track return shipments + refunds alongside incoming orders and alert when timelines exceed policy.",
      "Maintain historical performance analytics by retailer/carrier so users pick vendors who deliver reliably."
    ],
    suggestedPrompts: [
      "Summarize every package arriving this week and flag anything running late.",
      "File a missing-delivery claim for my Flipkart order with all details pre-filled.",
      "Where's my return to Myntra stuck, and has the refund window already been exceeded?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 43
    }
  },
  {
    id: "shop-home-budget",
    name: "Home Budget Shopping Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Bridges household shopping with the family budget by tracking planned vs actual spend per category in real time.",
      "Helps prioritize purchases, model tradeoffs, and pick the most cost-effective strategy for every shopping basket."
    ],
    capabilities: [
      "Set monthly allocations for groceries, supplies, clothing, electronics, and home goods, then monitor burn-down live.",
      "Rank shopping lists by necessity when funds are tight and suggest which items to buy now vs defer.",
      "Optimize grocery spend by recommending the best store mix + timing for the current basket.",
      "Track impulse/non-essential purchases and summarize planned vs unplanned spend each month.",
      "Model large upcoming buys (appliances, furniture) and show whether to buy now, wait for a sale, or finance over time.",
      "Compare home-cooking vs meal kits vs prepared delivery costs for the household's weekly eating pattern.",
      "Issue weekly budget digests with category spend, remaining funds, and on-track/overrun projections."
    ],
    suggestedPrompts: [
      "We only have ₹15k left for household shopping—what should we prioritize and what can slip to next month?",
      "Is it cheaper for our family of four to stick with meal kits or go back to home cooking this month?",
      "Show this week's spend vs budget across groceries, supplies, and discretionary shopping with forecasts."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 42
    }
  },
  {
    id: "shop-product-review-analysis",
    name: "Product Review Analysis Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Ingests reviews from every major platform, filters out noise/fakes, and translates the signal into actionable buyer guidance.",
      "Highlights praise, pain points, and authenticity-adjusted scores so households buy with confidence."
    ],
    capabilities: [
      "Aggregate Amazon, Flipkart, Google Shopping, brand sites, and independent reviews into one corpus.",
      "Mine praise vs pain themes from actual review text (not just star ratings) to show what buyers love or regret.",
      "Detect fake/incentivized reviews via language patterns, reviewer history, and rating anomalies; output authenticity-adjusted scores.",
      "Segment feedback by purchase date to surface quality drift or version-to-version changes.",
      "Filter the corpus by user priorities (durability, battery life, fabric feel, etc.) so relevant reviews show first.",
      "Quantify recurring faults/failure modes by estimating what percent of buyers reported each issue.",
      "Compare competing products side-by-side with attribute-level sentiment so users pick the most reliable option."
    ],
    suggestedPrompts: [
      "Compare the LG vs Samsung 7kg front-load washers using only authentic reviews focused on longevity.",
      "Has the latest Kindle Paperwhite quality dipped compared to last year's model?",
      "Summarize the top praise and top complaints for this air purifier and give me an authenticity-adjusted score."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 40
    }
  },
  {
    id: "shop-subscription-reorder",
    name: "Subscription & Reorder Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Oversees every household subscription and auto-reorder so quantities, cadence, and spend stay optimized.",
      "Balances never running out with never over-buying by tying schedules to consumption + inventory signals."
    ],
    capabilities: [
      "Audit all active subscriptions across retailers with spend, frequency, and next delivery snapshots.",
      "Tune quantity/frequency based on actual burn rate so items neither run out early nor pile up.",
      "Flag subscriptions that aren't truly cheaper than promo-cycle buying and recommend smarter alternatives.",
      "Auto-pause when inventory is healthy and resume when stock falls to reorder thresholds.",
      "Stagger deliveries across the month to smooth door-drop clusters and align with cash-flow preferences.",
      "Monitor subscription price changes and alert when retailers quietly raise rates.",
      "Suggest new subscription candidates from frequently repeated one-off purchases." 
    ],
    suggestedPrompts: [
      "Show my current subscription spend, next deliveries, and where we're overstocked.",
      "We keep running out of pet food before the auto-ship—adjust the cadence and quantity.",
      "Which items should be moved onto subscription because we buy them every month anyway?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 41
    }
  },
  {
    id: "shop-smart-home-supply",
    name: "Smart Home Supply Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps every household consumable—cleaners, paper goods, batteries, bulbs, utility supplies—tracked and replenished.",
      "Learns usage + seasonal swings to batch efficient restocks and keep the home running smoothly."
    ],
    capabilities: [
      "Maintain a location-aware register of all operational supplies with current stock status.",
      "Predict replenishment windows based on household size and historical consumption.",
      "Batch restocks across categories so deliveries are efficient and fees stay low.",
      "Adjust supply priorities seasonally (cooling filters vs heating fuel, repellents vs cold meds).",
      "Enforce cleaning-product safety rules (chemical incompatibilities, expiry, child-safe storage flags).",
      "Offer eco-friendly alternatives with cost + environmental impact comparisons.",
      "Generate full supply health reports showing stocked/low/expiring categories at a glance."
    ],
    suggestedPrompts: [
      "Give me a snapshot of every supply closet with what's stocked, low, or expiring.",
      "Plan next week's restock so we combine paper goods, cleaning refills, and batteries into one delivery.",
      "Recommend eco-friendly replacements for our current laundry + dish cleaners and show the cost delta."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 39
    }
  },
  {
    id: "shop-home-maintenance-reminder",
    name: "Home Maintenance Reminder Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Keeps a full-funnel schedule of every home maintenance task and nudges the household before anything becomes urgent.",
      "Log services, contractors, and costs so the property history stays complete and future planning is easy."
    ],
    capabilities: [
      "Build a comprehensive maintenance calendar (HVAC, water filters, alarms, gutters, pest control, appliances, exterior).",
      "Send lead-time-tuned reminders (weeks ahead for HVAC, day-of for detectors, etc.).",
      "Track service history per system with notes on work performed, contractor, cost, and next due date.",
      "Flag overdue items with risk explanations and projected repair cost impact if deferred further.",
      "Store and recommend trusted contractors based on past performance and specialty.",
      "Forecast annual maintenance spend from the schedule + historical invoices for better budgeting.",
      "Generate property maintenance reports (past 12 months completed, next 12 months upcoming, and overdue tasks)."
    ],
    suggestedPrompts: [
      "Show all maintenance tasks due in the next 60 days with estimated costs and contractor suggestions.",
      "When did we last service the water heater and who handled it? Schedule the next visit.",
      "Give me a year-end maintenance report highlighting what’s overdue and what it might cost if delayed."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 38
    }
  },
  {
    id: "shop-furniture-decor-advisor",
    name: "Furniture & Home Decor Advisor Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Blends spatial planning with style guidance to recommend furniture + decor that fit the room, the budget, and the aesthetic.",
      "Keeps projects coherent across rooms so the entire home evolves with a consistent design direction."
    ],
    capabilities: [
      "Ingest room dimensions + existing inventory to suggest correctly scaled pieces that complement what you already own.",
      "Produce cohesive room plans covering layout, palette, lighting, textiles, and accessories as one collection.",
      "Identify design style (Scandi, boho, industrial, mid-century, traditional, etc.) from images/descriptions and stay on-theme.",
      "Explain applicable color theory (complementary, monochrome, accent strategies) for the specific room palette.",
      "Compare furnishings across quality tiers so you spend where durability matters and save where it doesn’t.",
      "Offer space-maximizing strategies for small rooms (multi-function pieces, vertical storage, mirror placement).",
      "Track multi-room projects so decisions in one space stay aligned with the home's broader aesthetic."
    ],
    suggestedPrompts: [
      "Design a cozy reading corner in my 10x12 ft bedroom that fits mid-century modern style and ₹60k budget.",
      "We have a narrow living room—show a layout with sofa, storage, and lighting that keeps it airy.",
      "Compare two dining table options for durability and finish quality, and tell me which matches our Scandi palette better."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 95,
      load: 44
    }
  },
  {
    id: "shop-energy-utility-monitor",
    name: "Energy & Utility Monitoring Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Connects to smart meters + utility portals to visualize electricity, water, and gas usage in real time.",
      "Surfaces inefficiencies, faults, tariff opportunities, and actionable savings plans for the household."
    ],
    capabilities: [
      "Show live energy draw per appliance/system with rupee-per-hour burn and historical comparisons.",
      "Break down the top consumption contributors so conservation focuses where payoff is highest.",
      "Detect abnormal spikes that hint at faults (continuous heaters, fridge seal failures, hidden leaks).",
      "Benchmark usage vs similar households and last year's period to contextualize performance.",
      "Model savings from behavioral tweaks (thermostat changes, off-peak dishwasher runs, standby shutdowns).",
      "Monitor tariff changes/time-of-use options and recommend switches when patterns align.",
      "Generate monthly utility reports with trends, YoY deltas, carbon estimates, and prioritized action lists."
    ],
    suggestedPrompts: [
      "Why is today's electricity usage 20% higher than last Tuesday? Show the culprits.",
      "If we raise the AC setpoint by 2°C and run laundry off-peak, how much would we save annually?",
      "Review my last three bills and tell me if a time-of-use tariff would be cheaper."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 37
    }
  },
  {
    id: "shop-household-task-organizer",
    name: "Household Task Organizer Agent",
    category: "shopping",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Creates structured chore/cleaning cadences tailored to the household and keeps everyone accountable.",
      "Balances workload by assigning, reminding, and tracking tasks so no one person carries the entire load."
    ],
    capabilities: [
      "Build full task schedules across daily/weekly/fortnightly/monthly/seasonal cadence per room/need.",
      "Distribute chores by availability, age-appropriateness, and capacity with clear expectations.",
      "Send individual reminders so each member knows exactly what to do and when.",
      "Track completion data to highlight on-time vs delayed vs skipped tasks.",
      "Auto-adjust during busy weeks by deferring non-critical chores while protecting essentials.",
      "Maintain deep-cleaning calendars (ovens, washer drums, grout, curtains, mattress rotation).",
      "Produce weekly summaries showing completed/missed/carry-forward tasks and completion rate."
    ],
    suggestedPrompts: [
      "Design a weekly chore plan for two adults + two kids with clear assignments.",
      "We have exams this week—trim the task list to only essential items.",
      "Show last week's completion report and who needs follow-ups."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 36
    }
  },
  {
    id: "ent-movie-recommendation",
    name: "Movie Recommendation Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Builds a high-fidelity taste graph from watch history, ratings, moods, and creator preferences to surface spot-on films.",
      "Explains every pick and finds blind-spot gems so recommendations feel curated, not generic."
    ],
    capabilities: [
      "Model preferences beyond broad genres (slow-burn psychological thrillers vs action thrillers, etc.).",
      "Adapt recs to the user's current mood or vibe request (comfort watch vs emotionally intense).",
      "Surface overlooked titles across foreign/indie/docs/older catalogs that align with the user's patterns.",
      "Provide tailored reasoning for each recommendation referencing structures, pacing, themes, or creators the user loves.",
      "Track watched/low-rated films to avoid repeats and filter out disliked characteristics.",
      "Assemble themed watchlists (decade highlights, director retrospectives, topic deep dives) on demand.",
      "Blend multiple taste profiles for group nights so suggestions overlap everyone's preferences."
    ],
    suggestedPrompts: [
      "I'm in the mood for a moving slow-burn tonight—what should I watch?",
      "Build a watchlist of underrated 2010s foreign thrillers I probably missed.",
      "Find a movie my partner (rom-com fan) and I (sci-fi drama fan) will both enjoy this weekend."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.4,
    metrics: {
      successRate: 94,
      load: 35
    }
  },
  {
    id: "ent-music-recommendation",
    name: "Music Recommendation Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Reads listening history, skips, saves, and context signals to serve music that fits both taste and moment.",
      "Blends discovery with deep-catalog exploration so users get fresh finds plus hidden gems from favorites."
    ],
    capabilities: [
      "Generate context-aware playlists (workouts, focus, wind-down, parties) with the right energy/tempo/mood.",
      "Surface emerging artists predicted to resonate based on acoustic/lyric similarity and lookalike listeners.",
      "Detect shifts in taste over time and gradually weave in the new direction.",
      "Uncover deep cuts, B-sides, collaborations, and back-catalog gems for beloved artists.",
      "Find music that sounds like a reference track/artist by analyzing sonic + structural fingerprints.",
      "Create occasion playlists (anniversary year charts, decade spotlights, regional/cultural themes).",
      "Alert users when followed artists drop new releases so nothing is missed."
    ],
    suggestedPrompts: [
      "Build me a 45-minute deep-focus playlist for late-night work.",
      "I love Khruangbin—show me lesser-known artists with similar grooves.",
      "Create an anniversary playlist of songs that charted in 2012 when we met."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 94,
      load: 34
    }
  },
  {
    id: "ent-tv-discovery",
    name: "TV Show Discovery Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Learns which shows you actually finish vs abandon so it surfaces series you'll truly stick with.",
      "Matches episode length, tone, pacing, and schedule constraints so the next binge feels intentional, not random."
    ],
    capabilities: [
      "Profile completion vs drop-off traits and bias recs toward finish-friendly shows.",
      "Respect episode length + viewing windows (quick 20-min slots vs weekend binges).",
      "Find successor shows after a beloved series by matching tone, writing, character depth, and pacing.",
      "Warn when recommended/saved shows get cancelled so you can decide whether to start.",
      "Adapt to seasonal preferences (limited series, procedurals, prestige dramas) based on engagement appetite.",
      "Provide completion difficulty context so you know the time/attention investment required.",
      "Curate era-specific lists (1990s classics, 2000s prestige cable, recent streaming originals)."
    ],
    suggestedPrompts: [
      "I just finished Succession—what should fill the void with similar writing and tension?",
      "Give me short 25-min comfort shows for weekday lunches.",
      "Build a list of essential 1990s TV dramas worth revisiting."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 94,
      load: 33
    }
  },
  {
    id: "ent-streaming-guide",
    name: "Streaming Guide Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Knows where every film/show/doc is streaming in your region and keeps watchlists synced across services.",
      "Optimizes subscriptions by alerting you to arrivals, departures, rental windows, and value per platform."
    ],
    capabilities: [
      "Instantly tell you which platform (and tier) carries a specific title, including rental/purchase requirements.",
      "Monitor watchlists and ping you before a saved title leaves a service.",
      "Highlight which existing subscriptions contain the most unwatched items so you know what to keep or pause.",
      "Alert when a rental-only title is scheduled to land on a subscription you already have.",
      "Compare platform libraries vs your taste graph to recommend the best bundle for cost/content value.",
      "Curate new-arrival lists filtered by your preferences so you only see meaningful additions.",
      "Handle multi-profile households by keeping separate availability/recommendations while tracking combined spend."
    ],
    suggestedPrompts: [
      "Where can I stream 'Past Lives' in India right now, and is it part of any subscription I have?",
      "Notify me if 'The Bear' is leaving Hotstar soon.",
      "Which two streaming services should our family keep this quarter for maximum overlap with our watchlists?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 32
    }
  },
  {
    id: "ent-gaming-recommendation",
    name: "Gaming Recommendation Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Understands your completed, abandoned, and wishlist titles across platforms to suggest games you'll actually finish.",
      "Matches recommendations to available time, platforms, and preferred mechanics so play sessions feel intentional."
    ],
    capabilities: [
      "Analyze finished favorites to extract gameplay mechanics, narrative depth, difficulty, and session cadence preferences.",
      "Distinguish recommendations for 15-min mobile bursts vs 2-hour console evenings vs weekend marathons.",
      "Prioritize your backlog based on mood, time available, and average completion length.",
      "Watch wishlist pricing across Steam, PlayStation Store, Xbox, and Nintendo eShop and alert on sales.",
      "Highlight upcoming releases aligned with your taste and provide a personalized release calendar (3–6 months).",
      "Scan Game Pass/PS Plus/Apple Arcade catalogs for titles you already pay for but haven’t tried.",
      "Warn about technical issues or poor launch value so you know when to buy now vs wait for patches/price drops."
    ],
    suggestedPrompts: [
      "I have 30 minutes on mobile tonight—what should I play that fits my puzzle/strategy streak?",
      "Which story-driven console game should I start next from my backlog of Control, Jedi Survivor, and Deathloop?",
      "List the upcoming PC releases in the next 3 months I should keep on my radar and note preorder advice."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 94,
      load: 31
    }
  },
  {
    id: "ent-content-summary",
    name: "Content Summary Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Delivers spoiler-controlled recaps for films, TV, books, podcasts, and long-form video so you stay in the loop.",
      "Helps you decide what to watch/read next and refreshes memory before continuing a series."
    ],
    capabilities: [
      "Produce TV episode recaps with optional spoiler sections so you can catch up fast.",
      "Generate season-spanning 'previously on' briefs covering plot arcs, character moves, and unresolved threads.",
      "Offer spoiler-free film/show summaries for decision-making, revealing tone but not twists.",
      "Condense documentaries, talks, and educational videos into key arguments/evidence/conclusions.",
      "Summarize books (fiction + non-fiction) with narrative arcs, themes, characters, and reception context.",
      "Create chapter-by-chapter refreshers for non-fiction works mid-read.",
      "Recap podcast episodes (topics, arguments, guests) so you can rejoin ongoing conversations quickly."
    ],
    suggestedPrompts: [
      "Give me a spoiler-free summary of 'The Zone of Interest' so I know if it's my vibe tonight.",
      "Recap Season 2 of 'Loki' with spoilers separated—I'm jumping into Season 3 this weekend.",
      "Summarize the latest Lex Fridman podcast episode so I can decide whether to queue it."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 94,
      load: 30
    }
  },
  {
    id: "ent-trending-media",
    name: "Trending Media Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Scans social, streaming, gaming, and entertainment chatter to explain what’s culturally hot right now and why.",
      "Filters hype through your taste profile so you see only the trends worth your time."
    ],
    capabilities: [
      "Label trends as organic vs marketing-driven based on audience vs promo signals.",
      "Provide context (origin, buildup, cultural weight) for every trending item.",
      "Filter trend feeds through the user's past engagement/taste to surface relevant highlights.",
      "Track trend velocity + longevity to show rising vs peaking vs fading moments.",
      "Cover mainstream + niche communities (gaming, indie film, music subcultures, etc.).",
      "Flag when a trend ties into existing interests (topic, creator, genre you already follow).",
      "Deliver a weekly digest summarizing the top cultural beats across film/TV/music/gaming/social."
    ],
    suggestedPrompts: [
      "Give me today’s top 5 trends I should actually care about and why they're blowing up.",
      "Is the sudden buzz around that new Netflix doc organic or marketing-led?",
      "Send a weekend digest of trends relevant to my indie games + arthouse film interests."
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 93,
      load: 33
    }
  },
  {
    id: "ent-celebrity-news",
    name: "Celebrity News Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Curates credible updates about the celebrities you actually follow, emphasizing professional news over gossip.",
      "Fact-checks viral stories and explains the business context so you can act on real information."
    ],
    capabilities: [
      "Monitor verified social feeds, press releases, and reputable entertainment journalism for followed figures.",
      "Filter news by type (projects, awards, personal life) so you can hide tabloid chatter if desired.",
      "Flag unverified rumors separately from confirmed news with clear status labels.",
      "Track career milestones: new films, albums, tours, collaborations, and release schedules.",
      "Explain industry context when someone exits a project or signs a major deal.",
      "Surface business-side developments (production shingle launches, platform signings, brand partnerships).",
      "Send alerts for time-sensitive announcements (ticket drops, pre-orders, limited streaming windows)."
    ],
    suggestedPrompts: [
      "Only send me professional updates about Emma Stone—no tabloid stuff.",
      "Verify whether the rumor about that K-pop group splitting is true before I panic.",
      "What did Taylor Swift announce this week and when do tickets go on sale?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.3,
    metrics: {
      successRate: 95,
      load: 32
    }
  },
  {
    id: "ent-podcast-recommendation",
    name: "Podcast Recommendation Agent",
    category: "entertainment",
    status: "online",
    version: "v1.0",
    roleSummary: [
      "Learns what kinds of podcasts you actually finish and recommends exact episodes that match your topics + time windows.",
      "Curates listening journeys and back-catalog essentials so you dive into the best content first."
    ],
    capabilities: [
      "Suggest episodes—not just shows—based on guests, topics, and discussion style aligned to your interests.",
      "Use completion/skip data to infer preferred formats, lengths, and pacing for smarter recommendations.",
      "Build topic/goal-focused collections (researching a subject, traveling somewhere, following current events).",
      "Match recommendations to available time slots (10-min commute, 45-min workout, multi-hour road trip).",
      "Alert you when subscribed shows drop new episodes with quick summaries for triage.",
      "Map multi-show coverage of the same guest/topic into guided listening sequences.",
      "Surface back-catalog essentials from newly discovered shows so you sample their standout episodes first."
    ],
    suggestedPrompts: [
      "I have 20 minutes while cooking—suggest an episode worth my time about urban design.",
      "Give me a listening path to understand the Sam Altman OpenAI saga across different podcasts.",
      "I just found the 'Huberman Lab' podcast—what 10 archived episodes should I start with?"
    ],
    provider: "OpenAI",
    model: "GPT-4o",
    temperature: 0.35,
    metrics: {
      successRate: 94,
      load: 32
    }
  },
];

if (typeof window !== "undefined") {
  window.agentsData = agentsData;
}
