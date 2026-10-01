/*
 * CV content shared by all five preview styles.
 * Text in [[double brackets]] is a gap: information Miran has not given yet.
 * Pages show gaps as highlighted marks. Nothing here is invented.
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
  pdf: "../assets/Miran-Demirovski-CV.pdf",
  photo: { color: "../assets/photo.jpg", bw: "../assets/photo-bw.jpg" },

  now: { title: "Real Time Analyst", company: "Kaizen Gaming", since: "Nov 2025" },

  about: [
    "Experienced in real-time analysis, workforce management and team leadership.",
    "I keep operations balanced between efficiency, service quality and people performance.",
    "I monitor live operations, optimise schedules, build reports and analysis, and handle operational tasks with determination and focus.",
    "My background combines strong analytical insight with clear, empathetic communication."
  ],

  // Key figures. See "How I counted" in the previews gallery.
  facts: [
    { value: 10, decimals: 0, suffix: "+", unit: "years", label: "in customer operations" },
    { value: 4.5, decimals: 1, suffix: "+", unit: "years", label: "in real-time & workforce management" },
    { value: 3, decimals: 0, suffix: "", unit: "roles", label: "as a team leader" },
    { value: 3, decimals: 0, suffix: "", unit: "languages", label: "Croatian, Italian, English" }
  ],

  // Newest first. from/to are [year, month]. to: null means unknown or present.
  jobs: [
    {
      id: "kaizen", title: "Real Time Analyst", company: "Kaizen Gaming",
      dates: "Nov 2025 – Present", from: [2025, 11], to: null, ops: true, place: "Athens · Hybrid",
      points: [], tags: ["Google Apps Script", "Claude Code", "Claude Skills", "Web Application Design"]
    },
    {
      id: "ttec-tl", title: "Customer Service Team Lead", company: "TTEC",
      dates: "Jan 2025 – Oct 2025", from: [2025, 1], to: [2025, 10], ops: true, place: "Athens · On-site",
      points: [
        "Led the Croatian customer support team, with all team-lead responsibilities.",
        "Reviewed agent performance and coached team members.",
        "Organised the team's daily work."
      ],
      tags: ["Team Leadership", "Coaching", "People Management"]
    },
    {
      id: "wfm", title: "Planning Officer", company: "Webhelp",
      dates: "Oct 2023 – Nov 2024", from: [2023, 10], to: [2024, 11], ops: true,
      points: [
        "Reviewed short- and mid-term forecasts and worked on capacity planning.",
        "Analysed commitments against on-site and off-site shrinkage.",
        "Built accurate schedules for every queue, interval by interval.",
        "Produced planning reports and took daily action on productivity goals."
      ],
      tags: ["Workforce Planning", "Forecasting", "Scheduling", "Client Relations"]
    },
    {
      id: "rta", title: "Real Time Analyst", company: "Webhelp",
      dates: "May 2021 – Oct 2023", from: [2021, 5], to: [2023, 10], ops: true,
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
      dates: "Nov 2019 – May 2021", from: [2019, 11], to: [2021, 5], ops: true,
      points: [
        "Built open, professional relationships with my team to resolve issues quickly.",
        "Mentored team members to reach objectives aligned with company values.",
        "Gave constructive feedback on quality."
      ],
      tags: ["People Management", "Teamwork"]
    },
    {
      id: "ttec-css", title: "Customer Support Specialist", company: "TTEC",
      dates: "May 2019 – Nov 2019", from: [2019, 5], to: [2019, 11], ops: true, place: "Athens · On-site",
      points: [], tags: []
    },
    {
      id: "tp-tl", title: "Team Leader", company: "Teleperformance",
      dates: "Sep 2018 – Feb 2019", from: [2018, 9], to: [2019, 2], ops: true,
      points: [], tags: ["People Management", "Teamwork"]
    },
    {
      id: "tp-senior", title: "Senior Customer Support", company: "Teleperformance",
      dates: "Nov 2017 – Sep 2018", from: [2017, 11], to: [2018, 9], ops: true,
      points: [], tags: ["Teamwork"]
    },
    {
      id: "tp-css", title: "Customer Service Specialist", company: "Teleperformance",
      dates: "May 2016 – Nov 2017", from: [2016, 5], to: [2017, 11], ops: true,
      points: [], tags: []
    },
    {
      id: "data", title: "Data Entry Operator", company: "Evraz Palini e Bertoli",
      dates: "2008 – 2015", from: [2008, 1], to: [2015, 12], ops: false,
      points: [], tags: []
    }
  ],

  // Total time at each company, as shown on LinkedIn.
  tenure: { "Webhelp": "5 yrs 1 mo", "Teleperformance": "2 yrs 10 mos" },

  highlights: [
    { when: "2023", title: "Most Collaborative Employee", text: "Selected as the winner for the most collaborative employee of the project." },
    { when: "Feb 2024", title: "Training trip to Cairo", text: "Two weeks in Cairo to support and train the new team." }
  ],

  skills: [
    { group: "Workforce Management", items: ["Forecast review", "Capacity planning", "Scheduling", "Shrinkage analysis", "Intraday management", "Real-time monitoring"] },
    { group: "Leadership", items: ["Team leadership", "People management", "Mentoring", "Quality feedback", "Teamwork"] },
    { group: "Analytics", items: ["Reporting & analysis", "Data management", "KPI & SLA tracking", "Analytical skills", "Time management"] },
    { group: "Tools", items: ["Teleopti (WFM)", "Google Apps Script", "Claude Code", "Claude Skills", "Web application design"] }
  ],

  languages: [
    { name: "Croatian", level: "Native" },
    { name: "Italian", level: "Advanced" },
    { name: "English", level: "Advanced" }
  ],

  education: { title: "High School Diploma", school: "ITS Enrico Mattei", place: "Italy", year: "[[Year]]" }
};
