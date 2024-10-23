interface InputType {
  type: 'text' | 'password';
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, onChange }: InputType) => {
  return <input type={type} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
