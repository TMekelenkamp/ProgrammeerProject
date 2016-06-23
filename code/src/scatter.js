// draws scatterplot
function drawScatter(data){

  // create container for updating the plot
  var id = 'scatterContainer';
  var div = d3.select('.scatter')
    .attr('id', id)

  div.selectAll('*').remove('scatterContainer');

  // get the value of the dataSelector to select temp or life
  var choice = document.getElementById("dataSelector").value;
  var max, min;
  // check what choice was made and select the correct data and variables
  if (choice == "temperature"){
    max = 50, min = 0;
    value = "Temperature in celcius";
  }
  else if (choice == "life"){
    max = 90, min = 50;
    value = "Life expectancy in years from birth";
  }

  // set margins and sizes for the plot
  var margin = {top: 20, right: 40, bottom: 100, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // define the x axis scale
  var x = d3.scale.sqrt()
    .range([0, width]);

  // define the y axis scale
  var y = d3.scale.linear()
    .range([height, 0]);

  // define the x axis
  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(15);

  // define the y axis
  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

  // define the tooltip and check what data should be displayed
  if (choice == "temperature"){
    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return '<strong>' + d.country +  "</strong>" +
        '<br>Temperature: ' + d.temp +
        '<br>Emission: ' + d.emission
      })
  }
  else if (choice == "life"){
    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return '<strong>' + d.country  + "</strong>" +
        '<br>Expectancy: ' + d.life +
        '<br>Emission: ' +  d.emission
      })
  }

  // define the svg and select the correct container
  var svg = d3.select('#' + id).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // call the tooltip for use
  svg.call(tip);

  // set the x and y domains on the axes
  x.domain([0, 1800000]);
  y.domain([min, max]);

  // append the x axis with rotated label
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)" )

  // append the x axis with the emission label
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
   .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("Co2 emission in kilotons");

  // append the y axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    //  .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text(value)

  // append the dots and set the mousemove for the tooltip
  svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("id", function(d){return d.country;})
    .attr("r", 5)
    .attr("cx", function(d) { if (isNaN(x(d.emission))){ return x(0);}else{ return x(d.emission);}})
    .attr("cy", function(d) { if(choice == "temperature"){
                                if (isNaN(y(d.temp)))
                                {
                                  return y(0);
                                }
                                else {
                                  return y(d.temp);
                                }
                              }
                              else if(choice == "life")
                              {
                                if (isNaN(y(d.life)))
                                {
                                  return y(0);
                                }
                                else
                                {
                                  return y(d.life);
                                }
                              }
                            })
    .style("fill", "steelblue")
    .style("display",function(d) { if (isNaN(x(d.emission)) || isNaN(y(d.temp)) || isNaN(y(d.life))){return "none"}})
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
}
