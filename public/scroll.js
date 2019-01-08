var now = "home";//initially
var next;
var classarray = ["abcd"];
console.log(classarray + " gjgjhghjghjghj")
console.log("now"+ now)



$(".nav-clk").on("click", function () {
  next = $(this).text();
  console.log(next)
  if (now == "home") {
    fromHome(next)
  }else if(now == "RSVP"){
    // from
  }
});



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


