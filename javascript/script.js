//colorlib javascript file

// variables to hold list of things for each person (= to number of guests)
var array1 = new Array();
var array2 = new Array();
var array3 = new Array();
var array4 = new Array();
var array5 = new Array();
var array6 = new Array();
var array7 = new Array();
var array8 = new Array();
var array9 = new Array();
var array10 = new Array();
var array11 = new Array();
var array12 = new Array ();

// array of names
var names = new Array();


// fill in names: first prompt for how many people from 1 to 4, then set up a for loop to enter that many names.
function fill_names(my_array)
{

    var x = -2; //what is this variable for?

    
    do
    {
        x = parseInt(prompt("How people coming to your party","Type a number here, from 1 to 12."));
    } 
    while ((x < 1) || (x > 12)); // handle strings
    
    for (var i = 0; i < x; ++i){
        my_array[i] = prompt("What is the name of the next person?","Type a name here.");
         
      	 switch(i) {
      		 
      		case 0:
      	         writeText(my_array[i],"person1"); 
      	     break;
      	     
      		case 1:
      	         writeText(my_array[i],"person2"); 
      	     break;
      	     
      		case 2:
      	         writeText(my_array[i],"person3"); 
      	     break;
      	     
      		case 3:
      	         writeText(my_array[i],"person4"); 
      	     break;

      		case 4:
      	         writeText(my_array[i],"person2"); 
      	     break;
      	     
      		case 5:
      	         writeText(my_array[i],"person3"); 
      	     break;
      	     
      		case 6:
      	         writeText(my_array[i],"person4"); 
      	     break;	

            case 7:
      	         writeText(my_array[i],"person3"); 
      	     break;
      	     
      		 case 8:
      	         writeText(my_array[i],"person4"); 
      	     break;

      		case 9:
      	         writeText(my_array[i],"person2"); 
      	     break;
      	     
      		case 10:
      	         writeText(my_array[i],"person3"); 
      	     break;
      	     
      		case 11:
      	         writeText(my_array[i],"person4"); 
      	     break;	 
      	 }
         

     }   
    
}
//input the list of items for a person, first prompt for how many items, then then set up a for loop to enter that many names.
function fill_array(my_array)
{
    var x = -2;
    
    do
    {
        x = parseInt(prompt("How many items do you want this person to bring","Type a number here, greater than 0."));
    } 
    while (x < 1);
    
    for (var i = 0; i < x; ++i){
        my_array[i] = prompt("What item do you want this person to bring?", "Type the next item here.");
    }   
}

//Make this function prompt the user for what element they'd like to add, then prompt for a value for that element.
//Then, it should assign the value the user entered into the array.
function add_an_element(my_array)
{

    var x = -1;
    do
    {
        //Prompt the user for a value.
        x = parseInt(prompt("How many people do you want in your party", "Type a number here, from 0 to to 1 less than the array length."));
    } 
    while ((x < 0) || (x >= my_array.length));
    

    //Prompt the user for what item to bring
    var y = prompt("What item would you like to store in the element you selected?","Type a value here.");
    my_array[x]=y;
    
}

//This part of the code should output the array.
function output_the_array(my_array)
{
    //Output the values with a for loop.
    var z = new String();
    z = my_array.toString();
    writeText(z,"the_text");
}

//This part of the code should output the array.
function output_all_arrays()
{

    var z = new String();
    z = "";
    //index 0 array1
    if (names.length > 0){
        z += names[0] + " will bring: ";
        z += array1.toString(); 

    //index 1 array2    
    if (names.length > 1){
            z += names[1] + " will bring: ";
            z += array2.toString(); 
    //index 2 array3
        if (names.length > 2){
                z += names[2] + " will bring: ";
                z += array3.toString(); 
    //index 3 array4
            if (names.length > 3){
                    z += names[3] + " will bring: ";
                    z += array4.toString(); 
    //index 4 array5
                if (names.length > 4){
                    z += names[4] + " will bring: ";
                    z += array5.toString();
    //index 5 array6
                    if (names.length > 5){
                    z += names[5] + " will bring: ";
                    z += array6.toString(); 
    //index 6 array7
                    if (names.length > 6){
                    z += names[6] + " will bring: ";
                    z += array7.toString(); 
    //index 7 array8
                    if (names.length > 7){
                    z += names[7] + " will bring: ";
                    z += array8.toString(); 
    //index 8 array9
                    if (names.length > 8){
                    z += names[8] + " will bring: ";
    //index 9 array10
                    z += array9.toString(); 
                    if (names.length > 9){
                    z += names[9] + " will bring: ";
                    z += array10.toString(); 
    //index 10 array11
                    if (names.length > 10){
                    z += names[10] + " will bring: ";
                    z += array11.toString(); 
    //index 11 array 12
                    if (names.length > 11){
                    z += names[11] + " will bring: ";
                    z += array12.toString(); 
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                    }
                }
            }
        }
    }
    // displays the list in the the_text area in html
    writeText(z, "the_text");
}
// This writes out something
function writeText(txt, id)
{
document.getElementById(id).innerHTML=txt;
}