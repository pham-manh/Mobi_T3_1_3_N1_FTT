class Triangle {
  ma: number;
  mb: number;
  mc: number;

  constructor(_ma: number, _mb: number, _mc: number) {
    this.ma = _ma;
    this.mb = _mb;
    this.mc = _mc;
  }

  get get_ma(): number {
    return this.ma;
  }

  get get_mb(): number {
    return this.mb;
  }

  get get_mc(): number {
    return this.mc;
  }

  set set_ma(value: number) {
    if (value > 0) {
      this.ma = value;
    } else {
      this.ma = 0;
    }
  }

  set set_mb(value: number) {
    if (value > 0) {
      this.mb = value;
    } else {
      this.mb = 0;
    }
  }

  set set_mc(value: number) {
    if (value > 0) {
      this.mc = value;
    } else {
      this.mc = 0;
    }
  }

  checkTriangleValid(): boolean {
    if (
      this.ma + this.mb <= this.mc ||
      this.ma + this.mc <= this.mb ||
      this.mb + this.mc <= this.ma
    ) {
      return false;
    }
    return true;
  }

  // chu vi
  getPerimeter(): number {
    if (this.checkTriangleValid()) {
      return this.ma + this.mb + this.mc;
    }
    return 0;
  }

  //   dien tich
  getArea(): number {
    if (this.checkTriangleValid()) {
      const p = this.getPerimeter() / 2;
      return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    }
    return 0;
  }

  //   kieu tam giac
  checkTriangleType(): string {
    if (this.checkTriangleValid()) {
      if (this.ma === this.mb && this.ma === this.mc) {
        return "Tam giac deu";
      }

      if (this.ma === this.mb || this.ma === this.mc || this.mb === this.mc) {
        return "Tam giac can";
      }

      return "Tam giac thuong";
    }
    return "Khong phai tam giac";
  }

  getInfo(): object {
    return {
      slide1: this.ma,
      slide2: this.mb,
      slide3: this.mc,
      type: this.checkTriangleType(),
      perimeter: this.getPerimeter(),
      area: this.getArea(),
    };
  }
}

const main = () => {
  const triangle1 = new Triangle(1, 2, 3).getInfo();
  const triangle2 = new Triangle(-1, -4, 5).getInfo();
  const triangle3 = new Triangle(3, 4, 6).getInfo();
  const triangle4 = new Triangle(2, 2, 2).getInfo();
  const triangle5 = new Triangle(4, 4, 3).getInfo();

  console.table([triangle1, triangle2, triangle3, triangle4, triangle5]);
};

main();
