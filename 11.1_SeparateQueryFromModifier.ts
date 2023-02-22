/**
 * 将查询函数和修改函数分离
 *
 * Separate Query from Modifier
 *
 * 规则：任何有返回值的函数，都不应该有看得到的副作用（尽量遵守，但不能绝对遵守）
 *
 * 明确表现出“有副作用”和“无副作用”两种函数的差异，是一个很好的想法
 *
 */

/**
 * 重构前
 *
 * @returns
 */
function getTotalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );

  sendBill();
  return result;
}

/**
 * 重构后
 *
 * 第一个属于查询函数，第二个属于修改函数
 *
 * 函数分离后，函数更加符合职责单一原则
 *
 * @returns
 */
function totalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  emailGateway.send(formatBill(customer));
}

/**
 * ------------- 以下是准备数据 -------------
 */

function formatBill(_customer) {
  return JSON.stringify(_customer);
}

const emailGateway = {
  send: (str: string) => {
    console.log(str);
  },
};

const customer = {
  invoices: [
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
    { amount: 3 },
  ],
};
