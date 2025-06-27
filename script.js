function saveAndNext(id, nextPage) {
  const value = document.getElementById(id).value;
  if (value) {
    localStorage.setItem(id, value);
    window.location.href = nextPage;
  } else {
    alert("Please enter a value.");
  }
}

function saveVacationAndNext(nextPage) {
  const start = document.getElementById('vacStart').value;
  const end = document.getElementById('vacEnd').value;
  localStorage.setItem('vacationStart', start);
  localStorage.setItem('vacationEnd', end);
  window.location.href = nextPage;
}

window.onload = function () {
  if (window.location.pathname.includes("results.html")) {
    const summary = document.getElementById("summary");
    const data = {
      Country: localStorage.getItem("country"),
      "Start Planning From": localStorage.getItem("startDate"),
      "PTO Days Remaining": localStorage.getItem("ptoDays"),
      "Already Have Off": localStorage.getItem("daysOff"),
      "Vacation Start": localStorage.getItem("vacationStart"),
      "Vacation End": localStorage.getItem("vacationEnd")
    };
    Object.keys(data).forEach(key => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${key}:</strong> ${data[key] || "N/A"}`;
      summary.appendChild(div);
    });
  }
};