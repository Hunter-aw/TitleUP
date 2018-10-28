const natural = require('natural')
natural.LancasterStemmer.attach();
const Pos = require("en-pos").Tag;

let array = ['goodbye', 'course', 'me', 'to', 'up', 'unlock', 'a', 'think', 'build', 'already', 'directory']
console.log(new Pos(array).initial().smooth().tags)

