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
        // url: "https://newsapi.org/v2/top-headlines",
        // data: {sources: "techcrunch", apikey: APIKEY},
        success: function(data){
            if (data.status == "ok") {
                console.log(data);
                for (var i = 0; i < data.sources.length; i++) {
                   var source = document.createElement("OPTION");
                   source.setAttribute("id", "dropdown");
                   source.setAttribute("value", data.sources[i].id);
                   source.innerHTML = data.sources[i].name;
                   document.getElementById("selection").appendChild(source);
                   
                   var WOO = document.createElement("P");
                   WOO.setAttribute("id", "HOO");
                   WOO.setAttribute("value", data.sources[i].description);
                   WOO.innerHTML = data.sources[i].description;
                   document.getElementById("BAM").appendChild(WOO);
                }
                alert(data.status);
                alert(data.sources[0].description);
            }
        }
    });

    $("#source").submit( function(event) {
        event.preventDefault();
        alert(document.getElementById("selection").value);
        alert(document.getElementById("HOO").value);
    });   
  });

//      success: function(data){
//            if (data.status == "ok") {
//               alert(data.status);
//           }
//       }
//    })
    // .done(function( data ) {
    //   console.log( data );
    //     console.log( data.status);