const passport = require("passport");
const auth = require("../../utils/auth");

const initAuthMiddleware = (app) => {
  // initialize passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(auth.serializeUser);
  passport.deserializeUser(auth.deserializeUser);
  passport.use(auth.facebookAuthStrategy());
  passport.use(auth.googleAuthStrategy());
  passport.use(auth.lineAuthStrategy());

  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );
  app.get(
    "/auth/line",
    passport.authenticate("line", { scope: ["profile", "openid"] })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/",
      failureRedirect: "/",
      failureFlash: true,
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/",
      failureFlash: true,
    })
  );

  app.get(
    "/auth/line/callback",
    passport.authenticate("line", {
      successRedirect: "/",
      failureRedirect: "/",
      failureFlash: true,
    })
  );

  app.get("/signout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};

module.exports = initAuthMiddleware;
