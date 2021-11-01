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
export function checkValidFields(elementInputs, element, setShowAlert) {
  let filled = true;
  elementInputs.every((elementInput, idx) => {
    if (
      element[elementInput.fieldName].length === 0 &&
      elementInput.fieldName !== "to"
    ) {
      filled = false;
      return false;
    }
    return true;
  });
  if (!filled) {
    setShowAlert({
      message: "Fill All Values",
      duration: 2000,
      color: "rgb(255, 0, 98)",
      isShow: true,
    });
    return false;
  }

  if ("to" in element && "from" in element) {
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
  const resume = resumeRef.current;
  const title = resumeData.fullName + " Resume";
  let convertedTitle = "";
  for (let i = 0; i < title.length; i++) {
    let value = title[i];
    if (value === " ") {
      convertedTitle += "_";
    } else {
      convertedTitle += value.toLowerCase();
    }
  }
  window.print();
}
