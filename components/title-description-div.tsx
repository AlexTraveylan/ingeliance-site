import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image"

const titleDescriptionVariant = cva("w-full flex flex-col items-center justify-center min-h-96 gap-5 w-full text-center p-5", {
  variants: {
    variant: {
      white: "",
      slate: "bg-slate-200",
    },
  },
  defaultVariants: {
    variant: "white",
  },
})

export type ImageUrlProps = {
  url: string
  alt: string
}

export type TitleDescription = {
  title: string
  descriptions: string[]
  imageUrl?: ImageUrlProps
}

type TitreDescriptionProps = TitleDescription & VariantProps<typeof titleDescriptionVariant>

export const TitleDescriptionDiv = ({ title, descriptions, imageUrl, variant }: TitreDescriptionProps) => {
  return (
    <div className={cn(titleDescriptionVariant({ variant }))}>
      <h2 className="text-4xl font-bold">{title.toUpperCase()}</h2>
      <div className="flex flex-col gap-2 max-w-[650px]">
        {descriptions.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      {imageUrl && <Image src={imageUrl.url} alt={imageUrl.alt} width={650} height={400} />}
    </div>
  )
}
