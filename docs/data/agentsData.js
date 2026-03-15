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
  }
];

if (typeof window !== "undefined") {
  window.agentsData = agentsData;
}
