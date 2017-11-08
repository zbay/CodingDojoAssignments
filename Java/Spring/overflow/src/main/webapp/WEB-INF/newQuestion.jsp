<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>New Question</title>
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
	<h1>New Question</h1>
	<form action="/questions/new" method="post">
		<div class="form-group">
			<label for="question">Question: </label>
			<c:if test="${questionError != null}">
				<p class="error">
					<c:out value="${questionError}"></c:out>
				</p>
			</c:if>
			<input type="text" name="question"/>
		</div>
		<div class="form-group">
			<label for="tags">Tags: </label>
			<c:if test="${tagError != null}">
				<p class="error">
					<c:out value="${tagError}"></c:out>
				</p>
			</c:if>
			<input type="text" name="tags"/>
		</div>
		<input type="submit" value="Submit"/>
	</form>
</body>
</html>