<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Languages</title>
	<style>
		.col{
			display: inline-block;
		}
		.box{
			border: 1px solid black;
			padding: 5px;
		}
		.success{
			color:green;
		}
		.error{
			color:red;
		}
		#nav{
			align:left;
		}
	</style>
</head>
<body style="text-align: center">
	<div id="nav">
		<a href="/languages">Dashboard</a>
	</div>
	<p>
		<c:out value="${language.getName()}"></c:out>
	</p>
	<p>
		<c:out value="${language.getCreator()}"></c:out>
	</p>
	<p>
		<c:out value="${language.getCurrentVersion()}"></c:out>
	</p>
	<p>
		<a href="/languages/edit/${language.getId()}">Edit</a>
	</p>
	<p>
		<a href="/languages/delete/${language.getId()}">Delete</a>
	</p>
</body>
</html>