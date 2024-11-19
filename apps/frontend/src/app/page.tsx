import PageTemplate from '@/components/template/page'
import type { Event } from '@/core'

export default function Home() {
  const e: Partial<Event> = {}
  return (
    <PageTemplate>
      <div>Home</div>
    </PageTemplate>
  )
}
