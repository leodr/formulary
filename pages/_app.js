import Head from "next/head";
import "styles/font.css";
import "styles/github-markdown.css";
import "styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Formelsammlung</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
