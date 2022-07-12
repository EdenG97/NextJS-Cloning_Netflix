import Image from "next/image";
import classes from "./Card.module.css";
import { Fragment } from "react";

type Props = {
  header: string;
  paragraph: string;
  image: string;
  width: number;
  height: number;
  direction?: boolean;
};

const Card = ({
  direction,
  header,
  paragraph,
  image,
  width,
  height,
}: Props): JSX.Element => {
  let element: JSX.Element;
  if (direction) {
    element = (
      <div className={classes["profile-container"]}>
        <div className={classes["inner-container"]}>
          <div className={classes["text-wrapper"]}>
            <h1>{header}</h1>
            <p>{paragraph}</p>
          </div>
          <Image
            src={image}
            alt={image}
            width={width}
            height={height}
          />
        </div>
      </div>
    );
  } else {
    element = (
      <div className={classes["profile-container"]}>
        <div className={classes["inner-container"]}>
          <Image
            src={image}
            alt={image}
            width={width}
            height={height}
          />
          <div className={classes["text-wrapper"]}>
            <h1>{header}</h1>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
  return <Fragment>{element}</Fragment>;
};

export default Card;
