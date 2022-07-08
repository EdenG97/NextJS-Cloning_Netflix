import Link from "next/link";
import classes from "./FooterLists.module.css";

type Lists = {
  firstList: string;
  secondList: string;
  thirdList: string;
  fourthList: string;
  view?: boolean;
  fifthList?: string;
};

const FooterLists = ({
  firstList,
  secondList,
  thirdList,
  fourthList,
  fifthList,
  view,
}: Lists): JSX.Element => {
  return (
    <ul className={classes["footer-ul"]}>
      <li>
        <Link href="/">
          <a>{firstList}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{secondList}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{thirdList}</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>{fourthList}</a>
        </Link>
      </li>
      {view && (
        <li>
          <Link href="/">
            <a>{fifthList}</a>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default FooterLists;
