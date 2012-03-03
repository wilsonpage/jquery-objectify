/**
 * JQUERY-OBJECTIFY.JS
 * 
 * Converts the values of an entire form into a javascript object
 * 
 * 
 * Usage Example:
 * 
 * <form>
 *		<input type='text' name='name'>
 *		<input type='text' name='contact.tel'>    
 *		<input type='text' name='contact.email'>
 * </form>
 * 
 * formObject = $('form').objectify();
 * // { name: <value>, contact: { tel: <value>, email: <value> }}
 * 
 * 
 * For all details and documentation visit:
 * https://raw.github.com/WilsonPage/jquery-objectify.js
 *
 * @author {Wilson Page} wilsonpage@me.com | @wilsonpage
 */
(function($){
	$.fn.objectify = function() {
		var


		/**
		 * Get all the inputs in this form
		 * 
		 * @type {jQueryObject}
		 */
		inputs = $(this).find('input[type=text], textarea'),


		/**
		 * The object to store the final result
		 * 
		 * @type {Object}
		 */
		result = {};

	
		// loop over each of the input fields
		inputs.each(function() {
			var input = $(this),
				name  = input.attr('name'),
				value = input.val(),
				array = name.split('.'),
				len   = array.length,
				currentlevel = {};
	
			
			// loop over array of levels eg. ['contact', 'address', 'town']
			for (var i = 0; i < len; i++) {
				
				// cache the key
				var key = array[i];
				
				// if there is no top level key: create it
				if (i === 0 && !result[key]) result[key] = {};
				
				// if this is the top level: set the current level
				// to the top of the result object
				if (i === 0) currentlevel = result;
	   
				
				if (i === len-1) {// if last level:
					
					// set the value on the current key
					currentlevel[key] = value;
						
				} else {// else if more levels to come:
					
					// get the next key
					var nextKey = array[i+1];
					
					// if there is no next key, create it
					if(!currentlevel[key][nextKey]) currentlevel[key][nextKey] = {};
					
					// move the current level reference down one level
					currentlevel = currentlevel[key];
				}
			}
		});
	
		// return form data
		return result;
	};
})(jQuery);
  