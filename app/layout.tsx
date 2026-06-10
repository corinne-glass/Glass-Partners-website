import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Serif_Display, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { getSiteFromHost, siteMetadataFor } from "@/lib/domains";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const host = headersList.get("host") ?? "";
  const site = getSiteFromHost(host);
  const meta = siteMetadataFor(site);
  const canonicalPath = headersList.get("x-canonical-path");

  return {
    metadataBase: meta.metadataBase,
    title: {
      default: meta.defaultTitle,
      template: site === "personal" ? "%s | Corinne Glass" : "%s | Glass Partners",
    },
    description: meta.defaultDescription,
    ...(canonicalPath
      ? { alternates: { canonical: canonicalPath } }
      : {}),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${dmSerif.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-cloud text-authority min-h-screen">
        {children}
      </body>
    </html>
  );
}
