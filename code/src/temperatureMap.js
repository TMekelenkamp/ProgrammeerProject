function temperature(){

  d3.json("../dataset/temperature.json", function(error, data){
  if (error) {return console.warn(error)};

      var data = data.json
      console.log(data[0].country)

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
               color = 'rgba(0,100,0,0.8)';
          }
          dataList[code] = {country: data[i].country, capital: data[i].capital ,
          tens: data[i].tens, zeros: data[i].zeros,
          nineties: data[i].nineties, eighties: data[i].eighties, fillKey: color};
          }

// settings for the map
var map = new Datamap({element: document.getElementById('map'),
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
        data1: '#ffffb2',
        data2: '#fecc5c',
        data3: '#fd8d3c',
        data4: '#e31a1c',
        defaultFill: 'rgba(0,100,0,0.4)'
    },
    data: dataList,
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
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
      }
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
