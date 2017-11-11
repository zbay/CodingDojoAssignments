<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Admin Page</title>
<style>
	.col{
		display:inline-block;
	}
</style>
</head>
<body>
    <h1>Welcome to the Admin Page, <c:out value="${currentUser.getFirstName()}"></c:out></h1>
    
    <form id="logoutForm" method="POST" action="/logout">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <input type="submit" value="Logout" />
    </form>
    
    <table>
    	<thead>
    		<tr>
    			<td>Name</td>
    			<td>Email</td>
    			<td>Action</td>
    		</tr>
    	</thead>
    	<tbody>
    		<c:forEach items="${users}" var="user">
    			<c:if test="${!user.isSuperAdmin()}">
	    			<tr>
	    				<td>
	    					<c:out value="${user.getFullName()}"></c:out>
	    				</td>
	    				<td>
	    					<c:out value="${user.getEmail()}"></c:out>
	    				</td>
	    				<td>
	    					<c:choose>
	    						<c:when test="${user.isAdmin()}"><div class="col">Admin</div>
	    							<c:if test="${currentUser.isSuperAdmin()}"> | <form action="/delete/${user.id}" method="post" class="col">
	    								<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	    								<input type="submit" value="Delete"/>
	    							</form></c:if>
	    						</c:when>
	    						<c:otherwise>
	    							<form action="/delete/${user.id}" method="post" class="col">
	    								<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	    								<input type="submit" value="Delete"/>
	    							</form>
	    							 | 
	    							<form action="/make_admin/${user.id}" method="post" class="col">
	    							    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
	    								<input type="submit" value="Make Admin"/>
	    							</form>
	    						</c:otherwise>
	    					</c:choose>
	    				</td>
	    			</tr>
    			</c:if>
    		</c:forEach>
    	</tbody>
    </table>
</body>
</html>