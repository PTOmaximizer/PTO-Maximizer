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

function saveHolidaysAndNext(nextPage) {
  const checkboxes = document.querySelectorAll('input[name=holidays]:checked');
  const selected = Array.from(checkboxes).map(cb => cb.value);
  const extras = document.getElementById('daysOffExtra').value;
  localStorage.setItem('daysOff', selected.concat(extras ? [extras] : []).join(', '));
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

  if (window.location.pathname.includes("page4.html")) {
    const country = localStorage.getItem("country") || "us";
    const holidayBox = document.getElementById("holidayCheckboxes");
    const holidays = {
      us: [
        "New Year's Day (Jan 1)",
        "Martin Luther King Jr. Day (Jan 15)",
        "Presidents’ Day (Feb 19)",
        "Memorial Day (May 27)",
        "Juneteenth (June 19)",
        "Independence Day (Jul 4)",
        "Labor Day (Sep 2)",
        "Veterans Day (Nov 11)",
        "Thanksgiving Day (Nov 28)",
        "Day After Thanksgiving (Nov 29)",
        "Christmas Day (Dec 25)",
        "Dec 26 (Thursday)",
        "Dec 27 (Friday)",
        "Dec 30 (Monday)",
        "Dec 31 (Tuesday)"
      ]
    };
    holidays[country].forEach(holiday => {
      const div = document.createElement("div");
      div.className = "flex items-center space-x-2";
      div.innerHTML = `
        <input type="checkbox" id="${holiday}" name="holidays" value="${holiday}" class="form-checkbox text-blue-600">
        <label for="${holiday}">${holiday}</label>`;
      holidayBox.appendChild(div);
    });
  }
};