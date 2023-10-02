import { defaultLocale } from "@/middleware";
import "../globals.scss";
import { Cormorant_Garamond } from "next/font/google";

const defaultFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const metadata = {
  title: "Aura • Elevating your practice",
  description: "Generated description"
};

function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang ?? defaultLocale}>
      <head />
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
