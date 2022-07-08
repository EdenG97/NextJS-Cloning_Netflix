import LoginForm from "./loginpage_comp/LoginForm";
import classes from "./Login.module.css";
import FooterSign from "../ui/FooterSign";
import { Fragment } from "react";


const LoginPage = (): JSX.Element  => {
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
