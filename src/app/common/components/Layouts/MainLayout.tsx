import { Header } from "..";

interface MainLayoutType {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
