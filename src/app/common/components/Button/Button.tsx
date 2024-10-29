interface ButtonType {
  children: React.ReactNode;
  onClick: () => void;
  className: string;
}

const Button = ({ children, onClick, className }: ButtonType) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
