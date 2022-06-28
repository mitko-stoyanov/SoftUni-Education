function sumTable() {
    let totalSum = 0;
    rows = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    for (const row of rows) {
        const value = Number(row.lastElementChild.textContent);
        totalSum += value;
    }

    document.getElementById('sum').textContent = totalSum; 
}