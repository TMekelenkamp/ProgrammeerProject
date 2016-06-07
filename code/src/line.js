// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

  d3.json("test.json", function(error, data){
    if (error) console.log("help");

  var country = "Bulgaria";
  // store de data in a var
  var data = data.json
  // console.log(data)
  // console.log(data[1].date[1])
  console.log(data[1].country);
  var date = [];
  var value = [];
  for (var i = 0; i < data[1].Bulgaria.length; i++)
  {
    date.push(data[1].Bulgaria[i].date);
    value.push(data[1].Bulgaria[i].value);

  }
  console.log(date);
  console.log(value);

  var dataList = []
  for (var i = 0; i < data[1].Bulgaria.length; i++)
  {
    dataList[i] = {date: date[i], value: value[i]};
}
  console.log(dataList);
  // setting the margins and sizes of the graph
  var margin = {top: 50, right: 100, bottom: 100, left: 100};
  var width = 1100,
      height = 500,
      padding = 0;

      var temps = [];

  // get the min and max temperatures
  var min = 0  //Math.min.apply(Math,temps),
      max = 200000 //Math.max.apply(Math,temps);

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
  var chart = d3.select(".chart")
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
