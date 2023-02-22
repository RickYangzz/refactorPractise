const people = ["3", "2", "Don"];

/**
 * 重构前
 */
function _alertForMiscreant(people) {
  for (const p of people) {
    if (p === "Don") {
      setOffAlarms();
      return "Don";
    }
    if (p === "John") {
      setOffAlarms();
      return "John";
    }
  }

  return "";
}

/**
 * 重构后
 */
function alertForMiscreant(people) {
  if (findMiscreant(people) !== "") setOffAlarms();
}

function findMiscreant(people) {
  for (const p of people) {
    if (miscreants.includes(p)) return p;
  }

  return "";
}

const miscreants = ["Don", "John"];

/**
 * ------------- 辅助函数 -------------
 */
function setOffAlarms() {
  console.log("Alarm!!!");
}
