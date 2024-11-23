import type { Guest } from '@/core'

export interface GuestItemProps {
  guest: Guest
}

const GuestItem = (props: GuestItemProps) => {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 py-3 border border-zinc-800">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.guest.name}</span>
        <span className="text-zinc-400 text-sm">{props.guest.email}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-zinc-400 text-sm">Acompanhantes</span>
        <span className="text-xl font-bold">
          {props.guest.quantityCompanions}
        </span>
      </div>
    </li>
  )
}

export default GuestItem
