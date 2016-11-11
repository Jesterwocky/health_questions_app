import $ from 'jquery';

module.exports = {
  signUp(userData, success, error) {
    $.ajax({
      url: "/api/users",
      type: "POST",
      data: userData,
      dataType: "json",
      success: success
    });
  },

  logIn(userData, success, error) {
    $.ajax({
      url: "/api/sessions",
      type: "POST",
      data: userData,
      dataType: "json",
      success: success
    });
  },

  logOut(success, error) {
    $.ajax({
      url: "/api/sessions",
      type: "DELETE",
      dataType: "json",
      success: success
    });
  }
};
