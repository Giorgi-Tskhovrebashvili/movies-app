import Image from "next/image";
import { Input } from "..";
import { SearchType } from "../../types";

const Search = ({ placeholder, onChange }: SearchType) => {
  return (
    <div className="flex items-center gap-[16px] h-[24px] md:gap-[24px]">
      <Image
        src={"/assets/images/search.svg"}
        alt={"search-icon"}
        width={24}
        height={24}
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
      />
      <Input
        className={
          "bg-transparent placeholder:opacity-49 w-[100%] text-[16px] not-italic font-normal leading-normal outline-none md:text-[24px] xl:focus:border-b-gray xl:focus:border-b-[1px] xl:h-[50px] xl:focus:mb-1 caret-red"
        }
        type={"search"}
        placeholder={placeholder}
        id={"search"}
        name={"search"}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
