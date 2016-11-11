module.exports = {
  signUp(userData, success, error) {
    $.ajax({
      url: "/api/register",
      type: "POST",
      data: userData,
      dataType: "json",
      success: success
    });
  },

  login(userData, success, error) {
    $.ajax({
      url: "/api/login",
      type: "POST",
      data: userData,
      dataType: "json",
      success: success
    });
  },

  logout(success, error) {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      dataType: "json",
      success: success
    });
  }
};
