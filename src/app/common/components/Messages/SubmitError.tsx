import Image from "next/image";

const SubmitError = () => {
  return (
    <p className="flex justify-center items-center gap-[8px] min-h-[100vh] text-[18px] not-italic font-normal leading-[18px] md:text-[24px] md:leading-[36px]">
      <Image
        src={"/assets/images/icon-error.svg"}
        alt="error"
        width={40}
        height={40}
      />
      No data found!
    </p>
  );
};

export default SubmitError;
