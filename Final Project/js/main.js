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




                var canvas2 = document.getElementById("Canvas1");
                var ctx = canvas2.getContext("2d");


                ctx.strokeStyle = "red";
                ctx.lineWidth = 10;


                ctx.beginPath();
                ctx.moveTo(100, 100);
                ctx.lineTo(400, 100);

                ctx.closePath();
                ctx.stroke();








            }


        }


    }





































};