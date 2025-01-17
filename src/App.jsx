import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Analytics />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
