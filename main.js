let text = document.querySelector('#color');
let btn = document.querySelector('#btn');
let hexString = '0123456789abcdef'
let randomColor = () => {
    let hexCode = '#';
    for(let i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}
const generator = () => {
   let colorOne = randomColor();
   let colorTwo = randomColor();
   let angle = Math.floor(90);
   document.body.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
   btn.style.color = colorOne;
   text.innerText = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;

}
btn.addEventListener('click', generator);
window.onload = generator;