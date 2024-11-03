import { ButtonType } from "../../types";

const Button = ({ children, onClick, className, type }: ButtonType) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
