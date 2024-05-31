import { Caladea, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const caladea = Caladea({
  subsets: ["latin"],
  variable: "--font-caladea",
  weight: ["400", "700"],
});
