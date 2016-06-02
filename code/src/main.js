var input = "../dataset/temperature.json";
var tag = 'temp';
function emission(){
  tag = 'emission';
  visual(input, tag);
  input = "../dataset/emission.json";
}
function temp(){
  tag = 'temp';
  visual(input, tag);
  input = "../dataset/temperature.json";
}
function life(){
  tag = 'life';
  visual(input, tag);
  input = "../dataset/life.json";
}

visual(input,tag);

function visual(input, tag){

  d3.json(input, function(error, data){
  if (error) {return console.warn(error)};

  var data = data.json

  line(data, tag);
});
}
