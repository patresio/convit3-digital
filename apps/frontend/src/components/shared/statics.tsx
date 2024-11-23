import Image from 'next/image'

export interface StaticsProps {
  text: string
  value: any
  image: string
}

const Statics = (props: StaticsProps) => {
  return (
    <div className="flex items-center bg-zinc-900 rouded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="text-zinc-400 text-light">{props.text}</span>
        <span className="text-2xl font-bold">{props.value}</span>
      </div>
      <Image src={props.image} alt={props.text} width={80} height={80} />
    </div>
  )
}

export default Statics
