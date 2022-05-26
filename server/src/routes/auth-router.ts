import { oauth2Client } from "../auth/google-oauth-client";
import  express from "express";

const authRouter = express.Router();

authRouter.post(
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

export default authRouter;
