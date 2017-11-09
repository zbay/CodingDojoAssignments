<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Category Page</title>
</head>
<body style="text-align: center">
<div id="ninjas">
    <h1>Ninjas</h1>
    
    // for loop to create all the links
    <c:forEach begin="1" end="${totalPages}" var="index">
        <a href="/pages/${index}">${index}</a>
    </c:forEach>
    <table class="table">
        <thead>
        	<tr>
        		<td>Dojo Location</td>
        		<td>First Name</td>
        		<td>Last Name</td>
        	</tr>
        </thead>
        <tbody>
            <c:forEach var="ninja" items="${ninjas.content}">                 
            <tr>
            	<td>
            		<c:out value="${ninja.getDojo().getName()}"></c:out>
            	</td>
                <td>
                	<c:out value="${ninja.firstName}"></c:out>
                </td>
                <td>
                	<c:out value="${ninja.lastName}"></c:out>
                </td>
            </tr>
            </c:forEach>
        </tbody>
    </table>
</div>
</body>