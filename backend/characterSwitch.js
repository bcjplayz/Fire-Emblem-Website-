const image_data = [
  { alt: ["Marth", "Lucina"], options: ["marth.png", "lucina.png"] },
  { alt: ["Robin", "RobinF"], options: ["Robin.png", "RobinF.png"] }
];

function getFileName(src) {
  return src.split("/").pop().split("?")[0];
}

function characterButton(img, index) {
  const currentSet = image_data[index];
  if (!currentSet || !img) return;

  const currentSrc = getFileName(img.src);
  const currentIndex = currentSet.options.findIndex(
    (option) => getFileName(option) === currentSrc
  );

  const nextIndex = currentIndex === -1
    ? 0
    : (currentIndex + 1) % currentSet.options.length;
  //img.parentElement.textContent = currentSet.alt[nextIndex];
  img.src = currentSet.options[nextIndex];
  img.alt = currentSet.alt[nextIndex];
}

document.querySelectorAll(".change-img").forEach((button, index) => {
  button.addEventListener("click", () => {
    const img = button.closest(".character-card")?.querySelector("img");
    characterButton(img, index);
  });
});