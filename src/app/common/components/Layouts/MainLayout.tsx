import { Header } from "..";
import { MainLayoutType } from "../../types";

const MainLayout = ({ children }: MainLayoutType) => {
  return (
    <div className="flex flex-col gap-[16px] h-[100vh] overflow-y-hidden md:justify-center md:items-start md:gap-[33px] md:pt-[23px] md:pl-[25px] xl:flex-row xl:p-[32px] xl:gap-[36px] xl:h-[1024px]">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
