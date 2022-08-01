import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../hooks/useAuth";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "../graphql/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="mytheme">
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </RelayEnvironmentProvider>
    </div>
  );
}

export default MyApp;
