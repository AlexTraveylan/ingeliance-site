import Image from "next/image"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 py-5">
      <Image alt="not found" width={600} height={600} src="/404.png" />
    </div>
  )
}
