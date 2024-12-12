'use client'

import useEventContext from '@/data/hooks/useEvent'

const EventPage = () => {
  const { event } = useEventContext()
  console.log(event?.id)

  return (
    <div>
      <h1>{event?.id}</h1>
    </div>
  )
}

export default EventPage
