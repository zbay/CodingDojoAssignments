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
		.col{
			display:inline-block;
		}
		#header{
			text-align:right;
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
		<a href="/dashboard">Dashboard</a>
	</div>
	<p>
		<span class="col">Title: </span>
		<span class="col"><c:out value="${song.getName()}"></c:out></span>
	</p>
	<p>
		<span class="col">Artist: </span>
		<span class="col"><c:out value="${song.getArtist()}"></c:out></span>
	</p>
	<p>
		<span class="col">Rating (1-10): </span>
		<span class="col"><c:out value="${song.getRating()}"></c:out></span>
	</p>
	<p>
		<a href="/songs/delete/${song.getId()}">Delete</a>
	</p>
</body>
</html>