import '../css/style.scss';
import img from '../assets/gif.gif';
import img2 from "../assets/img.png";

const textComponent = ()=>{
    const elH1 = document.createElement("h1")
    elH1.textContent = "Ola mundo!";
    elH1.classList.add('title');
    return elH1 
}

const imgComponet = ()=>{
    const elImg = new Image(600, 600);
    elImg.src = img
    return elImg
}
const imgComponet2 = () => {
  const elImg = new Image(800, 600);
  elImg.src = img2;
  return elImg;
};

document.body.appendChild(imgComponet());
document.body.appendChild(imgComponet2());
document.body.appendChild(textComponent());