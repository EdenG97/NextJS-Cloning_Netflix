import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.css";

import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const path = router.pathname;

  let border: string;
  if (path === "/signup") {
    border = classes["navbar-container_signup"];
  } else {
    border = classes["navbar-container"];
  }

  return (
    <section className={border}>
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
    </section>
  );
};

export default Navigation;
