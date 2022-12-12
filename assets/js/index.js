const TREE_CONTAINER = document.createElement("pre");
const MAIN_CONTAINER = document.querySelector(".main-container");

const createTree = (size) => {
  for (let i = 0; i < size; i++) {
    const SPAN_ELEMENT = document.createElement("span");
    const BRANCH = i === 0 || i === size - 1 ? "*\n" : `${"*".repeat(i * 2)}\n`;
    SPAN_ELEMENT.textContent = BRANCH;
    TREE_CONTAINER.appendChild(SPAN_ELEMENT);
  }
  MAIN_CONTAINER.appendChild(TREE_CONTAINER);
};

const getRandomValue = (max, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};

const createSnow = (density) => {
  for (let i = 0; i < density; i++) {
    const SNOW_FLAKE = document.createElement("span");
    const RANDOM_HORIZONTAL_POSITION = `${getRandomValue(100)}%`;
    const RANDOM_FALL_DELAY = `${getRandomValue(100)}s`;
    const RANDOM_FALL_DURATION = `${getRandomValue(20, 5)}s`;
    const RANDOM_FLAKE_SIZE = `${getRandomValue(7, 1)}px`;
    const RANDOM_FLAKE_OPACITY = Math.random().toFixed(2);
    SNOW_FLAKE.classList.add("snow");
    SNOW_FLAKE.style.opacity = RANDOM_FLAKE_OPACITY;
    SNOW_FLAKE.style.width = RANDOM_FLAKE_SIZE;
    SNOW_FLAKE.style.height = RANDOM_FLAKE_SIZE;
    SNOW_FLAKE.style.animation = `fall ${RANDOM_FALL_DURATION} ${RANDOM_FALL_DELAY} linear infinite`;
    SNOW_FLAKE.style.right = RANDOM_HORIZONTAL_POSITION;
    MAIN_CONTAINER.appendChild(SNOW_FLAKE);
  }
};

createTree(12);
createSnow(300);
