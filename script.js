const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    console.time('funchallenge')
    if (err) {
        console.log('error', err);
    }
    console.log('Async', data.toString('utf8'));
    console.timeEnd('funchallenge');
})

const file = fs.readFileSync('./hello.txt'); // this one is console logged first because it is synchronous
console.log('Sync', file.toString());


// APEND
// fs.appendFile('./hello.txt', ' Time to code brotha we\'re learning!', err => {
//     if (err) {
//         console.log('error', err)
//     }
// })

// WRITE 

// fs.writeFile('bye.txt', 'sad to see you go', err => {
//     if (err) {
//         console.log('error', err)
//     }
// }) // bye.txt added in the folder with the string 'sad to see you go' in it!!!!!!


// DELETE 

fs.unlink('./bye.txt', err => {
    if (err) {
        console.log('error', err);
    }
    console.log('Inception');
})