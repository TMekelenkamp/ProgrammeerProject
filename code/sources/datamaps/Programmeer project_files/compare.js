// Thom Mekelenkamp
// 11167998
// Universiteit van Amsterdam

// function that compares two countries on temp, life, and co2
function compare() {
  id = 'barContainer';
  var div = d3.select('.chart')
      .attr('id', id)

  div.selectAll('*').remove('barContainer');

  // // Check if the user entered a valid country name
  // if (findCountry(country1, data) == undefined || findCountry(country2, data) == undefined){
  //   alert("Please enter a valid country name");
  // }
  //
  // // check if user entered two identical countries
  // if (country1 == country2){
  //   alert("Please enter two different country names")
  //   return 0
  // }

  // get the input from the user forms
  var country1 = document.getElementById('field1').value;
  var country2 = document.getElementById('field2').value;

  if (country1 == "United Kingdom"){
    country1 = "UK";
  }
  else if (country1 == "Bosnia and Herzegovina"){
    country1 = "Bosnia";
  }
  else if (country1 == "Czech Republic"){
    country1 = "Czech";
  }

  if (country2 == "United Kingdom"){
    country2 = "UK";
  }
  else if (country2 == "Bosnia and Herzegovina"){
    country2 = "Bosnia";
  }
  else if (country2 == "Czech Republic"){
    country2 = "Czech";
  }

  var max, fill;
  var file;
  var variable;
  for (var i = 0; i < 3; i++){
    if (i == 0){
      max = 1800000;
      file = "../dataset/changedJson/new_emission.json";
      variable = "Co2 emission in kilotons ";
      fill = '#cca300';
    }
    else if(i == 1){
      max = 45;
      file = "../dataset/changedJson/new_temp.json";
      variable = "Temperature in celcius ";
      fill = '#cc5200';
    }
    else if(i == 2){
      max = 90;
      file = "../dataset/changedJson/new_life.json";
      variable = "Life expectancy in years from birth ";
      fill = '#cc0052';
    }
    getData(country1, country2, file, max, variable, fill);
  }
  // call the getData function to get the data for the 2 countries
  // getData(country1, country2, file, max);
}

// draws a line graph of the co2 data and another variable data
function getData(country1, country2, file, max, variable, fill){

  // load the json file with the data
  d3.json(file, function(error, data){
    if (error) alert ("Error loading country data");
  // store the data from the json in a variable
  var data = data.json

  // console.log(data);
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
  drawBar(dataList, max, variable, fill);
});
}
