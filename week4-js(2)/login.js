const loginForm = document.getElementById("login-form");
const loginId = loginForm.querySelector("#login-id");
const loginPw = loginForm.querySelector("#login-pw");
const loginBtn = loginForm.querySelector("#login-btn");
const userMsg = document.getElementById("user-login");

const registerMsg = document.getElementById("register-login");
const logoutBtn = document.getElementById("logout-btn");

const HIDDEN_CLASSNAME = "hidden";

function submitLogin(e) {
  e.preventDefault();
  const userId = loginId.value;
  const userPw = loginPw.value;
  if (userId === "user" && userPw === "password") {
    registerMsg.classList.remove(HIDDEN_CLASSNAME);
    registerMsg.innerText = `관리자 ${userId}님 환영합니다.`;
  } else {
    userMsg.classList.remove(HIDDEN_CLASSNAME);
    userMsg.innerText = `"${userId}"님 환영합니다.`;
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  }
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

function clickLogout() {
  alert("로그인 정보가 사라집니다.");
  loginId.value = "";
  loginPw.value = "";
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  userMsg.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", submitLogin);
logoutBtn.addEventListener("click", clickLogout);
