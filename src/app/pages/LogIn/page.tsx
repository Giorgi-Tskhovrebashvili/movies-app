"use client";
import { Button, Input } from "@/app/common/components";
import { LoginInValidationSchema } from "@/app/common/utils/validation-schema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../common/config/firebase";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogIn = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const logIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        router.push("/pages/Trending");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginInValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      logIn(values.email, values.password);
    },
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  return (
    <div className="flex justify-center items-center w-[375px] min-h-screen m-auto md:w-[768px] xl:w-[1440px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-[24px] pt-[48px] pb-[170px] gap-[58.5px] md:px-[184px] md:pt-[80px] md:pb-[473px] md:gap-[72.5px] xl:px-0 xl:pt-[78.5px] xl:pb-[250px] xl:gap-[83px]"
      >
        <Image
          src={"/assets/Movie.svg"}
          alt={"Home-icon"}
          width={32}
          height={25.6}
        />
        <div className="flex flex-col gap-[40px] w-[327px] h-[365px] bg-blue rounded-[10px] shrink-0 p-[24px] md:w-[400px] md:h-[373px] md:rounded-[20px] md:p-[32px]">
          <h1 className="h-[40px] text-[32px] not-italic font-normal leading-normal tracking-tightest">Login</h1>
          <div className="flex flex-col gap-[24px]">
            <Input
              className={"bg-transparent w-[279px] h-[37px] shrink-0 px-[16px] pb-[18px] outline-none border-b-[1px] border-b-[grey] focus:border-b-[1px] focus:border-b-white caret-red text-[15px] not-italic font-normal leading-normal placeholder:opacity-50 md:w-[336px]"}
              type={"email"}
              placeholder={"Email address"}
              value={values.email}
              onBlur={handleBlur}
              id={"email"}
              name={"email"}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className={"text-red-500"}>{errors.email}</div>
            )}
            <Input
              className={"bg-transparent w-[279px] h-[37px] shrink-0 px-[16px] pb-[18px] outline-none border-b-[1px] border-b-[grey] focus:border-b-[1px] focus:border-b-white caret-red text-[15px] not-italic font-normal leading-normal placeholder:opacity-50 md:w-[336px]"}
              type={"password"}
              placeholder={"Password"}
              value={values.password}
              onBlur={handleBlur}
              id={"password"}
              name={"password"}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <div className={"text-red-500"}>{errors.password}</div>
            )}
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className="flex flex-col items-center gap-[24px]">
            <Button className={"w-[279px] h-[48px] shrink-0 rounded-[6px] bg-red text-center text-[15px] not-italic font-normal leading-normal md:w-[336px]"} type={"submit"}>
              Login to your account
            </Button>
            <span className="flex justify-center items-start gap-[9px] w-[216px] h-[19px] text-[15px] not-italic font-normal leading-normal">
              Don’t have an account? <Link href={"/pages/SignUp"} className="text-red">Sign Up</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
