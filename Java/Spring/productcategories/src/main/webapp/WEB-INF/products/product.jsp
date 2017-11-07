<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Product Page</title>
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
	<h1>
		<c:out value="${product.getName()}"></c:out>
	</h1>
	<div class="col">
		<h2>Categories:</h2>
		<ul>
			<c:forEach items="${product.getCategories()}" var="category">
				<li>
					<c:out value="${category.getName()}"></c:out>
				</li>
			</c:forEach>
		</ul>
	</div>
	<form action="/products/${product.getId()}" method="post">
		<div class="form-group">
			<label for="categoryID">Add Category:</label>
			<select name="categoryID">
				<c:forEach items="${categories}" var="category">
        			<option value="${category.getId()}">
        				<c:out value="${category.getName()}"></c:out>
        			</option>
    			</c:forEach>
			</select>
		</div>
		<input type="submit" value="Add"/>
	</form>
</body>
</html>