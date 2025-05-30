const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}

const schoolBell = new SchoolBell();

schoolBell.on('ring', () =>{
    console.log('Yahoo!!, School sesh');
})
schoolBell.on('ring', () =>{
    console.log('Dhet! Arekta class ache!');
})
schoolBell.on('broken', () =>{
    console.log('Yahoo!!, ring is broken');
})

schoolBell.emit('ring')
schoolBell.emit('broken')