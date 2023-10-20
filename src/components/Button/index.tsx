import { FC, ReactNode } from "react"
import './Button.scss'


type ButtonProps  = {
  children: ReactNode
  handleClick: (children: React.ReactNode) => void
  className?: string
}

const Button: FC<ButtonProps> = ({ children, handleClick, className = '' }) => {

  return (
    <button
      className={`button-30 ${className}`}
      onClick={() => handleClick(children)}
    >
      {children}
    </button>
  )
}

export default Button