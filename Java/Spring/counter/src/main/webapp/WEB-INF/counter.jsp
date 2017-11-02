<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>CounterPage</title>
</head>
<body>
	<p>You have visited <a href="/">http://localhost:8080</a> <c:out value="${count}"></c:out> times</p>
	<p><a href="/">Test another visit?</a></p>
	<form method="get" action="/reset">
		<input type="submit" value="Reset count"/>
	</form>
</body>
</html>