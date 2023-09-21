import React from "react";
import "../styles/nprogress.css";
import "../styles/globals.css";
import "../styles/notion.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Header from "@/components/header";
import TransitionEffect from "@/components/common/TransitionEffect";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <TransitionEffect>
        <div
          className={`min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-18rem)] ${
            false ? "font-serif" : "font-sans"
          }`}
        >
          <Component {...pageProps} />
        </div>
      </TransitionEffect>
      <Footer />
    </ThemeProvider>
  );
}
