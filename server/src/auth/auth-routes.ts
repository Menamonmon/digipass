import { oauth2Client } from "./google-oauth-client";
const express = require("express");
const router = express.Router();

router.get(
  "/google",
  async (
    req: {
      body: {
        token: string;
      };
    },
    res
  ) => {
    const { token } = req.body;
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    res.status(201);
    res.json({ name, email, picture });
  }
);
