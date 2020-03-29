function addTextToImage(text, text1) {
    var circle_canvas = document.getElementById("canvas");
    var context = circle_canvas.getContext("2d");
    

    // Draw Image function
    var img = new Image();
    img.src = "Template.jpg";
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = "#ffff00";
        context.lineStyle = "#ffff00";
        context.font = "18px sans-serif";
          var lineheight = 25;
 var chunks = [];

for (var i = 0, charsLength = text.length; i < charsLength; i += 45) {
    chunks.push(text.substring(i, i + 45));
}
for(var a=0; a<=chunks.length-1; a++){

context.fillText(chunks[a], 200, 100 + (a*lineheight) );
}
   // context.fillText(chunks[a], 200, 100);
context.font = "25px sans-serif";
        context.fillText("- " +text1, 20, 610);
        
    };
}
//addTextToImage("https://i.ibb.co/HdK1DhX/90144157-823600921487324-2913957233960873856-n.jpg", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop", "Arthur Jose Distor");
