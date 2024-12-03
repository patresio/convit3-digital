import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback } from 'react'

export default function useLocalStorage() {
  const saveItem = useCallback(async function (key: string, value: string) {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  }, [])

  const getItem = useCallback(async function (key: string) {
    const value = await AsyncStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }, [])

  const removeItem = useCallback(async function (key: string) {
    await AsyncStorage.removeItem(key)
  }, [])

  return { saveItem, getItem, removeItem }
}
