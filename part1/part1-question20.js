let d = new Date();

let time = d.toLocaleTimeString();

function repTime(){
  console.log(time);
}

setInterval(repTime, 1000);
