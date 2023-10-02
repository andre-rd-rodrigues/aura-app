import "./globals.scss";
import { Cormorant_Garamond } from "next/font/google";

const defaultFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata = {
  title: "Aura • Elevating your practice",
  description: "Generated description"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
