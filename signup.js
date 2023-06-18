const registeredUsers = [];

function register() {

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;


  const user = {
    username: username,
    password: password
  };

  const isUsernameTaken = registeredUsers.some((user) => user.username == username);
  if (isUsernameTaken) {
    alert('Username already taken. Please choose a different username.');
    return;
  }
  

  registeredUsers.push(user);

  alert('Registration successful! You can now login with your credentials.');
  window.location.href = 'dashboard.html';
  return;
}