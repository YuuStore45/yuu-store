import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" className="scroll-smooth">
        <Head>
          <meta charSet="utf-8" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
