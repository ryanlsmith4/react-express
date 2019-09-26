/* eslint-disable semi */
const { random, round, floor } = Math

function randomInt(n) {
  return floor(random() * n) // 1 to n - 1 
}

function randomD(n) {
  // n = 6
  const ranNum = randomInt(n) + 1
  return ranNum
}

function randomRolls(n, s) {
  const randomNumbers = []
  for (let i = 0; i <= n - 1; i += 1) {
    randomNumbers.push(randomD(s))
  }
  return randomNumbers
}

module.exports.randomInt = randomInt
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
