import { useEffect } from "react";
export default function ShowAlert({ showAlert, setShowAlert }) {
  const { message, isShow, duration, color } = showAlert;
  useEffect(() => {
    const dur = duration;
    if (isShow) {
      setTimeout(() => {
        setShowAlert({
          message: "",
          isShow: false,
          duration: 0,
          color: "#000",
        });
      }, dur);
    }
  }, [showAlert]);

  return (
    <div
      className={"alert-box " + (isShow ? "show-alert" : "")}
      style={{ backgroundColor: color }}
    >
      {message}
    </div>
  );
}
