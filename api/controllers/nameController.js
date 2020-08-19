const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/currencyCodes.json');

function readFile() {
    let fileContents = fs.readFileSync(filePath, 'utf8');

    if(fileContents) {
        return JSON.parse(fileContents);
    }

    return [];
}

module.exports = readFile;