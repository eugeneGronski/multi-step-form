import arcadeImage from './assets/images/icon-arcade.svg'
import advancedImage from './assets/images/icon-advanced.svg'
import proImage from './assets/images/icon-pro.svg'
import { AddOnsData, PlansData } from './types'

export const stepData = [
  {
    id: 1,
    subtitle: 'Your Info',
  },
  {
    id: 2,
    subtitle: 'Select Plan',
  },
  {
    id: 3,
    subtitle: 'Add-ons',
  },
  {
    id: 4,
    subtitle: 'Summary',
  },
]
export const plansData: PlansData[] = [
  {
    id: 1,
    planName: 'Arcade',
    imgSrc: arcadeImage,
    price: 9,
  },
  {
    id: 2,
    planName: 'Advanced',
    imgSrc: advancedImage,
    price: 12,
  },
  {
    id: 3,
    planName: 'Pro',
    imgSrc: proImage,
    price: 15,
  },
]

export const addOnsData: AddOnsData[] = [
  {
    id: 1,
    title: 'Online service',
    subtitle: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 2,
    title: 'Larger storage',
    subtitle: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 3,
    title: 'Customizible profile',
    subtitle: 'Custom theme on your profile',
    price: 3,
  },
]
