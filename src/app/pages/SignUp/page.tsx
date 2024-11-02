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

const SignUp = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error: any) {
      setErrorMessage(error.message);
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

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Image
          src={"/assets/Movie.svg"}
          alt={"Home-icon"}
          width={32}
          height={25.6}
        />
        <div>
          <h1>Sign Up</h1>
          <div>
            <Input
              className={""}
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
              className={""}
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
            <Input
              className={""}
              type={"password"}
              placeholder={"Repeat Password"}
              value={values.confirmPassword}
              onBlur={handleBlur}
              id={"confirmPassword"}
              name={"confirmPassword"}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className={"text-red-500"}>{errors.confirmPassword}</div>
            )}
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className="flex flex-col">
            <Button className={""} type="submit">
              Create an account
            </Button>
            <span>
              Already have an account? <Link href={"/"}>Login</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
