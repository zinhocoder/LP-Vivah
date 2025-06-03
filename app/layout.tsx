import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Cormorant } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const cormorant = Cormorant({ subsets: ["latin"], variable: "--font-cormorant" })

export const metadata: Metadata = {
  title: "Vivah Móveis Planejados | Móveis Sob Medida com Design Exclusivo",
  description:
    "Transforme seu lar com móveis planejados que unem design, funcionalidade e exclusividade. Projetos personalizados para todos os ambientes da sua casa.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
