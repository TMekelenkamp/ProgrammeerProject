// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

// function that compares two countries on temp, life, and co2
function compare() {
  // get the input from the user forms
  var country1 = document.getElementById('field1').value;
  var country2 = document.getElementById('field2').value;

  // call the getData function to get the data for the 2 countries
  getData(country1, country2);
}

// draws a line graph of the co2 data and another variable data
function getData(country1, country2){

  // load the json file with the data
  d3.json("../dataset/changedJson/emission.json", function(error, data){
    if (error) console.log("help");

  // store the data from the json in a variable
  var data = data.json

  // function that gets the county data that fits the country from the map
  function findCountry(country, data){
    var key = country;
    var object = data[0][key];
    return object;
  }

  // make strings lowercase to make sure the program will find it
  country1 = country1.toLowerCase(country1);
  country2 = country2.toLowerCase(country2);

  // takes the string and ensures the first letter is uppercase
  function firstToUpperCase( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
  }

  // make the first letter of the string uppercase to work with json
  country1 = firstToUpperCase(country1);
  country2 = firstToUpperCase(country2);

  // store the country data in a variable
  var dataset1 = findCountry(country1, data);
  var dataset2 = findCountry(country2, data);


  // create 2 lists for the data to use in the graph
  var date = ['2010', '2000', '1990', '1980'];
  var value = [];

  // push the variable data into the value list
  value.push(dataset1.tens);
  value.push(dataset2.tens);

  // store the data in the correct format
  var dataList = [];
  dataList[0]= {value: value[0], country: country1};
  dataList[1]= {value: value[1], country: country2};

  // call the drawBar function with the dataList
  drawBar(dataList);

});

function drawBar(data){

var div = d3.select('.chart')
    .attr('id', 'barContainer')

div.selectAll('*').remove('barContainer');

var data = data;

var margin = {top: 20, right: 20, bottom: 30, left: 100},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#barContainer").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  console.log(data);
  x.domain(data.map(function(d) { return d.country; }));
  y.domain([0, 1800000]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Co2 emission in kilotons");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); });


function type(d) {
  d.country = +d.country;
  return d;
}
}
}
