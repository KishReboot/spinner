/*
 * Similar to the typewriting excersise
 * Create a variable to hold our delay 100
 * create an array to hold our slashes
 * loop through array, using for of
 * delay starts at 100, increase x by 200
 * finish with \n, can create another timeout or just include \n in last ani
 */

const spinnerAnim = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];

let x = 100;

for (let spinner of spinnerAnim) {

  setTimeout(() => {

    process.stdout.write(spinner);

  }, x);

  x += 200;

}

/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 1700);
*/