
let drop = document.getElementsByClassName("drop-down");
let shows = document.getElementsByClassName("dropitem");

drop[0].addEventListener("click", function() {
  shows[0].classList.toggle("dropdown2")
});
function signout(event) {
  event.preventDefault();
   localStorage.removeItem("islogin");
  window.location.replace("login.html");
}

let navs= document.getElementsByClassName("nav")[0];
let actives = navs.getElementsByClassName("navlists")
for(i=0;i<actives.length;i++){
	actives[i].addEventListener("click",function(){
		for(j=0;j<actives.length;j++){
		actives[j].classList.remove("globeactive");
	}
	this.classList.add("globeactive")
	})
}

let overlay = document.getElementsByClassName("blur")[0];
let popopedit = document.getElementsByClassName("popop_edit");
let close = document.getElementsByClassName("popup-edit-close");
let popup = document.getElementsByClassName("popup");

for (let i = 0; i < popup.length; i++) {
  popup[i].addEventListener("click", function(e) {
    e.preventDefault();
    this.parentNode.nextElementSibling.setAttribute("id", "show");
    overlay.setAttribute("id", "overlay");
  });
  
  close[i].addEventListener("click", function(e) {
    e.preventDefault();
    this.parentNode.parentNode.parentNode.removeAttribute("id", "show");
    overlay.removeAttribute("id", "overlay");
  });
}
// let overlay=document.getElementsByClassName("blur")[0];
// let popopedit= document.getElementsByClassName("popop_edit");
// let close=document.getElementsByClassName("popup-edit-close")
// let popup=document.getElementsByClassName("popup");
// for(i=0;i<popup.length;i++){
// popup[i].addEventListener("click",function(e){
	// e.preventDefault();
	// popopedit[0].setAttribute("id","show")
	// overlay.setAttribute("id","overlay")
// })
// }
// let closedoc=document.getElementsByClassName("popup-edit-close");
// closedoc[0].addEventListener("click", function(e){
	// e.preventDefault()
	// popopedit[0].removeAttribute("id","show")
	// overlay.removeAttribute("id","overlay")
// })
// let overlay=document.getElementsByClassName("blur")[0];
// let popup=document.getElementsByClassName("popup");
// for(i=0;i<popup.length;i++){
// popup[i].addEventListener("click",function(e){
	// e.preventDefault();
	// let popopedit=this.parentNode.parentNode.getElementsByClassName("popop_edit")[0];
	// popopedit.setAttribute("id","show");
	// overlay.setAttribute("id","overlay");
// }
















