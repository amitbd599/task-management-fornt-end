class SessionHelper {
  setToken(token) {
    localStorage.setItem("Token", token);
  }
  getToken() {
    return localStorage.getItem("Token");
  }
  setUserDetails(userDetails) {
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetails"));
  }
  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }
}

export const {
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  removeSession,
} = new SessionHelper();
