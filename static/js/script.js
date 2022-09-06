
function setImage(argument){
    document.getElementById("main-image").src = argument.src
}

for(let i of document.getElementsByClassName("image-menu")[0].children){
    console.log(i.src)
}