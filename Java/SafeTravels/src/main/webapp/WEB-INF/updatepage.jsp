<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Update</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<div class= "row">
			<h1 class= "col-9">Update</h1>
			<a class= "col-3" href= "/">Go Back</a>
		</div>
		<div class= "row">
			<form:form action="/expenses/${id}" method="POST" modelAttribute="travel">
			    <input type="hidden" name="_method" value="put">
			    <div>
			        <form:label path="expense">Expense</form:label>
			        <form:errors path="expense"/>
			        <form:input path="expense" type="text" name="expense" class="form-control"/>
			    </div>
			    <div>
			        <form:label path="description">Description</form:label>
			        <form:errors path="description"/>
			        <form:textarea path="description"/>
			    </div>
			    <div>
			        <form:label path="vendor">Vendor</form:label>
			        <form:errors path="vendor"/>
			        <form:input path="vendor"/>
			    </div>
			    <div>
			        <form:label path="price">Amount</form:label>
			        <form:errors path="price"/>     
			        <form:input type="number" path="price"/>
			    </div>    
			    <button type="submit" class="btn btn-primary">Submit</button>
			</form:form>
		</div>

	</div>
</body>