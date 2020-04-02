import Head from "next/head";
import { ToastContainer } from "react-toastify";

export default ({ children, title = "Meteo" }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    <ToastContainer />
  </>
);
