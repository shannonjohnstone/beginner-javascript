// function declared
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // billAmount, taxRate and tipRate are parameters of calculateBill

  // function body

  // expression
  return billAmount + billAmount * taxRate + billAmount * tipRate;
}

// 100 is an argument of invoked calculateBill
console.log(`The bills total comes to $${calculateBill(100).toFixed(2)}`);
