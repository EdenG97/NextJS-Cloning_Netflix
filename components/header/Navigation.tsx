import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.css";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Fragment } from "react";

const Navigation = (): JSX.Element => {
  const { status } = useSession();

  const router = useRouter();
  const path = router.pathname;

  let border: string;
  path === "/signup"
    ? (border = classes["navbar-container_signup"])
    : (border = classes["navbar-container"]);

  return (
    <Fragment>
      {status === "unauthenticated" && (
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
                <Link href="/login">
                  <a>
                    <button>Sign In</button>
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </header>
      )}
    </Fragment>
  );
};

export default Navigation;
