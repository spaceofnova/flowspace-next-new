import { useState } from "react";

export function useAlert() {
  const [alertConfig, setAlertConfig] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showAlert = (message: string, type: string = "success") => {
    setAlertConfig({ show: true, message, type });

    setTimeout(() => {
      setAlertConfig({ show: false, message: "", type: "success" });
    }, 3000);
  };

  return { showAlert, alertConfig };
}
