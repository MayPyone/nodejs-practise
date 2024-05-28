const {readFileSync, writeFileSync } = require('fs');

const path = require('path');
const filePath = path.resolve(__dirname,'../first.txt')
const secondPath = path.resolve(__dirname,'../second.txt')

try {
    const data = readFileSync(filePath, 'utf8');
    const second = readFileSync(secondPath, 'utf8')
    writeFileSync(filePath,'Hello I am May',{flag: 'a'})
    console.log(data, second);
  } catch (err) {
    console.error('Error reading file:', err);
  }
