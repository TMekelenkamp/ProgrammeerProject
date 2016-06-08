// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam


drawGraph("Germany")

// draws a line graph of the co2 data and another variable data
function drawGraph(country){

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
  // store the country data in a variable
  var dataset = findCountry(country, data);

  console.log(dataset.tens);
  console.log(dataset.zeros);
  console.log(dataset.nineties);
  console.log(dataset.eighties);
  console.log(dataset.length);

  // create 2 lists for the data to use in the graph
  var date = ['2010', '2000', '1990', '1980'];
  var value = [];

  date = ['2010', '2000', '1990', '1980'];
  value.push(dataset.tens);
  value.push(dataset.zeros);
  value.push(dataset.nineties);
  value.push(dataset.eighties);

  var dataList = []
  for (var i = 0; i < 4; i++)
  {
    dataList[i] = {date: date[i], value: value[i]};
}

  // setting the margins and sizes of the graph
  var margin = {top: 50, right: 100, bottom: 100, left: 100};
  var width = 1100,
      height = 500,
      padding = 0;

  // get the min and max temperatures
  var min = Math.min.apply(Math,value),
      max = Math.max.apply(Math,value);

  // parse function
  var parseDate = d3.time.format("%Y").parse;

  // define the scales on the x axis
  var xScale = d3.scale.linear()
    .domain([1980, 2010])
    .range([padding, width]);

  // define the scales on the y axis
  var yScale = d3.scale.linear()
        .domain([min, max])
        .range([height, 0]);

  // position the x axis
  var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(4);
  // position the y axis
  var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left");

  // give the data for the average temperature
  var line = d3.svg.line()
      .x(function(dataList) {console.log(dataList.date); return xScale(dataList.date); })
      .y(function(dataList) {console.log(dataList.value); return yScale(dataList.value); });

  // creat the var for the chart
  var chart = d3.select(".graph")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // append line1 to the graph
  chart.append("path")
      .datum(dataList)
      .attr("class", "line")
      .attr("d", line);

  // append the x axis with the correct data
  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // append the y axis with the correct data
  chart.append("g")
      .attr("class", "yScale axis")
      .call(yAxis)

  // create anchor text for the y axis
  chart.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "translate("+ ((padding - 100)/2) +","+(height/2)+")rotate(-90)")
      .text("Co2 emission in kilotons x 1000");

  // create anchor text for the x axis
  chart.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "translate("+ (width/2) +","+(height-((padding - 125)/3))+")")
      .text("Decade");

  // // create and append the horizontal crosshair
  // var crossHair = chart.append("g").attr("class", "crosshair");
  // crossHair.append("line").attr("id", "h_crosshair")
  //     .style("stroke", "black")
  //     .style("stroke-width", "1px")
  //     .style("display", "none");
  //
  // // create and append the vertical crosshair
  // crossHair.append("line").attr("id", "v_crosshair")
  //     .style("stroke", "black")
  //     .style("stroke-width", "1px")
  //     .style("display", "none");
  //
  // // appen the text of the crosshair
  // crossHair.append("text").attr("id", "crosshair_text") // text label for cross hair
  //     .style("font-size", "10px")
  //     .style("stroke", "black")
  //     .style("stroke-width", "0.5px");
  //
  // // detect the mouse movement
  // chart.on("mousemove", function () {
  //     var xCoord = d3.mouse(this)[0],
  //         yCoord = d3.mouse(this)[1];
  //         addCrossHair(xCoord, yCoord);
  //         console.log("x: " + xCoord + " , " + "y: "+ yCoord);
  // })
  //
  // // add the crosshair function for the crosshar
  // function addCrossHair(xCoord, yCoord) {
  //     // update horizontal crosshair
  //     d3.select("#h_crosshair")
  //         .attr("x1", xScale(2010))
  //         .attr("y1", yCoord)
  //         .attr("x2", xScale(1980))
  //         .attr("y2", yCoord)
  //         .style("display", "block");
  //     // update vertical crosshair
  //     d3.select("#v_crosshair")
  //         .attr("x1", xCoord)
  //         .attr("y1", yScale(min))
  //         .attr("x2", xCoord)
  //         .attr("y2", yScale(max))
  //         .style("display", "block");
  //     // update text label
  //     d3.select("#crosshair_text")
  //         .attr("transform", "translate(" + (xCoord + 5) + "," + (yCoord - 5) + ")")
  //         .text("(" + xScale.invert(xCoord) + " , " + yScale.invert(yCoord) + ")");
  // }


});
}
