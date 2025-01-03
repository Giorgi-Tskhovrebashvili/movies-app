"use client";
import { Button, Input } from "@/app/common/components";
import { RegisterValidationSchema } from "@/app/common/utils/validation-schema";
import { useFormik } from "formik";
import Link from "next/link";
import Image from "next/image";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/common/config/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

const SignUp = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-email":
            setErrorMessage("The email address is badly formatted.");
            break;
          case "auth/email-already-in-use":
            setErrorMessage(
              "This email is already in use. Please try another one."
            );
            break;
          default:
            setErrorMessage(
              "An error occurred during sign-up. Please try again."
            );
            break;
        }
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        formik.setFieldError("repeatPassword", "Passwords do not match");
        return;
      }
      signIn(values.email, values.password);
    },
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  const inputStyle =
    "bg-transparent w-[279px] h-[37px] px-[16px] pb-[18px] outline-none border-b-[1px] " +
    "focus:border-b-white caret-red text-[15px] placeholder:opacity-50 md:w-[336px]";

  return (
    <div className="flex justify-center items-center w-[375px] min-h-screen m-auto md:w-[768px] xl:w-[1440px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center px-[24px] pt-[48px] pb-[170px] gap-[58.5px] md:px-[184px] md:pt-[80px] md:pb-[473px] md:gap-[72.5px] xl:px-0 xl:pt-[78.5px] xl:pb-[250px] xl:gap-[83px]"
      >
        <Image
          src={"/assets/images/Movie.svg"}
          alt={"Home-icon"}
          width={32}
          height={25.6}
        />
        <div className="flex flex-col gap-[24px] w-[327px] h-[420px] bg-blue rounded-[10px] shrink-0 p-[24px] md:w-[400px] md:h-[418px] md:rounded-[20px] md:p-[32px]">
          <h2 className="h-[40px] text-[32px] not-italic font-normal leading-normal tracking-tightest mb-[16px]">
            Sign Up
          </h2>
          <div className="flex flex-col gap-[24px] relative">
            <Input
              className={`${inputStyle} ${
                errors.email && touched.email
                  ? "border-b-red"
                  : "border-b-[grey]"
              }`}
              type={"email"}
              placeholder={"Email address"}
              value={values.email}
              onBlur={handleBlur}
              id={"email"}
              name={"email"}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <div className={"text-red absolute top-[-2px] right-0"}>
                {errors.email}
              </div>
            )}
            <Input
              className={`${inputStyle} ${
                errors.email && touched.email
                  ? "border-b-red"
                  : "border-b-[grey]"
              }`}
              type={"password"}
              placeholder={"Password"}
              value={values.password}
              onBlur={handleBlur}
              id={"password"}
              name={"password"}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <div className={"text-red absolute top-[56px] right-0"}>
                {errors.password}
              </div>
            )}
            <Input
              className={`${inputStyle} ${
                errors.email && touched.email
                  ? "border-b-red"
                  : "border-b-[grey]"
              }`}
              type={"password"}
              placeholder={"Repeat Password"}
              value={values.confirmPassword}
              onBlur={handleBlur}
              id={"confirmPassword"}
              name={"confirmPassword"}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className={"text-red absolute top-[116px] right-0"}>
                {errors.confirmPassword}
              </div>
            )}
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className="flex flex-col items-center gap-[24px]">
            <Button
              className={
                "w-[279px] h-[48px] shrink-0 rounded-[6px] mt-[16px] bg-red hover:bg-white hover:text-blue text-center text-[15px] not-italic font-normal leading-normal md:w-[336px] md:mt-0 active:bg-white"
              }
              type="submit"
            >
              Create an account
            </Button>
            <span className="flex justify-center items-start gap-[8px] w-[217px] h-[19px] text-[15px] not-italic font-normal leading-normal flex-shrink-0">
              Already have an account?{" "}
              <Link href={"/"} className="text-red">
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
