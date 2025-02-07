var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

// levelOne();    // 20

function levelOne() {
  var numberOne = 40;

  console.log(numberOne);
}

// levelOne();    // 40

console.log(numberOne); // 20

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`); // 99
    console.log(`levelTwo numberOne : ${numberOne}`); // 40
  }

  levelTwo();
  console.log(`levelTwo numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne); // 20
// console.log(numberTwo); // 정의되지 않음
