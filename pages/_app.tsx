import "../styles/globals.css";
import Layout from "../components/header/Layout";
import type { AppProps } from "next/app";
import { EmailContextProvider } from "../store/EmailContext";
import { PasswordContextProvider } from "../store/PasswordContext";
import { NotificationContextProvider } from "../store/NotificationContext";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <NotificationContextProvider>
        <EmailContextProvider>
          <PasswordContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PasswordContextProvider>
        </EmailContextProvider>
      </NotificationContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
