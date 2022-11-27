function currentDate()
	{
		var today = new Date();
		
		var day = today.getDate();
		if (day<10) day = "0"+day;
		
		var month = today.getMonth()+1;
		if (month<10) month= "0"+month;
		
		var year = today.getYear();
		var t=year + "-" + month + "-" + day;

         const divDate = document.getElementById('daten').innerHTML;
		divDate.setAttribute(placeholder,t);
}
   
