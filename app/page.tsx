import { FullWidthArea } from "@/components/full-width-area"
import { NotreOffre, notreOffre } from "@/components/notre-offre"
import { SecteurActivite } from "@/components/secteur-activite"
import { navItems } from "@/lib/navBarContent"

export default function Home() {
  return (
    <div>
      <FullWidthArea
        imageUrlIndex={0}
        title="expertise industrielle & innovation"
        description="Depuis plus de 20 ans, INGELIANCE accompagne ses clients sur des problématiques d’ingénierie industrielle précises en leur proposant des solutions innovantes et maitrisées. Nous intervenons sur l’ensemble du cycle de vie des produits depuis la phase de R&D / conception jusqu’à l’industrialisation et la maintenance."
      />
      <NotreOffre description={notreOffre.description} title={notreOffre.title} items={notreOffre.items} />
      <SecteurActivite />
      <FullWidthArea
        imageUrlIndex={1}
        title="Rejoingnez une aventure humaine & collective !"
        action={{ label: "Nous rejoindre", href: navItems["carriere"][3].href }}
      />
    </div>
  )
}
