const handleClick = () => {
    let gombok = document.querySelectorAll(".button");
    for (let i = 0; i < gombok.length; i++) {
        gombok[i].addEventListener("click",() => {console.log(gombok[i].textContent)});
        
    }
}