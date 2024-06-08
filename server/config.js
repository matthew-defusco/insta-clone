const production = {
  url: "https://insta-clone-zhf0.onrender.com",
};

const development = {
  url: "http://localhost:5173",
};

export const config =
  process.env.NODE_ENV === "production" ? production : development;
