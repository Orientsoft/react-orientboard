export class Line {
  constructor(x1, y1, x2, y2) {
    if (x2 && y2) {
      this.a = (y1 - y2) / (x1 - x2)
      this.b = (y1 * x2 - y2 * x1) / (x2 - x1)
    } else {
      this.a = x1
      this.b = y1
    }
  }

  test(x, y) {
    return this.a * x + this.b > y ? 1 : 0
  }

  getVert(x) {
    let y = this.a * x + this.b
    return new Line(-1 / this.a, y + x / this.a)
  }
}

export class Vector {
  constructor(x1, y1, x2, y2) {
    if (x2 && y2) {
      this.x = (y1 - y2) / (x1 - x2)
      this.y = (y1 * x2 - y2 * x1) / (x2 - x1)
    } else {
      this.x = x1
      this.y = y1
    }
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

Vector.getAngle = (v1, v2) => {
  let up = v1.x * v2.x + v1.y * v2.y
  let down = v1.length() * v2.length()
  let theta =  Math.acos(up / down) * 180 / Math.PI

  // let line = new Line(v1.x, v1.y, rCenter.x, rCenter.y)
  // let vline = line.getVert(rCenter.x, rCenter.y)
  // let test = line.test(x, y) * 2 + vline.test(x, y)
  // switch (test) {
  // case 3:
  //   theta = 360 - theta
  //   break
  // case 2:
  //   theta *= -1
  //   break
  // case 1:
  //   theta = theta - 360
  //   break
  // default:
  //   break
  // }

  return theta
}
