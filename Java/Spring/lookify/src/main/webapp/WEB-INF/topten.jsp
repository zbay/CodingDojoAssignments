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
		.wide{
			width:50%;
		}
		.box{
			padding:3px;
			border: 1px solid black;
		}
	</style>
</head>
<body style="text-align: center">
	<div id="header">
		<h1>Top Ten Songs:</h1>
		<div class="wide"></div>
		<a href="/dashboard">Dashboard</a>
	</div>
	<div class="box">
		<c:forEach items="${songs}" var="song">
			<p>
				<c:out value="${song.getRating()}"></c:out>
				 - <a href="/songs/${song.getId()}"><c:out value="${song.getName()}"></c:out></a>
				 - <c:out value="${song.getArtist()}"></c:out>
			</p>
		</c:forEach>
	</div>
</body>
</html>