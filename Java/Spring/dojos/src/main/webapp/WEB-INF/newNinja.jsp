<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>New Ninja</title>
	<style>
		.error{
			color:red;
			display:block;
		}
	</style>
</head>
<body style="text-align: center">
	<h1>New Ninja</h1>
	<form:form action="/ninjas/new" method="post" modelAttribute="ninja">
		<div class="form-group">
			<form:label path="dojo">Dojo:</form:label>
			<form:errors path="dojo" class="error"/>
			<form:select path="dojo">
				<c:forEach items="${dojos}" var="dojo">
        			<form:option value="${dojo}">${dojo.getName()}</form:option>
    			</c:forEach>
			</form:select>
		</div>
		<div class="form-group">
			<form:label path="firstName">First Name: </form:label>
			<form:errors path="firstName" class="error"/>
			<form:input path="firstName"/>
		</div>
		<div class="form-group">
			<form:label path="lastName">Last Name: </form:label>
			<form:errors path="lastName" class="error"/>
			<form:input path="lastName"/>
		</div>
		<div class="form-group">
			<form:label path="age">Age: </form:label>
			<form:errors path="age" class="error"/>
			<form:input path="age" type="number" step="1"/>
		</div>		
		<input type="submit" value="Create"/>
	</form:form>
</body>
</html>