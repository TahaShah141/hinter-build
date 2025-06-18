import { TechnologyType, technologies } from "@/lib/constants/technologies"

const TechnologyCard = ({ name, desc, src }: TechnologyType) => {
  return (
    <div className="p-10 bg-white w-full rounded-lg flex flex-col gap-4 items-center justify-center drop-shadow-lg">
      <img src={src} className="h-12" />
      <p className="font-bold">{name}</p>
      <p className="font-light text-muted-foreground text-sm text-center max-w-[250px]">{desc}</p>
    </div>
  )
}

export const Technologies = () => {
  return (
    <div className="p-20 bg-white text-neutral-800 flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="font-bold text-6xl">Technologies</h2>
        <div className="h-1 rounded-full w-32 bg-primary" />
        <p className="text-muted-foreground">{"Leveraging cutting-edge tools and frameworks to build robust, scalable solutions"}</p>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full">
        {technologies.map((technology, i) => <TechnologyCard key={i} {...technology} />)}
      </div>
    </div>
  )
}
