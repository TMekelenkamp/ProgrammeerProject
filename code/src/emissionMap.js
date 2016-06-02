function emission(){

  d3.json("../dataset/emission.json", function(error, data){
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
          if (data[i].tens < 50000) {
              color = 'data1';
          }
          else if (data[i].tens < 150000) {
              color = 'data2'
          }
          else if (data[i].tens < 500000) {
              color = 'data3';
          }
          else if (data[i].tens > 500000) {
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
        data1: '#ffffcc',
        data2: '#c2e699',
        data3: '#78c679',
        data4: '#238443',
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
  legendTitle : "Co2 emissions in kilotons",
  defaultFillName: "No data",
  labels: {
    data1: "< 50.000",
    data2: "< 150.000",
    data3: "< 500.000",
    data4: "> 500.000"
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
