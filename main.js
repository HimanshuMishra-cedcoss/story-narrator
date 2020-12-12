	function passvalues()
	{
		let firstanimal=document.getElementById('animalname').value;
		localStorage.setItem("animal1",firstanimal);
		let secondanimal=document.getElementById('anotheranimal').value;
		localStorage.setItem("animal2",secondanimal);
		let thirdanimal=document.getElementById('onemoreanimal').value;
		localStorage.setItem("animal3",thirdanimal);
		let adj=document.getElementById('Adjective').value;
		localStorage.setItem("adject",adj);
		let verb=document.getElementById('Verbs').value;
		localStorage.setItem("ver",verb);
		let num=document.getElementById('numbers').value;
		localStorage.setItem("numb",num);
		let yn=document.getElementById('yes').checked;
		localStorage.setItem("yon",yn);
		let speed=document.getElementById('rspeed').value;
		localStorage.setItem("relspeed",speed);
		let quotes=document.getElementById('quote').value;
		localStorage.setItem("quo",quotes);
		let message=document.getElementById('msg').value;
		localStorage.setItem("msgs", message);
		
	}
		document.getElementById('result3').innerHTML=localStorage.getItem("animal3");
		document.getElementById('result4').innerHTML=localStorage.getItem("adject");
		document.getElementById('result6').innerHTML=localStorage.getItem("numb");
		let yesno = localStorage.getItem("yon");
		if(yesno =='true'){
			document.getElementById('result7').innerHTML='Yes';
		}
		else if(yesno =='false'){
			document.getElementById('result7').innerHTML='No';
		}
		else{
			document.getElementById('result7').innerHTML='Null'
		}
		//document.getElementById('result7').innerHTML=localStorage.getItem("yon");
		document.getElementById('result8').innerHTML=localStorage.getItem("relspeed");
		document.getElementById('result9').innerHTML=localStorage.getItem("quo");
		document.getElementById('result10').innerHTML=localStorage.getItem("msgs");
		var elements = document.querySelectorAll('[id="result1"]');
		for (i=0; i < elements.length; i++){
			elements[i].innerHTML=localStorage.getItem("animal1");
		}
		var elements = document.querySelectorAll('[id="result2"]');
		for (i=0; i < elements.length; i++){
			elements[i].innerHTML=localStorage.getItem("animal2");
		}
		var elements = document.querySelectorAll('[id="result5"]');
		for (i=0; i < elements.length; i++){
			elements[i].innerHTML=localStorage.getItem("ver");
		}