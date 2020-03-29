//fortune teller javascript for HW9b.html
//$(function()) = jquery function


$(function(){
    var fortunes = [
        "Law and technology produce, together, a kind of regulation of creativity we've not seen before. (Lawrence Lessig)",
        "Technologies are not merely aids to human activity, but also powerful forces acting to reshape that activity and its meaning. (Langdon Winner)",
        "In the technical realm, we repeatedly enter into a series of social contracts, the terms of which are revealed only after the signing. (Langdon Winner)",
        "The role of the teacher is to create the conditions for invention rather than provide ready-made knowledge. (Seymour Papert)",
        "You can't teach people everything they need to know. The best you can do is position them where they can find what they need to know when they need to know it. (Seymour Papert)",
        "We need to produce people who know how to act when they are faced with situations for which they were not specifically prepared. (Seymour Papert)",
        "Most learning is not the result of instruction. It is rather the result of unhampered participation in a meaningful setting. (Ivan Illich)",
        "School has become the world religion of the modern proleteriat, and makes futile promises of salvation to the poor of the technological age. (Ivan Illich)",
        "Schools are designed on the assumption that there is a secret to everything in life; that the quality of life depends on knowing that secret; that secrets can be known only in orderly successions; and that only teachers can properly reveal these secrets. (Ivan Illich)",
        "The technologies do not themselves make culture participatory. People do. (Mimi Ito)",
        "Schools are an important piece of young people's learning ecology, but we have to take social peer engagement and the diverse interests of kids seriously. (Mimi Ito)"
    ];

    //variable name[number of variables in array]
    fortunes[11] = "The Scholars have spoken.";
    
    //initializes variable; allows while loop to continue even if a fortunes variable is blank
   var prev = "";

    //define function that randomizes variables
    function fortunate(){
        //math.floor(Math.random()) returns a random integer 0-10
        var i = (Math.floor(Math.random() * fortunes.length));

        //picks fortune and assigns it to var fortunes
        var fortune = fortunes[i];
        
        
        while(fortune == prev){
            i = (Math.floor(Math.random() * fortunes.length));
            fortune = fortunes[i];
        }

        //returns the quote numberer and text
        return "#" + (i + 1) + " - " + fortune;
    }

    //programs the receive wisdom button at the bottom of the screen
    $("#getFortune").click(function(){

        //changes the wording on button after first click to "hear from more scholars"; initiates randomizer
        $("#getFortune").text("Hear from more scholars")
        
        //invokes function fortunate() to display tips on the screen
        var tip = fortunate();
        prev = tip;
        $("#fortune").fadeOut(500);
        setTimeout(function(){
        tip = "<mark>" + tip + "</mark>";
            $("#fortune").html(tip);
            $("#fortune").fadeIn(500);
        }, 500);
    });
});