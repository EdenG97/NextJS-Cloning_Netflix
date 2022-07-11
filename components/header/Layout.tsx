import NotificationContext from "../../store/NotificationContext";
import Notification from "../ui/Notification";
import Navigation from "./Navigation";
import React, { Fragment, useContext } from "react";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children): JSX.Element => {
  const notifContext = useContext(NotificationContext);

  return (
    <Fragment>
      <Notification status={notifContext.notification} />
      <Navigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
