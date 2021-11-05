export function checkIfAnyEmpty(field) {
  let check = false;
  Object.entries(field).forEach((x) => {
    if (x[0] !== "to" && x[1].trim().length === 0) {
      check = true;
    }
  });
  return check;
}

export function transformDate(dateValue) {
  if (dateValue.length === 0) {
    return "present";
  }
  let months = [
    "",
    "Jan.",
    "Feb.",
    "March",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  return (
    dateValue.substr(8, 2) +
    " " +
    months[parseInt(dateValue.substr(5, 2))] +
    " " +
    dateValue.substr(0, 4)
  );
}

export function getProgress(progress) {
  return `linear-gradient(to right, red 0% ${progress}%, white ${progress}% 100%`;
}
export function compareDates(a, b) {
  const x = new Date(a);
  const y = new Date(b);
  return x <= y;
}
function checkFuture(d) {
  if (d.length === 0) {
    return false;
  }
  const x = new Date(d);
  const y = new Date();
  return x >= y;
}
export function checkValidFields(elementInputs, element, setShowAlert) {
  let filled = true;
  elementInputs.every((elementInput, idx) => {
    if (
      element[elementInput.fieldName].length === 0 &&
      elementInput.isRequired
    ) {
      filled = false;
      setShowAlert({
        message: `Fill "${elementInput.labelName}" field.`,
        duration: 2000,
        color: "rgb(255, 0, 98)",
        isShow: true,
      });
      return false;
    }
    return true;
  });
  if (!filled) {
    return false;
  }

  if ("to" in element && "from" in element) {
    if (checkFuture(element["from"]) || checkFuture(element["to"])) {
      setShowAlert({
        message: "Start End or End Date cannot be greater than present date.",
        duration: 3000,
        color: "rgb(255, 0, 98)",
        isShow: true,
      });
      return false;
    }
    if (
      compareDates(element["from"], element["to"]) ||
      element["to"].length === 0
    ) {
      return true;
    } else {
      setShowAlert({
        message: "End date should be greater than starting date.",
        duration: 2000,
        color: "rgb(255, 0, 98)",
        isShow: true,
      });
      return false;
    }
  }
  return true;
}

export function saveToLocalStorage(resumeData) {
  localStorage.setItem("resumeData", JSON.stringify(resumeData));
}

export function downloadResume(resumeRef, resumeData) {
  window.print();
}

export function changeRootTheme(theme) {
  document.documentElement.style.setProperty(
    "--resume-primary-color",
    theme.primaryColor
  );
  document.documentElement.style.setProperty(
    "--resume-secondary-color",
    theme.secondaryColor
  );
  document.documentElement.style.setProperty(
    "--resume-background-color",
    theme.backgroundColor
  );
  document.documentElement.style.setProperty(
    "--resume-primary-font",
    theme.primaryFont
  );
  document.documentElement.style.setProperty(
    "--resume-secondary-font",
    theme.secondaryFont
  );
}
