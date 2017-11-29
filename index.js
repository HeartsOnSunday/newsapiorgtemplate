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
                   var source =  document.createElement("OPTION");
                   source.innerHTML = data.sources[i].name;
                   document.getElementById("selection").appendChild(source);
                }
                
                
                
                alert(data.status);
            } else {
                alert(data.message);
            }
        }
    })
//      success: function(data){
//            if (data.status == "ok") {
//               alert(data.status);
//           }
//       }
//    })
    // .done(function( data ) {
    //   console.log( data );
    //     console.log( data.status);
  });
