import { GraphqlServiceImpl } from "../graphql-service";
import { AuthStudentProfile } from "./types";
import { buildRegisterStudentMutation } from "./utils";

export class AuthServiceImpl extends GraphqlServiceImpl {
  async registerUser(
    idToken: string,
    email: string
  ): Promise<AuthStudentProfile | null> {
    if (email.endsWith("jcpsnj.org")) {
      try {
        const response = await this.fetchQuery(
          buildRegisterStudentMutation(idToken)
        );

        const studentRegistrationData: AuthStudentProfile | null =
          response["registerStudentWithGoogle"];
        return studentRegistrationData;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return null;
  }
}
