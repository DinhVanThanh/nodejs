import '@/styles/globals.css'
import Layout from "components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}
