function process_form() {
    // get form object
    var fm = document.getElementById("my_form");
    // get output object
    //var out1 = document.getElementById("photo");
    var out2 = document.getElementById("genre");
    //var out3 = document.getElementById("att");
    //var out4 = document.getElementById("des");
    // instantiate  object
    var book = new Book(fm);
    // output result   
    //out1.src = dimg[dog.sort()];
    out2.innerHTML = genre[book.sort()];
    //out3.innerHTML = datt[dog.sort()];
    // out4.innerHTML = ddes[dog.sort()];
}

function Book(fm) {
    // constructor
    //input id from html forms
    this.input_power = fm.input_power.value;
    this.input_character = fm.input_character.value;
    this.input_animal = fm.input_animal.value;

    //if else statements to run functions 
    this.sort = function () {
        // sort result based on input: 
        if (this.input_power == 'flight' && this.input_character == 'rh' && this.input_animal == 'yes') {
            return 0; // flight, rh, yes -> adventure
        } else if (this.input_power == 'flight' && this.input_character == 'rh' && this.input_animal == 'no') {
            return 0; // flight, rh, no-->adventure
        } else if (this.input_power == 'flight' && this.input_character == 'nd' && this.input_animal == 'yes')
            return 0; //flight, nd, yes->adventure 
        } else if (this.input_power == 'flight' && this.input_character == 'nd' && this.input_animal == 'no')
            return 1; //flight, nd, no-> mystery  
        } else if (this.input_power == 'knowledge' && this.input_character == 'nd' && this.input_animal == 'yes')
            return 1; //knowledge, nd, yes -> Mystery
        } else if (this.input_power == 'knowledge' && this.input_character == 'nd' && this.input_animal == 'no')
            return 1; //knowledge, nd, no->mystery 
        }
    }
        
// Arrays
//var dimg = ["./img/American-Eskimo-Dog-On-White-01.jpg", "./img/Boston-Terrier-On-White-03.jpg", "./img/Tibetan-Spaniel-On-White-03.jpg", "./img/Bulldog-standing-in-the-grass.jpg", "./img/Miniature-American-Shepherd-On-White-01.jpg", "./img/Clumber-Spaniel-On-White-011.jpg", "./img/Flat-Coated-Retriever-On-White-03.jpg", "./img/day_2_dec_14_085.jpg", "./img/Harrier3.jpg", "./img/Border-Collie-On-White-01.jpg", "./img/Doberman-Pinscher-standing-outdoors.jpg", "./img/Cardigan-Welsh-Corgi-on-White-111.jpg",]
//0= adventure, 1= mystery, 2=fantsy, 3=history
var genre = ["Adventure", "Mystery", "Fantasy", "History"]
//var ddes = ["The American Eskimo Dog combines striking good looks with a quick and clever mind in a total brains-and-beauty package. Neither shy nor aggressive, Eskies are always alert and friendly, though a bit conservative when making new friends.", "The Boston Terrier is a lively little companion recognized by his tight tuxedo jacket, sporty but compact body, and the friendly glow in his big, round eyes. His impeccable manners have earned him the nickname “The American Gentleman.”", "The frisky and curious Tibetan Spaniel was bred ages ago for sentinel work on the walls of Tibetan monasteries. Known for a flat, silky coat and “lion’s mane” around the neck, the Tibbie forms a tight, worshipful bond with their humans.", "Kind but courageous, friendly but dignified, the Bulldog is a thick-set, low-slung, well-muscled bruiser whose “sourmug” face is the universal symbol of courage and tenacity. These docile, loyal companions adapt well to town or country.", "The Miniature American Shepherd resembles a small Australian Shepherd. True herders in spite of their compact size, Minis are bright, self-motivated workers and endearingly loyal and lively companion dogs who have an affinity for horses.", "A dignified and mellow hunting companion of kings, the Clumber Spaniel is the largest of the AKC flushing spaniels. For those who can handle some shedding and drooling, the amiable Clumber is an amusing best friend and a gentlemanly housemate.", "The Peter Pan of the Sporting Group, the forever-young Flat-Coated Retriever is a gundog of relatively recent origin. Happy, self-assured, and willing to please, a good Flat-Coat will retrieve a duck or a show ribbon with equal aplomb.", "Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one of the world's most popular herding breeds.", "The Harrier is a swift, prey-driven pack hound of medium size first bred in medieval England to chase hare. Outgoing and friendly, the Harrier is much larger than the Beagle but smaller than another close relative, the English Foxhound.", "A remarkably bright workaholic, the Border Collie is an amazing dog—maybe a bit too amazing for owners without the time, energy, or means to keep it occupied. These energetic dogs will settle down for cuddle time when the workday is done.", "Sleek and powerful, possessing both a magnificent physique and keen intelligence, the Doberman Pinscher is one of dogkind's noblemen. This incomparably fearless and vigilant breed stands proudly among the world's finest protection dogs.", "The Cardigan Welsh Corgi is a masterpiece of the breeder’s art: Every aspect of its makeup is perfectly suited to moving cattle, and yet it is so congenial and sweet-faced that it would be a cherished companion even if it never did a day’s work."]

