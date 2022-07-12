import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

type Props = {};

class MyDocuments extends Document<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/Nflix.png" />
          <meta
            name="google-site-verification"
            content="7bXUWi-XyMHNH7bBAm1HB4scWbFit_-curnpMA0EfzM"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Open+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="overlay"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocuments;
