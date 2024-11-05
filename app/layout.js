import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { caladea, inter } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Thinvent",
  description: "Thinvent Micro 6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caladea.variable} bg-bgPurple`}>
        <Navbar />
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
