const production = {
  url: "https://api.j0973jd.xyz",
};

const development = {
  url: "http://localhost:3000",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
