export function rowCount(table) {
    return table.rows.length;
}

export function addRow(element, block){
    element.insertAdjacentHTML('beforeend', block.createTask());
}