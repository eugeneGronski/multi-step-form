import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import './AddOns.css'
import { addOnsData } from '../../const'
import { AddOnsData } from '../../types'

interface AddOns {
  title: string
  subtitle: string
  price: number
  setAddons: React.Dispatch<React.SetStateAction<AddOnsData[] | []>>
  id: number
  addons?: AddOnsData[]
}

export const AddOns: React.FC<AddOns> = ({
  title,
  subtitle,
  price,
  id,
  setAddons,
  addons,
}) => {
  const addon: AddOnsData = addOnsData.find(
    (data) => data.id === id
  ) as AddOnsData
  const isAddonsChecked = addons ? addons.includes(addon) : false

  const [checked, setChecked] = useState<boolean>(isAddonsChecked)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)

    if (event.target.checked) {
      addAddon()
    } else {
      removeAddon()
    }
  }

  const addAddon = () => {
    setAddons((prev: AddOnsData[]) => [...new Set([...prev, addon])])
  }

  const removeAddon = () => {
    setAddons((prev: AddOnsData[]) => prev.filter((data) => data !== addon))
  }

  return (
    <>
      <div
        className={`${checked ? 'add-ons-card-active' : ''} flex add-ons-card`}
      >
        <Checkbox
          {...label}
          size="medium"
          checked={checked}
          onChange={handleChange}
        />
        <div className="flex w-full justify-between">
          <div className="flex-col">
            <h2 className="text-base">{title}</h2>
            <p className="text-slate-400 text-sm">{subtitle}</p>
          </div>
          <div className="flex flex-wrap content-center text-slate-500 text-base">
            {`+${price}/mo`}
          </div>
        </div>
      </div>
    </>
  )
}
