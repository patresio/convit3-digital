import { CameraView } from 'expo-camera'
import useEvents from '@/data/hooks/useEvents'
import { useRouter } from 'expo-router'
import { flex1 } from '@/style'

const DisplayQrCode = () => {
  const { addEventQrCode } = useEvents()
  const router = useRouter()
  return (
    <CameraView
      facing="back"
      style={[flex1]}
      onBarcodeScanned={({ data }) => {
        addEventQrCode(data)
        router.back()
      }}
    />
  )
}

export default DisplayQrCode
