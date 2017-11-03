<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Survey</title>
	<style>
		.col{
			display: inline-block;
		}
		.box{
			border: 1px solid black;
			padding: 5px;
		}
		.gain{
			color:green;
		}
		.loss{
			color:red;
		}
	</style>
</head>
<body style="text-align: center">
	<div>
		<div class="col">
			<h1>Your gold:</h1> 
		</div>
		<div class="col box"> 
			<c:out value="${gold.doubleValue()}"></c:out>
		</div>
	</div>
	<div>
		<div class="col box">
			<h2>Farm</h2>
			<h3>(earns 10-20 gold)</h3>
			<form method="post" action="/visit">
				<input type="hidden" name="destination" value="Farm"/>
				<input type="submit" value="Find Gold!"/>
			</form>
		</div>
		<div class="col box">
			<h2>Cave</h2>
			<h3>(earns 5-10 gold)</h3>	
			<form method="post" action="/visit">
				<input type="hidden" name="destination" value="Cave"/>
				<input type="submit" value="Find Gold!"/>
			</form>
		</div>
		<div class="col box">
			<h2>House</h2>
			<h3>(earns 2-5 gold)</h3>	
			<form method="post" action="/visit">
				<input type="hidden" name="destination" value="House"/>
				<input type="submit" value="Find Gold!"/>
			</form>
		</div>
		<div class="col box">
			<h2>Casino</h2>
			<h3>(earns/takes 0-50 gold)</h3>	
			<form method="post" action="/visit">
				<input type="hidden" name="destination" value="Casino"/>
				<input type="submit" value="Find Gold!"/>
			</form>	
		</div>
	</div>
	<h1>Activities:</h1>
	<div id="activities">
		<c:forEach items="${visits}" var="visit">
			<p>
				<c:if test='${visit.indexOf("lost") > -1}'>
					<span class="loss"><c:out value="${visit}"></c:out></span>
				</c:if>
				<c:if test='${visit.indexOf("lost") == -1}'>
					<span class="gain"><c:out value="${visit}"></c:out></span>
				</c:if>
			</p>
		</c:forEach>
	</div>
</body>
</html>