const nameKey = "saved-name";
const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveName");
const removeBtn = document.getElementById("removeName");
const savedNameEl = document.getElementById("savedName");

const savedName = localStorage.getItem(nameKey);
if (savedName) savedNameEl.textContent = `Nome salvato: ${savedName}`;

saveBtn.addEventListener("click", () => {
  const valore = nameInput.value;
  if (valore) {
    localStorage.setItem(nameKey, valore);
    savedNameEl.textContent = `Nome salvato: ${valore}`;
    nameInput.value = "";
  } else {
    return;
  }
});

removeBtn.addEventListener("click", () => {
  localStorage.removeItem(nameKey);
  savedNameEl.textContent = "";
});
