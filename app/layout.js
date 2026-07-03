import "bootstrap/dist/css/bootstrap.css";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { GoogleAnalytics } from "@next/third-parties/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Bell WebDev | Custom Web Development in the Lehigh Valley, PA",
  description:
    "Fast, custom-coded websites and web apps for Lehigh Valley businesses — built by a developer with 5 years of professional web engineering experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-PHHHDM8CE8" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
