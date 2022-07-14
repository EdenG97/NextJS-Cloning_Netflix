import classes from "./LoadingSpinner.module.css";

type Position = {
  leftPosition?: boolean;
};

const LoadingSpinner = ({ leftPosition }: Position) => {
  let customSpinner;
  leftPosition
    ? (customSpinner = `${classes["lds-spinner"]} ${classes.position}`)
    : (customSpinner = classes["lds-spinner"]);

  return (
    <div className={customSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
