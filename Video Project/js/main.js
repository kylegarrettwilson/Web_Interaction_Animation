
$(function() {
    var state = true;
    $( "#button" ).click(function() {
        if ( state ) {
            $( "#change" ).animate({   //first state of animation
                backgroundColor: "limegreen",  // using the plug in variables
                color: "white",
                width: 1000
            }, 200 );   //speed of animation
        } else {
            $( "#change" ).animate({    //second state of animation
                backgroundColor: "smokewhite",     // using the plug in variables
                color: "black",
                width: 200
            }, 500 );    //speed of animation
        }
        state =! state;
    });
});
