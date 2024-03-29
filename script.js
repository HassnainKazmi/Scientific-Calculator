const table = document.querySelector("table");
const input = document.querySelector("input");
const span = document.querySelector(".calculations");
const AC = document.querySelector(".AC");
const inverseButton = document.querySelector(".inverse");
const scientific = document.querySelectorAll(".scientific");
const scientificInverse = document.querySelectorAll(".scientificInverse");
const scientificValues = document.querySelector(".scientificValues");
const normalValues = document.querySelector(".normalValues");
const scientificNums = document.querySelectorAll(".scientificNums");
const normalNums = document.querySelectorAll(".normalNums");

const keys = [
  " ",
  "^",
  "!",
  ",",
  "(",
  ")",
  "%",
  "CE",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let result = "";
let newResult = "";
let isInvPressed = true;

input.addEventListener("keydown", (e) => {
  AC.innerHTML = "CE";
  for (i = 0; i < keys.length; i++) {
    if (e.key === keys[i]) {
      result += e.key;
    }
  }

  if (e.key === "Backspace") {
    result = result.slice(0, result.length - 1);
    if (result.length < 0) {
      span.innerHTML = newResult;
    }
  }

  span.innerHTML = result;
  newResult = Math.round(math.evaluate(result) * 100000) / 100000;

  if (e.key === "Enter") {
    input.value = newResult;
    result = newResult.toString();
    span.innerHTML = "Ans" + " = " + `${result}`;
  }
});

table.addEventListener("click", (e) => {
  AC.innerHTML = "CE";
  result += e.target.innerText;
  input.value = result;
  newResult = input.value;
  span.innerText = result;

  console.log(e.target.innerText);

  if (
    e.target.innerText === "sin" ||
    e.target.innerText === "cos" ||
    e.target.innerText === "tan" ||
    e.target.innerText === "log"
  ) {
    result = result + "(";
    getResults();
  } else if (e.target.innerText === "sin-1") {
    result = result.slice(0, result.length - 5);
    result = result + "asin(";
    getResults();
  } else if (e.target.innerText === "cos-1") {
    result = result.slice(0, result.length - 5);
    result = result + "acos(";
    getResults();
  } else if (e.target.innerText === "tan-1") {
    result = result.slice(0, result.length - 5);
    result = result + "atan(";
    getResults();
  } else if (e.target.innerText === "π") {
    result = result.slice(0, result.length - 1);
    result = result + "*" + "3.142";
    getResults();
  } else if (e.target.innerText === "√") {
    result = result.slice(0, result.length - 1);
    result = result + "^(1/2)";
    getResults();
  } else if (e.target.innerText === "x!") {
    result = result.slice(0, result.length - 2);
    result = result + "!";
    getResults();
  } else if (e.target.innerText === "xy") {
    result = result.slice(0, result.length - 2);
    result = result + "^";
    getResults();
  } else if (e.target.innerText === "ex") {
    result = result.slice(0, result.length - 1);
    result = result;
    getResults();
  } else if (e.target.innerText === "10x") {
    result = result.slice(0, result.length - 1);
    result = result + "^";
    getResults();
  } else if (e.target.innerText === "x2") {
    result = result.slice(0, result.length - 2);
    result = result + "^2";
    getResults();
  } else if (e.target.innerText === "y√x") {
    result = result.slice(0, result.length - 3);
    result = result + "^(1/";
    getResults();
  } else if (e.target.innerText === "=") {
    newResult = newResult.slice(0, newResult.length - 1);
    input.value = Math.round(math.evaluate(newResult) * 100000) / 100000;
    result = (
      Math.round(math.evaluate(newResult) * 100000) / 100000
    ).toString();
    span.innerText = "Ans" + " = " + `${result}`;
  } else if (e.target.innerText === "CE") {
    input.value = 0;
    result = "";
    span.innerHTML = "Ans" + " = " + `0`;
  } else if (e.target.innerText === "Inv") {
    input.value = "";
    result = "";
    span.innerHTML = "";
    inverseButton.classList.add("togglePadding");
  } else {
  }

  input.addEventListener("keydown", (e) => {
    if (e.target.innerText === "Backspace") {
      result = result.slice(0, result.length - 1);
      if (result.length < 0) {
        span.innerHTML = newResult;
      }
    }
  });
});

const getResults = () => {
  input.value = result;
  newResult = input.value;
  span.innerText = result;
};

inverseButton.addEventListener("click", (e) => {
  if (isInvPressed) {
    displayBlocks();
    isInvPressed = false;
  } else {
    displayHiddenBlocks();
    isInvPressed = true;
  }
});

const displayBlocks = () => {
  inverseButton.style.background = "#d0d2d6";
  inverseButton.style.border = "1px solid #d0d2d6";

  for (let i = 0; i < scientific.length; i++) {
    scientific[i].style.display = "block";
  }

  for (let i = 0; i < scientificInverse.length; i++) {
    scientificInverse[i].style.display = "none";
  }
};

const displayHiddenBlocks = () => {
  inverseButton.style.background = "#dadce0";
  inverseButton.style.border = "1px solid #dadce0";

  for (let i = 0; i < scientific.length; i++) {
    scientific[i].style.display = "none ";
  }

  for (let i = 0; i < scientificInverse.length; i++) {
    scientificInverse[i].style.display = "block";
  }
};

normalValues.addEventListener("click", (e) => {
  for (let i = 0; i < scientificNums.length; i++) {
    scientificNums[i].style.display = "none";
  }

  for (let i = 0; i < normalNums.length; i++) {
    normalNums[i].style.display = "block";
  }
});

scientificValues.addEventListener("click", (e) => {
  input.style.width = "20rem";

  for (let i = 0; i < scientificNums.length; i++) {
    scientificNums[i].style.display = "block";
  }

  for (let i = 0; i < normalNums.length; i++) {
    normalNums[i].style.display = "none";
  }
});
