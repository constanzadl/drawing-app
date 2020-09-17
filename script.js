$(function(){
    $("#slider").slider({
        min: 3,
        max: 30,
        slide: function(event, ui){
            $("#circle").height(ui.value);
            $("#circle").width(ui.value);
        }
    });
    var canvas = document.getElementById("paint");
    var context = canvas.getContext('2d');

    /*
    //draw a line
    //declare a new path
    context.beginPath();
    //line parameters
    //set line width
    context.lineWidth = 40;
    context.strokeStyle = '#42e565';
    //set cap of the line (round, butt, square)
    context.lineCap = "round";
    //set line join style (bevel, round, miter)
    context.lineJoin = "round";
    //position the start point
    context.moveTo(50, 50);
    //draw a straight line from starting point to a new pos
    context.lineTo(200, 200);

    //draw another line
    context.lineTo(400, 100);
    //Make line visible
    context.stroke();
    */

    //in canvas?
    var paint = false;
    //painting or erasing
    var paint_erase = "paint";
    //get canvas and context
    var canvas = document.getElementById("paint");
    var ctx = canvas.getContext('2d');
    //get canvas container
    var container = $("#container");
    //mouse coordinates
    var mouse = { x: 0, y: 0 };

    //on load, load saved work from local Storage

    //set drawing parameters
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    //clicking inside the container
    container.mousedown(function(e){
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mouse.x, mouse.y);
    });
    //move mouse while holding mouse key
    container.mousemove(function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if(paint){
            if (paint_erase == "paint"){
                ctx.strokeStyle = "red";
            }
            else {
                ctx.strokeStyle = "white";
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
    container.mouseup(function(){
        paint = false;
    });
    //erase
    $("#erase").click(function(){
        
    })
  });