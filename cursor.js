const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ff0000", // Red
  "#e60000",
  "#cc0000",
  "#b30000",
  "#990000",
  "#800000",
  "#660000",
  "#4d0000",
  "#330000",
  "#1a0000",
  "#000000", // Black
  "#333333",
  "#666666",
  "#999999",
  "#cccccc",
  "#ffffff", // White (a bit of contrast)
  "#cccccc",
  "#999999",
  "#666666",
  "#333333",
  "#000000", // Back to Black
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
