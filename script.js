const title = document.querySelector(["data-prompt"]);
document.addEventListener("keypress", handleStart);
function update(time) {
  console.log(time);
  window.requestAnimationFrame(update);
}

function handleStart() {
  title.classList.add("hide");

  window.requestAnimationFrame(update);
}

function handleLose() {}
