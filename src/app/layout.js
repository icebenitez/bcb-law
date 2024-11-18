import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Public_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const publicSans = Public_Sans({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Bianca Celest Benitez",
  description: "Legal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${notoSans.variable} antialiased bg-white`}
      >
        <NuqsAdapter>
          <Header />
          {children}
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
