let span = document.querySelector(".up");
window.onscroll = function () {
    // if (this.scrollY >= 1000){
    //    span.classList.add("up")
    // }else{
    //     span.classList.remove("up")
    // }
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.removez("show"); 
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}