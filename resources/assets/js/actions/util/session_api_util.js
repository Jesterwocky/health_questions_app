module.exports = {
  signUp(user, success, error) {
    $.ajax({
      url: "api/users",
      type: "POST",
      data: user,
      dataType: "json",
      success: success
    });
  },

  login(user, success, error) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: user,
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
