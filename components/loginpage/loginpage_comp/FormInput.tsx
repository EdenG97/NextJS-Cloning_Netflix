import Link from "next/link";
import classes from "./FormInput.module.css";
import PasswordContext from "../../../store/PasswordContext";
import LoadingSpinner from "../../ui/LoadingSpinner";
import EmailContext from "../../../store/EmailContext";
import { signIn } from "next-auth/react";
import React, {
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";

const FormInput = (): JSX.Element => {
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const emailContext = useContext(EmailContext);
  const passwordContext = useContext(PasswordContext);
  const router = useRouter();

  useEffect(() => {
    emailContext.clear();
    passwordContext.clear();
  }, [router]);

  // Input Handler
  const emailChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    emailContext.emailInput(event.target.value);
  };
  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    passwordContext.passwordInput(event.target.value);
  };

  // Blur Handler
  const emailBlurHandler = () => {
    emailContext.emailBlur();
  };
  const passwordBlurHandler = () => {
    passwordContext.passwordBlur();
  };

  // Submit Handler
  const submitFormHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (
      !emailContext.emailCheck ||
      !passwordContext.passwordCheck ||
      emailContext.emailValue === "" ||
      passwordContext.passwordValue === ""
    ) {
      emailContext.emailBlur();
      passwordContext.passwordBlur();
      return;
    }

    try {
      setIsLoading(true);
      const loginIn = await signIn("credentials", {
        redirect: false,
        email: emailContext.emailValue,
        password: passwordContext.passwordValue,
      });

      if (!loginIn?.error) {
        setIsLoading(false);
        console.log("Log you in...");
        router.push("/browse");
      } else {
        throw new Error(
          loginIn.error || "Something went wrong!"
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={classes["login-form"]}>
      <div
        className={
          !emailContext.emailCheck
            ? `${classes["login-input"]} ${classes["err-border"]}`
            : classes["login-input"]
        }
      >
        <input
          type="text"
          id="email"
          value={emailContext.emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          required
        />
        <label htmlFor="email">Email address</label>
      </div>
      {!emailContext.emailCheck && (
        <p className={classes["err-p"]}>
          Please enter a valid email.
        </p>
      )}
      <div
        className={
          !passwordContext.passwordCheck
            ? `${classes["login-input"]} ${classes["err-border"]}`
            : classes["login-input"]
        }
      >
        <input
          type="password"
          id="password"
          value={passwordContext.passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      {!passwordContext.passwordCheck && (
        <p className={classes["err-p"]}>
          Your password must contain between 6 and 60
          characters.
        </p>
      )}

      <button
        onClick={submitFormHandler}
        disabled={isLoading ? true : false}
      >
        {isLoading ? <LoadingSpinner /> : "Sign In"}
      </button>
      <div className={classes["login-rememberme"]}>
        <div>
          <input
            type="checkbox"
            id="remember-me"
            value="rememberme"
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Link href="/">
          <a>Need help?</a>
        </Link>
      </div>
    </div>
  );
};

export default FormInput;
