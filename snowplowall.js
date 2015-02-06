
 window.addEventListener ("load", showMeAllPlowData, false);

 function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// append our layer function so when button is clicked or myDoc is provided we get new data
function layerAllData(onLoad) {
  // viewing a historical dataset and not current one?
  var myDoc = getParameterByName("myDoc");

  // clear out the data and rep
  if (myDoc && onLoad) {
    // new json without slider info with doc id
    var allData = {"Name":"Pittsburgh, PA","TimeZone":"Eastern Standard Time","DaylightSavingTime":true,"MapCenterLatitude":40.4313684,"MapCenterLongitude":-79.9805005,"MapZoomLevel":12,"ShowSlider":false,"SliderStartDate":null,"TotalSliderMinutes":1440,"SliderIncrementMinutes":60,"ShowToolTips":true,"DefaultIconStyle":"plow","FalseData":null,"FalseDataDate":null,"DeviceRouteFusionTableId":myDoc};
    // hack and slash the old body nodes to put in our new ones
    $("body").empty()

    useData(allData)
  }

  if (onLoad) {
    // pop in our button after the reset
    $( "#resetMapButton" ).append($('<div id="allDataMap"><input class="menu_btn" type="button" onclick="layerAllData()" value="View All Data"/></div>'))  
    $( "#legend" ).append($('<div id="theRouteTableId">myDoc=' + routeTableID + '</div>'));
  }

  // if there's a myDoc provided on load or if this is being called not on load
  if (myDoc && onLoad || !onLoad) {
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
}

function showMeAllPlowData (evt) {
  var script = document.createElement('script');

  // hue hue hue hue hue -- put our scripts in the DOM
  script.appendChild(document.createTextNode(getParameterByName));  
  // call this out of the gate to do any sort of setup if myDoc was passed in
  script.appendChild(document.createTextNode('(' + layerAllData + ')(true);'));
  
  script.appendChild(document.createTextNode(layerAllData));
  (document.body || document.head || document.documentElement).appendChild(script);
 }