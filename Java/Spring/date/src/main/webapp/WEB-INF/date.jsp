<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.Calendar" %>
<span>
	<%
		Calendar c = Calendar.getInstance();
		int monthInt = c.get(Calendar.MONTH);
		String monthStr = "January";
		if(monthInt == 1){
			monthStr = "February";
		}
		if(monthInt == 2){
			monthStr = "March";
		}
		if(monthInt == 3){
			monthStr = "April";
		}
		if(monthInt == 4){
			monthStr = "May";
		}
		if(monthInt == 5){
			monthStr = "June";
		}
		if(monthInt == 6){
			monthStr = "July";
		}
		if(monthInt == 7){
			monthStr = "August";
		}
		if(monthInt == 8){
			monthStr = "September";
		}
		if(monthInt == 9){
			monthStr = "October";
		}
		if(monthInt == 10){
			monthStr = "November";
		}
		if(monthInt == 11){
			monthStr = "December";
		}
		String date = c.get(Calendar.DAY_OF_WEEK) + ", the " + c.get(Calendar.DAY_OF_MONTH) + " of " + monthStr + ", " + c.get(Calendar.YEAR);
	%>
	<%= date %>
</span>