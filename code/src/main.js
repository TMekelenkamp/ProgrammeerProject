window.onload = visual;

function visual(){
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
        defaultFill: 'rgba(0,0,200,0.4)'
    }
});
var data = "lalalalalalalla";
scatter(data);

}
