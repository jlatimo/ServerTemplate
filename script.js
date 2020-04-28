const fs = require('fs');

/// Async Best practice when Reading/accessing larger files ///
fs.readFile('./yourfileHere.txt',(err,data) =>{
    console.time('timeChallenge');
    if(err){
        console.log('errrorrr');
    }
    console.log('Async',data.toString());
    console.timeEnd('timeChallege');
});

/// Sync not Best practice when Reading/accessing larger files ///
const file = fs.readFileSync('./yourfileHere.txt');
console.log('Sync',file.toString());

/// Append text to file ///
// fs.appendFile('./yourfileHere.txt', 'This will be appended', err => {
//     if(err){
//         console.log('Error!',err);
//     }
// });


/// Write to file ///
fs.writeFile('./fileWillBeCreated.txt', 'This text will be added to the file!', err => {
        if(err){
            console.log('Error!',err);
    }
});

/// Delete ///
fs.unlink('./fileWillBeDeleted.txt', err => {
    if(err){
        console.log('Error!',err);
    }
    Console.log('Deleted!');
});