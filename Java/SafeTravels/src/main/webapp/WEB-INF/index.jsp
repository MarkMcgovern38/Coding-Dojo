<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Safe Travels</title>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

</head>
<body>
	<div class="container">
		<div class="row">
			<h1>Save Travels</h1>
		</div>
		<div class="row">
			<table class="table">
			  <thead class="thead-dark">
			    <tr>
			      <th scope="col">Expense</th>
			      <th scope="col">Vendor</th>
			      <th scope="col">Amount</th>
			      <th scope="col">Actions</th>
			    </tr>
			  </thead>
			  <tbody>
			  
			   <c:forEach var= "oneTravel" items="${myTravelDataFromController}">
			    	<tr>
				      <td><a href="/expenses/${oneTravel.id}"><c:out value="${oneTravel.expense }"></c:out></a></td>
				      <td><c:out value="${oneTravel.vendor }"></c:out></td>
				      <td><c:out value="${oneTravel.price }"></c:out></td>
				      <td>
				      	<a href="/expenses/edit/${oneTravel.id}">edit</a>
				      	<form action="/expenses/${oneTravel.id}" method="post">
						    <input type="hidden" name="_method" value="delete">
						    <input type="submit" value="Delete">
						</form>
				      </td>
			    	</tr>
			    </c:forEach>
			    
			  </tbody>
			</table>
		</div>
		<div class="row">
			<h2>Add an expense:</h2>
		</div>
		<form:form action="/" method="POST" modelAttribute= "myTravel">
			<div class="row">
				<div class="form-group">
					<form:label for="" path="expense" class="form-label">Expense name:</form:label>
					<form:input type="text" path="expense" class="form-control"/>
					<form:errors path="expense"/>
				</div>
				<div class="form-group">
					<form:label for="" path="vendor" class="form-label">Vendor:</form:label>
					<form:input type="text" path="vendor" class="form-control"/>
					<form:errors path="vendor"/>
				</div>
				<div class="form-group">
					<form:label for="" path="price" class="form-label">Amount:</form:label>
					<form:input type="text" path="price" class="form-control"/>
					<form:errors path="price"/>
				</div>
				<div class="form-group">
					<form:label for="" path="description" class="form-label">Description:</form:label>
					<form:input type="text" path="description" class="form-control"/>
					<form:errors path="description"/>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form:form>
	</div>
</body>
</html>