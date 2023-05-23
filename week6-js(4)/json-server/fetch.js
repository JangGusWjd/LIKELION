const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newSignupInfo = {
    username: username,
    email: email,
    password: password,
  };

  // try {
  //   const response = await fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newSignupInfo),
  //   });

  //   if (!response.ok) {
  //     throw new Error("회원가입 정보를 전송하는데 실패했습니다.");
  //   }

  //   const data = await response.json();
  //   console.log("회원가입이 완료되었습니다.");

  //   signupForm.reset();
  // } catch (error) {
  //   console.log(error);
  // }

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

// 회원가입 정보 데이터 조회 후 웹 브라우저에 표시
fetch("http://localhost:3000/users")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("서버 응답이 실패했습니다.");
    }
    return response.json(); // 응답 본문을 JSON 형식으로 파싱하여 JavaScript 객체로 반환
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
