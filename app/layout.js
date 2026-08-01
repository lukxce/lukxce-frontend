import { Manrope } from "next/font/google";
import SiteNav from "./components/SiteNav";
import SmoothScroll from "./components/SmoothScroll";
import layoutStyles from "./layout.module.css";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Luka Jovanović — Marketing Operator",
    template: "%s · Luka Jovanović",
  },
  description:
    "Insights from inside growing startups: paid acquisition, growth, and building the marketing function from zero. Currently Head of Marketing at Hypefy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <SmoothScroll>
          <SiteNav />
          <div className={layoutStyles.shell}>{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
