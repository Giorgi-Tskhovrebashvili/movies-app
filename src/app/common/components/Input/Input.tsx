interface InputType {
  className: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
