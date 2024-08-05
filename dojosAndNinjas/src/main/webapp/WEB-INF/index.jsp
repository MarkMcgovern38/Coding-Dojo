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
		<div class= "row">
   			<h1 class="col-6">Dojos</h1>
   			<a href="/dojos/new" class="col-3 mt-3">Add Dojo</a>
   			<a href="/ninjas/new" class="col-3 mt-3">Add Ninja</a>
   		</div>
   		<div class="row">
   			<table class="table">
			  <thead class="thead-dark">
			    <tr>
			      <th scope="col">Dojo ID</th>
			      <th scope="col">Dojo Name</th>
				  <th scope="col">View Dojo</th>	
			    </tr>
			  </thead>
			  <tbody>
			  
			   <c:forEach var= "dojo" items="${allDojos}">
			    	<tr>
				      <td><c:out value="${dojo.id}"></c:out></td>
				      <td><c:out value="${dojo.dojoName }"></c:out></td>
				      <td>
				      	<a href="/dojos/${dojo.id}">View</a>
				      </td>
			    	</tr>
			    </c:forEach>
			    
			  </tbody>
			</table>
   			
   		</div>
   	</div>
</body>
</html>