const menuItem=document.getElementById("menuitems");


menuItem.addEventListener("click",(event)=>{
    if(event.target.tagName=="LI"){
        console.log("Clicked On:",event.target.textContent);
    }
})

function debounceFuction(input,delay){

}