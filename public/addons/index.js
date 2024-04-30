document.querySelector("main").style.backgroundColor = "transparent";

var image = document.createElement("img");

image.style.width = "100%";
image.style.height = "100%";
image.style.objectFit = "cover";
image.style.objectPosition = "center";
image.style.zIndex = "-10";
image.style.position = "absolute";
image.style.top = "0";
image.style.left = "0";
image.style.filter = "brightness(0.6) blur(5px)";
document.body.appendChild(image);

var imageSrc = localStorage.getItem("imageSrc");
if (imageSrc) {
  image.setAttribute("src", imageSrc);
} else {
  localStorage.setItem(
    "imageSrc",
    "https://images.unsplash.com/photo-1712693028986-6f0150a5e39a"
  );
}
const navEvent = new Event("registerNewNavButton");
navEvent.detail = {
  text: "Flowspace",
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  onClick: function () {
    var newImage = prompt("Enter image URL");
    if (newImage) {
      image.setAttribute("src", newImage);
      localStorage.setItem("imageSrc", newImage);
    }
  },
};

window.dispatchEvent(navEvent);

const watermark = document.createElement("div");
watermark.style.position = "absolute";
watermark.style.right = "5px";
watermark.style.bottom = "5px";
watermark.style.zIndex = "-10";
watermark.innerText = "Flowspace Engine: " + "v0.6.5 Beta 4a29g2024";
document.body.appendChild(watermark);


