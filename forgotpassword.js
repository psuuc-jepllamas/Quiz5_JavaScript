function resetPassword() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword === "" || confirmPassword === "") {
      alert("Please enter both new password and confirm password.");
    } else if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
    } else {
      // Password reset successful
      alert("Password reset successful. You can now log in with your new password.");

      // Overwrite the login credentials (dummy example)
      var username = "noah";
      var password = newPassword;

      // Additional actions can be performed here, such as updating the password in a database

      // Redirect to the login page
      window.location.href = "login.html";
    }
  }