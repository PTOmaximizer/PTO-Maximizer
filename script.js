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
function saveVacationDatesAndGo(nextPage) {
  const start = document.getElementById("vacationStart").value;
  const end = document.getElementById("vacationEnd").value;

  if (!start || !end) {
    alert("Please enter both start and end dates.");
    return;
  }

  localStorage.setItem("vacationStart", start);
  localStorage.setItem("vacationEnd", end);
  window.location.href = nextPage;
}
function handleVacationNext(nextPage) {
  const start = document.getElementById("vacationStart").value;
  const end = document.getElementById("vacationEnd").value;
  const noVacations = document.getElementById("noVacations").checked;

  if (!noVacations && (!start || !end)) {
    alert("Please enter both vacation dates or check the box if you have no vacations planned.");
    return;
  }

  localStorage.setItem("vacationStart", noVacations ? "" : start);
  localStorage.setItem("vacationEnd", noVacations ? "" : end);
  window.location.href = nextPage;
}
document.getElementById("generate-button").addEventListener("click", async () => {
  const formData = {
    country: localStorage.getItem("country"),
    startDate: localStorage.getItem("startDate"),
    ptoDays: localStorage.getItem("ptoDays"),
    daysOff: JSON.parse(localStorage.getItem("daysOff") || "[]"),
    vacationStart: localStorage.getItem("vacationStart"),
    vacationEnd: localStorage.getItem("vacationEnd"),
  };

  const prompt = `
I live in ${formData.country} and want to start planning time off from ${formData.startDate}.
I have ${formData.ptoDays} PTO days left.
I already have the following days off: ${formData.daysOff.join(", ") || "none"}.
I have a vacation planned from ${formData.vacationStart || "no start date"} to ${formData.vacationEnd || "no end date"}.
Please suggest how to maximize my time off using holidays and my PTO.
`;

  try {
    const response = await fetch("https://https://pto-backend.onrender.com/generate-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: prompt,
        country: country
      }),
    });

    const result = await response.json();
    document.getElementById("result").innerText = result.reply;
  } catch (error) {
    console.error("Error calling backend:", error);
    alert("Something went wrong. Check the console.");
  }
});

