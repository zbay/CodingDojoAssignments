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
		.error{
			color:red;
			display:block;
		}
	</style>
</head>
<body style="text-align: center">
	<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Creator</td>
				<td>Version</td>
				<td>Action</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${languages}" var="language">
				<tr>
					<td>
						<a href="/languages/${language.getId()}">
							<c:out value="${language.getName()}"></c:out>
						</a>
					</td>
					<td>
						<c:out value="${language.getCreator()}"></c:out>
					</td>
					<td>
						<c:out value="${language.getCurrentVersion()}"></c:out>
					</td>
					<td>
						<a href="/languages/delete/${language.getId()}">Delete</a> | <a href="/languages/edit/${language.getId()}">Edit</a>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<form:form action="/languages" method="post" modelAttribute="language">
		<div class="form-group">
			<form:label path="name">Name</form:label>
			<form:errors path="name" class="error"/>
			<form:input path="name"/>
		</div>
		<div class="form-group">
			<form:label path="creator">Creator:</form:label>
			<form:errors path="creator" class="error"/>
			<form:input path="creator"/>
		</div>
		<div class="form-group">
			<form:label path="currentVersion">Version:</form:label>
			<form:errors path="currentVersion" class="error"/>
			<form:input path="currentVersion"/>
		</div>
		<input type="submit" value="Submit"/>
	</form:form>
</body>
</html>