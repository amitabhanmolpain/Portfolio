import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Amitabh Anmol Pain",
  description:
    "Portfolio of Amitabh Anmol Pain, a specialized Backend Developer focusing on scalable systems and distributed architectures.",
  openGraph: {
    title: "Amitabh Anmol Pain",
    description:
      "Portfolio of Amitabh Anmol Pain, a specialized Backend Developer focusing on scalable systems and distributed architectures.",
    images: [
      {
        url: "/professional-portrait.png",
        width: 200,
        height: 200,
        alt: "Amitabh Anmol Pain",
      },
    ],
  },
  icons: {
    icon: "/professional-portrait.png",
    apple: "/professional-portrait.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
