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
  const data = {
    country: document.getElementById("country").value,
    startDate: document.getElementById("startDate").value,
    ptoDays: document.getElementById("ptoDays").value,
    daysOff: [], // or however you're collecting this
    vacationStart: null,
    vacationEnd: null,
  };

  try {
    const response = await fetch("https://pto-backend.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById("result").innerText = result.result;f
  } catch (error) {
    console.error("Error calling backend:", error);
    alert("Something went wrong. Check the console.");
  }
});

