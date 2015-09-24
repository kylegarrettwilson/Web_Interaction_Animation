window.onload = function() {
    if (Modernizr.canvas) {
        var myCanvas = document.getElementById('Canvas1');
        if (myCanvas && myCanvas.getContext) {
            var ctx = myCanvas.getContext("2d");

            if (ctx) {





                /* Problem One */


                ctx.strokeStyle = "black";
                ctx.fillStyle = "blue";

                ctx.lineWidth = 10;

                ctx.strokeRect(0, 0, 50, 100);
                ctx.fillRect(0, 0, 50, 100);







                /* Problem Two */


                var canvas2 = document.getElementById("Canvas2");
                var ctx = canvas2.getContext("2d");

                ctx.strokeStyle = "black";
                ctx.fillStyle = "red";
                ctx.lineWidth = 6;


                ctx.beginPath();
                ctx.arc(50, 50, 20, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();






                /* Problem Three */



                var canvas3 = document.getElementById("Canvas3");
                var ctx = canvas3.getContext("2d");


                ctx.strokeStyle = "black";
                ctx.fillStyle = "blue";
                ctx.lineWidth = 10;


                ctx.beginPath();
                ctx.moveTo(100, 100);
                ctx.lineTo(200, 70);
                ctx.lineTo(220, 0);
                ctx.lineTo(240, 70);
                ctx.lineTo(360, 100);
                ctx.lineTo(280, 140);
                ctx.lineTo(320, 200);
                ctx.lineTo(220, 160);
                ctx.lineTo(240, 170);
                ctx.lineTo(170, 200);
                ctx.lineTo(200, 140);
                ctx.fill();
                ctx.closePath();
                ctx.stroke();







                /* Problem Four */



                var canvas4 = document.getElementById("Canvas4");
                var ctx = canvas4.getContext("2d");


                ctx.strokeStyle = "black";
                ctx.lineWidth = 3;

                ctx.beginPath();
                ctx.arc(200, 150, 100, Math.PI, 0, false);
                ctx.arc(266, 150, 33, Math.PI, 0, false);
                ctx.arc(197, 150, 33, Math.PI, 0, false);
                ctx.arc(134, 150, 33, Math.PI, 0, false);
                ctx.stroke();






                /* Problem Five */


                var canvas5 = document.getElementById("Canvas5");
                var ctx = canvas5.getContext("2d");


                var theString = "Web is fun";


                ctx.font = "25pt Arial";
                ctx.fillStyle = "white";
                ctx.fillText(theString, 100, 100);







                /* Problem Six */


                var canvas6 = document.getElementById("Canvas6");
                var ctx = canvas6.getContext("2d");

                var srcImg = document.getElementById("img1");

                ctx.drawImage(srcImg, 0, 0, 200, 200);

                ctx.drawImage(srcImg, 200, 0, 100, 100);

                ctx.drawImage(srcImg, 200, 200, 40, 95, 90, 40, 100, 80);







                /* Problem Seven */


                var canvas7 = document.getElementById("Canvas7");
                var ctx = canvas7.getContext("2d");


                ctx.strokeStyle = "white";
                ctx.fillStyle = "black";

                ctx.lineWidth = 5;

                ctx.strokeRect(170, 10, 50, 100);
                ctx.fillRect(170, 10, 50, 100);




                ctx.strokeStyle = "white";
                ctx.fillStyle = "black";
                ctx.lineWidth = 5;


                ctx.beginPath();
                ctx.moveTo(0, 300);
                ctx.lineTo(195, 112);
                ctx.lineTo(400, 300);
                ctx.fill();
                ctx.closePath();
                ctx.stroke();


                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.lineWidth = 5;


                ctx.beginPath();
                ctx.arc(50, 50, 100, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.lineWidth = 5;


                ctx.beginPath();
                ctx.arc(350, 50, 100, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();





            }


        }

    }
};