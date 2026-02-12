// Search using Regular Expression
function searchText() {
    const input = document.getElementById("inputText").value;
    const searchValue = document.getElementById("searchText").value;

    if (!searchValue) {
        alert("Please enter text to search.");
        return;
    }

    const regex = new RegExp(searchValue, "gi");
    const matches = input.match(regex);

    if (matches) {
        document.getElementById("resultText").value =
            "Found " + matches.length + " match(es):\n" + matches.join(", ");
    } else {
        document.getElementById("resultText").value = "No matches found.";
    }
}

// Replace using Regular Expression
function replaceText() {
    const input = document.getElementById("inputText").value;
    const searchValue = document.getElementById("searchText").value;
    const replaceValue = document.getElementById("replaceText").value;

    if (!searchValue) {
        alert("Please enter text to replace.");
        return;
    }

    const regex = new RegExp(searchValue, "gi");
    const result = input.replace(regex, replaceValue);

    document.getElementById("resultText").value = result;
}

// Format Text (Example: Capitalize First Letter of Each Word)
function formatText() {
    const input = document.getElementById("inputText").value;

    // Capitalize each word using regex
    const formatted = input.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });

    document.getElementById("resultText").value = formatted;
}
