import EmailContext from "../../../store/EmailContext";
import PasswordContext from "../../../store/PasswordContext";
import classes from "./SignupForm.module.css";
import { useRouter } from "next/router";
import React, {
  FormEvent,
  useContext,
  useEffect,
} from "react";
import NotificationContext from "../../../store/NotificationContext";

const SignupForm = (): JSX.Element => {
  const notificationContext = useContext(
    NotificationContext
  );
  const emailContext = useContext(EmailContext);
  const passwordContext = useContext(PasswordContext);
  const router = useRouter();

  useEffect(() => {
    passwordContext.clear();
  }, [router]);

  // Change Handler
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
  const formSubmitHandler = async (event: FormEvent) => {
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
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: emailContext.emailValue,
          password: passwordContext.passwordValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong!"
        );
      } else {
        notificationContext.showNotif(
          "Successfully Registered"
        );
      }
    } catch (error) {
      notificationContext.showNotif("User Already Exists");
    }
  };

  return (
    <div className={classes["signup-container"]}>
      <div className={classes["signup-login"]}>
        <div className={classes["signup-wrapper"]}>
          <h1>
            Create a password to start your membership
          </h1>
          <p>Just a few more steps and you're done!</p>
          <p>We hate paperwork, too.</p>
          <div className={classes["signup-form"]}>
            <div className={classes["signup-type"]}>
              <input
                type="text"
                id="email"
                value={emailContext.emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            {!emailContext.emailCheck && (
              <p className={classes["err-p"]}>
                Please enter a valid email.
              </p>
            )}
            <div className={classes["signup-type"]}>
              <input
                type="password"
                id="password"
                value={passwordContext.passwordValue}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                required
              />
              <label htmlFor="password">
                Add a password
              </label>
            </div>
            {!passwordContext.passwordCheck && (
              <p className={classes["err-p"]}>
                Your password must contain between 6 and 60
                characters.
              </p>
            )}
            <div className={classes["signup-checkbox"]}>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Please do not email me Netflix special
                offers
              </label>
            </div>
            <button onClick={formSubmitHandler}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
