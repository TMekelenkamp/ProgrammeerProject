// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

function temperature(){

  d3.json("../dataset/temperatures.json", function(error, data){
  if (error) {return console.warn(error)};

      var data = data.json

      var div = d3.select('.map')
          .attr('id', 'mapContainer')

      div.selectAll('*').remove('mapContainer');

      var countries = Datamap.prototype.worldTopo.objects.world.geometries;

      // store the data from the json in a usable variable
      // console.log(option);
      var dataList = {};
      // check colors for the map
      for (var i = 0; i < data.length; i++) {
          code = findCountry(countries, data[i].country)
          if (data[i].tens < 25) {
              color = 'data1';
          }
          else if (data[i].tens < 30) {
              color = 'data2'
          }
          else if (data[i].tens < 35) {
              color = 'data3';
          }
          else if (data[i].tens < 40) {
              color = 'data4';
          }
          else {
               color = 'defaultFill';
          }
          dataList[code] = {country: data[i].country, capital: data[i].capital ,
          tens: data[i].tens, zeros: data[i].zeros,
          nineties: data[i].nineties, eighties: data[i].eighties, fillKey: color};
          }

// settings for the map
var map = new Datamap({element: document.getElementById('mapContainer'),
setProjection: function(element) {
    var projection = d3.geo.mercator()
      .center([20, 12])
      .rotate([4, 0])
      .scale(450)
      .translate([element.offsetWidth / 2, element.offsetHeight + 200]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  },
    fills: {
        data1: '#ffa366',
        data2: '#ff8533',
        data3: '#ff6600',
        data4: '#cc5200',
        defaultFill: 'rgba(107, 107, 71,0.6)'
    },
    data: dataList,
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
          d3.selectAll(".dot").attr("opacity", 0.3);
          d3.selectAll(".dot").attr("r", 5);
          d3.selectAll("#" + geography.properties.name).attr("opacity", 1);
          d3.selectAll("#" + geography.properties.name).attr("r", 10);
        });
    },
    geographyConfig:{
      popupTemplate: function(geography, dataList) {
          // if (!dataList) { return ; }
          return['<div class="hoverinfo"><strong>' + geography.properties.name + '</strong>' +
          ' <br>2010: ' + dataList.tens +
          ' <br>2000: ' + dataList.zeros +
          ' <br>1990: ' + dataList.nineties +
          ' <br>1980: ' + dataList.eighties +
          ' </div>'].join('');
      },
      highlightOnHover: true,
      highlightFillColor: '#d6d6c2'
    }
  });

  map.legend({
  legendTitle : "Temperature in Celcius",
  defaultFillName: "No data",
  labels: {
    data1: "< 25",
    data2: "< 30",
    data3: "< 35",
    data4: "< 40,"
  }
});


  function findCountry(array, value){
      // loop that finds the country code for every country on the map
      for (var i = 0, j = array.length; i < j; i++)
      {
           if ( array[i].properties.name === value)
      {
      return countries[i].id;
      }
    }
  }
});
}
