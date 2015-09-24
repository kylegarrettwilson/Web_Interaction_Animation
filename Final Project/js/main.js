window.onload = function() {
    if (Modernizr.canvas) {
        var myCanvas = document.getElementById('Canvas1');
        if (myCanvas && myCanvas.getContext) {
            var ctx = myCanvas.getContext("2d");

            if (ctx) {






                var canvas1 = document.getElementById("Canvas1");
                var ctx = canvas1.getContext("2d");


                var theString = "Smile Black";


                ctx.font = "50pt Arial";
                ctx.fillStyle = "white";
                ctx.fillText(theString, 80, 80);










            }


        }

    }
};