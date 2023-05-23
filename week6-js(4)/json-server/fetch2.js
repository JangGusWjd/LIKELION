//데이터를 조회하는 비동기 함수
async function fetchSignupInfo() {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error("회원가입 정보를 가져오는데 실패했습니다.");
    }

    const data = await response.json();
    displaySignupInfo(data); // 데이터를 표시하는 함수 호출
  } catch (error) {
    console.log(error);
  }
}

// 가입된 회원가입 정보 데이터를 브라우저에 표시하는 함수
function displaySignupInfo(data) {
  const signupInfoDiv = document.getElementById("signupInfo");
  signupInfoDiv.innerHTML = `
      <h2>회원가입 정보</h2>
    `;

  data.forEach((info) => {
    const signupData = document.createElement("div");
    signupData.innerHTML = `
        <p>사용자명: ${info.username}</p>
        <p>이메일: ${info.email}</p>
        <p>비밀번호: ${info.password}</p>
        <hr>
      `;
    signupInfoDiv.appendChild(signupData);
  });
}

async function addSignupInfo(newSignupInfo) {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSignupInfo),
    });

    if (!response.ok) {
      throw new Error("회원가입 정보를 전송하는데 실패했습니다.");
    }

    const data = await response.json();
    console.log("회원가입 완료");
  } catch (error) {
    console.log(error);
  }
}

// 처음부터 회원 정보를 표시하기 위해
fetchSignupInfo();

// 신규 회원가입 정보가 제출되었을 때 이벤트 처리
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newSignupInfo = {
    username: username,
    email: email,
    password: password,
  };

  await addSignupInfo(newSignupInfo); // 새로운 회원가입 정보 데이터에 추가

  await fetchSignupInfo(); // 데이터를 다시 조회해 업데이트 정보 표시
});
