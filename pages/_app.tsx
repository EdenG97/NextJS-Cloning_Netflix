import "../styles/globals.css";
import Layout from "../components/header/Layout";
import type { AppProps } from "next/app";
import { EmailContextProvider } from "../store/EmailContext";
import { PasswordContextProvider } from "../store/PasswordContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmailContextProvider>
      <PasswordContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PasswordContextProvider>
    </EmailContextProvider>
  );
}

export default MyApp;
