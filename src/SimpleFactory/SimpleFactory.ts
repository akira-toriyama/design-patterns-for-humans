type Door = {
  getWidth(): number;
  getHeight(): number;
};
class WoodenDoor implements Door {
  constructor(private _width: number, private _height: number) {}

  getWidth() {
    return this._width;
  }

  getHeight() {
    return this._height;
  }
}

const wDoor = new WoodenDoor(10, 20);
wDoor.getWidth();
wDoor.getHeight();
