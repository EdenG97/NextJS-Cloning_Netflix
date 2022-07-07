import Link from "next/link";
import classes from "./FooterSign.module.css";
import { useRouter } from "next/router";

const FooterSign = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <section
      className={
        path === "/login"
          ? classes["footer-container"]
          : classes["style-footer"]
      }
    >
      <div className={classes["footer-wrapper"]}>
        <p>
          Questions? Call{" "}
          <Link href="tel:007-803-321-2130">
            <a>007-803-321-2130</a>
          </Link>
        </p>
        <div className={classes["footer-list"]}>
          <ul>
            <li>
              <Link href="/">
                <a>FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Cookie Preferences</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Help Center</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Corporate Information</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Terms of Use</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <a>Privacy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FooterSign;
