function saveAndNext(id, nextPage) {
  const value = document.getElementById(id).value;
  if (value) {
    localStorage.setItem(id, value);
    window.location.href = nextPage;
  } else {
    alert("Please enter a value.");
  }
}