import { ButtonProps } from "../../../typescript"

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button data-testid="button" className={'border-2 border-gray-300 p-2'}>
      {text}
    </button>
  )
}

export default Button
