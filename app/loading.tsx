import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-5 px-5 py-10 w-screen justify-center">
      <Skeleton className="h-[536px] w-screen" />
      <Skeleton className="h-[536px] w-screen" />
      <Skeleton className="h-[536px] w-screen" />
      <Skeleton className="h-[536px] w-screen" />
    </div>
  )
}
