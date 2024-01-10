let btn = document.querySelector("button");

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

btn.addEventListener("click", function(){
    let h2 = document.querySelector("h2");
    let randomColor = getRandomColor();
    h2.innerText = getRandomColor();

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
});

