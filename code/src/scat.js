function drawScatter(data, value){

  // console.log(max);
  id = 'scatContainer';
  var div = d3.select('.scatter')
      .attr('id', id)

  div.selectAll('*').remove('scatContainer');
  var choice = document.getElementById("dataSelector").value;
  var max;
  var min;
  if (choice == "temperature"){
    max = 50;
    min = 0;
    value = "Temperature in celcius";
  }
  else if (choice == "life"){
    max = 90;
    min = 60;
    value = "Life expectancy in years from birth";
  }

  var margin = {top: 20, right: 40, bottom: 30, left: 100},
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

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>" + d.country +  "</strong>";
    })

  var svg = d3.select('#' + id).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    x.domain([0, 1800000]);
    y.domain([min, max]);

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
       .attr("y", -40)
      //  .attr("dy", ".71em")
       .style("text-anchor", "end")
       .text(value)

     svg.selectAll(".dot")
     .data(data)
   .enter().append("circle")
     .attr("class", "dot")
     .attr("r", 5)
     .attr("cx", function(d) { return x(d.emission); })
     .attr("cy", function(d) { if(choice == "temperature"){return y(d.temp);}else if(choice == "life"){return y(d.life);}})
     .style("fill", function(d) { return color(d.country); })
     .on('mouseover', tip.show)
     .on('mouseout', tip.hide)
  }
