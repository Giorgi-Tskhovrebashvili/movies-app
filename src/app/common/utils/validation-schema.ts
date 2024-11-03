import * as Yup from "yup";

export const LoginInValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@gmail.com$/, "The entered Email must be valid")
    .required("Can’t be empty"),
  password: Yup.string()
    .min(8, "Must be 8 characters or less")
    .required("Can’t be empty"),
});

export const RegisterValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@gmail.com$/, "The entered Email must be valid")
    .required("Can’t be empty"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Can’t be empty"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Can’t be empty"),
});
