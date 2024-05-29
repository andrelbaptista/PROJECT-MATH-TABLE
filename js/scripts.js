// elements
const tableForm = document.querySelector("#table-form");
const baseNumber = document.querySelector("#base");
const multiplierNumber = document.querySelector("#multiplier");
const baseNumberInsert = document.querySelector("#table-title span");
const insertTable = document.querySelector("#table-result");

// console.log(tableForm);
// console.log(baseNumber);
// console.log(multiplierNumber);
console.log(baseNumberInsert);
// console.log(insertTable);

// functions
const createTable = (number, multiplier) => {
  insertTable.innerHTML = "";
  // console.log(insertTable);
  for (i = 1; i <= multiplier; i++) {
    const result = number * i;
    const tableTemplate = `<div class="row">
        <div class="operation">${number} x ${i} </div>
        <div class="result">= ${result}</div>
    </div>`;

    // console.log(tableTemplate)
    const parserTemplate = new DOMParser();
    const htmlTemplate = parserTemplate.parseFromString(
      tableTemplate,
      "text/html"
    );
    // console.log(htmlTemplate)
    const tableRow = htmlTemplate.querySelector(".row");
    // console.log(tableRow)
    insertTable.appendChild(tableRow);
  }
  baseNumberInsert.innerText = `base number ${number}`;
};
// events
tableForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputNumber = +baseNumber.value;
  const inputMultiplier = +multiplierNumber.value;
  if (!inputMultiplier || !inputNumber) return;

  createTable(inputNumber, inputMultiplier);
  //   console.log(inputNumber, inputMultiplier);
});
