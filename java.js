var elem = document.querySelector("#elem");
let szeles = document.querySelector("#szeles");
let magas = document.querySelector("#magas")
let le = document.querySelector("#le")
let fel = document.querySelector("#fel")
let jobb = document.querySelector("#jobb")
let bal = document.querySelector("#bal")



szeles.addEventListener("input", x => {
    elem.style.width = x.target.value*2 + "px"
  })

magas.addEventListener("input", x => {
    elem.style.height = x.target.value*2 + "px"
})
le.addEventListener("click", x => {
    
    elem.style.marginTop += 10+"px"
})
fel.addEventListener("click", x => {
    
    elem.style.marginBottom += 10+"px"
})
jobb.addEventListener("click", x => {
    
    elem.style.marginLeft += 10+"px"
})
bal.addEventListener("click", x => {
    
    elem.style.marginRight += 10+"px"
})