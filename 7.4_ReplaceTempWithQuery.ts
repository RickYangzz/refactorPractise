/**
 * 以查询取代临时变量
 *
 * 体会：
 * 1. 将一个个概念体抽离成对应函数后，整个代码达到了最高的清晰度。
 */

/**
 * 初始代码
 */
class _Order {
  private _quantity;
  private _item;

  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    const basePrice = this._quantity * this._item.price;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

/**
 * 重构后，代码达到了更高的清晰度
 */
class Order {
  private _quantity;
  private _item;

  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
}
