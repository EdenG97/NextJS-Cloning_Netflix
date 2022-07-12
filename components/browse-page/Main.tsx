import { Fragment } from "react";
import classes from "./Main.module.css";

const Main = (): JSX.Element => {
  return (
    <div className={classes.style}>
      <h1>Still In Development</h1>
      <p>
        Because this page set cookies for authenticated
        user, you have to clear cookies in the{" "}
        <span>DevTools</span> to see the header on landing
        page
      </p>
    </div>
  );
};

export default Main;
