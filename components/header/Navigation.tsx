import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.css";
import { useRouter } from "next/router";

const Navigation = (): JSX.Element => {
  const router = useRouter();
  const path = router.pathname;

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
                priority
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
  );
};

export default Navigation;
