export function generateBigData() {
  const bigData = [];
  for (let i = 0; i <= 1000; i++) {
    const newObj = {
      value: Math.round(Math.random() * 1000),
      flag: !!Math.round(Math.random()),
    };
    bigData.push(newObj);
  }
  console.log("Calculation done!");
  return bigData;
}
