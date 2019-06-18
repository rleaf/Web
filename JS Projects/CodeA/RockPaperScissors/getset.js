class Square {
      constructor(_width) {
            this.width = _width;
            this.height = _width;
      }

      get area() {
            return this.width * this.height;
      }

}

let square1 = new Square(4);
console.log(square1.area);
console.log(square1.width)

console.log('--------------------------------------------------------')

class Rectangle {
      constructor() {
            this.width = Math.floor(Math.random() * 5 + 1)
            this.height = Math.floor(Math.random() * 5 + 1)
      }

      get area() {
            return this.width * this.height;
      }
}

rectangle1 = new Rectangle();
console.log(rectangle1.area);
console.log(rectangle1.width);
console.log(rectangle1.height);
a
