import "@/styles/globals.css";
import { ListContextProvider } from "@/context/main-context";

export default function App({ Component, pageProps }) {
  return (
    <ListContextProvider>
      <Component {...pageProps} />;
    </ListContextProvider>
  );
}
