import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reysean.vercel.app"),
  title: "Reysean Policarpio | Student Developer and UI Designer",
  description:
    "Portfolio of Reysean Policarpio, a Computer Engineering student building straightforward websites, interfaces, and student technology projects.",
  openGraph: {
    title: "Reysean Policarpio | Portfolio",
    description: "I Build. I Learn. I Create.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Reysean Policarpio — I Build. I Learn. I Create.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reysean Policarpio | Portfolio",
    description: "I Build. I Learn. I Create.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
