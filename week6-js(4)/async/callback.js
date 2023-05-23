function printImmediately(print) {
  print();
}
printImmediately(() => console.log("Synchronous callback"));

function printWithDelay(print, second) {
  setTimeout(print, second);
}
printWithDelay(() => console.log("Asynchronous callback"), 2000);

// 콜백 지옥
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "guswjd" && password === "0708") ||
        (id === "wjd2" && password === "user")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "guswjd") {
        onSuccess({ name: "guswjd", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
