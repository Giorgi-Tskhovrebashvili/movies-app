import { Button, Input, MainLayout } from "@/app/common/components";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";

const LogIn = () => {
  return (
    <MainLayout>
      <form>
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
              value={""}
              onBlur={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
              id={"email"}
              name={"email"}
              onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              className={""}
              type={"password"}
              placeholder={"Password"}
              value={""}
              onBlur={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
              id={"password"}
              name={"password"}
              onChange={function (event: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div>
            <Button
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              className={""}
            >
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
