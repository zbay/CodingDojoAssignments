<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.Calendar" %>
<span>
	<%
		Calendar c = Calendar.getInstance();
		int minuteInt = c.get(Calendar.MINUTE);
		String minuteStr = minuteInt + "";
		if(minuteInt < 10){
			minuteStr = "0" + minuteStr;
		}
		String time = c.get(Calendar.HOUR_OF_DAY) + ":" + minuteStr + " ";
		if(c.get(Calendar.AM_PM) == 0){
			time += "AM";
		}
		else{
			time += "PM";
		}
	%>
	<%= time %>
</span>