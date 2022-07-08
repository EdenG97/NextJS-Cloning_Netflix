import Link from "next/link";
import classes from "./Footer.module.css";
import FooterFirstList from "./footer_comp/FooterFirstList";
import FooterFourthList from "./footer_comp/FooterFourthList";
import FooterSecondList from "./footer_comp/FooterSecondList";
import FooterThirdList from "./footer_comp/FooterThirdList";

const Footer = (): JSX.Element  => {
  return (
    <section className={classes["footer-container"]}>
      <div className={classes["footer-wrapper"]}>
        <p>
          Questions? Call{" "}
          <Link href="tel:007-803-321-2130">
            <a>007-803-321-2130</a>
          </Link>
        </p>
        <div className={classes["footer-list_item"]}>
          <FooterFirstList />
          <FooterSecondList />
          <FooterThirdList />
          <FooterFourthList />
        </div>
      </div>
    </section>
  );
};

export default Footer;
