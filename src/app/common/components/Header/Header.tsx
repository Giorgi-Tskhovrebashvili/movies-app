import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-auto p-[18px] w-[375px] h-[56px] flex-shrink-0 bg-blue md:w-[719px] md:h-[72px] md:p-[20px] md:rounded-[10px] xl:flex-col xl:justify-normal xl:w-[96px] xl:h-[960px] xl:px-[28px] xl:py-[32px] xl:rounded-[20px] xl:gap-[75px]">
      <Link href={"/pages/Trending"} passHref>
        <Image
          src={"/assets/Movie.svg"}
          alt={"Home-icon"}
          width={32}
          height={25.6}
          className="w-[25px] h-[20px] md:w-[32px] md:h-[25.6px]"
        />
      </Link>
      <ul className="flex justify-between w-[134px] h-[16px] flex-shrink-0 md:w-[172px] md:h-[20px] xl:flex-col xl:w-[20px] xl:h-[200px]">
        <li>
          <Link href="/pages/Trending" passHref>
            <Image
              src={"/assets/home-btn.svg"}
              alt={"Trending-icon"}
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"/pages/Movies"} passHref>
            <Image
              src={"/assets/movies.svg"}
              alt={"Movies-icon"}
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"/pages/TV-Series"} passHref>
            <Image
              src={"/assets/tv-series.svg"}
              alt={"TV-Series-icon"}
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link href={"/pages/Bookmarks"} passHref>
            <Image
              src={"/assets/bookmark.svg"}
              alt={"Bookmarks-icon"}
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
      <Image
        src={"/assets/profile.svg"}
        alt={"Profile-icon"}
        width={40}
        height={40}
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] xl:w-[40px] xl:h-[40px] xl:mt-[477px]"
      />
    </div>
  );
};

export default Header;
