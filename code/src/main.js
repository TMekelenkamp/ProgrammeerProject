scatterData();

function scatterData(){

  // for (var i = 0; i < 3; i++){
  //   if (i == 0){
  //     max = 1800000;
  //     file = "../dataset/changedJson/emission.json";
  //   }
  //   else if(i == 1){
  //     max = 45;
  //     file = "../dataset/changedJson/temp.json";
  //   }
  //   else if(i == 2){
  //     max = 90;
  //     file = "../dataset/changedJson/life.json";
    // }



    d3.json("../dataset/lifes.json", function(error, data){
      if (error) alert ("Error loading country data");

      var data1 = data.json;

      d3.json("../dataset/emission.json", function(error, data){
        if (error) alert ("Error loading country data");

        var data2 = data.json;

        d3.json("../dataset/temperatures.json", function(error, data){
          if (error) alert ("Error loading country data");

          var data3 = data.json

          var choice = document.getElementById("selector").value;
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

          console.log(choice);


          // console.log(data);
          drawScatter(data);
      });
    });
  });
    // console.log(varData);
}
