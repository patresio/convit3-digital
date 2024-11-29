import { colors } from '@/style'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

export default function TabsLayout() {
  function options(label: string, icon: string): any {
    return {
      headerShown: false,
      tabBarLabel: label,
      tabBarActiveTintColor: colors.blue[500],
      tabBarInactiveTintColor: colors.zinc[400],
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 'bold'
      },
      tabBarStyle: {
        backgroundColor: colors.zinc[950],
        borderTopWidth: 0
      },
      tabBarIcon: ({ focused }: any) => (
        <AntDesign
          name={icon as any}
          size={24}
          color={focused ? colors.blue[500] : colors.zinc[400]}
        />
      )
    }
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={options('Inicio', 'home')} />
      <Tabs.Screen name="events" options={options('Event', 'calendar')} />
    </Tabs>
  )
}
