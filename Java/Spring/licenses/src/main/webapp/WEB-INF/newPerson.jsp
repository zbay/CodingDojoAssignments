<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>New Person</title>
	<style>
		.error{
			color:red;
			display:block;
		}
	</style>
</head>
<body style="text-align: center">
	<h1>New Person</h1>
	<form:form action="/persons/new" method="post" modelAttribute="person">
		<div class="form-group">
			<form:label path="first_name">First Name: </form:label>
			<form:errors path="first_name" class="error"/>
			<form:input path="first_name"/>
		</div>
		<div class="form-group">
			<form:label path="last_name">Last Name: </form:label>
			<form:errors path="last_name" class="error"/>
			<form:input path="last_name"/>
		</div>
		<input type="submit" value="Create"/>
	</form:form>
</body>
</html>