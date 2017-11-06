<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
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
	<form:form action="/songs/new" method="post" modelAttribute="song">
		<div class="form-group">
			<form:label path="name">Title</form:label>
			<form:errors path="name" class="error"/>
			<form:input path="name"/>
		</div>
		<div class="form-group">
			<form:label path="artist">Artist</form:label>
			<form:errors path="artist" class="error"/>
			<form:input path="artist"/>
		</div>
		<div class="form-group">
			<form:label path="rating">Rating (1-10)</form:label>
			<form:errors path="rating" class="error"/>
			<form:select path="rating">
				<form:option value="1" label="1"/>
				<form:option value="2" label="2"/>
				<form:option value="3" label="3"/>
				<form:option value="4" label="4"/>
				<form:option value="5" label="5"/>
				<form:option value="6" label="6"/>
				<form:option value="7" label="7"/>
				<form:option value="8" label="8"/>
				<form:option value="9" label="9"/>
				<form:option value="10" label="10"/>
			</form:select>
		</div>
		<input type="submit" value="Add Song"/>
	</form:form>
</body>
</html>