class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => side + sum)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {
      return false;
    }
    let [a,b,c] = this.sides;
    let ab = a + b;
    let ac = a + c;
    let bc = b + c;
    if (ab > c && ac > b && bc > a) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2;
  }

  get isValid() {
    if (this.countSides !== 4) {
      return false;
    }
    let [a,b,c,d] = this.sides;
    if (a === b && a === c && a === d) {
      return true;
    } else {
      return false;
    }
  }
}
