import classes from "./FAQLists.module.css";
import { useState } from "react";

type State = boolean;
type Props = {
  direction?: boolean;
  firstParagraph: string;
  secondParagraph?: string;
  question: string;
};

const FAQLists = ({
  direction,
  question,
  firstParagraph,
  secondParagraph,
}: Props): JSX.Element => {
  const [view, setView] = useState<State>(false);
  let show;
  let rotate;
  let element: JSX.Element;

  const buttonClickHandler = () => {
    setView(!view);
  };

  if (view) {
    show = `${classes["faq-answer"]} ${classes.open}`;
    rotate = classes["rotate-closed"];
  } else {
    show = `${classes["faq-answer"]} ${classes.closed}`;
    rotate = classes["rotate-open"];
  }

  if (direction) {
    element = (
      <li className={classes["faq-list"]}>
        <button onClick={buttonClickHandler}>
          {question}
          <svg
            className={rotate}
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
          </svg>
        </button>
        <span className={show}>
          {firstParagraph}
          <br />
          <br />
          {secondParagraph}
        </span>
      </li>
    );
  } else {
    element = (
      <li className={classes["faq-list"]}>
        <button onClick={buttonClickHandler}>
          {question}
          <svg
            className={rotate}
            width="256px"
            height="256px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
          </svg>
        </button>
        <span className={show}>{firstParagraph}</span>
      </li>
    );
  }

  return <>{element}</>;
};

export default FAQLists;
