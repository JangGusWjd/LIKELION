async function fetchUser() {
  try {
    let id = await getId();
    let password = await getPw();
    return `${id}, ${password}`;
  } catch (e) {
    console.log("error", e);
  }
}
