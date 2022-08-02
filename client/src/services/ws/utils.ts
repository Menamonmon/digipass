import { config } from "../../../config";
import { getPersistedJwt } from "../auth-service";

export const genWsUrl = () =>
  `${config.backendUrl}/websockets?jwt=${getPersistedJwt()}`;
