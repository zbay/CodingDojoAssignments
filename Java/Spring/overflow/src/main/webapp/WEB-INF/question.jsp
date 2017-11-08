<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Question</title>
	<style>
		.error{
			color:red;
			display:block;
		}
		.col{
			display:inline-block;
		}
		.box{
			padding:3px;
			border:1px solid black;
		}
	</style>
</head>
<body style="text-align: center">
	<h1>
		<c:out value="${question.getQuestion()}"></c:out>
	</h1>
	<h2 class="col">Tags: </h2>
	<c:forEach items="${question.getTags()}" var="tag">
		<div class="col box">
			<c:out value="${tag.getSubject()}"></c:out>
		</div>
	</c:forEach>
	
	<br />
	
	<table class="col">
		<thead>
			<tr>
				<td>Answers</td>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${question.getAnswers()}" var="answer">
				<tr>
					<td>
						<c:out value="${answer.getAnswer()}"></c:out>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	
	<form class="col" action="/questions/${question.getId()}" method="post">
		<div class="form-group">
			<label for="answer">Answer: </label>
			<c:if test="${answerError != null}">
				<p class="error">
					<c:out value="${answerError}"></c:out>
				</p>
			</c:if>
			<input type="text" name="answer"/>		
		</div>
		<input type="submit" value="Answer it!"/>
	</form>
</body>
</html>