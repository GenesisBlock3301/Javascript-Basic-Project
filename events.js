function clicked() {
    console.log("This button is clicked.");
    target_con = document.getElementsByClassName("container")
    create_p = document.createElement("p");
    create_p.innerText ="I'm created after execute click button";
    target_con[0].appendChild(create_p);
    target_con[1].innerHTML = "<b>"+"this is bold text"+"</b>"

}
window.onload = function () {
    console.log("The document is loaded.");
};

//basic of eventListner
firstcontainer.addEventListener('click',function () {
    console.log("Clicked on container.");
});

// if mouse take inside target element
firstcontainer.addEventListener('mouseover',function () {
    console.log("Clicked on mouseover.");
});
//mouse out from target element.
firstcontainer.addEventListener('mouseout',function () {
    console.log("Clicked on mouseout.");
});