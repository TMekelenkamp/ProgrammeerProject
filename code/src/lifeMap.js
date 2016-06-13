// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

function life(){

  d3.json("../dataset/lifes.json", function(error, data){
  if (error) {return console.warn(error)};


      var div = d3.select('.map')
          .attr('id', 'mapContainer')

      div.selectAll('*').remove('mapContainer');

      var data = data.json

      var countries = Datamap.prototype.worldTopo.objects.world.geometries;

      // store the data from the json in a usable variable
      // console.log(option);
      var dataList = {};
      // check colors for the map
      for (var i = 0; i < data.length; i++) {
          code = findCountry(countries, data[i].country)
          if (data[i].tens < 70) {
              color = 'data1';
          }
          else if (data[i].tens < 75) {
              color = 'data2'
          }
          else if (data[i].tens < 80) {
              color = 'data3';
          }
          else if (data[i].tens < 90) {
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
    var projection = d3.geo.equirectangular()
      .center([15, 10])
      .rotate([4.4, 0])
      .scale(600)
      .translate([element.offsetWidth / 2, element.offsetHeight + 200]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  },
    fills: {
        data1: '#ff66a3',
        data2: '#ff3385',
        data3: '#ff0066',
        data4: '#cc0052',
        defaultFill: 'rgba(107, 107, 71,0.6)'
    },
    data: dataList,
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
          console.log((findCountry(countries, geography.properties.name)));
          console.log(geography.properties.name);
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
  legendTitle : "Life expectancy from birth in years",
  defaultFillName: "No data",
  labels: {
    data1: "< 70",
    data2: "< 75",
    data3: "< 80",
    data4: "< 90,"
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
