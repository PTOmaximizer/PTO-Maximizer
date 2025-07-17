function saveAndNext(id, nextPage) {
  const input = document.getElementById(id);
  const value = input ? input.value : "";

  // Only show alert if the field is explicitly required
  if (input && input.hasAttribute("required") && !value) {
    alert("Please enter a value.");
    return;
  }

  localStorage.setItem(id, value || "");
  window.location.href = nextPage;
}
function skipVacationDates() {
  localStorage.setItem('vacationStart', '');
  localStorage.setItem('vacationEnd', '');
  window.location.href = 'results.html';
}
localStorage.setItem("country", selectedCountry);

const holidaysByCountry = {
  US: [
    { label: "New Year's Day", date: "2025-01-01" },
    { label: "Martin Luther King Jr. Day", date: "2025-01-20" },
    { label: "Presidents' Day", date: "2025-02-17" },
    { label: "Memorial Day", date: "2025-05-26" },
    { label: "Juneteenth", date: "2025-06-19" },
    { label: "Independence Day", date: "2025-07-04" },
    { label: "Labor Day", date: "2025-09-01" },
    { label: "Thanksgiving Day", date: "2025-11-27" },
    { label: "Day After Thanksgiving", date: "2025-11-28" },
    { label: "Christmas Eve", date: "2025-12-24" },
    { label: "Christmas Day", date: "2025-12-25" },
    { label: "New Year's Eve", date: "2025-12-31" }
  ],
  UK: [
    { label: "New Year’s Day", date: "2025-01-01" },
    { label: "Good Friday", date: "2025-04-18" },
    { label: "Easter Monday", date: "2025-04-21" },
    { label: "Early May Bank Holiday", date: "2025-05-05" },
    { label: "Spring Bank Holiday", date: "2025-05-26" },
    { label: "Summer Bank Holiday", date: "2025-08-25" },
    { label: "Christmas Day", date: "2025-12-25" },
    { label: "Boxing Day", date: "2025-12-26" }
  ],
  CA: [
    { label: "New Year’s Day", date: "2025-01-01" },
    { label: "Family Day", date: "2025-02-17" },
    { label: "Good Friday", date: "2025-04-18" },
    { label: "Victoria Day", date: "2025-05-19" },
    { label: "Canada Day", date: "2025-07-01" },
    { label: "Civic Holiday", date: "2025-08-04" },
    { label: "Labour Day", date: "2025-09-01" },
    { label: "Thanksgiving", date: "2025-10-13" },
    { label: "Christmas Day", date: "2025-12-25" },
    { label: "Boxing Day", date: "2025-12-26" }
  ]
};

function renderHolidays() {
  const country = localStorage.getItem("country");
  const container = document.getElementById("holidayContainer");

  if (!container || !holidaysByCountry[country]) return;

  container.innerHTML = holidaysByCountry[country]
    .map(holiday => `
      <label>
        <input type="checkbox" value="${holiday.date}" class="mr-2">
        ${holiday.label} (${new Date(holiday.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })})
      </label>
    `)
    .join("");
}

document.addEventListener("DOMContentLoaded", renderHolidays);

