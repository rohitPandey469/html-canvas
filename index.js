let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let hue = 0;
let context;

window.onload = function () {
  const canvas = document.querySelector("#draw");
  context = canvas.getContext("2d"); //Needs to be 2 small d
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.strokeStyle = "green";
  context.lineJoin = "round";
  context.lineCap = "round";
  context.lineWidth = 1;
  context.globalCompositeOperation = "multiply";
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mousedown", (e) => {
    console.log("MOUSEDOWN");
    [lastX, lastY] = [e.offsetX, e.offsetY];
    isDrawing = true;
  });
  canvas.addEventListener("mouseup", () => {
    console.log("MOUSEUP");
    isDrawing = false;
  });
  canvas.addEventListener("mouseout", () => {
    console.log("MOUSEUP");
    isDrawing = false;
  });
};
function draw(e) {
  if (!isDrawing) return;
  console.log(e);
  context.strokeStyle = `hsl(${hue},100%,50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY); //starting from here
  context.lineTo(e.offsetX, e.offsetY); //going to here
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  if (hue >= 360) {
    hue = 0;
  }
  hue++;
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }

}
