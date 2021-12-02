
let acc = document.getElementsByClassName("accordion");
let arw = document.getElementsByClassName("arrow");


function rotatex(arr){
  arr.setAttribute("transform", "rotate(180)");
}


for (let i = 0; i < acc.length; i++) {
 
  acc[i].addEventListener("click", function() {
    acc[i].classList.toggle("active");
    acc[i].classList.toggle("non")

    arw[i].setAttribute("transform", "rotate(180)");
    let panel = acc[i].childNodes[3];
    

    if(acc[i].classList.contains("active")){
      panel.style.display= "none";
      arw[i].setAttribute("transform", "rotate(180)");
    }

    panel.style.display= "inherit";
    panel.style.color= "black";
    
    

    for(let j = 0; j < acc.length; j++){
      if(acc[j].classList.contains("active") && acc[i] !== acc[j] || !acc[j].classList.contains("active")){
        acc[j].classList.remove("active")
        let panel2 = acc[j].childNodes[3];
        panel2.style.display= "none";
        acc[j].classList.add("non");
        arw[j].setAttribute("transform", "rotate(0)");
        }

    }
      

    
  });
  
}

  
