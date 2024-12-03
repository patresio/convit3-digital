import { EventsProvider } from '@/data/contexts/events-context'
import { Stack } from 'expo-router'
import { colors } from '@/style'

export default function RootLayout() {
  return (
    <EventsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(stack)/events/[id]"
          options={{
            title: 'Detalhes do Evento',
            headerBackTitle: 'Voltar',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: colors.zinc[900] }
          }}
        />
      </Stack>
    </EventsProvider>
  )
}
