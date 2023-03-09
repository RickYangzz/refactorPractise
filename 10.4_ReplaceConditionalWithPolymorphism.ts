/**
 * Replace Conditional with Polymorphism
 * 以多态取代条件表达式
 */

/**
 *
 * 使用继承的一种情况是：我想表达某个对象与另一个对象大体类似，但又有一些不同之处。
 *
 */
function rating(voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > vr + chr * 2) return 'A';
  else return 'B';
}

function voyageRisk(voyage) {
  return 0;
}

function captainHistoryRisk(voyage, history) {
  return 0;
}

function hasChina(history) {
  return history.some((v) => 'china' === v.zone);
}

function voyageProfitFactor(voyage, history) {
  return 0;
}
