const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Temperatura en ºC o ºF: ', (answer) => {
  // TODO: Log the answer in a database
  if (answer == 28){
  answer = answer * 1.8 + 32;
  console.log(`De Celcius a Fahrenheit son: ${answer}`);
  }
  if (answer == 30){
    answer = (answer - 32) / 1.8;
    console.log(`De Fahrenheit a Celcius son: ${answer}`);
    }
  rl.close();
});