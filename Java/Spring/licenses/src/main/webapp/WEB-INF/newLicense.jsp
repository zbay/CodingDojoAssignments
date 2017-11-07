<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>New License</title>
	<style>
		.error{
			color:red;
			display:block;
		}
	</style>
</head>
<body style="text-align: center">
	<h1>New License</h1>
	<form:form action="/licenses/new" method="post" modelAttribute="license">
		<div class="form-group">
			<form:label path="person">Name: </form:label>
			<form:errors path="person" class="error"/>
			<form:select path="person">
				<c:forEach items="${persons}" var="person">
        			<form:option value="${person}">${person.getName()}</form:option>
    			</c:forEach>
			</form:select>
		</div>
		<div class="form-group">
			<form:label path="state">State: </form:label>
			<form:errors path="state" class="error"/>
			<form:input path="state"/>
		</div>
		<div class="form-group">
			<form:label path="expiration_date">Expiration Date: </form:label>
			<form:errors path="expiration_date" class="error"/>
			<form:input path="expiration_date" type="date" name="expiration_date"/>
		</div>
		<input type="submit" value="Create"/>
	</form:form>
</body>
</html>