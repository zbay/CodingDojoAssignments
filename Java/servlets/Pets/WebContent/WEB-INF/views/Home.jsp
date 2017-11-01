<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Homepage</title>
</head>
<body>
	<h1>Create your pets</h1>
	
	<h2>Create a Dog</h2>
	
	<form action="dog"  method="get">
		<p>
			<label>Name: </label>
			<input type="text" name="name">	
		</p>
		<p>
			<label>Breed: </label>
			<input type="text" name="breed">	
		</p>
		<p>
			<label>Weight: </label>
			<input type="number" name="weight">	
		</p>
		<input type="submit" value="Create">	
	</form>
	
	<h2>Create a Cat</h2>
	
	<form action="cat"  method="get">
		<p>
			<label>Name: </label>
			<input type="text" name="name">	
		</p>
		<p>
			<label>Breed: </label>
			<input type="text" name="breed">	
		</p>
		<p>
			<label>Weight: </label>
			<input type="number" name="weight">	
		</p>
		<input type="submit" value="Create">	
	</form>
</body>
</html>