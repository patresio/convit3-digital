import Image from 'next/image'

export interface WindowProps {
  label?: string
  title?: string
  image?: string
  background?: string
  children: React.ReactNode
}

const Window = (props: WindowProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        src={props.background ? props.background : '/bg-window.png'}
        alt="Imagem de background da janela"
        fill
        className="-z-30 object-cover"
      />
      <div className="bg-black/80">
        <div className="flex items-center gap-7 p-6">
          <div className="h-28 w-28 relative">
            <Image
              src={props.image ? props.image : '/event.png'}
              alt="Imagem do Evento"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-300">
              {props.label ?? 'Detalhes do Evento:'}
            </span>
            <span className="text-4xl font-bold">
              {props.title ?? 'Titulo do Evento:'}
            </span>
          </div>
          <div className="flex-1"></div>
          <Image
            src="/elementos.png"
            alt="Elementos Decorativos"
            width={140}
            height={140}
          />
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Window
