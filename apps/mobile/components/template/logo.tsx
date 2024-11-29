import {
  alignCenter,
  flexRow,
  text3Xl,
  textBlue500,
  textWhite,
  textCenter,
  w4_5
} from '@/style'
import { useFonts } from 'expo-font'
import { Image, Text, View } from 'react-native'
import { textZinc400 } from '../../style/utility'

export default function Logo() {
  const [loaded] = useFonts({
    Righteous: require('@/assets/fonts/Righteous-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  const font = {
    fontFamily: 'Righteous'
  }

  return (
    <View style={alignCenter}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{
          width: 80,
          height: 80
        }}
      />
      <View style={flexRow}>
        <Text style={[font, text3Xl, textWhite]}>CONVIT</Text>
        <Text style={[font, text3Xl, textBlue500]}>3 </Text>
        <Text style={[font, text3Xl, textWhite]}>DIGITAL</Text>
      </View>
      <View style={w4_5}>
        <Text style={[textZinc400, textCenter]}>
          Crie e gerencie o convite do seu evento de forma rápida e fácil, sem
          complicação!
        </Text>
      </View>
    </View>
  )
}
