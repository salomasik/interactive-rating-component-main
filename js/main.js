const form = document.forms[0];
const TYel = document.querySelector(".ty-article")
const ulEl = document.querySelector("ul");
const liEls = document.querySelectorAll("li")
const spanEl = document.getElementById("star-mark")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    form.classList.remove("active");
    TYel.classList.add("active");
    

    spanEl.textContent= getStar();


})
ulEl.addEventListener("click",(e)=>{
    e.target.classList.toggle("check")
    liEls.forEach(el => {
        if(e.target.textContent === el.textContent){
        el.classList.add("check")

        }
        else{
        el.classList.remove("check")

        }
        
    });


})

function getStar(){

    let star = 0;
    liEls.forEach(el => {
        if(el.classList.contains("check")){
            star =  el.textContent;
        }
        return
    });

    return star;
}


// function OnSubmit(e){

// }