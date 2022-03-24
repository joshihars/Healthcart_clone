const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

let sign_up_arr = [] || JSON.parse(localStorage.getItem("sign_up_data"));

document.getElementById("signUp_action").addEventListener("submit", signUpFun);
function signUpFun() {
  event.preventDefault();
  let sign_up_obj = {
    name: document.getElementById("up_name").value,
    email: document.getElementById("up_email").value,
    pass: document.getElementById("up_pass").value,
  };
  sign_up_arr.push(sign_up_obj);
  localStorage.setItem("sign_up_data", JSON.stringify(sign_up_arr));
  console.log("sign_up_arr", sign_up_arr);
  alert(
    `${document.getElementById("up_name").value} Your Sign Up is Succesful`
  );
}

// login Script
let r = 0;
let sign_in_arr = JSON.parse(localStorage.getItem("sign_up_data"));
document.getElementById("signIn_action").addEventListener("submit", signInFun);
function signInFun() {
  event.preventDefault();

  let email_in = document.getElementById("in_email").value;
  let pass_in = document.getElementById("in_pass").value;

  // console.log(sign_in_arr)
  for (let i = 0; i < sign_in_arr.length; i++) {
    if (sign_in_arr[i].email == email_in && sign_in_arr[i].pass == pass_in) {
      alert(`${sign_in_arr[i].name} your login is Succesful`);
      r++; //console.log('kk')
      window.location.href = "index.html";
    }
  }
}
// if(r ==0 ){
//   alert("Please Enter Valid Details")
// }
