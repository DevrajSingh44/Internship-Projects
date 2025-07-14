const submitBtn = document.getElementById("submit-btn");
const interestSelect = document.getElementById("interest-select");
const careerList = document.getElementById("career-list");
const resultBox = document.getElementById("result");

let careerData = [];

fetch("assets/career-data.json")
  .then(res => res.json())
  .then(data => {
    careerData = data;
  });

submitBtn.addEventListener("click", () => {
  const selected = interestSelect.value;
  if (!selected) {
    alert("Please select an area of interest!");
    return;
  }

  const match = careerData.find(item => item.interest === selected);
  if (match) {
    careerList.innerHTML = "";
    match.suggestions.forEach(career => {
      const li = document.createElement("li");
      li.textContent = career;
      careerList.appendChild(li);
    });
    resultBox.classList.remove("hidden");
  }
});
