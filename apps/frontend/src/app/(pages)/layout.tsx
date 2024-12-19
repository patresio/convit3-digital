import PageTemplate from '@/components/template/page'
import { PropsWithChildren } from 'react'
import { EventContextProvider } from '@/data/contexts/event-context'
import { ProviderContextMessage } from '@/data/contexts/context-message'
import { Toaster } from '@/components/ui/toaster'

const Layout = (props: PropsWithChildren<unknown>) => {
  return (
    <ProviderContextMessage>
      <EventContextProvider>
        <PageTemplate>{props.children}</PageTemplate>
        <Toaster />
      </EventContextProvider>
    </ProviderContextMessage>
  )
}

export default Layout
