import EmailGetStarted from "../../ui/EmailGetStarted";
import classes from "./GetStarted.module.css";
import Image from "next/image";

const GetStarted = (): JSX.Element => {
  return (
    <section className={classes["getstarted-container"]}>
      <div className={classes.gradient} />
      <Image
        alt="landing page background image"
        src="/netflix-img/netflix-landingpage.png"
        objectFit="cover"
        layout="fill"
        priority
      />
      <div className={classes["getstarted-wrapper"]}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <EmailGetStarted />
      </div>
    </section>
  );
};

export default GetStarted;
