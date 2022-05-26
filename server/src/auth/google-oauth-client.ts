import axios from "axios";
import { google } from "googleapis";
require("dotenv").config();

export const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://digipass.vercel.app/logging-ing"
);

export const getGoogleAuthUrl = () => {
  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ];

  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: scopes,
  });
};

export const getGoogleUser = async ({ code }) => {
  const { tokens } = await oauth2Client.getToken(code);

  // Fetch user's profile with access and bearer tokens
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.message);
    });

  return googleUser;
};

export const googleAuth = async (input: { code: string }, context) => {
  const googleUser = await getGoogleUser({ code: input.code });
  
  console.log(googleUser);
  // Query db for user and find if it's there
  let user = await context.getUserByGoogleId()
  
  // Add another piece of logic to make sure that the user is within the domain (otherwise unauthorize access)
  if (!user) {
    // Create the user in the database
  }

  // Generate a JWT, add it as a cookie

  return user;
};
