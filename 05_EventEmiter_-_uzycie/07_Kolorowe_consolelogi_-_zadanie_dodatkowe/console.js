import { EventEmitter } from 'events';
import inquirer from 'inquirer';
const { prompt } = inquirer;

const effects = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',
};

const foregrounds = {
  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',
};

const backgrounds = {
  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

const emitter = new EventEmitter();
const result = {
  effect: '\x1b[0m',
  fgColor: '\x1b[37m',
  bgColor: '\x1b[40m',
  text: `SampleText`,
};

function myCrazyConsoleLog({ effect, fgColor, bgColor, text }) {
  console.log(effect, fgColor, bgColor, text, '\x1b[0m');
}

emitter.on('effect', (selected) => {
  result.effect = effects[selected];
});

emitter.on('fgColor', (selected) => {
  result.fgColor = foregrounds[selected];
});

emitter.on('bgColor', (selected) => {
  result.bgColor = backgrounds[selected];
});

emitter.on('text', (selected) => {
  result.text = selected;
});

emitter.on('complete', (result) => {
  myCrazyConsoleLog(result);
});

async function flow() {
  try {
    const { effect } = await prompt([
      {
        type: 'list',
        name: 'effect',
        message: 'Choose an effect',
        choices: Object.keys(effects),
      },
    ]);
    console.log(effect);

    emitter.emit('effect', effect);
    const { foreground } = await prompt([
      {
        type: 'list',
        name: 'foreground',
        message: 'Choose foreground color',
        choices: Object.keys(foregrounds),
      },
    ]);
    emitter.emit('fgColor', foreground);

    const { background } = await prompt([
      {
        type: 'list',
        name: 'background',
        message: 'Choose background color',
        choices: Object.keys(backgrounds),
      },
    ]);
    emitter.emit('bgColor', background);

    const { sentence } = await prompt([
      {
        name: 'sentence',
        message: 'Give some sample text:'
      },
    ]);
    emitter.emit('text', sentence);
    emitter.emit('complete', result);
  } catch (err) {
    console.log(err);
  }
}

flow();