import { FullWidthArea } from "@/components/full-width-area"
import { TitleDescriptionDiv } from "@/components/title-description-div"

export default function Demarcherse() {
  return (
    <div>
      <FullWidthArea imageUrlIndex={0} title="Notre démarche RSE" />
      <TitleDescriptionDiv
        title={"Un groupe engagé"}
        descriptions={[
          "En 2019, INGELIANCE a structuré sa démarche RSE (Responsabilité Sociétale et Environnementale).",
          "En tant qu’ingénieriste et prestataire reconnu, INGELIANCE est attentive aux enjeux du monde actuel et répond, en tenant compte de la réalité économique, au cadre réglementaire de la RSE.",
          "Guidée par des valeurs historiques fortes, notre démarche RSE est construite autour des aspects Environnement, Social, Sociétal et Gouvernance.",
        ]}
      />
    </div>
  )
}
