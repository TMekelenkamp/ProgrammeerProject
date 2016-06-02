// window.onload = visual();
var input = "../dataset/temperature.json";
var tag = 'temp';
function emission(){
  tag = 'emission';
  visual(input, tag);
  input = "../dataset/emission.json";
}
function temp(){
  tag = 'temp';
  visual(input, tag);
  input = "../dataset/temperature.json";
}
function life(){
  tag = 'life';
  visual(input, tag);
  input = "../dataset/life.json";
}

visual(input,tag);

function visual(input, tag){

  d3.json(input, function(error, data){
  if (error) {return console.warn(error)};

      var countries = Datamap.prototype.worldTopo.objects.world.geometries;

      // store the data from the json in a usable variable
      var data = data.json
      // console.log(option);
      console.log(tag);

      var max;
      if (tag == "emission"){
        max = 1742540,065;
      }
      else if(tag == "temp"){
        max = 39;
      }
      else{
        max = 82,2;
      }
      console.log(max);
      console.log(.25 * max);
      console.log(.50 * max);
      console.log(.75 * max);

      var dataList = {};
      // check colors for the map
      for (var i = 0; i < data.length; i++) {
          if (data[i].tens < (.25 * max)) {
              color = 'data1';
          }
          else if (data[i].tens < (.50 * max)) {
              color = 'data2'
          }
          else if (data[i].tens < (.75 * max)) {
              color = 'data3';
          }
          else if (data[i].tens < (max + 1)) {
              color = 'data4';
          }
          else {
               color = 'rgba(0,100,0,0.8)';
          }
          code = findCountry(countries, data[i].country)
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
        data1: 'd6e8f5',
        data2: 'aed1ea',
        data3: '85bae0',
        data4: '5da3d5',
        data5: '348ccb',
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
  // var data = "lalalalalalalla";
  // scatter(data);


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
