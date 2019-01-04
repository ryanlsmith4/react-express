/* eslint-disable no-undef */
/* eslint-disable semi */
const { expect } = require('chai')

const { random, randomD, randomRolls } = require('../utils')

describe('utils: random()', () => {
  it('Expect a number', () => {
    const n = random(6)
    expect(n).to.be.a('number')
  })

  it('Expects an integer', () => {
    const n = random(6)
    expect(n).to.satisfy(Number.isInteger)
  })
  
  const max = Math.floor(Math.random() * 94) + 6
  it('Expect n >= 0 and ', () => {
    for (let i = 0; i < max; i += 1) {
      const n = random(max)
      expect(n).to.be.at.least(0)
      expect(n).to.be.below(max)
    }
  })
})

describe('utils: randomD()', () => {
  it('Expect a number', () => {
    const n = randomD(6)
    expect(n).to.be.a('number')
  })

  it('Expects an integer', () => {
    const n = random(6)
    expect(n).to.satisfy(Number.isInteger)
  })

  const max = Math.floor(Math.random() * 94) + 6
  it('Expect n >= 0 and ', () => {
    for (let i = 0; i < max; i += 1) {
      const n = randomD(max)
      expect(n).to.be.at.least(1)
      expect(n).to.be.at.most(max)
    }
  })
})

describe('utils: randomRolls()', () => {
  it('Expect an Array', () => {
    const rolls = randomRolls(3, 6)
    expect(rolls).to.be.a('array')
  })

  it('Expect an Array with at least one element', () => {
    const rolls = randomRolls(3, 6)
    expect(rolls.length).to.be.at.least(1)
  })

  it('Expect all items to be numbers', () => {
    const rolls = randomRolls(3, 6)
    expect(rolls.length).to.be.at.least(1)
    rolls.forEach((n) => {
      expect(n).to.be.a('number')
    })
  })
})
