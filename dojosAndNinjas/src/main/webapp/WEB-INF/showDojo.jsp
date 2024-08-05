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
    <title>New Dojo</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
	<div class= "container">
		<div class= "row">
			<h1 class="col-8"><c:out value="${dojo.dojoName}" ></c:out> Ninjas</h1>
			<a href="/" class="col-4 mt-3">Home</a>
		</div>
		<div class= "row">
		  	<table class="table">
			  <thead class="thead-dark">
			    <tr>
			      <th scope="col">First Name</th>
			      <th scope="col">Last Name</th>
				  <th scope="col">Age</th>	
			    </tr>
			  </thead>
			  <tbody>
			  
			   <c:forEach var="ninja" items="${dojo.ninjas}">
			    	<tr>
				      <td><c:out value="${ninja.firstName}"></c:out></td>
				      <td><c:out value="${ninja.lastName }"></c:out></td>
				      <td><c:out value="${ninja.age }"></c:out></td>
			    	</tr>
			    </c:forEach>
			    
			  </tbody>
			</table>

		</div>
	</div>

</body>
</html>