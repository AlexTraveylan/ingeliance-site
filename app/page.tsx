import { FullWidthArea } from "@/components/full-width-area"
import { NotreOffre, notreOffre } from "@/components/notre-offre"
import { SecteurActivite } from "@/components/secteur-activite"
import { Skeleton } from "@/components/ui/skeleton"
import { navItems } from "@/lib/navBarContent"
import { Suspense } from "react"

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Skeleton className="h-[536px] w-screen" />}>
        <FullWidthArea
          imageUrlIndex={0}
          title="expertise industrielle & innovation"
          description="Depuis plus de 20 ans, INGELIANCE accompagne ses clients sur des problématiques d’ingénierie industrielle précises en leur proposant des solutions innovantes et maitrisées. Nous intervenons sur l’ensemble du cycle de vie des produits depuis la phase de R&D / conception jusqu’à l’industrialisation et la maintenance."
        />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[536px] w-screen" />}>
        <NotreOffre description={notreOffre.description} title={notreOffre.title} items={notreOffre.items} />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[536px] w-screen" />}>
        <SecteurActivite />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[536px] w-screen" />}>
        <FullWidthArea
          imageUrlIndex={1}
          title="Rejoingnez une aventure humaine & collective !"
          action={{ label: "Nous rejoindre", href: navItems["carriere"][3].href, ariaLabel: navItems["carriere"][3].ariaLabel }}
        />
      </Suspense>
    </div>
  )
}
