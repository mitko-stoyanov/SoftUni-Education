function generateReport() {
    const output = document.querySelector('#output');
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    const result = [];
    tableRows.forEach(row => {
        const current = {};
       
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if (checks[i].checked) {
                current[checks[i].name] = x.textContent;
            }
        });
        result.push(current);
    });

    output.value = JSON.stringify(result);
}