<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Questions Dashboard</title>
</head>
<body style="text-align: center">
	<h1>Questions Dashboard</h1>
	<table>
		<thead>
			<tr>
				<td>Question</td>
				<td>Tags</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${questions}" var="question">
				<tr>
					<td>
						<c:out value="${question.getQuestion()}"></c:out>
					</td>
					<td>
						<c:out value="${question.tagString()}"></c:out>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<br/>
	<a href="/questions/new">New Question</a>
</body>
</html>