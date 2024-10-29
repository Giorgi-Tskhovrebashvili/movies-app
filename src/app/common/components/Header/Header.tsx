import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div>
        <Link href={"/"} passHref>
          <Image
            src={"/assets/Movie.svg"}
            alt={"Home-icon"}
            width={32}
            height={25.6}
          />
        </Link>
        <ul>
          <li>
            <Link href="/" passHref>
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
      </div>
      <Image
        src={"/assets/profile.svg"}
        alt={"Profile-icon"}
        width={40}
        height={40}
      />
    </div>
  );
};

export default Header;
