/* eslint-disable no-undef */
/* eslint-disable semi */
const { expect } = require('chai')

const { random, randomD, randomRolls } = require('../utils')

describe('utils: random()', () => {
  it('Expect a number', () => {
    const n = random(6)
    expect(n).to.be.a('number')
  })

  const min = 6
  const max = Math.floor(Math.random() * 20) + min
  it(`Expect numbers to be less than ${max} and at least 0`, () => {
    for (let i = 0; i < 100; i += 1) {
      const n = random(max)
      expect(n < max).to.be.true
      expect(n >= 0).to.be.true
    }
  })
})

describe('utils: randomD()', () => {
  it('Expect a number', () => {
    const n = randomD(6)
    expect(n).to.be.a('number')
  })

  const min = 6
  const max = Math.floor(Math.random() * 20) + min
  it(`Expect numbers to be less than ${max} and at least 1`, () => {
    for (let i = 0; i < 100; i += 1) {
      const n = randomD(max)
      expect(n <= max).to.be.true
      expect(n > 0).to.be.true
    }
  })
})

describe('utils: randomRolls()', () => {
  it('Expect a Array', () => {
    const rolls = randomRolls(3, 6)
    expect(rolls).to.be.a('array')
  })
})
