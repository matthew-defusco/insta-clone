const production = {
  url: "https://insta-clone-1-enfz.onrender.com",
};

const development = {
  url: "http://localhost:5173",
};

export const config =
  process.env.NODE_ENV === "production" ? production : development;
