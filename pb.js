function currentDate()
	{
		var today = new Date();
		
		var day = today.getDate();
		if (day<10) day = "0"+day;
		
		var month = today.getMonth()+1;
		if (month<10) month= "0"+month;
		
		var year = today.getFullYear();
		
		const calendar=document.getElementById ("cal").innerHTML;
		calendar.getAttribute("value").innerHTML=year + "-" + month + "-" + day;
		
	}
   
