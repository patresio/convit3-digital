import { Image, Pressable, Text, View } from 'react-native'
import { gapY4, itemsCenter, py1, py4, roundedFull, textWhite } from '@/style'

import { Link } from 'expo-router'
import { button } from '@/style'
import { useCameraPermissions } from 'expo-camera'

const NewEvent = () => {
  const [permission, requestPermission] = useCameraPermissions()

  if (!permission || !permission.granted) {
    return (
      <View>
        <Text>Permissão de camera negada!</Text>
        <Pressable style={[button]} onPress={requestPermission}>
          <Text style={[textWhite]}>Solicitar permissão</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={[itemsCenter, py4, gapY4]}>
      <Link href="/qrcode" asChild>
        <Pressable>
          <Image
            source={require('@/assets/images/qrcode.png')}
            style={{ width: 80, height: 80 }}
          />
        </Pressable>
      </Link>
      <View style={[button, py1, roundedFull]}>
        <Text style={[textWhite]}>Novo Evento</Text>
      </View>
    </View>
  )
}

export default NewEvent
