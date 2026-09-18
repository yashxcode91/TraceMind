export const config = {
  RCA_API_URL: import.meta.env.VITE_RCA_API_URL || "/api/rca",
  ANOMALY_API_URL: import.meta.env.VITE_ANOMALY_API_URL || "/api/detector",

  ANOMALY_POLL_MS: 7000,
  INCIDENT_POLL_MS: 7000,

  UNHEALTHY_WINDOW_MINUTES: 10,

  GITHUB_URL: "https://github.com/yashxcode91/TraceMind",
};

export const TEAM = {
  id: "TraceMind",
  institution: "",
  university: "",
  guide: "",
  members: ["Yash Rai"],
};
