let boxes=document.querySelectorAll(".box")
let mainBox=document.querySelector(".main-box");
let redInp=document.querySelector("#redColor")
let greenInp=document.querySelector("#greenColor")
let blueInp=document.querySelector("#blueColor")
let customBox=document.querySelector(".custom-box")
let btn=document.querySelector("button")

boxes.forEach((box)=>{
    box.addEventListener("dragstart",function(e){
        e.dataTransfer.setData("id",e.target.id);
    })
})
mainBox.addEventListener("dragover",function(e){
    e.preventDefault();
})
customBox.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("red",customBox.getAttribute("colorRed"))
    e.dataTransfer.setData("green",customBox.getAttribute("colorGreen"))
    e.dataTransfer.setData("blue",customBox.getAttribute("colorBlue"))

})

mainBox.addEventListener("drop",function(e){
    let id=e.dataTransfer.getData("id")
    if (id) {
        mainBox.style.backgroundColor=id;
    }
    let red= e.dataTransfer.getData("red")
    let green= e.dataTransfer.getData("green")
    let blue= e.dataTransfer.getData("blue")
    if (red && green && blue) {
        mainBox.style.backgroundColor=`rgb(${red},${green},${blue})`
    }
})

btn.addEventListener("click",function(){
    customBox.setAttribute("colorRed",redInp.value)
    customBox.setAttribute("colorGreen",greenInp.value)
    customBox.setAttribute("colorBlue",blueInp.value)
    customBox.style.backgroundColor=`rgb(${customBox.getAttribute("colorRed")},${customBox.getAttribute("colorGreen")},${customBox.getAttribute("colorBlue")})`
})