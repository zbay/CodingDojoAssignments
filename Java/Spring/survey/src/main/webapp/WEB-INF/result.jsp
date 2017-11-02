<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Survey</title>
</head>
<body style="text-align: center">
	<div style="padding:5px; border: 1px solid black">
		<h1>Submitted Info</h1>
		<p>Name: <c:out value="${name}"></c:out></p>
		<p>Dojo Location: <c:out value="${location}"></c:out></p>
		<p>Favorite Language: <c:out value="${language}"></c:out></p>
		<p>Comment: <c:out value="${comment}"></c:out></p>
	</div>
</body>
</html>