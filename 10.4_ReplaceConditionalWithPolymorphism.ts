/**
 * Replace Conditional with Polymorphism
 * 以多态取代条件表达式
 */

/**
 *
 * 使用继承的一种情况是：我想表达某个对象与另一个对象大体类似，但又有一些不同之处。
 *
 */

/**
 * 评分
 * @param voyage
 * @param history
 * @returns
 */
function _rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) return 'A';
  else return 'B';
}

/**
 * 航海风险
 * @param voyage
 * @returns
 */
function voyageRisk(voyage) {
  let result = 1;
  if (voyage.length > 4) result += 4;
  if (voyage.length > 8) result += voyage.length - 8;
  if (['china', 'east-indies'].includes(voyage.zone)) result += 4;
  return Math.max(result, 0);
}

/**
 * 船长历史风险
 * @param voyage 航海
 * @param history
 * @returns
 */
function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) result -= 2;
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some((v) => 'china' === v.zone);
}

/**
 * 打出 盈利潜力 分数
 * @param voyage
 * @param history
 * @returns
 */
function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') result += 1;
  if (voyage.zone === 'east-indies') result += 1;
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
}
