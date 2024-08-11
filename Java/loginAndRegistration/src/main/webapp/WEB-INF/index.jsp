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
    <title>Index</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
	<div class= "container">
		<div class="row">
			<h1>Welcome!</h1>
			<p>Join our growing community</p>
		</div>
		<div class= "row">
			<h2>Login</h2>
			<form:form action="/login" method="POST" modelAttribute="registerUser">
			  <div class="form-group row">
			    <form:label for="" path="email" class="col-sm-2 col-form-label">Email</form:label>
			    <form:input type="email" path="email" class="form-control" id=""/>
			    <form:errors path="email"/>
			  </div>
			  <div class="form-group row">
			    <form:label for="" path="password" class="col-sm-2 col-form-label">Password</form:label>
			    <form:input type="password" path="password" class="form-control" id="" placeholder="Password"/>
			    <form:errors path="password"/>
			  </div>
			  <button type="submit" class="btn btn-primary">Log in</button>
			</form:form>

   		</div>
   		<div class="row">
   			<h2>Register</h2>
	   		<form:form action="/register" method="POST" modelAttribute="registerUser">
			  <div class="form-group">
			    <form:label for="" path="userName">Username:</form:label>
			    <form:input type="text" path="userName" class="form-control" id="" aria-describedby="" placeholder="Enter Username"/>
			    <form:errors path="userName"/>
			  </div>
			  <div class="form-group">
			    <form:label for="" path="email">Email:</form:label>
			    <form:input type="email" path="email" class="form-control" id="" placeholder="Enter email"/>
			    <form:errors path="email"/>
			  </div>
			  <div class="form-group">
			    <form:label for="" path="password">Password:</form:label>
			    <form:input type="password" path="password" class="form-control" id="" placeholder="Password"/>
			    <form:errors path="password"/>
			  </div>
			  <div class="form-group">
			    <form:label for="" path="confirm">Confirm Password:</form:label>
			    <form:input type="password" path="confirm" class="form-control" id="" placeholder="Confirm Password"/>
			    <form:errors path="confirm"/>
			  </div>
			  <button type="submit" class="btn btn-primary">Register</button>
			</form:form>
   		</div>
   	</div>
</body>
</html>