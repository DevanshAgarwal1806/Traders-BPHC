let mode=document.querySelector(".mode");
let body=document.body;
let bodyc=document.body.style.color;
mode.addEventListener("click", (e)=>{
    // console.log(e.target.src);
    if(e.target.src.includes("light.svg")){
        body.style.backgroundImage = 'url(asset/whitebg.jpg)';
        // console.log(document.querySelectorAll(".navitems"));
        let i=0
        for(i; i<3; i++){
            document.querySelectorAll(".navitems")[i].style.color="black";
            
        }
        let j=0;
        let invert=document.querySelectorAll(".invert");
        console.log(invert)
        for(j; j<invert.length; j++){
            invert[j].style.filter="invert(100%)"
        }
        e.target.src=e.target.src.replace("light.svg", "night.svg");

    }
    else if(e.target.src.includes("night.svg")){
        e.target.src=e.target.src.replace("night.svg", "light.svg");
        body.style.backgroundImage = 'url(asset/background.jpg)';
        let i=0
        for(i; i<3; i++){
            document.querySelectorAll(".navitems")[i].style.color="white";
        }
        let j=0;
        let invert=document.querySelectorAll(".invert");
        // console.log(invert)
        for(j; j<invert.length; j++){
            invert[j].style.filter="invert(0%)"
        }
    }
})