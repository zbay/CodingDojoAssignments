<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>The Code</title>
	<style>
		.error{
			color:red;
		}
	</style>
</head>
<c:if test="${errors != null}">
	<p class="error">
		<c:out value="${errors}"></c:out>
	</p>
</c:if>
<body style="text-align: center">
	<form action="/login" method="post">
		<label for="code">What is the code?</label>
		<input type="password" name="code"/>
		<input type="submit" value="Try Code"/>
	</form>
</body>
</html>
