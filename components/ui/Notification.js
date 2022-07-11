import ReactDOM from "react-dom";
import classes from "./Notification.module.css";
import { useContext, useEffect, useState } from "react";
import NotificationContext from "../../store/NotificationContext";

const Notification = ({ status }) => {
  const [mounted, setMounted] = useState(false);
  const notifContext = useContext(NotificationContext);

  const showNotification = notifContext.notifModal;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  let setClasses = "";
  if (
    status === "User Already Exists" &&
    showNotification
  ) {
    setClasses = classes.exists;
  } else if (
    status === "Successfully Registered" &&
    showNotification
  ) {
    setClasses = classes.success;
  }

  return mounted
    ? ReactDOM.createPortal(
        <div className={`${classes.modal} ${setClasses}`}>
          <p>{status}</p>
        </div>,
        document.getElementById("overlay")
      )
    : null;
};

export default Notification;
