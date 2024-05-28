// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve('Promise').then((value) => {
//   console.log(value);
// });

// console.log('End');

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{
    console.log(`data received by ${name} ID is ${id}`)
})
customEmitter.emit('response','May Pyone',4)
