<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>RESTful Products</title>
	<style>
		.error{
			color:red;
			display:block;
		}
	</style>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script>
		function reload(){
			$.ajax({
				url: "/products",
				method: "GET"
			}).done(function(data){
				$("tbody").remove();
				let tbody = "<tbody>";
				for(let i = 0; i < data.length; i++){
					tbody += `<tbody><tr><td>${data[i].name}</td><td>${data[i].description}</td><td>${data[i].price}</td>
					<td><button class="deleteButton" name="${data[i].id}">Delete</button></td> </tr></tbody>`;
				}
				tbody += "</tbody>";
				$("table").append(tbody);
			});		
		}
		
		$(document).ready(function(){
			reload();
		});
	
		$(".deleteButton").on("click", function(){
			let productID = $(this).attr("name");
			$.ajax({
				url: "/products/" + productID,
				method: "DELETE"
			}).done(function(){
				$(this).parent.parent.remove();
				reload();
			});
		});
		
		$("#createButton").on("click", function(){
			$.ajax({
				url: "/products",
				method: "POST",
				data: {
					"name": $("#newName").val(),
					"description": $("#newDescription").val(),
					"price": $("#newPrice").val() + 0
				}
			}).done(function(){
				$("#newName").val("");
				$("#newDescription").val("");
				$("#newPrice").val(0);
				reload();
			});
		});
		
		$("#editButton").on("click", function(){
			let productID = $("#editID").val();
			$.ajax({
				url: "/products/" + productID,
				method: "PUT",
				data: {
					"name": $("#editName").val(),
					"description": $("#editDescription").val(),
					"price": $("#editPrice").val() + 0
				}
			}).done(function(){
				$("#editName").val("");
				$("#editDescription").val("");
				$("#editPrice").val(0);
				reload();
			});
		});
	</script>
</head>
<body style="text-align: center">
	<table>
		<thead>
			<tr>
				<td>Name</td>
				<td>Description</td>
				<td>Price</td>
				<td>ID</td>
				<td>Action</td>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
	
	<div class="box">
		<fieldset>
			<legend>New Product</legend>
			<div>
				<label class="col">Name:</label>
				<input class="col" type="text" id="newName"/>
			</div>
			<div>
				<label class="col">Description:</label>
				<input class="col" type="text" id="newDescription"/>
			</div>
			<div>
				<label class="col">Price:</label>
				<input class="col" type="number" step="0.01" id="newPrice"/>
			</div>
			<button id="createButton">Create New</button>
		</fieldset>
	</div>
	
	<h2>Update Product</h2>
	<input type="number" step="1" id="editID"/>
	
	<div class="box">
		<fieldset>
			<legend>Edit Product</legend>
			<div>
				<label class="col">Name:</label>
				<input class="col" type="text" id="editName"/>
			</div>
			<div>
				<label class="col">Description:</label>
				<input class="col" type="text" id="editDescription"/>
			</div>
			<div>
				<label class="col">Price:</label>
				<input class="col" type="number" step="0.01" id="editPrice"/>
			</div>
			<button id="editButton">Update</button>
		</fieldset>
	</div>	
</body>
</html>