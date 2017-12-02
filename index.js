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

    $("#source").submit(function(event) {
        event.preventDefault();
        alert(document.getElementById("selection").value);
        console.log(document.getElementById("HOO").value);
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