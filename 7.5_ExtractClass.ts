/**
 * 把一个复杂类提取为几个简单类的组合，这个是可以理解的。
 * 值对象也是可以理解的。
 * 
 * 但针对这个例子，重构前后的比较确实没看出优化点。
 * 对特定数据，有了一个明确的对象来说明；强化该类型的数据，这点倒是有用。
 */

/**
 * 重构前
 */
class _Person {
  private _name;
  private _officeAreaCode;
  private _officeNumber;

  get name() {
    return this._name;
  }

  set name(arg: string) {
    this._name = arg;
  }

  get telephoneNumber() {
    return `${this._officeAreaCode} ${this._officeNumber}`;
  }

  get officeAreaCode() {
    return this._officeAreaCode;
  }

  set officeAreaCode(arg: string) {
    this._officeAreaCode = arg;
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(arg: string) {
    this._officeNumber = arg;
  }
}

/**
 * 重构后
 */
class Person {
  private _name;
  private _telephoneNumber;

  constructor() {}

  get name() {
    return this._name;
  }

  set name(arg: string) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg: string) {
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg: string) {
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
  }
}

/**
 * 值对象
 */
class TelephoneNumber {
  private _areaCode;
  private _number;

  constructor(areaCode: string, number: string) {
    this._areaCode = areaCode;
    this._number = number;
  }

  get areaCode() {
    return this._areaCode;
  }

  get number() {
    return this._number;
  }

  toString() {
    return `${this.areaCode} ${this.number}`;
  }
}
