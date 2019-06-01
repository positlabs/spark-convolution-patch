// Load in the required modules
const Instruction = require('Instruction');
const Time = require('Time');

// Define a boolean that will be true until 5 seconds has passed
var show = Time.ms.lt(5000);

// Use the boolean to show the instruction
Instruction.bind(show, 'raise_your_eyebrows');
