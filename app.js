// Using array methods, you will transform an array of strings into a secret message!

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program');
let temp = secretMessage.indexOf('easily');
secretMessage[temp] = 'right';

secretMessage.shift();

secretMessage.splice(secretMessage.indexOf('get'), 1, 'know');
secretMessage.splice(secretMessage.indexOf('right'), 1, 'know');
secretMessage.splice(secretMessage.indexOf('the'), 1, 'know');
secretMessage.splice(secretMessage.indexOf('first'), 1, 'know');
secretMessage.splice(secretMessage.indexOf('time,'), 1, 'know');

console.log(secretMessage.join(' '));
