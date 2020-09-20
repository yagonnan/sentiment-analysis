const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LineStrategy = require("passport-line-auth").Strategy;

module.exports = {
  serializeUser: async (user, done) => {
    done(null, user);
  },
  deserializeUser: async (user, done) => {
    done(null, user);
  },
  facebookAuthStrategy: () => {
    return new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["id", "displayName", "photos", "emails"],
      },
      (accessToken, refreshToken, profile, done) => {
        // TODO call to BE POST profile route
        done(null, profile);
      }
    );
  },
  googleAuthStrategy: () => {
    return new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      (accessToken, refreshToken, profile, done) => {
        // TODO call to BE POST profile route
        done(null, profile);
      }
    );
  },
  lineAuthStrategy: () => {
    return new LineStrategy(
      {
        channelID: process.env.LINE_CHANNEL_ID,
        channelSecret: process.env.LINE_CHANNEL_SECRET,
        callbackURL: process.env.LINE_CALLBACK_URL,
        scope: ["profile", "openid"],
        botPrompt: "normal",
      },
      (accessToken, refreshToken, profile, done) => {
        // TODO call to BE POST profile route
        done(null, profile);
      }
    );
  },
};
