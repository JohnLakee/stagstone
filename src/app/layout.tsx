import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stagstone.place"),
  title: "Stag & Stone",
  description: "Regal retreat. Rugged beauty.",
  openGraph: {
    title: "Stag & Stone",
    description: "Regal retreat. Rugged beauty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} m-0 min-h-[100dvh] overflow-x-hidden overflow-y-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
