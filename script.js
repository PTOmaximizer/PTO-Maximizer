function saveAndNext(id, nextPage) {
  const value = document.getElementById(id).value;
  localStorage.setItem(id, value);
  window.location.href = nextPage;
}

function saveCountryAndNext() {
  const selectedCountry = document.getElementById("countrySelect").value;
  localStorage.setItem("country", selectedCountry);
  window.location.href = "page2.html";
}
