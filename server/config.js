const production = {
  url: "https://something.render.com",
};

const development = {
  url: "http://localhost:5173",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
