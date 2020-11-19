function buttonClick(){
	 var username =  document.getElementById("username").value;
	 var password = document.getElementById('password').value;
	
	 if(username == "" || password==""){
	 	alert("No blank value allowed!!");
	 	return false;
	 }else{
	 	true;
	 }
}

function onAction(){
 var username =  document.getElementById("username").value;
 var password = document.getElementById('password').value;
	
 if(username =="KAJOL" && password="111"){
	 	alert("Matched..!!!");
	 }else{
	 	alert("Wrong !!, Try again..");
	 }
}