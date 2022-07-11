import Link from "next/link";
import classes from "./CannotFound.module.css";

const CannotFound = (): JSX.Element => {
  return (
    <div className={classes["not-found_container"]}>
      <div className={classes["not-found_wrapper"]}>
        <div>
          <h1>Lost your way?</h1>
          <p>
            Sorry, we can't find that page. You'll find lots
            to explore on the home page.
          </p>
          <Link href="/">
            <a>Netflix Home</a>
          </Link>
        </div>
        <div>
          <p>
            Error Code <span>NSES-404</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CannotFound;
