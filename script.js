let arr= document.querySelectorAll("button")

let prev;
for( let but of arr){
  but.onclick = (event) =>{
   if(prev){
    prev.style.backgroundColor = "brown"
   }
    event.target.style.backgroundColor = "black"
    prev = event.target

  }
}
 















