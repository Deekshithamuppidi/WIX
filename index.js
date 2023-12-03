// let res= document.getElementById("resource")
// console.log(res);
// res.onclick=()=>{
// let btn= document.getElementById("btn")
// console.log(btn);
// }
let res =document.getElementById("resource")
console.log(res);
res.onclick=()=>{
    let btn=document.getElementById("btn")
    console.log(btn);
    let display= btn.classList.toggle("true")
    if(display)
    {
        btn.style.display="block"
    }
    else{
        btn.style.display="none"
    }

}
