import { ImageBackground } from 'react-native'
import { bgBlack, centerGrow } from '@/style'
import Logo from '@/components/template/logo'

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      resizeMode="cover"
      style={[centerGrow, bgBlack]}
    >
      <Logo />
    </ImageBackground>
  )
}
