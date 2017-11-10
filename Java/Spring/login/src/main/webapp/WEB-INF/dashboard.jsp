<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Welcome</title>
<style>
	.box{
		padding:5px;
		border:1px solid black;
	}
	.col{
		display:inline-block;
	}
</style>
</head>
    <form id="logoutForm" method="POST" action="/logout">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <input type="submit" value="Logout"/>
    </form>
<body>
	<h1>Welcome <c:out value="${currentUser.firstName}"></c:out></h1>
	<div class="box">
		<div>
			<div class="col">First Name:</div>
			<div class="col"><c:out value="${currentUser.firstName}"></c:out></div>
		</div>
		<div>
			<div class="col">Last Name:</div>
			<div class="col"><c:out value="${currentUser.lastName}"></c:out></div>
		</div>
		<div>
			<div class="col">Email:</div>
			<div class="col"><c:out value="${currentUser.email}"></c:out></div>
		</div>
		<div>
			<div class="col">Sign Up Date:</div>
			<div class="col"><fmt:formatDate pattern = "MMMM d, yyyy" dateStyle = "long" value = "${currentUser.createdAt}" /></div>
		</div>
		<div>
			<div class="col">Last Sign In:</div>
			<div class="col"><fmt:formatDate pattern = "MMMM d, yyyy" dateStyle = "long" value = "${currentUser.updatedAt}" /></div>
		</div>
	</div>
</body>
</html>