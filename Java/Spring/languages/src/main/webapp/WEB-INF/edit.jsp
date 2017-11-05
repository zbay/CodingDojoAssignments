<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
			display:block;
		}
		#nav{
			align:left;
		}
	</style>
</head>
<body style="text-align: center">
	<div id="nav">
		<a href="/languages/delete/${index}">Delete</a> | <a href="/languages">Dashboard</a> <!-- Review -->
	</div>
	<form:form action="/languages/edit/${index}" method="post" modelAttribute="language">
		<div class="form-group">
			<form:label path="name">Name:
				<form:errors path="name" class="error"/>
				<form:input path="name"/>
			</form:label>
		</div>
		<div class="form-group">
			<form:label path="creator">Creator:
				<form:errors path="creator" class="error"/>
				<form:input path="creator"/>
			</form:label>
		</div>
		<div class="form-group">
			<form:label path="currentVersion">Version:
				<form:errors path="currentVersion" class="error"/>
				<form:input path="currentVersion"/>
			</form:label>
		</div>
		<input type="submit" value="Submit"/>
	</form:form>
</body>
</html>