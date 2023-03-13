import React from 'react'
import './CardPlan.css'

interface CardPlanData {
  imageSrc: string
  planName: string
  price: number
  isSelected: boolean
  onClick: () => void
}

export const CardPlan: React.FC<CardPlanData> = ({
  imageSrc,
  planName,
  price,
  isSelected,
  onClick,
}) => {
  // const [selected, setIsSelected] = useState(false);
  return (
    <>
      <div
        aria-disabled={isSelected}
        onClick={onClick}
        className={`card-container ${
          isSelected ? 'card-container-active' : ''
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <img className="icon" src={imageSrc} alt="" />
          <div>
            <h3 className="plan-name">{planName}</h3>
            <p className="price-text">${price}/mo</p>
          </div>
        </div>
      </div>
    </>
  )
}
