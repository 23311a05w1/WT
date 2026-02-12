const apiURL = "https://jsonplaceholder.typicode.com/posts";
const table = document.getElementById("data-table");
const tbody = table.querySelector("tbody");
const loadingText = document.getElementById("loading");

// Fetch using Async/Await
async function fetchData() {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        displayData(data.slice(0, 10)); // Show first 10 records
    } catch (error) {
        loadingText.textContent = "Error fetching data!";
        console.error("Fetch error:", error);
    }
}

// Display data in table
function displayData(data) {
    loadingText.style.display = "none";
    table.style.display = "table";

    data.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;

        tbody.appendChild(row);
    });
}

// Demonstrating Promise handling explicitly
function fetchWithPromise() {
    return fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network error");
            }
            return response.json();
        });
}

// Call Async/Await version
fetchData();
