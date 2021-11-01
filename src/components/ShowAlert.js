import { useEffect } from "react";
export default function ShowAlert({ showAlert, setShowAlert }) {
  const { message, isShow, duration, color } = showAlert;
  useEffect(() => {
    const dur = duration;
    setTimeout(() => {
      if (isShow)
        setShowAlert({
          message: "",
          isShow: false,
          duration: 1000,
          color: "#000",
        });
    }, dur);
  });

  return (
    <div
      className={"alert-box " + (isShow ? "show-alert" : "")}
      style={{ backgroundColor: color }}
    >
      {message}
    </div>
  );
}
