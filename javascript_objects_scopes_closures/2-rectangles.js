#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
      this.width = w;
      this.height = h;
    }
    // If w or h is 0 or not positive, do not initialize the properties
  }
}

module.exports = Rectangle;

