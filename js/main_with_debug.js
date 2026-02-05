//Comments and changes by Aidan Schooff

var cityPop = [ //declares variable cityPop as an array
	{ // every city in the array is an object with two different properties
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
]; // end of array

//This declares the function "addColumns" and passes the variable "cityPop" as a parameter
function addColumns(cityPop){
    // this selects all "tr" elements for each row
    document.querySelectorAll("tr").forEach(function(row, i){

		/* 
		This is the beginning of a filter with conditionals that
		determines the size of the city from the array cityPop
		*/
    	if (i == 0){
			/*
			Adds a row element to the table on first iteration through the loop
			that functions as a title for the category in the table
			*/
			// Was misspelled
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			//declares variable citySize
    		var citySize;
			//gets population of city from cityPop and checks if it is less than 100,000
    		if (cityPop[i-1].population < 100000){
    			// if less than 100,000, citySize is set to 'Small'
				citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
				// if less than 500,000, citySize is set to 'Medium'
    			citySize = 'Medium';
    		} else {
				// if neither above conditional are true, the citySize is set to 'Large'
    			citySize = 'Large';
    		};
			//before the end of the conditional filter citySize is displayed for each city
			// FIXED
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
		//End of conditionals
    });
}; // End of the function 'addColumns'

//Declares function 'addEvents' that passes no parameters
function addEvents(){
	/*
	This gets the HTML element 'table' from the webpage and runs the function 
	below when the mouse hovers over it
	*/
	document.querySelector("table").addEventListener("mouseover", function(){
		//sets a variable 'color'
		var color = "rgb(";
		//This loop iterates through 3 times
		for (var i=0; i<3; i++){
			//This generates a random number and attaches it to the variable 'random'
			var random = Math.round(Math.random() * 255);
			//This adds a random number to the variable 'color'

			color += random;
			
			/*
			This conditional puts a comma between the colors listed in 
			'color' if it is not iterating through the last time out of 3,
			 in which case it will close the parenthesis on the string of colors.
			*/
			if (i<2){
				color += ",";
			} else {
				color += ")";
			}
		}
		//This gets the table's color elements and sets it equal to the color variable
		document.querySelector("table").style.color = color;
	});

	//Creates function 'clickme'
	function clickme(){
		//Alerts the webpage user
		alert('Hey, you clicked me!');
	}
	//Runs the 'clickme' function when the table is clicked on
	document.querySelector("table").addEventListener("click", clickme)
}

addColumns(cityPop);
addEvents();
