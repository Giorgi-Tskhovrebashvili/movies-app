"use client";
import { Button, Input, MainLayout } from "@/app/common/components";
import { LoginInValidationSchema } from "@/app/common/utils/validation-schema";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginInValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      values.email, values.password;
    },
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;

  return (
    <MainLayout>
      <form onSubmit={handleSubmit}>
        <Image
          src={"/assets/Movie.svg"}
          alt={"Home-icon"}
          width={32}
          height={25.6}
        />
        <div>
          <h1>Login</h1>
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
          </div>
          <div>
            <Button className={""} type={"submit"}>
              Login to your account
            </Button>
            <span>
              Don’t have an account? <Link href={"/pages/SignUp"}>Sign Up</Link>
            </span>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default LogIn;
