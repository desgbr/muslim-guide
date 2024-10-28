import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Layout from "@/layout";

const zain = Cairo({
  weight: ["400", "300", "700", "200", "300"],
  subsets: ["arabic"],
  variable: "--font-zain",
  display: "swap",
});

export const metadata: Metadata = {
  title: "موقع دليل المسلم",
  description:
    "موقع يحتوي علي كل ما يهم المسلم في يوممه وليلته من الاذكار الواردة في الكتاب والسنة",
  other:{

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${zain.variable}`}>
    <body>
    <Layout>{children}</Layout>
    </body>
    </html>
  );
}
