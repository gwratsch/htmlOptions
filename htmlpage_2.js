window.onload = function(){loadCanvas();}
function loadCanvas(){

	var canvas2 = document.getElementById("bodycanvas");
	var ctx2 = canvas2.getContext("2d");

	var grd = ctx2.createRadialGradient(100,60,70,100,60,100);
	grd.addColorStop(0,"white");
	grd.addColorStop(1,"yellow");
	ctx2.fillStyle = grd;
	ctx2.fillRect(00,00,400,150);
	ctx2.moveTo(40,50);
	ctx2.lineTo(300,10);
	ctx2.moveTo(89,50);
	ctx2.lineTo(300,10);
	ctx2.moveTo(99,53);
	ctx2.lineTo(300,10);
	ctx2.moveTo(121,54);
	ctx2.lineTo(300,10);
	ctx2.moveTo(133,62);
	ctx2.lineTo(300,10);
	ctx2.moveTo(144,62);
	ctx2.lineTo(300,10);
	ctx2.moveTo(152,64);
	ctx2.lineTo(300,10);
	ctx2.moveTo(155,70);
	ctx2.lineTo(300,10);
	ctx2.stroke();
	ctx2.fillStyle="black";
	ctx2.font = "italic 20px Arial";
	ctx2.fillText("Here I am .....", 30,70);


}
function bird(){
	var birdList = document.getElementsByTagName("polyline");
	var eventName = "Hide the birds";
	for(i=0; i<birdList.length;i++){
		if(birdList[i].style.display == "block"){
			birdList[i].style.display = "none";
			eventName = "Display the birds again.";
		}else{
			birdList[i].style.display = "block";
			eventName = "Hide the birds again.";
		}
	}
	document.getElementById("birdDisplay").innerHTML =eventName ;
}
function tree(){
	var treeObject = document.getElementById("treeTrunk");
	var leavesObject = document.getElementById("leaves");
	var eventName = "Hide the tree.";
		if(treeObject.style.display == "block"){
			treeObject.style.display = leavesObject.style.display = "none";
			eventName = "Display the tree again.";
		}else{
			treeObject.style.display = leavesObject.style.display = "block";
			eventName = "Hide the tree again.";
		}
	document.getElementById("treeDisplay").innerHTML =eventName ;
}
function car(){
	var carpartlList = document.getElementsByClassName("carpart");
	var eventName = "Hide the car.";
	for(i=0; i<carpartlList.length;i++){
		if(carpartlList[i].style.display == "block"){
			carpartlList[i].style.display = "none";
			eventName = "Display the car again.";
		}else{
			carpartlList[i].style.display = "block";
			eventName = "Hide the car again.";
		}
	}
	document.getElementById("carDisplay").innerHTML =eventName ;
}
function mountan(){
	var mountanList = document.getElementsByTagName("polygon");
	var eventName = "Hide the mountan.";
		if(mountanList[0].style.display == "block"){
			mountanList[0].style.display = "none";
			eventName = "Display the mountan again.";
		}else{
			mountanList[0].style.display = "block";
			eventName = "Hide the mountan again.";
		}
	document.getElementById("mountanDisplay").innerHTML =eventName ;
}