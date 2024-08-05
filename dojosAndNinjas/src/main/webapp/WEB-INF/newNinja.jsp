<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Ninja</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
	<div class= "container">
		<div class= "row">
			<h1 class="col-8">New Ninja</h1>
			<a href="/" class="col-4 mt-3">Home</a>
		</div>
		<div class= "row">
			<form:form action="/ninjas/new" method="POST" modelAttribute="ninja">
				<form:label path="firstName" class="form-label">First name:</form:label>
				<form:input path="firstName" class="form-control"/>
				<form:label path="lastName" class="form-label">Last name:</form:label>
				<form:input path="lastName" class="form-control"/>
				<form:label path="age" class="form-label">Age:</form:label>
				<form:input path="age" type="number" class="form-control"/>
				<form:label path="dojo" class="form-label">Dojo:</form:label>
				<form:select path="dojo">
					<c:forEach var="dojo" items="${dojos}">
						<option value="${dojo.id}">${dojo.dojoName}</option>
					</c:forEach>
				</form:select>
				
				<button type="submit" class="btn btn-primary mt-3">Create</button>
			</form:form>
		</div>
	</div>

</body>
</html>