var now = "home";//initially
var next;
var classarray = ["abcd"];
console.log(classarray + " gjgjhghjghjghj")
console.log("now"+ now)



$(".nav-clk").on("click", function () {
  next = $(this).text();
  console.log(next)
  if (now == "home") {
    // fromHome(next)
    trial(next)
  }else if(now == "RSVP"){
    // from
  }
});

function trial(next){
  console.log(next+"here")
  if(next == "PHOTOS"){
    console.log("clicked photos")
  }  else if(next == "RSVP"){
    console.log("clicked rsvp")

  }else if (next == "EVENTS"){
    console.log("clicked events")

  }

}

function fromHome(next) {
console.log("next ...."+next)
  switch (next) {
    case "RSVP": 
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("hometorsvp")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "RSVP"
      console.log("now " + now)
    
      break;
    case "PHOTOS": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("hometophotos")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "PHOTOS"
      console.log("now " + now)
    
      break;
    default:
      {
        console.log("please select")
      }
  }

}


