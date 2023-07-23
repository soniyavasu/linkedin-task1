//js

let getUrl= window.location.href;

if (getUrl.includes("profile.html")){
	let local=localStorage.getItem("islogin");
	if(!local){
		window.location.replace("login.html");
		localStorage.removeItem("userId");
	}
}
if (getUrl.includes("index.html")){
	let local=localStorage.getItem("islogin");
	if(!local){
		window.location.replace("login.html")
		localStorage.removeItem("userId");
	}
}
let userData = [
	{id:111,
	firstName:"Anu",
	lastname:"Grahan",
	mobile:"8124311701",
	gender:"male",
	role:"Front End trainee",
	address:{state:"Tamil Nadu",
			city:"cuddalore",
			country:"india"},
	email:"anu@gmail.com",
	userimg:"images/userImg/anu.jpg",
	banner:'url("images/bannar/anubaner.JPEG")'},
	
	{id:222,
	firstName:"Akash",
	lastname:"Anbu",
	mobile:"8667370864",
	gender:"male",
	role:"Front End trainee",
	address:{state:"Tamil Nadu",
			city:"thanjai",
			country:"india"},
	email:"akash@gmail.com",
	userimg:"images/userImg/akash.jpg",
	banner:'url("images/baner/akashbanner.jpg")'},
	{id:333,firstName:"Dhanush",lastname:"kumar",mobile:"7358213126",gender:"male",experiance:2,role:"Front End trainee",address:{state:"Tamil Nadu",city:"thanjai",country:"india"},email:"dhanush@gmail.com",userimg:"images/dhanush.jpg",banner:"images/baner/dhanushbanner.jpg"},
	{id:444,firstName:"Ela",lastname:"Murugu",mobile:"8667864991",gender:"male",experiance:5,role:"Front End trainee",address:{state:"Tamil Nadu",city:"Erode",country:"india"},email:"elamurugu@gmail.com",userimg:"images/userImg/elamurugu.jpg",banner:'url("images/bannar/elabaner.JPEG")'},
	{id:555,firstName:"Hari",lastname:"Kishore",mobile:"9500231059",gender:"male",experiance:2,role:"Front End trainee",address:{state:"Tamil Nadu",city:"trichy",country:"india"},email:"hari@gmail.com",userimg:"images/userImg/hari.jpg",banner:'url("images/bannar/haribaner.JPEG")'},
	{id:666,firstName:"Karthi",lastname:"Dk",mobile:"9751008258",gender:"male",experiance:4,role:"Front End trainee",address:{state:"Tamil Nadu",city:"dhindugal",country:"india"},email:"karthi@gmail.com",userimg:"images/userImg/karthi.JPEG",banner:'url("images/bannar/karthibaner.JPEG")'},
	{id:777,firstName:"Ragu",lastname:"Bathi",mobile:"9095075260",gender:"male",experiance:7,role:"Front End Devloper",address:{state:"Kerala",city:"Thenkasi",country:"india"},email:"ragu@gmail.com",userimg:"images/userImg/ragu.JPEG",banner:'url("images/bannar/ragubaner.JPEG")'},
	{id:888,firstName:"Soniya",lastname:"Vasu",mobile:"8637643719",gender:"female",experiance:4,role:"Front End trainee",address:{state:"Tamil Nadu",city:"kummbakonam",country:"india"},email:"soniya@gmail.com",userimg:"images/userImg/soniya.jpg",banner:'url("images/bannar/soniyabaner.JPEG")'},
	{id:999,firstName:"Yogesh",lastname:"Raj",mobile:"9655306595",gender:"male",experiance:1,role:"Front End trainee",address:{state:"Utter Predash",city:"covai",country:"india"},email:"yogesh@gmail.com",userimg:"images/userImg/yogesh.JPEG",banner:'url("images/bannar/yogeshbaner.jpg")'}]



