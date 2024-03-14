import { Header } from "@/components/header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ingeliance Technologies",
  description:
    "Ingeliance propose des solutions d'ingénierie, et de conseil en technologies innovantes pour les secteurs de l'aéronautique, du spatial, de la défense, de l'énergie, du transport et de l'industrie.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
