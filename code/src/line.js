
function line(data, tag){

  var margin = {top: 50, right: 100, bottom: 100, left: 100};
  var width = 1100,
      height = 500,
      padding = 0;

  var min;
  var max;
  if (tag == "emission"){
    min = 58,672;
    max = 1742540,065;
  }
  else if(tag == "temp"){
    min = 20;
    max = 39;
  }
  else{
    min = 68,9;
    max = 82,2;
  }

// define the scales on the x axis
var xScale = d3.scale.linear()
  .domain([2010, 1980])
  .range([padding, width]);

// define the scales on the y axis
var yScale = d3.scale.linear()
    .domain([0, max])
    .range([height, 0]);

// position the x axis
var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom");

// position the y axis
var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");

// give the data for the average temperature
var line = d3.svg.line()
    .x(function(d) { return xScale(d.tens); })
    .y(function(d) { return yScale(d.zeros); });

// creat the var for the chart
var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// append line1 to the graph
chart.append("path")
    .datum(data)
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
    .attr("transform", "translate("+ ((padding - 75)/2) +","+(height/2)+")rotate(-90)")
    .text("Temperatuur in 0,1 Celsius");

// create anchor text for the x axis
chart.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (width/2) +","+(height-((padding - 125)/3))+")")
    .text("Datum");

// create and append the horizontal crosshair
var crossHair = chart.append("g").attr("class", "crosshair");
crossHair.append("line").attr("id", "h_crosshair")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("display", "none");

// create and append the vertical crosshair
crossHair.append("line").attr("id", "v_crosshair")
    .style("stroke", "black")
    .style("stroke-width", "1px")
    .style("display", "none");

// appen the text of the crosshair
crossHair.append("text").attr("id", "crosshair_text") // text label for cross hair
    .style("font-size", "10px")
    .style("stroke", "black")
    .style("stroke-width", "0.5px");

// detect the mouse movement
chart.on("mousemove", function () {
    var xCoord = d3.mouse(this)[0],
        yCoord = d3.mouse(this)[1];
        addCrossHair(xCoord, yCoord);
        console.log("x: " + xCoord + " , " + "y: "+ yCoord);
})

// add the crosshair function for the crosshar
function addCrossHair(xCoord, yCoord) {
    // update horizontal crosshair
    d3.select("#h_crosshair")
        .attr("x1", xScale(mindate))
        .attr("y1", yCoord)
        .attr("x2", xScale(maxdate))
        .attr("y2", yCoord)
        .style("display", "block");
    // update vertical crosshair
    d3.select("#v_crosshair")
        .attr("x1", xCoord)
        .attr("y1", yScale(gemMin))
        .attr("x2", xCoord)
        .attr("y2", yScale(gemMax))
        .style("display", "block");
    // update text label
    d3.select("#crosshair_text")
        .attr("transform", "translate(" + (xCoord + 5) + "," + (yCoord - 5) + ")")
        .text("(" + xScale.invert(xCoord) + " , " + yScale.invert(yCoord) + ")");
}
}