let userId, userdetails;
let getId = localStorage.getItem("userId");
if(getId){
	userId = parseInt(getId);
	console.log(userId);
	userdetails = userData.find(function(users){
					return users.id	=== userId;
				});
}
let userSkils=[{id:111,college:"Anna University",course:"B.A tamil",acadamicyear:"2019-2021",},
				{id:222,college:"Akash palayboys University",course:"m.phil",acadamicyear:"2009-2012",},
				{id:333,college:"Sastra University",course:"B.C.A",acadamicyear:"2021-2024",},
				{id:555,college:"st.Thomas Arts & Science",course:"B.S.C computer Science",acadamicyear:"2018-2020",},
				{id:444,college:"EVR University",course:"B.E mech",acadamicyear:"2016-2020",},
				{id:666,college:"loyola college",course:"BA. psychology",acadamicyear:"2019-2021",},
				{id:777,college:"G.O.A.T University",course:"Chartered Accountant",acadamicyear:"1999-2001",},
				{id:888,college:"University of Madras",course:"kitchen hell",acadamicyear:"0000-0000",},
				{id:999,college:"Ratnavel Subramaniam College of Arts & Science, ",course:"B.S.C- computer science",acadamicyear:"2019-2021",}]
				
let userskills = userSkils.find(function(users){
				return users.id	=== userId;
						});
						console.log(userskills)
			




	
	//User home page 
if (getUrl.includes("index.html")){
	if(userdetails){
	let adminname = document.getElementsByClassName("admin_name");
		for(i=0;i<adminname.length;i++){
		adminname[i].innerHTML=userdetails.firstName+" "+userdetails.lastname;
		}
	let userrole=document.getElementsByClassName("userrole");
		for(i=0;i<userrole.length;i++){
		userrole[i].innerHTML=userdetails.role;
	}
	let dpimgs=document.getElementsByClassName("dpimgs")
		for(j=0;j<dpimgs.length;j++){
			dpimgs[j].src=userdetails.userimg;
		}
}
}
	
		
	
	//User profile
if (getUrl.includes("profile.html")){
	if(userdetails){
	let banner = document.getElementsByClassName("user_banner");
		banner[0].style.backgroundImage = userdetails.banner;
	let imgs= document.getElementsByClassName("dpimg");
		for(k=0;k<imgs.length;k++){
			imgs[k].src=userdetails.userimg;
		}
				
	let name = document.getElementsByClassName("yoursName");
		for(i=0;i<name.length;i++){
			name[i].innerHTML=userdetails.firstName+" "+userdetails.lastname;
		}
	let roles = document.getElementsByClassName("user-role");
		for(j=0;j < roles.length;j++){
		roles[j].innerHTML=userdetails.role;
		}
	let userHome= document.getElementById("u-town");
		userHome.innerHTML=userdetails.address.city;
	let userState= document.getElementById("u-state");
		userState.innerHTML=userdetails.address.state;
	let userCoun= document.getElementById("u-country");
		userCoun.innerHTML=userdetails.address.country;		
		
}
if(userskills){
	let college=document.getElementsByClassName("user_col");
	college[0].innerHTML=userskills.college;
	let depot=document.getElementsByClassName("edu-dep");
	depot[0].innerHTML=userskills.course;
	let acadmic=document.getElementsByClassName("acadmic");
	acadmic[0].innerHTML=userskills.acadamicyear;
	
	
}
		
let followBtn = document.getElementsByClassName("follow");
for(let i=0;i<followBtn.length;i++){
	followBtn[i].addEventListener("click",follows)
}
function follows(e){
	e.preventDefault()
    let follow=this;
    let count=this.parentNode.parentNode.getElementsByClassName("folowcount")[0];
    let countNo=parseInt(count.textContent.replace(/,/g, ""))
    console.log(countNo);
    if(follow.classList.contains("counts")){
    	let a=countNo-1;
    	count.innerText=a.toLocaleString();
        follow.innerText="follow"
        follow.classList.remove("counts")
    }else{
    	let b=countNo+1;
    	count.innerText=b.toLocaleString();
        follow.innerText="following"
        follow.classList.add("counts")
    }
    
}
	
}



