import { FullWidthArea } from "@/components/full-width-area"
import { NotreOffre, notreOffre } from "@/components/notre-offre"

export default function Home() {
  return (
    <div>
      <FullWidthArea
        imageUrlIndex={0}
        title="expertise industrielle & innovation"
        description="Depuis plus de 20 ans, INGELIANCE accompagne ses clients sur des problématiques d’ingénierie industrielle précises en leur proposant des solutions innovantes et maitrisées. Nous intervenons sur l’ensemble du cycle de vie des produits depuis la phase de R&D / conception jusqu’à l’industrialisation et la maintenance."
      />
      <NotreOffre description={notreOffre.description} title={notreOffre.title} items={notreOffre.items} />
    </div>
  )
}
