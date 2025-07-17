
function saveAndNext(fieldId, nextPage) {
  const value = document.getElementById(fieldId).value;
  localStorage.setItem(fieldId, value);
  window.location.href = nextPage;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("holidayContainer");
  if (!container) return;

  const country = localStorage.getItem("country");
  let holidays = [];

  if (country === "USA") {
    holidays = ["New Year’s Day", "Martin Luther King Jr. Day", "Presidents’ Day", "Memorial Day", "Juneteenth", "Independence Day", "Labor Day", "Veterans Day", "Thanksgiving", "Day after Thanksgiving", "Christmas Eve", "Christmas Day", "New Year’s Eve", "December 26", "December 27", "December 28", "December 29", "December 30"];
  } else if (country === "UK") {
    holidays = ["New Year’s Day", "Good Friday", "Easter Monday", "Early May Bank Holiday", "Spring Bank Holiday", "Summer Bank Holiday", "Christmas Day", "Boxing Day", "December 27", "December 28", "December 29", "December 30"];
  } else if (country === "Canada") {
    holidays = ["New Year’s Day", "Family Day", "Good Friday", "Victoria Day", "Canada Day", "Civic Holiday", "Labour Day", "Thanksgiving", "Remembrance Day", "Christmas Day", "Boxing Day", "December 27", "December 28", "December 29", "December 30"];
  }

  holidays.forEach(holiday => {
    const label = document.createElement("label");
    label.className = "flex items-center space-x-2";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = holiday;
    checkbox.className = "form-checkbox";
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(holiday));
    container.appendChild(label);
  });
});
