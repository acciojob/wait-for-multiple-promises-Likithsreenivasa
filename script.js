//your JS code here. If required.
function createRandomPromise(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

function updateTableWithResults(results) {
  const tableBody = document.getElementById("output");

  // Remove any existing rows
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  // Add rows for each promise result
  results.forEach((time, index) => {
    const promiseNumber = index + 1;
    const newRow = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerText = `Promise ${promiseNumber}`;
    const timeCell = document.createElement("td");
    timeCell.innerText = `${(time / 1000).toFixed(3)}`; // Convert time to seconds with 3 decimal places
    newRow.appendChild(nameCell);
    newRow.appendChild(timeCell);
    tableBody.appendChild(newRow);
  });

  // Add the total row
  const totalRow = document.createElement("tr");
  const totalNameCell = document.createElement("td");
  totalNameCell.innerText = "Total";
  totalRow.appendChild(totalNameCell);

  const totalSeconds = results.reduce((total, time) => total + time, 0) / 1000;
  const totalTimeCell = document.createElement("td");
  totalTimeCell.innerText = `${totalSeconds.toFixed(3)}`;
  totalRow.appendChild(totalTimeCell);

  tableBody.appendChild(totalRow);
}

const promises = [
  createRandomPromise(Math.floor(Math.random() * 2000) + 1000), // Between 1 and 3 seconds in milliseconds
  createRandomPromise(Math.floor(Math.random() * 2000) + 1000),
  createRandomPromise(Math.floor(Math.random() * 2000) + 1000)
];

Promise.all(promises)
  .then(updateTableWithResults)
  .catch((error) => console.error("Error:", error));
