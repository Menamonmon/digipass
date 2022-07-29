import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../hooks/useAuth";
import { RelayEnvironmentProvider } from "react-relay";
import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import { config } from "../../config";

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch(`${config.backendUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

const RelayEnvironment = new Environment({ store, network });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
