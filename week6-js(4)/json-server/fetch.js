const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newSignupInfo = {
    username: username,
    email: email,
    password: password,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSignupInfo),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("회원가입 정보를 전송하는데 실패했습니다.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("회원가입이 완료되었습니다.");
      // 추가적인 처리나 메시지 표시 등을 할 수 있습니다.
    })
    .catch((error) => {
      console.error(error);
    });

  // 폼 초기화
  signupForm.reset();
});

fetch("http://localhost:3000/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("서버 응답이 실패했습니다.");
    }
    return response.json();
  })
  .then((data) => {
    // 가입된 회원가입 정보를 브라우저에 표시하는 코드 작성
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
  })
  .catch((error) => {
    // 에라 처리 코드 작성
    console.log(error);
  });
