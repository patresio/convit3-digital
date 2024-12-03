import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native'
import {
  bgBlack,
  bgRed500,
  button,
  flex1,
  flexRow,
  fontBold,
  gapX2,
  gapY4,
  p4,
  py4,
  roundedLg,
  selfCenter,
  textWhite,
  w4_5,
  wFull
} from '@/style'
import { useLocalSearchParams, useRouter } from 'expo-router'

import { AntDesign } from '@expo/vector-icons'
import EventInformation from '@/components/event/event-information'
import EventNotFound from '@/components/event/event-not-found'
import { Guest } from 'core'
import GuestList from '@/components/event/guest-list'
import SessionTitle from '@/components/shared/session-title'
import Statics from '@/components/shared/static'
import { useEffect } from 'react'
import useEvents from '@/data/hooks/useEvents'

export default function DetailsEventForId() {
  const { event, getEvent, delEvent } = useEvents()
  const params = useLocalSearchParams()
  const router = useRouter()

  useEffect(() => {
    getEvent(params.id as string)
  }, [params.id])

  const presence = event?.guests.filter((g: Guest) => g.confirmation) ?? []
  const absent = event?.guests.filter((g: Guest) => !g.confirmation) ?? []

  const totalGuests = presence.reduce((total: number, guest: Guest) => {
    return total + guest.quantityCompanions + 1
  }, 0) // Initialize with 0

  return event ? (
    <SafeAreaView style={[bgBlack, flex1, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image
          source={{ uri: event.image }}
          style={[{ height: 200 }, wFull, roundedLg]}
        />
        <EventInformation event={event} />
        <View style={[flexRow, gapX2, { marginTop: 40 }]}>
          <Statics
            text="Expectativa"
            value={event.expectedAudience}
            image={require('@/assets/images/convidados.png')}
          />
          <Statics
            text="Confirmações"
            value={presence.length}
            image={require('@/assets/images/confirmados.png')}
          />
          <Statics
            text="Total"
            value={totalGuests}
            image={require('@/assets/images/acompanhantes.png')}
          />
        </View>
        <SessionTitle text="Presenças Confirmadas" />
        <GuestList guests={presence} />
        <SessionTitle text="Ausências Confimadas" />
        <GuestList guests={absent} />

        <Pressable
          style={[button, bgRed500, w4_5, selfCenter]}
          onPress={() => {
            delEvent(event.id)
            router.back()
          }}
        >
          <AntDesign name="delete" size={20} color="white" />
          <Text style={[textWhite, fontBold]}>Excluir Evento</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EventNotFound />
  )
}
