<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Lookify</title>
	<style>
		.error{
			color:red;
			display:block;
		}
		#header > *{
			display:inline-block;
		}
	</style>
</head>
<body style="text-align: center">
	<div id="header">
		<a href="/songs/new">Add New</a>
		<a href="/search/topTen">Top Songs</a>
		<form action="/search" method="post">
			<input type="text" name="artistText"/>
			<input type="submit" value="Search Artists"/>
		</form>
	</div>
	<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Rating</td>
				<td>Action</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${songs}" var="song">
				<tr>
					<td>
						<a href="/songs/${song.getId()}">
							<c:out value="${song.getName()}"></c:out>
						</a>
					</td>
					<td>
						<c:out value="${song.getRating()}"></c:out>
					</td>
					<td>
						<a href="/songs/delete/${song.getId()}">Delete</a>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>