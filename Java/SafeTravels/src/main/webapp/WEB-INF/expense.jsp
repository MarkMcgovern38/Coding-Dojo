<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expense</title>
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
			<h1 class= "col-9">Expense Details</h1>
			<a class= "col-3" href= "/">Go Back</a>
		</div>
			<div class = "row">
				<p class= "col-6">Expense Name:</p>
				<p class= "col-6">${travel.expense }</p>	
			</div>
			<div class = "row">
				<p class= "col-6">Expense Description:</p>
				<p class= "col-6">${travel.description }</p>	
			</div>
			<div class = "row">
				<p class= "col-6">Vendor:</p>
				<p class= "col-6">${travel.vendor }</p>	
			</div>
			<div class = "row">
				<p class= "col-6">Amount Spent:</p>
				<p class= "col-6">${travel.price}</p>	
			</div>

	</div>
</body>