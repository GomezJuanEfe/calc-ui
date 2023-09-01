import { FC, ReactNode } from "react"


type ButtonProps  = {
  children: ReactNode;
  handleClick: any;
}

const Button: FC<ButtonProps> = ({ children, handleClick }) => {

  return (
    <button
      onClick={() => handleClick(children)}
    >
      {children}
      
    </button>
  )
}

export default Button 