let getUrl= window.location.href;

if (getUrl.includes("index.html")){
	let local=localStorage.getItem("islogin");
	if(!local){
		window.location.replace("login.html")
		localStorage.removeItem("userId");
	}
} 
if (getUrl.includes("profile.html")){
	let local=localStorage.getItem("islogin");
	if(!local){
		window.location.replace("login.html")
		localStorage.removeItem("userId");
	}
}


let userDatas = [
  { id: 111, name:"anu Grahan", email: "anu@gmail.com", password: "anu123" },
  { id: 222, name:"akash anbu",email: "akash@gmail.com", password: "akash123" },
  { id: 333, name:"dhanush",email: "dhanush@gmail.com", password: "dhanush123" },
  { id: 444, name:"ela murugu",email: "ela@gmail.com", password: "ela123" },
  { id: 555, name:"hari kishore", email: "hari@gmail.com", password: "hari123" },
  { id: 666, name:"karthi Dk", email: "karthi@gmail.com", password: "karthi123" },
  { id: 777, name:"ragu bathi", email: "ragu@gmail.com", password: "ragu123" },
  { id: 888, name:"soniya vasu", email: "soniya@gmail.com", password: "soniya123" },
  { id: 999, name:"yogesh", email: "yogesh@gmail.com", password: "yogesh123" }
];

let sign = document.getElementById("signInform");
let userInput = document.getElementsByClassName("inputs");
let emailid = document.getElementById("email");
let alertmail= document.getElementsByClassName("alert-box-email");
let alertbox=document.getElementsByClassName("alert-box-item");
function onSignIn(e) {
  let isValid = 0;
  let pass = document.getElementById("pas").value;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i].value.trim().length < 4) {
      userInput[i].classList.add("alert");
      isValid++;
    } else {
      userInput[i].classList.remove("alert");
      isValid = 0;
    }
  }
	  function findUser(user) {
  return user.email === emailid.value;
}
var user = userDatas.find(findUser);
if (isValid==0){
	if (user) {
	  alertmail[0].classList.remove("alert-boxs");
	  alertbox[0].classList.remove("alert-box-box");

		if (user.password === pass) {
		isValid=0;
			localStorage.setItem("userId",user.id);
			
		} else {
			alertmail[0].classList.add("alert-boxs");
			alertbox[0].classList.add("alert-box-box");
			userInput[0].classList.add("alert");
			isValid=1;
		}
	} else {
	  alertmail[0].classList.add("alert-boxs");
	  alertbox[0].classList.add("alert-box-box");
	  userInput[0].classList.add("alert");
	  isValid=1;
	}
}
  if (isValid == 0) {
    sign.reset();
    console.log("finished");
	logIn();
	userDetail;
	
  }
}

sign.addEventListener("submit", function (e) {
  e.preventDefault();
  onSignIn();
});

let show = document.getElementById("show");
let password = document.getElementById("pas");
console.log();
show.addEventListener("click", function (e) {
  e.preventDefault();
  if (password.type === "password") {
    password.type = "text";
    show.innerText = "hide";
  } else {
    password.type = "password";
    show.innerText = "show";
  }
});
function logIn(){
	window.location.replace("index.html")
	localStorage.setItem("islogin", true)
}
function signout(event) {
  event.preventDefault();
  localStorage.removeItem("islogin");
  window.location.replace("login.html");
}
