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
