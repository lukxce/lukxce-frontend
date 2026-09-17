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
    "I build marketing inside startups. Employee #6 to €40M ARR at Native Teams, now Head of Marketing at Hypefy. I publish the numbers most marketers keep in a drawer.",
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
