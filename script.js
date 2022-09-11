const title = document.querySelector(["data-prompt"]);
document.addEventListener("keypress", handleStart);
function update(time) {
  console.log(time);
  window.requestAnimationFrame(update);
}

function handleStart() {
  title.classList.add("hide");
  setupBird();
  setupPipes();
  lastTime = null;
  window.requestAnimationFrame(updateLoop);
}

window.requestAnimationFrame(update);
function updateLoop(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(updateLoop);
    return;
  }
  const delta = time - lastTime;
  updateBird(delta);
  updatePipes(delta);
  if (checkLose()) return handleLose();
  lastTime = time;
  window.requestAnimationFrame(updateLoop);
}
function isCollided(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.top < rect2.bottom &&
    rect1.right > rect2.left &&
    rect1.bottom > rect2.top
  );
}

function handleLose() {
  setTimeout(() => {
    title.classList.remove("hide");
    document.addEventListener("keypress", handleStart, { once: true });
  }, 100);
}
