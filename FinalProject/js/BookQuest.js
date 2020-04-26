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
        //outdoors + animals + flight == adventure 
        if (this.outdoors && this.animals && this.flight) {
            return "You might like books about <b>ADVENTURE</b>. Here are some suggestions: <b>Sled Dog School by Terry Lynn Johnson</b>, <b>Survival Tails: The Titanic by Katrina Chapman</b>, <b>Wedgie & Gizmo by Suzanne Selfors</b>";
            }

        //outdoors + animals + knowledge == adventure 
        if (this.outdoors && this.animals && this.knowledge) {
            return "You might like books about <b>ADVENTURE</b>. Here are some suggestions: <b>Sled Dog School by Terry Lynn Johnson, Survival Tails: The Titanic by Katrina Chapman, Wedgie & Gizmo by Suzanne Selfors</b>";
            }

        //outdoors + notAnimals + flight == History 
        if (this.outdoors && this.notAnimals && this.flight) {
            return "You might like books about <b>History</b>. Here are some suggestions: <b>Ben Franklin's in my Bathroom! by Candace Fleming, The Bicycle Spy by Yona Zeldis McDonough, I Survived The Great Molasses Flood by Lauren Tarshis</b>";
            }
        
        //outdoors + notAnimals + knowledge == history
        if (this.outdoors && this.notAnimals && this.knowledge) {
            return "You might like books about <b>History</b>. Here are some suggestions: <b>Ben Franklin's in my Bathroom! by Candace Fleming, The Bicycle Spy by Yona Zeldis McDonough, I Survived The Great Molasses Flood by Lauren Tarshis</b>";
        }

        //indoors + animals + flight == fantasy
        if (this.indoors && this.animals && this.flight) {
            return "You might like books about <b>FANTASY</b>. Here are some suggestions: <b>Tumble & Blue by Cassie Beasley, Bob by Wendy Mass & Rebecca Stead, Dragon with a Chocolate Heart by Stephanie Burgis</b ";
            }

        //outdoors + notAnimals + flight == fantasy
        if (this.indoors && this.notAnimals && this.flight) {
            return "You might like books about <b>FANTASY</b>. Here are some suggestions: <b>Tumble & Blue by Cassie Beasley, Bob by Wendy Mass & Rebecca Stead, Dragon with a Chocolate Heart by Stephanie Burgis</b>";
            }
        
        //indoors + animals + knowledge == mystery
        if (this.indoors && this.animals && this.flight) {
            return "You might like books about <b>MYSTERY</b>. Here are some suggestions: <b>The Ambrose Deception by Emily Ecton, Annie's Life in Lists by Kristin Mahoney, Ghost Attack by David Lubar</b>";
            }
        
        //indoors + notAnimals + knowledge == mystery
        if (this.indoors && this.notAnimals && this.knowledge) {
            return "You might like books about <b>MYSTERY</b>. Here are some suggestions: <b>The Ambrose Deception by Emily Ecton, Annie's Life in Lists by Kristin Mahoney, Ghost Attack by David Lubar</b>";
            }

        //indoors + animals + knowledge == fantasy books
        if (this.indoors && this.animals && this.knowledge) {
            return "You might like books about <b>MYSTERY</b>. Here are some suggestions: <b>The Ambrose Deception by Emily Ecton, Annie's Life in Lists by Kristin Mahoney, Ghost Attack by David Lubar</b>";
            }
        //define elements when one selection is missing
        //no choice for outdoors + animals + flight = answer question 1
        if (this.animals && this.flight) {
            return "Uh-Oh. You missed a step. Please tell me if you like to play outdoors and try again."
            }

        //no choice for outdoors + animals + knowledge = answer question 1
        if (this.animals && this.knowledge) {
            return "Uh-Oh. You missed a step. Please tell me if you like to play outdoors and try again."
            }

        //no choice for outdoors + notAnimals + flight = answer question 1
        if (this.notAnimals && this.flight) {
            return "Uh-Oh. You missed a step. Please tell me if you like to play outdoors and try again."
            }
        
        //no choice for outdoors + notAnimals + knowledge = answer question 1
        if (this.notAnimals && this.knowledge) {
            return "Uh-Oh. You missed a step. Please tell me if you like to play outdoors and try again."
            }
        
        //outdoors + no choice for animals + flight = answer question 2
        if (this.outdoors && this.flight) {
            return "Uh-Oh. You missed a step. Please tell me if you like animals and try again."
            }

        //outdoors + no choice for animals + knowledge = answer question 2
        if (this.outdoors && this.knowledge) {
            return "Uh-Oh. You missed a step. Please tell me if you like animals and try again."
            }

        //indoors + no choice for animals + flight =  answer question 2
        if (this.indoors && this.flight) {
            return "Uh-Oh. You missed a step. Please tell me if you like animals and try again."
            }
        
        //indoors + no choice for animals + knowledge
        if (this.indoors && this.knowledge) {
            return "Uh-Oh. You missed a step. Please tell me if you like animals and try again."
            }
        
        //outdoors + animals + no power = choose a super power and try again.
        if (this.outdoors && this.animals) {
            return "Uh-Oh. You missed a step. Please select a super power and try again."
        }

        //outdoors + notAnimals + no power 
        if (this.outdoors && this.notAnimals) {
            return "Uh-Oh. You missed a step. Please select a super power and try again."
        }
        
        //indoors + animals + no power = choose a super power and try again
        if (this.indoors && this.animals) {
            return "Uh-Oh. You missed a step. Please select a super power and try again."
        }
        
        //indoors + notAnimals + no power = choose a super power 
        if (this.indoors && this.notAnimals) {
            return "Uh-Oh. You missed a step. Please select a super power and try again."
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