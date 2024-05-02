import { GeistSans } from "geist/font/sans";
import { createClient } from "@/utils/supabase/server";
import "./globals.css";
import { redirect } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Flowspace",
  description: "Flowspace, The one and only place for your games!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preconnect"
          href="https://olzoeydvhtxabbqaeykt.supabase.co"
        />
        <meta name="theme-color" content="#1d232a" />
      </head>
      <body className="bg-background text-foreground h-screen w-screen flex flex-col overflow-hidden">
        {children}
      </body>
    </html>
  );
}
