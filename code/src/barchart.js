// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

// // draws a line graph of the co2 data and another variable data
// function drawBar(country1, country2){
//
//   // load the json file with the data
//   d3.json("../dataset/changedJson/emission.json", function(error, data){
//     if (error) console.log("help");
//
//   // store the data from the json in a variable
//   var data = data.json
//
//   // function that gets the county data that fits the country from the map
//   function findCountry(country, data){
//     var key = country;
//     var object = data[0][key];
//     return object;
//   }
//
//   if (findCountry(country1, data) == "undefined"){
//     alert("Country does not exist ");(
//   }
//
//   function toTitleCase(str)
//   {
//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//   }
//   var country = toTitleCase(country);
//   console.log(country);
//
//   // store the country data in a variable
//   var dataset1 = findCountry(country1, data);
//   var dataset2 = findCountry(country2, data);
//   console.log(dataset1);
//   console.log(dataset2)
//   // console.log(dataset.tens);
//   // console.log(dataset.zeros);
//   // console.log(dataset.nineties);
//   // console.log(dataset.eighties);
//   // console.log(dataset.length);
//
//   // create 2 lists for the data to use in the graph
//   var date = ['2010', '2000', '1990', '1980'];
//   var value = [];
//
//   date = ['2010', '2000', '1990', '1980'];
//   value.push(dataset1.tens);
//   value.push(dataset1.zeros);
//   value.push(dataset1.nineties);
//   value.push(dataset1.eighties);
//
//   var dataList = []
//   for (var i = 0; i < 4; i++)
//   {
//     dataList[i] = {date: date[i], value: value[i]};
// }
//
// var data = value;
//
// var width = 420,
//     barHeight = 20;
//
// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, width]);
//
// var chart = d3.select(".chart")
//     .attr("width", width)
//     .attr("height", barHeight * data.length);
//
// var bar = chart.selectAll("g")
//     .data(data)
//   .enter().append("g")
//     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
//
// bar.append("rect")
//     .attr("width", x)
//     .attr("height", barHeight - 1);
//
// bar.append("text")
//     .attr("x", function(d) { return x(d) - 3; })
//     .attr("y", barHeight / 2)
//     .attr("dy", ".35em")
//     .text(function(d) { return d; });
//
// });
// }
