/*global $ APIKEY */
 /* APIs only accept what they allow!!!!
  MSG Data Response are all recognized
  APIKEY
*/

$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/sources",
        data: { category:"technology", country:"us", language:"en", apikey: APIKEY},
        success: function(data){
            if (data.status == "ok") {
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) {
                   var source = document.createElement("OPTION");
                   source.setAttribute("id", "dropdown");
                   source.setAttribute("value", data.sources[i].id);
                   source.innerHTML = data.sources[i].name;
                   document.getElementById("selection").appendChild(source);
                }
            }
        }
    });
  });
  
$("#button").click(function(){
    //var image = document.createElement("img").toggle();
    var image = document.getElementById("robots").src = "https://i.pinimg.com/originals/9b/5d/e6/9b5de677b247a95869a8f8accbd798ff.jpg";
    //image.toggle();
});
  

$("#source").submit(function(event) {
        event.preventDefault();
        document.getElementById("HDLN").innerHTML = "";
        var newspaper = document.getElementById("selection").value;
    
    $.ajax({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines",
        data: {sources: newspaper, apikey: APIKEY},
        success: function(data){
            if (data.status == "ok") {
                console.log(data);
                console.log("articles");
                for (var i = 0; i < data.articles.length; i++) {
                    //display the title
                    var title = document.createElement("A");
                    title.setAttribute("href", data.articles[i].url, "target", "_blank");
                    title.innerHTML = ""+data.articles[i].title+"";
                    document.getElementById("HDLN").appendChild(title);
                    //display description
                    var description = document.createElement("div");
                    description.setAttribute("style", "font")
                    description.innerHTML = "<br> "+data.articles[i].description+"";
                    document.getElementById("HDLN").appendChild(description).style.fontWeight = "900";
                    //show a pic
                    //document.getElementById("robots").src = "https://i.pinimg.com/originals/9b/5d/e6/9b5de677b247a95869a8f8accbd798ff.jpg";
                    var pic = document.createElement("img");
                    pic.setAttribute("src", data.articles[i].url);
                    document.getElementById("HDLN").appendChild(pic);
                }
            }
        }
    });
        
    }); 

                   
                //   var WOO = document.createElement("P");
                //   WOO.setAttribute("id", "HOO");
                //   WOO.setAttribute("value", data.sources[i].title);
                //   WOO.innerHTML = data.sources[i].title + ": " + data.sources[i].description;
                //   console.log("whats up");
                //   document.getElementById("BAM").appendChild(WOO);
                
                // alert(data.status);
                // alert(data.sources[0].description);
                // alert(data.sources[0].title);