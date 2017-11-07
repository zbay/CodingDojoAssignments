<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Person</title>
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
		<c:out value="${person.getName()}"></c:out>
	</h1>
	<p>
		<span class="col">License Number</span>
		<span class="col">
			<c:if test="${person.getLicense() != null}">
				<c:out value="${person.getLicense().getNumber()}"></c:out>
			</c:if>
		</span>
	</p>
	<p>
		<span class="col">State:</span>
		<span class="col">
			<c:if test="${person.getLicense() != null}">
				<c:out value="${person.getLicense().getState()}"></c:out>
			</c:if>
		</span>
	</p>
	<p>
		<span class="col">Expiration Date:</span>
		<span class="col">
			<c:if test="${person.getLicense() != null}">
				<c:out value="${person.getLicense().getExpirationString()}"></c:out>
			</c:if>
		</span>
	</p>
</body>
</html>