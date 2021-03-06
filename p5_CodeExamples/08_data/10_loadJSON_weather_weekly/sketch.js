
var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Missoula,USA&cnt=10&mode=json&APPID=YOUR_API_KEY";

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, handleData);
}

function handleData(data) {
  console.log(data.list);

  for (var i=0; i<data.list.length; i++) {

    var numClouds = data.list[i].clouds;
    var humidity = data.list[i].humidity;

    fill(200, 50, 100, humidity);
    ellipse(i*100+50, height/2, numClouds, numClouds);
    text("day "+i, i*100+50, height/2);
  }
}
