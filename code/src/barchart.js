// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

// function that creates the barcharts
function drawBar(data, max, variable, fill){

  // define the margines of the charts
  var margin = {top: 20, right: 20, bottom: 30, left: 100},
    width = 350 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

  // create an x range
  var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

  // create an y range
  var y = d3.scale.linear()
    .range([height, 0]);

  // create x axis
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

  // create y axis
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  // create the tooltip
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>" + d.value + "</strong>";
  })

  // create the svg element
  var svg = d3.select('#' + id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // call the tip on the svg
  svg.call(tip);

  // define the x and y domains
  x.domain(data.map(function(d) { return d.country; }));
  y.domain([0, max]);

  // append the x axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  // append the y axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("x", 5)
      .attr("text-anchor", "top")
      .text(variable);

  // append the bars
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.country); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .style("fill", fill)
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

  function type(d) {
    d.country = +d.country;
    return d;
  }
}
