/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Bob", "Alice", "Carol", "Eve", "Dave"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = [115, 64, 188, 118, 159];
const NUM_FREELANCERS = [100];

const NUM_PEOPLE = NAMES.length;

const freelancers = Array.from({ length: NUM_PEOPLE }, makeFreelancers);

const averageRate = getAverageRate();

console.log(averageRate, freelancers);

function makeFreelancers(_, index) {
  return {
    name: NAMES[index],
    occupation: OCCUPATIONS[index],
    range: PRICE_RANGE[index],
  };
}

function getAverageRate() {
  const total =
    freelancers.reduce((accum, currentFreelancers) => {
      return accum + currentFreelancers.range;
    }, 0) / NUM_PEOPLE;
  return total;
}

console.log(averageRate);
