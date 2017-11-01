<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Checkerboard</title>
<style>
	.row{
		height:50px;
		display:block;
	}
	.col{
		height:50px;
		width:50px;
		display:inline-block;
	}
	.row:nth-child(odd) .col:nth-child(even), .row:nth-child(even) .col:nth-child(odd){
		background-color: black;
	}
	.row:nth-child(odd) .col:nth-child(odd), .row:nth-child(even) .col:nth-child(even){
		background-color:red;
	}
</style>
</head>
<body>
    <!-- getting the value for the name parameter -->
    <% String height = request.getParameter("height"); %>
    <% String width = request.getParameter("width"); 
   	if(height == null){ 
   		height = "0";
    }
    if(width == null){ 
    	width = "0";
    } %>
    <!-- displaying the value -->
    <h1>Checkerboard: <%= width %>w X <%= height %>h </h1>
    <% for(int rows = 0; rows < Integer.parseInt(height); rows++){ %>
    	<div class="row">
    		<% for(int cols = 0; cols < Integer.parseInt(width); cols++){ %>
    			<div class="col"></div>
    		<% } %>
    	</div>
    <% } %>
</body>
</html>