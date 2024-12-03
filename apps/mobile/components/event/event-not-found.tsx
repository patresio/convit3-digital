import { Text, View } from 'react-native'
import { bgBlack, flex1, textWhite } from '@/style'

export default function EventNotFound() {
  return (
    <View style={[bgBlack, flex1]}>
      <Text style={[textWhite]}>Evento não encontrado</Text>
    </View>
  )
}
