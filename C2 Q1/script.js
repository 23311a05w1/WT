// Generate Random Number
const generateBtn = document.getElementById("generateBtn");
const randomNumberDisplay = document.getElementById("randomNumberDisplay");

generateBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberDisplay.textContent = "Random Number: " + randomNumber;
});


// Add and Remove List Items
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const itemList = document.getElementById("itemList");

let itemCount = 1;

addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;
    itemList.appendChild(newItem);
    itemCount++;
});

removeItemBtn.addEventListener("click", function () {
    if (itemList.lastElementChild) {
        itemList.removeChild(itemList.lastElementChild);
        itemCount--;
    }
});
