// 2 parts
const fs = require('fs');

// Question 1 - What floor does Santa end up on

// Rules '(' means Santa should go up a floor
// ')' means Santa should go down a floor


// MY SOLUTION


// function questionOne() {
//     console.time('santa-time');
//     fs.readFile('./santa.txt', (err, data) => {
//         const directions = data.toString();
//         const directionsArray = directions.split('');
//         let floor = 0;
//         directionsArray.map(direction => {
//             if (direction === '(') {
//                 floor = floor + 1;
//             } else if (direction === ')') {
//                 floor = floor - 1;
//             }
//         })
//         console.timeEnd('santa-time'); // 1.552ms
//         console.log(floor);
//     })
// }

questionOne();

function questionOne() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q1 = santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if (currentValue === ')') {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('q1 = santa-time'); // 0.405ms
        console.log('floor', answer);
    })
}

questionOne();

// Question Two - what is the position that Santa first gets Santa to -1 floor in the set

function questionTwo() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q2 = santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1;
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd('q2 = santa-time'); // 0.247ms
        console.log('basement entered at: ', counter);
    })
}

questionTwo();