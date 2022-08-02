import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../hooks/useAuth";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "../graphql/client";
import { useAppLayout } from "../hooks/useAppLayout";
import { Layout as NavbarLayout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const AppLayout = useAppLayout();
  return (
    <div data-theme="mytheme">
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <AuthContextProvider>
          <AppLayout>
            <NavbarLayout>
              <Component {...pageProps} />
            </NavbarLayout>
          </AppLayout>
        </AuthContextProvider>
      </RelayEnvironmentProvider>
    </div>
  );
}

export default MyApp;
