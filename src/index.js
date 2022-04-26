import { choice, remove } from './helpers';
import foods from './foods';

let items = foods;

console.log(items);
let randomFruit = choice(items);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
remove(items, randomFruit);
console.log(items.includes(randomFruit));
