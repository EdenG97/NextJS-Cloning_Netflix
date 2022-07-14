import LoginForm from "./loginpage_comp/LoginForm";
import classes from "./Login.module.css";
import FooterSign from "../ui/FooterSign";
import Image from "next/image";
import { Fragment } from "react";

const LoginPage = (): JSX.Element => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.gradient} />
        <Image
          alt="Netflix login background"
          src="/netflix-img/netflix-background-login.jpg"
          layout="fill"
          objectFit="cover"
        />
        <LoginForm />
        <FooterSign />
      </div>
    </Fragment>
  );
};

export default LoginPage;
