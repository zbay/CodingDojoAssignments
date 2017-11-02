<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Survey</title>
</head>
<body style="text-align: center">
	<form action="/survey" method="post">
		<div class="form-group">
			<label for="name">Your Name:</label>
			<input type="text" name="name" />
		</div>
		<div class="form-group">
			<label for="location">Location:</label>
			<input type="text" name="location"/>
		</div>
		<div class="form-group">
			<label for="language">Language:</label>
			<select name="language">
  				<option value="Python" selected>Python</option>
  				<option value="Java">Java</option>
  				<option value="JavaScript">JavaScript</option>
  				<option value="EmojiCode">EmojiCode</option>
			</select>
		</div>
		<div class="form-group">
			<label>Comment (optional):</label>
			<input type="text" name="comment" />
		</div>
		<input type="submit" value="Submit">
	</form>
</body>
</html>