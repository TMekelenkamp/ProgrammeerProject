drawScatter();



function drawScatter(){

// console.log(max);
id = 'scatContainer';
var div = d3.select('.scatter')
    .attr('id', id)

var width = 960;
var height = 500;

var x = d3.scale.linear()
  .domain([0, 200])
  .range([0, width]);

var y = d3.scale.linear()
  .domain([0, 200])
  .range([height, 0]);

// var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select('#' + id).append("svg")
    .attr("width", width )
    .attr("height", height )
  .append("g")
    .attr("transform", "translate(" + 40 + "," + 20 + ")");

// d3.tsv("data.tsv", function(error, data) {
//   if (error) throw error;

  // console.log(data);
  //
  // data.forEach(function(d) {
  //   d.sepalLength = +d.sepalLength;
  //   d.sepalWidth = +d.sepalWidth;
  // });

  x.domain([0,200]);
  y.domain([0,200]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Sepal Width (cm)");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Sepal Length (cm)")

  // svg.selectAll(".dot")
  //     .data(data)
  //   .enter().append("circle")
  //     .attr("class", "dot")
  //     .attr("r", 3.5)
  //     .attr("cx", function(d) { return x(d.sepalWidth); })
  //     .attr("cy", function(d) { return y(d.sepalLength); })
  //     .style("fill", function(d) { return color(d.species); });

  // var legend = svg.selectAll(".legend")
  //     .data(color.domain())
  //   .enter().append("g")
  //     .attr("class", "legend")
  //     .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // legend.append("rect")
  //     .attr("x", width - 18)
  //     .attr("width", 18)
  //     .attr("height", 18)
  //     .style("fill", color);
  //
  // legend.append("text")
  //     .attr("x", width - 24)
  //     .attr("y", 9)
  //     .attr("dy", ".35em")
  //     .style("text-anchor", "end")
  //     .text(function(d) { return d; });

// });
}
