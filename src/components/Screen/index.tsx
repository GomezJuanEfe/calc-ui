import { FC } from 'react'
import './Screen.scss'

type ScreenProps = {
  currentValue: string;
}

const Screen: FC<ScreenProps> = ({ currentValue }) => {
  
  return (
    <div className="container-display">
      {currentValue}
    </div>
  )
}

export default Screen