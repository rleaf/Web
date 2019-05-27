class Square {
      constructor(_width, _height) {
            let width = _width;
            let height = _height;
      }

      get area() {
            return this.width * this.height;
      }
}

square3 = new Square(5, 10);
console.log(square3.area)
