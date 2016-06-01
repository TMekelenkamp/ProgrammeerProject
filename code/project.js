// settings for the map
var map = new Datamap({element: document.getElementById('map'),
setProjection: function(element) {
    var projection = d3.geo.equirectangular()
      .center([23, -3])
      .rotate([4.4, 0])
      .scale(600)
      .translate([element.offsetWidth / 2, element.offsetHeight + 200]);
      console.log([element.offsetWidth / 2]);
      console.log([element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  },
    fills: {
        defaultFill: 'rgba(115,115,115,0.2)'
    }
    });
