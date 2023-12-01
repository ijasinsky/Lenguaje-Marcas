const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Nombre de usuario: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Bienvenido ${answer}, que tenga un buen dia.`);

  rl.close();
});