import { useState, useEffect } from "react";

import { subscribe, unsubscribe } from "../event";

import { ALERT_TYPE_CLASS } from "../constanst";

export interface IAlertProps {}

const Alert: React.FC<IAlertProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("34234");

  const [alertClass, setAlertClass] = useState(ALERT_TYPE_CLASS.SUCCESS);

  useEffect(() => {
    subscribe("showAlert", (event: any) => {
      setAlertClass(event?.detail?.alertClass || ALERT_TYPE_CLASS.SUCCESS);
      setMessage(event?.detail?.message || "");

      setIsOpen(true);

      setTimeout(() => {
        setIsOpen(false);
        setMessage(ALERT_TYPE_CLASS.SUCCESS);
      }, 2000);
    });
    subscribe("hideList", () => setIsOpen(false));

    return () => {
      unsubscribe("showAlert", null);
      unsubscribe("hideList", null);
    };
  }, []);

  return (
    <>
      <div style={{ position: "absolute", top: 0, right: 110 }}>
        {isOpen && (
          <div className={`alert ${alertClass}`} role="alert">
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;
