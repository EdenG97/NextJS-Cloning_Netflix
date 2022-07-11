import classes from "./FormOther.module.css";
import Link from "next/link";

const FormOther = (): JSX.Element => {
  return (
    <div className={classes["login-form_other"]}>
      <span>
        New to Netflix?{" "}
        <Link href="/">
          <a>Sign up now.</a>
        </Link>
      </span>
      <p>
        This page is protected by Google reCAPTCHA to ensure
        you're not a bot.{" "}
        <Link href="/">
          <a>Learn more.</a>
        </Link>
      </p>
    </div>
  );
};

export default FormOther;
