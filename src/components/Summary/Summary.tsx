import React from 'react'
import { AddOnsData, PlansData } from '../../types'
import './Summary.css'
import { Divider } from '@mui/material'

interface ISummary {
  plan: PlansData
  monthly: boolean
  addons: AddOnsData[]
}
export const Summary: React.FC<ISummary> = ({ plan, monthly, addons }) => {
  const addonsPrice =
    addons.reduce((prev, value) => {
      return prev + value.price
    }, 0) + plan.price

  return (
    <div className="card">
      <div className="mainInfo">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="header text-xl py-2">
                {plan.planName} {monthly ? '(Monthly)' : '(Annual)'}
              </div>
              {/* <button>Change</button> */}
            </div>
            <div className="text-xl">
              ${monthly ? plan.price : plan.price * 12}/{monthly ? 'mo' : 'yr'}
            </div>
          </div>
          <Divider></Divider>
          <div className="addons">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="flex justify-between text-base py-1 text-slate-400"
              >
                <div>{addon.title}</div>
                <div>
                  +${monthly ? addon.price : addon.price * 12}/
                  {monthly ? 'mo' : 'yr'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="total">
        <Divider></Divider>
        <div className="flex justify-between text-base text-slate-400 py-3">
          <div>Total ({monthly ? 'per month' : 'per year'} )</div>
          <div>
            ${monthly ? addonsPrice : addonsPrice * 12}/{monthly ? 'mo' : 'yr'}
          </div>
        </div>
      </div>
    </div>
  )
}
