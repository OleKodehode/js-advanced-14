const soundContainer = document.getElementById("sound-container");
const soundMap = {
  q: "work_it",
  w: "make_it",
  e: "do_it",
  r: "make_us",
  t: "harder",
  y: "better",
  u: "faster",
  i: "stronger",
  o: "more_than",
  p: "hour",
  a: "our",
  s: "never",
  d: "ever",
  f: "after",
  g: "work_is",
  h: "over",
};

for (let key in soundMap) {
  const soundElement = document.createElement("article");
  const textElement = document.createElement("p");

  soundElement.classList.add("sound-btn");
  soundElement.addEventListener("click", () => playSound(soundMap[key]));

  textElement.textContent = `${key.toUpperCase()} to play ${soundMap[key]
    .replaceAll("_", " ")
    .toUpperCase()}`;

  soundElement.append(textElement);
  soundContainer.append(soundElement);
}

const playSound = (sound) => {
  const audio = new Audio(`./sounds/${sound}.wav`);
  audio.play();
  console.log(`${sound} played`);
};

document.addEventListener("keyup", (e) => {
  const sound = soundMap[e.key];

  if (sound) playSound(sound);
});
