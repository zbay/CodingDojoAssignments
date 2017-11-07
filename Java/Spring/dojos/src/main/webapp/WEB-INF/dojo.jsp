<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Dojo Page</title>
	<style>
		.error{
			color:red;
			display:block;
		}
		.col{
			display:inline-block;
		}
	</style>
</head>
<body style="text-align: center">
	<h1><c:out value="${dojo.getName()}"></c:out>Location Ninjas</h1>
	<table>
		<thead>
			<tr>
				<td>First Name</td>
				<td>Last Name</td>
				<td>Age</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${dojo.getNinjas()}" var="ninja" >
				<tr>
					<td>
						<c:out value="${ninja.getFirstName()}"></c:out>
					</td>
					<td>
						<c:out value="${ninja.getLastName()}"></c:out>
					</td>
					<td>
						<c:out value="${ninja.getAge()}"></c:out>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>