function Time() {
  var date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}

function Stop() {
  clearInterval(intervalID);
}
