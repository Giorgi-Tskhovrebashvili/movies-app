import Button from "../Button/Button";
import Input from "../Input/Input";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Input
        type={"text"}
        placeholder={"Email"}
        onChange={(e) => setEmail(e.target.value)}
        className={""}
        value={""}
        onBlur={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
        id={""}
        name={""}
      />
      <Input
        type={"password"}
        placeholder={"Password"}
        onChange={(e) => setPassword(e.target.value)}
        className={""}
        value={""}
        onBlur={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
        id={""}
        name={""}
      />
      <Button onClick={signIn} className={""}>
        Sign In
      </Button>
    </div>
  );
};

export default Auth;
