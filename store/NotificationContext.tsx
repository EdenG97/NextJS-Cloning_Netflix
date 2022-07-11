import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

// Context
const NotificationContext = createContext({
  notification: "",
  notifModal: false,
  showNotif: (notif: string) => {},
});

export default NotificationContext;

// Context Provider
type Children = {
  children: React.ReactNode;
};

export const NotificationContextProvider = ({
  children,
}: Children): JSX.Element => {
  const [activeNotification, setActiveNotification] =
    useState<string>("");
  const [showNotif, setShowNotif] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (activeNotification === "Successfully Registered") {
      const timer = setTimeout(() => {
        setShowNotif(false);
        router.replace("/login");
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    } else if (
      activeNotification === "User Already Exists"
    ) {
      const timer = setTimeout(() => {
        setShowNotif(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification, showNotif]);

  const showNotificationHandler = (notif: string) => {
    if (notif) {
      setActiveNotification(notif);
      setShowNotif(true);
    }
  };

  const store = {
    notification: activeNotification,
    notifModal: showNotif,
    showNotif: showNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={store}>
      {children}
    </NotificationContext.Provider>
  );
};
