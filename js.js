"use strict";
let col_wo=0;
let tp=false;
let pobeda=false;
let all_kub=document.querySelectorAll(".kub");
let new_game=document.querySelector(".new_game");
let fone=document.querySelector(".win");
let fone_p=document.querySelector(".win p");
let pole=document.querySelector(".pole");
let step=1; 
let colorpas=false;
let colornavid=false;
let combopas__=[
	[],
	[0,2,6,8]
];
let combopas_X_=[
    [0,2,4,6,8],
    [1,4,7]
    ];
let current_element=null;
let combowin=[
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[6,4,2],
	[0,4,8]
];
function proverka(){

}
pole.onclick=function(event){
	//target=элемент на который нажали
let target=event.target; 
if (target.className!="kub") {
//выти
		return;
	}
	
	if (step===1) {
// target.style.backgroundColor="blue";
		if ((target.style.color=="rgb(204, 204, 204)")||(event.target.style.color=="rgb(0, 219, 68)")) {
		target.innerHTML="X";
		if (colorpas) {
			event.target.style.color="red";
		}else {
			event.target.style.color="black";
		}
		step=2;
		target.style.cursor="default";

}
	} else {
		if ((target.style.color=="rgb(204, 204, 204)")||(event.target.style.color=="rgb(0, 219, 68)")) {
        target.innerHTML="O";
        if (colorpas) {
        	event.target.style.color="blue";
        }else {
        	 event.target.style.color="black";
        }
        step=1;
        target.style.cursor="default";
    }
	}
	cursor();
proverka();

for (let i = 0; i < combowin.length; i++) {
		if ((all_kub[combowin[i][0]].innerHTML==all_kub[combowin[i][1]].innerHTML)&&
			(all_kub[combowin[i][2]].innerHTML==all_kub[combowin[i][0]].innerHTML)&&
			 all_kub[combowin[i][0]].innerHTML!="") {
			fone.style.display="block";
            fone_p.innerHTML=all_kub[combowin[i][0]].innerHTML;
            pobeda=true;
            //тот кто победил

 			if  ((all_kub[combopas_X_[0][0]].innerHTML==all_kub[combopas_X_[0][1]].innerHTML)&&
			(all_kub[combopas_X_[0][0]].innerHTML==all_kub[combopas_X_[0][2]].innerHTML)&&
			 (all_kub[combopas_X_[0][0]].innerHTML==all_kub[combopas_X_[0][3]].innerHTML)&&
			 (all_kub[combopas_X_[0][0]].innerHTML==all_kub[combopas_X_[0][4]].innerHTML)&&
			  (all_kub[combopas_X_[0][0]].innerHTML=="X")){
				colorpas=true;

 			}
 			if (((all_kub[combopas_X_[1][0]].innerHTML==all_kub[combopas_X_[1][1]].innerHTML)&&
			(all_kub[combopas_X_[1][0]].innerHTML==all_kub[combopas_X_[1][2]].innerHTML)&&
			 (all_kub[combopas__[1][0]].innerHTML==all_kub[combopas__[1][1]].innerHTML)&&
			 (all_kub[combopas__[1][0]].innerHTML==all_kub[combopas__[1][2]].innerHTML)&&
			 (all_kub[combopas__[1][0]].innerHTML==all_kub[combopas__[1][3]].innerHTML)&&
			  (all_kub[combopas_X_[1][0]].innerHTML=="X")&&
			  (all_kub[combopas__[1][0]].innerHTML==""))) {
 			for (let i = 0; i < all_kub.length; i++) {
 				all_kub[i].style.backgroundColor="rgba(255,187,0,0.6)";
 			}
 			colornavid=true;
 			console.log("2пасхалка");
 			}
		}

	}
	col_wo=0;
	for (let i = 0; i < all_kub.length; i++) {
		if (all_kub[i].innerHTML!="" ) {

			col_wo++;
		}

	}
if ((col_wo===9)&&(pobeda===false)) {
	fone.style.display="block";
	fone_p.innerHTML="дружбы";
	fone_p.style.fontSize="250px";
    fone_p.style.marginBottom="120px";
	col_wo=0;
}
};
new_game.onclick=function(){
	fone.style.display="none";
	for (let i = 0; i < all_kub.length; i++) {
		all_kub[i].innerHTML="";
		// all_kub[i].style.cursor="url('крестик.png'),pointer";
		all_kub[i].style.cursor="pointer";
	}
	fone_p.style.fontSize="350px";
	fone_p.style.marginBottom="0px";
	pobeda=false;
	step=1;
};
function cursor(){
	for (let i = 0; i < all_kub.length; i++) {
		if (all_kub[i].innerHTML===""){
			if (step===1) {
				// all_kub[i].style.cursor="url('крестик.png'),pointer";
			}
			else{
				// all_kub[i].style.cursor="url('нолик.png'),pointer";
			}
		}
	}
}
pole.onmouseover=function(event){
	if (current_element) {
		return;
	}
	let target=event.target.closest(".kub");
	if (!target) {
		return;
	}
	current_element=target;
	if (event.target.innerHTML===""){
		if (step===1) {
	event.target.innerHTML="X";
}
else {
event.target.innerHTML="O";
	}
	if (colornavid) {
		event.target.style.color="#00DB44";
	}else {
		event.target.style.color="#CCCCCC";
	}
}
};

pole.onmouseout=function(event){
	if (!current_element) {
		return;
	}
	if ((event.target.style.color=="rgb(204, 204, 204)")||(event.target.style.color=="rgb(0, 219, 68)")){
	event.target.innerHTML="";
	event.target.style.color="black";
}
    current_element=null;
};



