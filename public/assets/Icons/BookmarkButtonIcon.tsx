import { IconType } from "@/app/common/types";

const BookmarkButtonIcon = ({ className }: IconType) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.500647"
        width="32"
        height="32"
        rx="16"
        fill="#10141E"
        className=" hover:fill-white transition-colors duration-300"
      />
      <path
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="white"
        strokeWidth="1.5"
        className={className}
        transform="translate(10, 9)"
      />
    </svg>
  );
};

export default BookmarkButtonIcon;
