document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const surname = document.querySelector('input[name="surname"]').value;
  const mobile = document.querySelector('input[name="mobile"]').value;
  const age = document.querySelector('input[name="age"]').value;
  const sex = document.querySelector('input[name="sex"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const country = document.querySelector('input[name="country"]').value;
  const state = document.querySelector('input[name="state"]').value;

  if (name === "" || surname === "" || mobile === "" || age === "" || sex === "" || email === "" || country === "" || state === "") {
    alert("Please fill in all required fields.");
  } else {
    alert("Profile saved successfully!");
  }
});