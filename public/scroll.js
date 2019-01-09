var now = "HOME";//initially
var next;
var classarray = ["abcd"];
console.log(classarray + " gjgjhghjghjghj")
console.log("now"+ now)



$(".nav-clk").on("mouseover", function () {
  next = $(this).text();
  console.log(next)
  if (now == "HOME") {
    fromHome(next)
  }else if(now == "RSVP"){
    fromRsvp(next)
  }else if(now == "PHOTOS"){
    fromPhotos(next)
  }else if(now == "EVENTS"){
    fromEvents(next)
  }else if(now == "ACCOMODATIONS"){
    fromAccomodations(next)
  }else if(now == "REGISTRY"){
    fromRegistry(next)
  }
});


// 1.HOME
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
    case "EVENTS": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("hometoevents")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "EVENTS"
      console.log("now " + now)
  
    break;
    case "ACCOMODATIONS": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("hometoacc")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "ACCOMODATIONS"
      console.log("now " + now)
  
    break;
    case "REGISTRY": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("hometoregistry")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "REGISTRY"
      console.log("now " + now)
  
    break;
    default:
      {
        console.log("please select")
      }
  }
}
// 2.rsvp
function fromRsvp(next) {
console.log("next ...."+next)
  switch (next) {
    case "HOME": 
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("rsvptohome")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "HOME"
      console.log("now " + now)
    
      break;
    case "PHOTOS": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("rsvptophotos")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "PHOTOS"
      console.log("now " + now)
    
      break;
    case "EVENTS": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("rsvptoevents")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "EVENTS"
      console.log("now " + now)
  
    break;
    case "ACCOMODATIONS": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("rsvptoacc")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "ACCOMODATIONS"
      console.log("now " + now)
  
    break;
    case "REGISTRY": 
      console.log("anything")
      classarray.pop()
      console.log(classarray, " empty")
      classarray.push("rsvptoregistry")
      console.log(classarray + " pushed")
      $(".lineStyle").addClass(classarray)
      now = "REGISTRY"
      console.log("now " + now)
  
    break;
    default:
      {
        console.log("please select")
      }
  }

}
// 3.photos
function fromPhotos(next) {
  console.log("next ...."+next)
    switch (next) {
      case "HOME": 
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("photostohome")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "HOME"
        console.log("now " + now)
      
        break;
      case "RSVP": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("photostorsvp")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "RSVP"
        console.log("now " + now)
      
        break;
      case "EVENTS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("photostoevents")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "EVENTS"
        console.log("now " + now)
    
      break;
      case "ACCOMODATIONS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("photostoacc")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "ACCOMODATIONS"
        console.log("now " + now)
    
      break;
      case "REGISTRY": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("photostoregistry")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "REGISTRY"
        console.log("now " + now)
    
      break;
      default:
        {
          console.log("please select")
        }
    }
  }
  // 4.EVENTS
function fromEvents(next) {
  console.log("next ...."+next)
    switch (next) {
      case "HOME": 
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("eventstohome")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "HOME"
        console.log("now " + now)
      
        break;
      case "RSVP": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("eventstorsvp")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "RSVP"
        console.log("now " + now)
      
        break;
      case "PHOTOS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("eventstophotos")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "PHOTOS"
        console.log("now " + now)
    
      break;
      case "ACCOMODATIONS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("eventstoacc")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "ACCOMODATIONS"
        console.log("now " + now)
    
      break;
      case "REGISTRY": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("eventstoregistry")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "REGISTRY"
        console.log("now " + now)
    
      break;
      default:
        {
          console.log("please select")
        }
    }
  }
//5. ACCOMODATIONS
function fromAccomodations(next) {
  console.log("next ...."+next)
    switch (next) {
      case "HOME": 
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("acctohome")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "HOME"
        console.log("now " + now)
      
        break;
      case "RSVP": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("acctorsvp")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "RSVP"
        console.log("now " + now)
      
        break;
      case "PHOTOS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("acctophotos")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "PHOTOS"
        console.log("now " + now)
    
      break;
      case "EVENTS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("acctoevents")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "EVENTS"
        console.log("now " + now)
    
      break;
      case "REGISTRY": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("acctoregistry")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "REGISTRY"
        console.log("now " + now)
    
      break;
      default:
        {
          console.log("please select")
        }
    }
  
  }
// 6.registry
function fromRegistry(next) {
  console.log("next ...."+next)
    switch (next) {
      case "HOME": 
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("registrytohome")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "HOME"
        console.log("now " + now)
      
        break;
      case "RSVP": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("registrytorsvp")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "RSVP"
        console.log("now " + now)
      
        break;
      case "PHOTOS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("registrytophotos")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "PHOTOS"
        console.log("now " + now)
    
      break;
      case "EVENTS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("registrytoevents")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "EVENTS"
        console.log("now " + now)
    
      break;
      case "ACCOMODATIONS": 
        console.log("anything")
        classarray.pop()
        console.log(classarray, " empty")
        classarray.push("registrytoacc")
        console.log(classarray + " pushed")
        $(".lineStyle").addClass(classarray)
        now = "ACCOMODATIONS"
        console.log("now " + now)
    
      break;
      default:
        {
          console.log("please select")
        }
    }
  
  }

  
  

