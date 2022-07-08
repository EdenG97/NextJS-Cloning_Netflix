import React, { Fragment } from "react";
import Navigation from "./Navigation";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children): JSX.Element => {
  return (
    <>
      <Navigation />
      <Fragment>{children}</Fragment>
    </>
  );
};

export default Layout;
