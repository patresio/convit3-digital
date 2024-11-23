import type { Guest } from '@/core'
import GuestItem from './guest-item'

export interface ListGuestProps {
  guests: Guest[]
}

export default function ListGuest({ guests }: ListGuestProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {guests.map(guest => (
          <GuestItem key={guest.id} guest={guest} />
        ))}
      </ul>
    </div>
  )
}
