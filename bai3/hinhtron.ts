import { ToaDo } from "./toado";

class HinhTron {
  private readonly PI_VALUE: number = 3.14;

  private tam: ToaDo;
  private banKinh: number;

  constructor(_tam: ToaDo, _banKinh: number) {
    this.tam = _tam;
    this.banKinh = _banKinh;
  }
  getArea(): number {
    return this.PI_VALUE * this.banKinh ** 2;
  }
  getPerimeter() {
    return this.PI_VALUE * this.banKinh * 2;
  }

  getInfo(): string {
    return `Hình tròn có tâm O(${this.tam.getX}, ${
      this.tam.getY
    }) với bán kính ${
      this.banKinh
    } có diện tích và chu vi lần lượt là ${this.getArea()} và ${this.getPerimeter()}`;
  }
}

const mainBai3 = () => {
  const hinhTron: HinhTron = new HinhTron(new ToaDo(5, 5), 5);

  console.log(hinhTron.getInfo());
};

mainBai3();
