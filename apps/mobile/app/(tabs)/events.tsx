import { Pressable, SafeAreaView, ScrollView } from 'react-native'
import { bgBlack, flex1, gapY4, p4, py8 } from '@/style'

import CardEvent from '@/components/event/card-event'
import WithoutEvent from '@/components/event/without-event'
import useEvents from '@/data/hooks/useEvents'
import { useRouter } from 'expo-router'

export default function Index() {
  const { events } = useEvents()
  const router = useRouter()

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      {events.length === 0 && <WithoutEvent />}
      <ScrollView contentContainerStyle={[gapY4, py8]}>
        {events.map(event => (
          <Pressable
            key={event.id}
            onPress={() => router.push(`/events/${event.id}`)}
          >
            <CardEvent key={event.id} event={event} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
