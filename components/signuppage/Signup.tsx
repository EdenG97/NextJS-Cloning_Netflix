import FooterSign from "../ui/FooterSign";
import classes from "./Signup.module.css";
import SignupForm from "./signup_comp/SignupForm";

const Signup = (): JSX.Element => {
  return (
    <section className={classes["signup-container"]}>
      <SignupForm />
      <FooterSign />
    </section>
  );
};

export default Signup;
