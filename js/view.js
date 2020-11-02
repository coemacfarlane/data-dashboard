export function constructTable(array) {
    let tempHTML = '';

    console.log(array)
    for (let i = 0; i < array.length; i++) {
        tempHTML += '<tr>';
        Object.keys(array[i]).forEach(e => {
            tempHTML += '<td>' + array[i][e] + '</td>'
        })
        tempHTML += '</tr>';
    }

    return tempHTML;
}

