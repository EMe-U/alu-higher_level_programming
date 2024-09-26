#!/usr/bin/node
const Square = require('./5-square');

class Square extends Square {
  charPrint(c) {
    const character = c || 'X'; // Use 'X' if c is undefined
    for (let i = 0; i < this.height; i++) {
      console.log(character.repeat(this.width)); // Print the character repeated width times
    }
  }
}

module.exports = Square;
