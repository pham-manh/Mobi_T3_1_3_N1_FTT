export class ToaDo {
  private ten: string;
  private x: number;
  private y: number;

  constructor(_x: number, _y: number, _ten?: string) {
    if (_ten) {
      this.ten = _ten;
    }
    this.x = _x;
    this.y = _y;
  }

  public get getTen(): string {
    return this.ten;
  }
  public get getX(): number {
    return this.x;
  }
  public get getY(): number {
    return this.y;
  }
  public set setTen(_ten: string) {
    this.ten = _ten;
  }
  public set setX(_x: number) {
    this.x = _x;
  }
  public set setY(_y: number) {
    this.y = _y;
  }
}
