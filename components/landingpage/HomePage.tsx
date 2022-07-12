import FAQ from "./landingpage_comp/FAQ";
import Footer from "./landingpage_comp/Footer";
import GetStarted from "./landingpage_comp/GetStarted";
import Profile from "./landingpage_comp/Profile";
import { Fragment } from "react";

const HomePage = (): JSX.Element => {
  return (
    <Fragment>
      <GetStarted />
      <Profile />
      <FAQ />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
