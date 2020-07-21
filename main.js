function createMultiplyTable(start, end) {
    return isNumbersValid(start, end) ? generateMultiplyTable(start, end) : null;
}

function isNumbersValid(start, end) {
    if (end < start || start < 1 || end > 1000) {
        return false;
    }
    return true;
}

function generateMultiplyTable(start, end) {
    let table = '';
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
            table += j + '*' + i + '=' + i * j;
            if (j != i) {
                table += '\t';
            }
        }
        if (i != end) {
            table += '\n';
        }
    }
    return table;
}

module.exports = {
    createMultiplyTable,
};