const images = [ '1.jpg', '2.jpg  ', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg']

const chosenImage = images[Math.floor(Math.random()*images.length)];
const BAG_IMG = "background"
const bgImage = document.createElement("img");
bgImage.classList.add(BAG_IMG)
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage)