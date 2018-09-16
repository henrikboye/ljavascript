'use strict';

const _ = require('underscore')

const sentences = [
  {
    subject: 'JavaScript', verb: 'is',
    object: 'great'
  },
  {
    subject: 'Elefanter', verb: 'er', object: 'store'
  },
];
// es6 feature: object destructuring
//function say ({subject, verb, object}){
  //es6 feature: templet strings
  //note that quotes below are backticks(`), not single quotes(')
 // console.log(`${subject} ${verb} ${object}`);
//}
//es6 feature: for..of
//for(let s of sentences) {
//  say(s);
//}
const verbs = _.pluck(sentences, 'verb');
for(let verb of verbs){
  console.log(`found verb: ${verb}`);
}