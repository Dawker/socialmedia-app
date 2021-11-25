import { atom } from 'recoil'

export const modal = atom<boolean>({
  key: 'modalShow',
  default: false,
})