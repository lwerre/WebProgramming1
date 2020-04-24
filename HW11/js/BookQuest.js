//book quest.js for bookquest.html 

// defining the object: Book Quest
function Book(fm) { //was Flower
    
    this.outdoors = fm.outdoors.checked; //likes to spend time outdoors
    this.indoors = fm.indoors.checked; //does not like to spend time outdoors
    
    this.animals = fm.animals.checked; // likes animals
    this.notAnimals = fm.notAnimals.checked; // does not like animals

    this.flight = fm.flight.checked; //would choose the power of flight
    this.knowledge = fm.knowledge.checked; //would choose the power of ultimate knowledge
   
 


//return box text 
    this.suggestion = function() {
        //outdoors + animals + flight == adveneture 
        if (this.outdoors && this.animals && this.flight) {
            return "You might like books about <b>ADVENTURE</b>. Here are some suggestions: <b>Sled Dog School by Terry Lynn Johnson</b>, <b>Survival Tails: The Titanic by Katrina Chapman</b>, <b>Wedgie & Gizmo by Suzanne Selfors</b>";
            }

        //outdoors + animals + knowledge == adventure 
        if (this.outdoors && this.animals && this.knowledge) {
            return "You might like books about <b>ADVENTURE</b>. Here are some suggestions: Sled Dog School by Terry Lynn Johnson, Survival Tails: The Titanic by Katrina Chapman, Wedgie & Gizmo by Suzanne Selfors";
            }
        //outdoors + notAnimals + flight == History 
        if (this.outdoors && this.notAnimals && this.flight) {
            return "You might like books about <b>History</b>. Here are some suggestions: Ben Franklin's in my Bathroom! by Candace Fleming, The Bicycle Spy by Yona Zeldis McDonough";
            }
        
        //outdoors + notAnimals + knowledge == history
        if (this.outdoors && this.notAnimals && this.knowledge) {
            return "You might like books about <b>History</b>. Here are some suggestions: Ben Franklin's in my Bathroom! by Candace Fleming, The Bicycle Spy by Yona Zeldis McDonough";
            }

        //indoors + animals + flight == fantasy
        if (this.indoors && this.animals && this.flight) {
            return "You might like books about <b>FANTASY</b>. Here are some suggestions: Tumble & Blue by Cassie Beasley, Bob by Wendy Mass & Rebecca Stead, Dragon with a Chocolate Heart by Stephanie Burgis ";
            }

        //outdoors + notAnimals + flight == fantasy
        if (this.indoors && this.notAnimals && this.flight) {
            return "You might like books about <b>FANTASY</b>. Here are some suggestions: Tumble & Blue by Cassie Beasley, Bob by Wendy Mass & Rebecca Stead, Dragon with a Chocolate Heart by Stephanie Burgis ";
            }
        
        //indoors + animals + knowledge == fantasy
        if (this.indoors && this.animals && this.flight) {
            return "You might like books about <b>FANTASY</b>. Here are some suggestions: Tumble & Blue by Cassie Beasley, Bob by Wendy Mass & Rebecca Stead, Dragon with a Chocolate Heart by Stephanie Burgis ";
            }
        
        //indoors + notAnimals + knowledge == mystery
        if (this.indoors && this.notAnimals && this.knowledge) {
            return "You might like books about <b>MYSTERY</b>. Here are some suggestions: The Ambrose Deception by Emily Ecton, Annie's Life in Lists by Kristin Mahoney, Ghost Attack by David Lubar ";
            }

        //indoors + animals + knowledge == fantasy books
        if (this.indoors && this.animals && this.knowledge) {
            return "You might like books about <b>FANTASY</b>. Here are some suggestions: Tumble & Blue by Cassie Beasley, Bob by Wendy Mass & Rebecca Stead, Dragon with a Chocolate Heart by Stephanie Burgis ";
            }
    }
}


// process form
function process_form() {
    var fm = document.getElementById("my_form");
    var out = document.getElementById("output");
    
    
    var book = new Book (fm); 
    //out.style.background = book.order ();
    out.innerHTML = book.suggestion ();
}