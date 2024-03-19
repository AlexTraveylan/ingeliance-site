import { FullWidthArea, imagesAccueilPossibles } from "@/components/full-width-area"

export default function Contact() {
  return (
    <div>
      <FullWidthArea
        imageCover={imagesAccueilPossibles[0]}
        title="Contactez-nous"
        description="Un projet de calcul, de simulation, de développement logiciel, ou de conseil en ingénierie ? Contactez-nous pour échanger sur vos besoins et vos attentes. Afin de répondre au mieux à votre demande et dans les plus brefs délais, nous vous invitons à remplir le formulaire ci-dessous."
      />
    </div>
  )
}
