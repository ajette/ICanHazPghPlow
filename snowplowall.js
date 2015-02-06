
 window.addEventListener ("load", showMeAllPlowData, false);

 function layerAllData() {
  // layer2 is the plow maps layer with all the data
  // override it with moar data
  layer2 = new google.maps.FusionTablesLayer({
        map: map,
        heatmap: { enabled: false },
        query: {
            select: "Location",
            from: routeTableID,
            // GROUP By location and get the last one
            where: "GROUP BY Location ORDER BY Date DESC"
        },
        options: {
            styleId: 2,
            templateId: 2
        }
    });
 }

function showMeAllPlowData (evt) {
  // pop in our button after the reset
  $( "#resetMapButton" ).append($('<div id="allDataMap"><input class="menu_btn" type="button" onclick="layerAllData()" value="View All Data"/></div>'))

  var script = document.createElement('script');
  // hue hue hue hue hue -- append our layer function so when button is clicked we get new data
  script.appendChild(document.createTextNode(layerAllData));
  (document.body || document.head || document.documentElement).appendChild(script);
 }