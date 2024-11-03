import { InputType } from "../../types";

const Input = ({
  type,
  placeholder,
  onChange,
  className,
  id,
  name,
  value,
  onBlur,
}: InputType) => {
  return (
    <input
      className={className}
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
