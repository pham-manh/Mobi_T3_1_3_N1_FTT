class Vehicle {
  private owner: string;
  private type: string;
  private value: number;
  private capacity: number;

  constructor(
    _owner?: string,
    _type?: string,
    _value?: number,
    _capacity?: number
  ) {
    this._owner = _owner;
    this._type = _type;
    this._value = _value;
    this._capacity = _capacity;
  }

  get _owner(): string {
    return this.owner;
  }

  get _type(): string {
    return this.type;
  }

  get _value(): number {
    return this.value;
  }

  get _capacity(): number {
    return this.capacity;
  }

  set _owner(value: string) {
    if (value !== undefined) {
      this.owner = value;
    } else {
      this.owner = "Unknown";
    }
  }

  set _type(value: string) {
    if (value !== undefined) {
      this.type = value;
    } else {
      this.type = "Unknown";
    }
  }

  set _value(value: number) {
    if (value !== undefined && value > 0) {
      this.value = value;
    } else {
      this.value = 0;
    }
  }

  set _capacity(value: number) {
    if (value !== undefined && value > 0) {
      this.capacity = value;
    } else {
      this.capacity = 0;
    }
  }

  public getTax(): number {
    if (this.capacity > 200) {
      return this.value * 0.05;
    }
    if (this.capacity >= 100 && this.capacity <= 200) {
      return this.value * 0.03;
    }
    return this.value * 0.01;
  }
}

const owner = document.getElementById("name") as HTMLInputElement;
const type = document.getElementById("type") as HTMLInputElement;
const capacity = document.getElementById("capacity") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;
const form = document.getElementById("formId");
const result = document.getElementById("result");

const handleSubmit = (e) => {
  e.preventDefault();
  const vehicle = new Vehicle(
    owner.value,
    type.value,
    Number(amount.value),
    Number(capacity.value)
  );

  result.innerHTML = `
        <p>Ten chu xe: ${vehicle._owner}</p>
        <p>Loai xe: ${vehicle._type}</p>
        <p>Tri gia xe: ${vehicle._value}</p>
        <p>Dung tich: ${vehicle._capacity}</p>
        <p>Thue: ${vehicle.getTax()}</p>
    `;
};

form.addEventListener("submit", handleSubmit);
