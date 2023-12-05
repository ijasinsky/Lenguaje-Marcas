let fs = require('fs');

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Escriba el archivo que quiere leer: ', (answer) => {
  // TODO: Log the answer in a database
  fs.readFile(answer, 'utf-8', (err, data) => {
    if(err) {
      console.log('error: ', err);
    } else {
      console.log(data);
    }
  });
  rl.close();
});