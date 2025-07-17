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
