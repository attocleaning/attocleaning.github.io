// Simulated data fetch (replace with actual blockchain integration)
const simulatedHolders = [
    { address: "0x1A2b3C4D5E6F7890", entries: 50 },
    { address: "0xABCDE12345FED678", entries: 35 },
    { address: "0xA1B2C3D4E5F6G789", entries: 20 },
    { address: "0xFFEEAABBCCDDEE99", entries: 15 },
    { address: "0xBBCCDDEEFFAABBCC", entries: 10 },
    { address: "0x123456789ABCDEF0", entries: 5 },
    { address: "0x0FEDCBA987654321", entries: 3 },
    { address: "0x1122334455667788", entries: 2 },
    { address: "0x99AABBCCDDEEFF00", entries: 2 },
    { address: "0x5566778899AABBCC", entries: 1 }, // This won't display
    { address: "0xAABBCCDDEEFF1122", entries: 40 }, // More data
    { address: "0x33445566778899AA", entries: 8 },
];

let currentPage = 1;
const entriesPerPage = 10;

// Function to render the entry board
const renderEntryBoard = () => {
    const holderList = document.getElementById("holder-list");
    holderList.innerHTML = ""; // Clear the current list

    // Paginate holders
    const start = (currentPage - 1) * entriesPerPage;
    const end = currentPage * entriesPerPage;
    const paginatedHolders = simulatedHolders.filter(holder => holder.entries > 1).slice(start, end);

    // Display holders
    paginatedHolders.forEach(holder => {
        const holderEntry = document.createElement("div");
        holderEntry.textContent = `${holder.address} - ${holder.entries} Entries`;
        holderList.appendChild(holderEntry);
    });

    // Update pagination buttons
    document.getElementById("prev-page").disabled = currentPage === 1;
    document.getElementById("next-page").disabled = end >= simulatedHolders.filter(holder => holder.entries > 1).length;
};

// Event listeners for pagination buttons
document.getElementById("prev-page").addEventListener("click", () => {
    currentPage--;
    renderEntryBoard();
});

document.getElementById("next-page").addEventListener("click", () => {
    currentPage++;
    renderEntryBoard();
});

// Initial render
renderEntryBoard();
