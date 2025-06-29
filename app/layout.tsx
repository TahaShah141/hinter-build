import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HinterBuild",
  description: "Build your ideas with HinterBuild",
  icons: {
    icon: [
      { url: "/logo-meta.png", sizes: "16x16", type: "image/png" },
      { url: "/logo-meta.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-meta.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/logo-meta.png",
    apple: [{ url: "/logo-meta.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className={`${notoSans.variable} antialiased w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
