/*
 * CV content for mirandemirovski-rgb.github.io (Blueprint).
 * Edit text here once; the page and the PDF layout both read it.
 * Text in [[double brackets]] is information Miran has not sent yet.
 * Pages show it with a dashed box. American English spelling.
 */
window.CV = {
  first: "Miran",
  last: "Demirovski",
  headline: "Real-Time Analysis · Workforce Management · Team Leadership",
  tagline: "Turning data into decisions, and objectives into results.",
  location: "Athens, Greece",
  email: "mirandemirovski@yahoo.it",
  linkedin: "https://www.linkedin.com/in/miran-demirovski-b1aa41196",
  linkedinLabel: "linkedin.com/in/miran-demirovski-b1aa41196",
  site: "mirandemirovski-rgb.github.io",
  pdf: "assets/Miran-Demirovski-CV.pdf",
  photo: { color: "assets/photo.jpg", bw: "assets/photo-bw.jpg" },

  now: { title: "Real Time Analyst", company: "Kaizen Gaming", since: "Nov 2025" },

  about: [
    "Experienced in real-time analysis, workforce management and team leadership.",
    "I keep operations balanced between efficiency, service quality and people performance.",
    "I monitor live operations, optimize schedules, build reports and analysis, and handle operational tasks with determination and focus.",
    "My background combines strong analytical insight with clear, empathetic communication."
  ],

  // Key figures. Years are sums of the LinkedIn durations.
  facts: [
    { value: 10, decimals: 0, suffix: "+", unit: "years", label: "in customer operations" },
    { value: 4.5, decimals: 1, suffix: "+", unit: "years", label: "in real-time & workforce management" },
    { value: 2, decimals: 0, suffix: "", unit: "teams led", label: "as Team Leader, coaching people to reach their goals" },
    { value: 5, decimals: 0, suffix: "", unit: "languages", label: "Croatian, Bosnian, Serbian, Italian, English" }
  ],

  // Newest first. from/to are [year, month]; to: null means present.
  jobs: [
    {
      id: "kaizen", title: "Real Time Analyst", company: "Kaizen Gaming",
      dates: "Nov 2025 – Present", from: [2025, 11], to: null, place: "Athens · Hybrid",
      points: [
        "Monitor real-time performance across multiple markets, and act quickly to protect service level.",
        "Coordinate daily with multiple BPO partners on staffing, breaks and priorities.",
        "Support operations live: move resources, adjust breaks and overtime, and escalate issues early.",
        "Run root cause analysis when service level is missed, and share findings and actions.",
        "Support planning and keep the headcount tracker up to date.",
        "Build reporting and scheduling tools with Google Apps Script."
      ],
      tags: ["Real-time Monitoring", "Multi-market", "BPO Coordination", "Root Cause Analysis", "Headcount Tracking", "Data Management", "Google Apps Script", "Claude Code", "Claude Skills", "Web Application Design"]
    },
    {
      id: "ttec-tl", title: "Customer Service Team Lead", company: "TTEC",
      dates: "Jan 2025 – Oct 2025", from: [2025, 1], to: [2025, 10], place: "Athens · On-site",
      points: [
        "Led the Croatian customer support team, with full team-lead responsibilities.",
        "Reviewed agent performance and KPIs, and coached team members one to one.",
        "Organized the team's daily work, schedules and priorities.",
        "Handled escalations and supported agents on complex customer cases."
      ],
      tags: ["Team Leadership", "Coaching", "People Management"]
    },
    {
      id: "wfm", title: "Planning Officer", company: "Webhelp",
      dates: "Oct 2023 – Nov 2024", from: [2023, 10], to: [2024, 11], place: "Athens",
      points: [
        "Reviewed short- and mid-term forecasts and worked on capacity planning.",
        "Analyzed commitments against on-site and off-site shrinkage.",
        "Built accurate schedules for every queue, interval by interval.",
        "Produced planning reports and took daily action on productivity goals.",
        "Coordinated with operations and client teams on staffing needs and planning changes."
      ],
      tags: ["Workforce Planning", "Forecasting", "Scheduling", "Client Relations"]
    },
    {
      id: "rta", title: "Real Time Analyst", company: "Webhelp",
      dates: "May 2021 – Oct 2023", from: [2021, 5], to: [2023, 10], place: "Athens",
      points: [
        "Monitored volumes, agent statuses, productivity KPIs and SLA live, to reach commitments in every interval.",
        "Took fast, efficient actions in daily collaboration with the Intraday management team.",
        "Managed overtime, shift swaps and breaks in the WFM tool Teleopti.",
        "Ran ad hoc reporting and analysis, and worked with management on strategic and tactical plans."
      ],
      tags: ["Real-time Monitoring", "Data Management", "Teleopti"]
    },
    {
      id: "wh-tl", title: "Customer Service Team Lead", company: "Webhelp",
      dates: "Nov 2019 – May 2021", from: [2019, 11], to: [2021, 5], place: "Athens",
      points: [
        "Built open, professional relationships with my team.",
        "Provided coaching and guidance to help team members reach objectives aligned with company values.",
        "Gave constructive feedback and motivated the team to achieve their goals.",
        "Monitored team KPIs and quality, and reported results to management."
      ],
      tags: ["People Management", "Coaching", "Teamwork"]
    },
    {
      id: "ttec-css", title: "Customer Support Specialist", company: "TTEC",
      dates: "May 2019 – Nov 2019", from: [2019, 5], to: [2019, 11], place: "Athens · On-site",
      points: [
        "Provided customer support, solving requests accurately and on time.",
        "Documented each case clearly and followed company processes and quality standards."
      ],
      tags: ["Customer Support"]
    },
    {
      id: "tp-tl", title: "Team Leader", company: "Teleperformance",
      dates: "Sep 2018 – Feb 2019", from: [2018, 9], to: [2019, 2], place: "Greece",
      points: [
        "Managed a customer support team day to day, from attendance to performance.",
        "Ran coaching sessions and quality reviews to improve service.",
        "Motivated agents and supported them on escalated cases."
      ],
      tags: ["People Management", "Teamwork"]
    },
    {
      id: "tp-senior", title: "Senior Customer Support", company: "Teleperformance",
      dates: "Nov 2017 – Sep 2018", from: [2017, 11], to: [2018, 9], place: "Greece",
      points: [
        "Acted as level-2 support: colleagues called me for difficult cases.",
        "Helped agents resolve complex customer issues, and took ownership of the most complicated cases.",
        "Shared knowledge and good practices with the team."
      ],
      tags: ["Level-2 Support", "Teamwork"]
    },
    {
      id: "tp-css", title: "Customer Service Specialist", company: "Teleperformance",
      dates: "May 2016 – Nov 2017", from: [2016, 5], to: [2017, 11], place: "Greece",
      points: [
        "Supported customers with their questions and issues, aiming to resolve them at first contact.",
        "Met individual targets for quality and productivity."
      ],
      tags: ["Customer Support"]
    },
    {
      id: "data", title: "Data Entry Operator", company: "Evraz Palini e Bertoli",
      dates: "2008 – 2015", from: [2008, 1], to: [2015, 12],
      points: [
        "Entered and updated company data accurately in internal systems.",
        "Checked records for errors and kept documentation organized."
      ],
      tags: ["Data Entry"]
    }
  ],

  highlights: [
    { when: "2023", title: "Most Collaborative Employee", text: "Selected as the winner for the most collaborative employee of the project." },
    { when: "Feb 2024", title: "Business trip to Cairo", text: "Two weeks in Cairo to train and support the team in the company's newly opened site." },
    { when: "Google Apps Script", title: "Scheduling web app", text: "Built a scheduling web app for the team from start to finish. It is now officially used by the company." }
  ],

  skills: [
    { group: "Workforce Management", items: ["Forecast review", "Capacity planning", "Scheduling", "Shrinkage analysis", "Intraday management", "Real-time monitoring"] },
    { group: "Leadership", items: ["Team leadership", "People management", "Coaching", "Mentoring", "Performance reviews", "Quality feedback", "Training & onboarding", "Conflict resolution", "Teamwork"] },
    { group: "Analytics", items: ["Reporting & analysis", "Data management", "KPI & SLA tracking", "Analytical skills", "Time management"] },
    { group: "Tools", items: ["Teleopti (WFM)", "NICE", "Verint", "OptiShift", "EdgeTier", "Zendesk", "Power BI", "Excel (basic)", "Google Apps Script", "Claude Code", "Claude Skills", "Web application design"] }
  ],

  languages: [
    { name: "Croatian, Bosnian, Serbian", level: "Native" },
    { name: "Italian", level: "Advanced" },
    { name: "English", level: "Advanced" }
  ],

  education: { title: "High School Diploma", school: "ITS Enrico Mattei", place: "Italy", year: "2003" },

  // Waiting for Miran's files and text.
  certificates: [
    { title: "[[Certificate name]]", issuer: "[[Issued by]]", year: "[[Year]]" }
  ],
  projects: [
    { title: "Frammenti", text: "My first website, created by me.", url: "https://mirandemirovski-rgb.github.io/frammenti/", label: "mirandemirovski-rgb.github.io/frammenti" }
  ]
};
