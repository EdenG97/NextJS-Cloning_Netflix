import LoginForm from "./loginpage_comp/LoginForm";
import classes from "./Login.module.css";

import { Fragment } from "react";
import FooterSign from "../ui/FooterSign";

const LoginPage = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <LoginForm />
        <FooterSign />
      </div>
    </Fragment>
  );
};

export default LoginPage;
