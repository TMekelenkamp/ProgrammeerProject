



function drawScatter(data){

  // console.log(max);
  id = 'scatContainer';
  var div = d3.select('.scatter')
      .attr('id', id)


  // var data = [{country: "France", emission: "200000", life: "77"}, {country: "Germany", emission: "670000", life: "68"}];

  var margin = {top: 200, right: 40, bottom: 30, left: 100},
      width = 1000 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom;

  var color = d3.scale.category10();

  var x = d3.scale.linear()
      .range([0, width]);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var svg = d3.select('#' + id).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    console.log("PRINT DIE ASSEN UIT!!!!");
    x.domain([0, 600000]);
    y.domain([0, 50]);

    svg.append("g")
       .attr("class", "x axis")
       .attr("transform", "translate(0," + height + ")")
       .call(xAxis)
     .append("text")
       .attr("class", "label")
       .attr("x", width)
       .attr("y", -6)
       .style("text-anchor", "end")
       .text("Co2 emission in kilotons");

     svg.append("g")
       .attr("class", "y axis")
       .call(yAxis)
     .append("text")
       .attr("class", "label")
       .attr("transform", "rotate(-90)")
       .attr("y", 15)
      //  .attr("dy", ".71em")
       .style("text-anchor", "end")
       .text("")

     svg.selectAll(".dot")
     .data(data)
   .enter().append("circle")
     .attr("class", "dot")
     .attr("r", 5)
     .attr("cx", function(d) { return x(d.emission); })
     .attr("cy", function(d) { return y(d.temp); })
     .style("fill", function(d) { return color(d.country); });

  }
