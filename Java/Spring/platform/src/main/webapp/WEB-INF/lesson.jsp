<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Fortran Dashboard</title>
	<style>
		.col{
			display:inline-block;
		}
		.box{
			padding:5px;
			border: 1px solid black;
		}
	</style>
</head>
<body style="text-align: center">
	<h1 class="col">Fortran!</h1>
	<div class="col">
		<span><a href="/m/38/0553/0733">Set up</a></span>
		 | 
		<span><a href="/m/38/0483/0345">Forms</a></span>
		 | 
		<span><a href="/m/38/0553/0342">Cards</a></span>
		 | 
		<span><a href="/m/26/0553/0348">Advanced</a></span>
		 | 
		<span><a href="/m/26/0483/2342">Binary</a></span>
	</div>
	<div class="box">
		<c:out value="${title}"></c:out> placeholder
	</div>
</body>
</html>