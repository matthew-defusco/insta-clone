const production = {
  url: "https://insta-clone-zhf0.onrender.com",
};

const development = {
  url: "http://localhost:3000",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
