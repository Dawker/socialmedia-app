import { ButtonProps } from "../../typescript"


const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button data-testid="button" className='border-2 border-gray-300 p-2'>
      {name || 'Button'}
    </button>
  )
}

export default Button
