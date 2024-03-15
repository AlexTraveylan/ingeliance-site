import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SocialBar } from "@/components/socialBar"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ingeliance",
  description:
    "Ingeliance propose des solutions d'ingénierie, et de conseil en technologies innovantes pour les secteurs de l'aéronautique, du spatial, de la défense, de l'énergie, du transport et de l'industrie. Mots clefs : Ingénierie, Calcul, Simulation, Développement logiciel, Conseils, Éléments finis, Conception, Numérique, Naval, Spatial, Aéronautique, Défense, Énergie, Transport",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        <Header />
        <div className="flex flex-grow">{children}</div>
        <Analytics />
        <Footer />
        <SocialBar />
      </body>
    </html>
  )
}
