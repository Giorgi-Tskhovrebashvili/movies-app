interface ButtonType {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonType) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
