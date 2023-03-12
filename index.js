var img2 = document.getElementById("filter")
var cta = document.getElementById("CTA");

img2.addEventListener("mouseover", showCTAOnHover);
img2.addEventListener("mouseout", hideCTAOnHover);

function showCTAOnHover(){
    document.getElementById("CTA").style.display = "block";
    cta.style.transition = "0.5s"
}

function hideCTAOnHover(){
    document.getElementById("CTA").style.display = "none";
}


