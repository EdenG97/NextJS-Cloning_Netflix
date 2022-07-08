import FormInput from "./FormInput";
import FormOther from "./FormOther";
import classes from "./LoginForm.module.css";

const LoginForm = (): JSX.Element  => {
  return (
    <section className={classes["login-bg"]}>
      <div className={classes.login}>
        <div className={classes["login-container"]}>
          <h1>Sign In</h1>
          <FormInput />
          <FormOther />
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
