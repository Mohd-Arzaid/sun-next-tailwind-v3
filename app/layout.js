import {
  Geist,
  Inter,
  Playfair_Display,
  Poppins,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import TopBar from "./common/TopBar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${inter.variable} ${playfair.variable} ${poppins.variable} ${roboto.variable}`}
      >
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
