import classes from "./EmailGetStarted.module.css";
import EmailContext from "../../store/EmailContext";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import LoadingSpinner from "./LoadingSpinner";

const EmailGetStarted = (): JSX.Element => {
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const emailContext = useContext(EmailContext);
  const router = useRouter();

  useEffect(() => {
    emailContext.clear();
  }, [router]);

  const emailChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    emailContext.emailInput(event.target.value);
  };

  const blurHandler = () => {
    emailContext.emailBlur();
  };

  const formSubmitHandler = async () => {
    if (
      !emailContext.emailCheck ||
      emailContext.emailValue === ""
    ) {
      emailContext.emailBlur();
      return;
    }

    setIsLoading(true);
    const response = await fetch("/api/auth/emailCheck", {
      method: "POST",
      body: JSON.stringify({
        email: emailContext.emailValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      router.push("/login");
    } else {
      router.push("/signup");
    }
  };

  return (
    <div className={classes["getstarted-email"]}>
      <p>
        Ready to watch? Enter your email to create or
        restart your membership.
      </p>
      <div
        className={
          !emailContext.emailCheck
            ? `${classes["form-container"]} ${classes["err-border"]}`
            : classes["form-container"]
        }
      >
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={emailContext.emailValue}
          onBlur={blurHandler}
          onChange={emailChangeHandler}
          required
        />
        <label htmlFor="email">Email address</label>
        <button
          onClick={formSubmitHandler}
          disabled={isLoading ? true : false}
        >
          {isLoading ? <LoadingSpinner /> : "Get Started >"}
        </button>
      </div>
      {!emailContext.emailCheck && (
        <p className={classes["err-p"]}>
          Please enter a valid email address
        </p>
      )}
    </div>
  );
};

export default EmailGetStarted;
