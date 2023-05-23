const num = document.querySelectorAll(".num");
const display = document.getElementById("result");
let calcResult = ""; // 0으로 초기화 하면 발생하는 문제 보여주기
// console.log(num);

// 숫자 값 가져오기. 배열의 처음부터 마지막 요소까지 반복해서 실행
num.forEach((number) => {
  number.addEventListener("click", (e) => {
    calcResult += e.target.value; // string 타입이어야함. 아니면 더해짐
    display.innerText = calcResult;
    // console.log(calcResult);
  });
});

// ac 버튼
const clearBtn = document.getElementById("ac");
clearBtn.addEventListener("click", () => {
  calcResult = "";
  display.innerText = 0;
  //   console.log(calcResult);
});

// 연산자 버튼
const opBtn = document.querySelectorAll(".op");
opBtn.forEach((op) => {
  op.addEventListener("click", (e) => {
    calcResult += e.target.value;
    display.innerText = calcResult;
  });
});

// 계산하기
const result = document.getElementById("calc");
result.addEventListener("click", () => {
  display.innerText = "";
  //   console.log(eval(calcResult));
  display.innerText = eval(calcResult);
  calcResult = eval(calcResult); // 그 전 결과에 이어서하기. 계산식에서 추가된 것이 아니게 하기 위해
});
