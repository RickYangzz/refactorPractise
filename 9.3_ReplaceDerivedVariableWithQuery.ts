/**
 * 使用查询 取代 派生变量
 */

/**
 * 重构前
 */
class _ProductionPlan {
  _production;
  _adjustments: any[] = [];

  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

/**
 * 重构后
 */
class ProductionPlan {
  _initialProduction;
  _adjustments: any[];

  constructor(production) {
    this._initialProduction = production;
    this._adjustments = [];
  }

  get production() {
    return this._initialProduction + this.calculatedProductionAccumulator;
  }

  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}
