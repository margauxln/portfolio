var image_tracker='piedDroit';
var delay=500;

function changeImage() {
    var img = document.getElementById("bike");
    console.log(img.src);
    if (image_tracker=='piedDroit'){
        img.src="./autres/bike2.svg";
        image_tracker='piedGauche';
        // console.log(image_tracker);
    }
    else {
        img.src="./autres/bike.svg";
        image_tracker='piedDroit';
        // console.log(image_tracker);
    }
}
var timer=setInterval(changeImage,delay);


//NAVBAR BURGER

function myFunction() {
    var x = document.getElementById("navbarElements");
    if (x.className === "navbarElements") {
        x.className += "_responsive";
        console.log(x.className);
    } else {
        x.className = "navbarElements";
        console.log(x.className);
    }
    var y = document.getElementById("navName");
    if (y.className === "navName") {
        y.className += "_responsive";
        console.log(y.className);
    } else {
        y.className = "navName";
        console.log(y.className);
    }
}