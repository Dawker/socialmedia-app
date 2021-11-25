import { atom } from 'recoil'
import type { INotifications } from '../typescript/atoms/interface'

const defaultState = {
  howMany: 0,
  notifications: []
}

export const notifications = atom<INotifications>({
  key: 'notifications',
  default: defaultState,
})