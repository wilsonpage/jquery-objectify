###jquery-objectify.js

A small jquery plugin for converting form contents into a javascript object. 



	<form>
		<input type='text' name='name'>
		<input type='text' name='contact.tel'>    
		<input type='text' name='contact.email'>
	</form>
 
	var formObject = $('form').objectify();
	// { name: <value>, contact: { tel: <value>, email: <value> }}