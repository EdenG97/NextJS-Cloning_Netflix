import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.css";
import NotificationContext from "../../store/NotificationContext";
import { useRouter } from "next/router";
import { useContext } from "react";

const Navigation = (): JSX.Element => {
  const router = useRouter();
  const notificationContext = useContext(
    NotificationContext
  );
  const path = router.pathname;

  const clickHandler = () => {
    router.replace("/login");
  };

  let border: string;
  path === "/signup"
    ? (border = classes["navbar-container_signup"])
    : (border = classes["navbar-container"]);

  return (
    <header className={border}>
      <ul className={classes["navbar-list"]}>
        <li className={classes.image}>
          <Link href="/" passHref>
            <a>
              <Image
                src="/netflix.svg"
                alt="Netflix"
                width={160}
                height={100}
              />
            </a>
          </Link>
        </li>
        {(path === "/" || path === "/signup") && (
          <li className={classes.signin}>
            <button
              onClick={clickHandler}
              disabled={
                notificationContext.notification ===
                "Successfully Registered"
                  ? true
                  : false
              }
            >
              Sign In
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Navigation;
