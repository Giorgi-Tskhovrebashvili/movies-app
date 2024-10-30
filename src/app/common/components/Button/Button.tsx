interface ButtonType {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
  type?: "submit" | undefined;
}

const Button = ({ children, onClick, className, type }: ButtonType) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
