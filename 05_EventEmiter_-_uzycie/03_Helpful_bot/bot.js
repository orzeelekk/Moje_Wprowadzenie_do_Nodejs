// Useful imports
import inquirer from 'inquirer';
import { EventEmitter } from 'events';

const { prompt } = inquirer;

const activity = [
  'Give me date and time',
  'Tell me a joke',
  'Say a compliment',
  'That is all, thanks!',
];

const listOfCompliments = [
  "You're an awesome friend",
  "You're a smart cookie",
  'You are awesome!',
  'You are the most perfect you there is.',
  'You light up the room.',
  'You deserve a hug right now.',
  "On a scale from 1 to 10, you're an 11.",
  'That color is perfect on you.',
];

const listOfJokes = [
  'Why do birds fly to warmer climates in the winter? - It’s much easier than walking!',
  'How does the ocean say hello? - It waves.',
  'What do you call a fake noodle? - An im-pasta.',
  'Why can’t you trust atoms? - They make up everything.',
  'What did one.txt plate whisper to the other plate? - Dinner is on me.',
  'What kind of tree fits in your hand? - A palm tree!',
];

const EVENT_NAMES = {
  date: "DATE",
  exit: "EXIT",
  flatter: "FLATTER",
  joke: "JOKE",
};

const emitter = new EventEmitter();

emitter.on(EVENT_NAMES.date, () => {
  console.log(new Date());
});
emitter.on(EVENT_NAMES.exit, () => {
  console.log('Bye bye')
  process.exit()
})
emitter.on(EVENT_NAMES.flatter, () => {
  const item =
      listOfCompliments[Math.floor(Math.random() * listOfCompliments.length)];
  console.log(item)
})
emitter.on(EVENT_NAMES.joke, () => {
  const item =
      listOfJokes[Math.floor(Math.random() * listOfJokes.length)];
  console.log(item)
})
async function flow() {
  while (true) {
    const {selected} = await prompt([
      {
        type: 'list',
        name: 'selected',
        message: 'Lest do something',
        choices: activity
      }
    ]);

    switch (selected) {
      case activity[0]:
      emitter.emit(EVENT_NAMES.date);
      break;
      case activity[3]:
      emitter.emit(EVENT_NAMES.exit);
      break;
      case activity[2]:
      emitter.emit(EVENT_NAMES.flatter);
      break;
      case activity[1]:
      emitter.emit(EVENT_NAMES.joke);
      break;
    }
  }
}
flow();
