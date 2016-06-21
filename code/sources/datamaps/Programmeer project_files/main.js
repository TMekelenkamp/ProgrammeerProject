scatterData();

// loads json data for the scatterplot, stores the required data in a list
// and calls the scatterplot function
function scatterData(){
  // console.log( value);
  d3.json("../dataset/lifes.json", function(error, data){
    if (error) alert ("Error loading country data");

    var data1 = data.json;

    d3.json("../dataset/emission.json", function(error, data){
      if (error) alert ("Error loading country data");

      var data2 = data.json;

       d3.json("../dataset/temperatures.json", function(error, data){
          if (error) alert ("Error loading country data");

          var data3 = data.json;

          // check the value of the selector and get the correct year data
          var choice = document.getElementById("yearSelector").value;
          var emission = [];
          var data = [];
          for (var i = 0; i < 43; i++){
            if (choice == "1980"){
            data[i] = {country: data1[i].country, life: data1[i].eighties, emission: data2[i].eighties, temp: data3[i].eighties};
            }
            else if (choice == "1990"){
            data[i] = {country: data1[i].country, life: data1[i].nineties, emission: data2[i].nineties, temp: data3[i].nineties};
            }
            else if (choice == "2000"){
            data[i] = {country: data1[i].country, life: data1[i].zeros, emission: data2[i].zeros, temp: data3[i].zeros};
            }
            else if (choice == "2010"){
            data[i] = {country: data1[i].country, life: data1[i].tens, emission: data2[i].tens, temp: data3[i].tens};
            }
          }
        // call the scatterplot function
        drawScatter(data);
      });
    });
  });
}

function resetScatter(){
  // set the scatterplot dots back to default
  d3.selectAll(".dot").attr("opacity", 1);
  d3.selectAll(".dot").attr("r", 5);
}

createSelectors("field1");
createSelectors("field2");


function createSelectors(country){

  d3.json("../dataset/landen.json", function(error, data){
    if (error) alert ("Error loading country data");
    var data = data.json;

  for (var i = 0; i < 43; i++){
      // console.log(data[i + 1].country)
    select = document.getElementById(country);
     var opt = document.createElement('option');
     opt.value = data[i + 1].country;
     opt.innerHTML = data[i + 1].country;
     select.appendChild(opt);

  }    // console.log(data);
  });
}
