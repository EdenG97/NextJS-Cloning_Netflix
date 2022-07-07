import EmailGetStarted from "../../ui/EmailGetStarted";
import classes from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <section className={classes["getstarted-container"]}>
      <div className={classes["getstarted-wrapper"]}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <EmailGetStarted />
      </div>
    </section>
  );
};

export default GetStarted;
