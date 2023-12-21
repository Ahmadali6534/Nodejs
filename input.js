const fs = require('fs')
const input = process.argv
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}
else{
    console.log('invlaid input')
}

// const fs = require('fs');
// const input = process.argv;

// if (input[2] === 'add') {
//     const arrayToWrite = [4];
//     const dataToWrite = JSON.stringify(arrayToWrite);

//     try {
//         fs.writeFileSync(input[3], dataToWrite, 'utf-8');
//         console.log('File written successfully');
//     } catch (error) {
//         console.error('Error writing file:', error);
//     }
// } else if (input[2] === 'remove') {
//     try {
//         fs.unlinkSync(input[3]);
//         console.log('File removed successfully');
//     } catch (error) {
//         console.error('Error removing file:', error);
//     }
// } else {
//     console.log('Invalid input');
// }
