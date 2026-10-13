import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Lubina N Salam — Contemporary Artist & Illustrator", description: "Original paintings, illustrations and personal art commissions by Lubina N Salam, based in Germany.", metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
