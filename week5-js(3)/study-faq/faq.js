const faqQuestions = document.querySelectorAll(".faq-container-item");
// console.log(faqQuestions); // 배열이 아닌 NodeList 객체로 가져옴

let faqAnswers = document.querySelectorAll(".faq-answer");
const faqTitle = document.querySelectorAll(".faq-title");
const arrow = document.querySelectorAll("span");
// console.log(faqAnswers);

// All Close 버튼 누르면 한 번에 제거
const closeBtn = document.querySelector("button");
closeBtn.addEventListener("click", () => {
  for (let i = 0; i < faqAnswers.length; i++) {
    faqAnswers[i].classList.remove("active");
    faqTitle[i].style.backgroundColor = "white";
    faqTitle[i].style.color = "black";
    arrow[i].innerText = "▼";
  }
});

for (let i = 0; i < faqQuestions.length; i++) {
  faqQuestions[i].addEventListener("click", () => {
    // console.log(`${i}번째 질문 클릭`);
    // console.log(faqAnswers[i]);
    if (faqAnswers[i].classList.contains("active")) {
      faqAnswers[i].classList.remove("active");
      faqTitle[i].style.backgroundColor = "white";
      faqTitle[i].style.color = "black";
      arrow[i].innerText = "▼";
    } else {
      faqAnswers[i].classList.add("active");
      faqTitle[i].style.backgroundColor = "3a8fff";
      faqTitle[i].style.color = "white";
      arrow[i].innerText = "▲";
    }
  });
}
