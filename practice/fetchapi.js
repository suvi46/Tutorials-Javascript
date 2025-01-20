const fetchUserData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?pages=2");
    if (response.ok) {
      throw new Error("response error");
    }
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log("error:", error);
  }
};
fetchUserData();
