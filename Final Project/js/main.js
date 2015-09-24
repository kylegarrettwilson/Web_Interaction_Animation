window.onload = function() {
    if (Modernizr.canvas) {
        var myCanvas = document.getElementById('Canvas1');
        if (myCanvas && myCanvas.getContext) {
            var ctx = myCanvas.getContext("2d");

            if (ctx) {


                /* Canvas */



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



    /* Two jQuery effects */


    var state = true;
    $( "#content" ).hover(function() {
        if ( state ) {
            $( "img" ).animate({marginTop: "5%", opacity: "0.6"}, 1000 );
        } else {
            $( "img" ).animate({marginTop: "0", opacity: "1"}, 1000 );
        }
        state = !state;
    });


};








    /* Bar Graph of Views */



    $(document).ready(function(){

        window.chartHeight = Number($(".chart-area").height());
        window.barWidth = $(".chart-area .chart-bar").width();
        window.highestYlabel = Number($(".chart-y-axis p").first().html());
        window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());
        window.chartScale = chartHeightArea / window.highestYlabel;
        window.barSpacing = Number($(".chart-area").attr("bar-spacing"));
        positionGraph();

    });

    function positionGraph(){
        $(".chart-area .chart-bar").each(function(index){

            var barPosition = (window.barWidth * index) + (index * barSpacing) + barSpacing;
            $(this).css("left",barPosition + "px");
            $(this).html("<p>" + $(this).attr("bar-value") + "</p>");
            $(".chart-x-axis").append('<p style="left:'+(barPosition-(window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

            var barValue = Number($(this).attr("bar-value"));
            if(barValue > window.maxValue){
                window.maxValue = barValue;
                window.valueMultiplier = window.maxValue / window.highestYlabel;
            }

        });
        animateGraph();
    }

    function animateGraph(){

        $(".chart-area .chart-bar").each(function(index){
            var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;
            var newDelay = 150 * index;
            $(this).delay(newDelay).animate({height:revisedValue}, 1500, function(){
                $(this).children('p').delay(400).fadeIn(100);
            });
        });



    }




















































