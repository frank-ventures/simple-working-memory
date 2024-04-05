const userStoredSection = document.getElementById("userStoredSection");

const form = document.getElementById("userNewTextForm");

const testArray = [];

function testAppend(newMemory) {
  const createP = document.createElement("p");
  createP.textContent = newMemory;
  createP.id = `memory-${testArray.length - 1}`;
  userStoredSection.appendChild(createP);
}

function testPushToArray(newMemory) {
  testArray.push(newMemory);
  console.log(testArray);
  testAppend(newMemory);
}

function testRemoveFromArrayAndPage(arrayPosition) {
  // remove from array
  console.log(testArray[arrayPosition]);
  testArray[arrayPosition].pop();

  //remove from page
  console.log(`memory-${[arrayPosition]}`);
  userStoredSection.removeChild(`memory-${[arrayPosition]}`);
}

testPushToArray("i remember this");
