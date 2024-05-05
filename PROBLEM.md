I have desperately been trying for days now to figure out how this works and could really use some help. I'm new-ish and trying to learn authentication techniques. It seems like JWTs maybe are more well-suited for SPAs but I want to figure out how (if it's possible) to use session based authentication in a React app.

My backend should, in theory, be creating a session cookie, saving the session to a mongo db and then sending the HttpOnly cookie to the client. All good there, the login flow seems to work just fine - I send along req.session.user which includes some basic data about the user that is sent to the front end and can be read with no issues.

However, if I want to maintain authentication status on page refresh, I am trying to send an API call to my backend to retrieve the req.session.user attribute that I set on login. The endpoint works fine in Postman but I cannot get it to work from my react frontend. I've tried so many different combinations of credentials: "include" and nothing seems to work.

## Express session config:
```js
app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({
      clientPromise: client,
    }),
    cookie: {
      secure: false,
      // 30 minute idle timeout
      maxAge: 1000 * 60 * 30,
      sameSite: false,
      httpOnly: true,
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
  })
);
```
## API endpoint for login:
```js
router.post("/api/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.matchesPassword(password))) {
      throw new Error("Unauthorized!!");
    }

    req.session.user = { userId: user.id, username: user.username };
    res.json({ message: "Logged in!", user: req.session.user });
  } catch (error) {
    next(error);
  }
});
```

## API endpoint for getting the current session user (this is the part that's not working - cookies is undefined and the session that's logged doesn't contain the user):
```js
router.get("/api/session", (req, res) => {
  console.log("cookies", req.cookies);
  console.log("session", req.session);
  res.json({ user: req.session.user });
});
```

## Front end code to retrieve the session user:
```js
const handleClick = async () => {
    const res = await fetch("http://localhost:3000/api/session", {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
  };
```
