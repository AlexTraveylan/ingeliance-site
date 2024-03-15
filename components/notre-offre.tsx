import Image from "next/image"

type OffreItem = {
  title: string
  description: string
  imageUrl: string
}

type OffreProps = {
  title: string
  description: string
  items: OffreItem[]
}

export const notreOffre: OffreProps = {
  title: "Notre offre d'ingénierie",
  description:
    "INGELIANCE propose à ses clients une offre d’ingénierie étendue. Notre valeur ajoutée réside dans l’association de l’expertise technologique et du savoir-faire industriel.",
  items: [
    {
      title: "Technologies",
      description:
        "Le pôle Technologies vous propose un accompagnement de notre bureau d’études et des expertises technologiques sur des problématiques industrielles variées.",
      imageUrl: "/pictoTechnologie.png",
    },
    {
      title: "Solutions",
      description: "Le pôle Solutions vous propose des prestations d’études et de réalisations industrielles clé en main pour tous vos projets.",
      imageUrl: "/pictoSolution.png",
    },
  ],
}

export const NotreOffre = ({ title, description, items }: OffreProps) => {
  return (
    <div className="flex flex-col items-center px-5 py-10 gap-5">
      <h2 className=" font-bold text-4xl text-center">{title.toUpperCase()}</h2>
      <p className=" font-semibold text-center max-w-[700px]">{description}</p>
      <div className="flex justify-evenly flex-wrap w-full gap-5 p-5">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-5">
            <Image src={item.imageUrl} alt={item.title} width={120} height={120} />
            <h3 className="font-bold text-2xl">{item.title.toUpperCase()}</h3>
            <p className="font-semibold max-w-[340px] text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
