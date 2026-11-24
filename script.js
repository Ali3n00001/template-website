const image = document.querySelector(".artwork");
const clock = document.querySelector(".clock");
const bottomArtwork = document.querySelector(".bottom-artwork");
const compassArtwork = document.querySelector(".compass-artwork");
const compassTrigger = document.querySelector(".clock-trigger");
const glassesTrigger = document.querySelector(".glasses-trigger");

image?.classList.remove("is-entering");
compassArtwork?.classList.remove("is-visible");
compassTrigger?.setAttribute("aria-pressed", "false");

const replayAnimation = (target) => {
  target.classList.remove("is-entering");
  void target.offsetWidth;
  target.classList.add("is-entering");
};

if (clock) {
  const updateClock = () => {
    const now = new Date();
    clock.textContent = new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);
  };

  updateClock();
  setInterval(updateClock, 1000);
}

if (image && glassesTrigger) {
  glassesTrigger.addEventListener("click", () => replayAnimation(image));
}

if (compassArtwork && compassTrigger) {
  compassTrigger.addEventListener("click", () => {
    const isVisible = compassArtwork.classList.toggle("is-visible");
    compassTrigger.setAttribute("aria-pressed", String(isVisible));
  });
}

if (bottomArtwork) {
  const updateBottomArtwork = (event) => {
    const inBottomSection = event.clientY >= window.innerHeight * 0.75;
    bottomArtwork.classList.toggle("is-visible", inBottomSection);
  };

  window.addEventListener("pointermove", updateBottomArtwork);
  window.addEventListener("pointerleave", () => {
    bottomArtwork.classList.remove("is-visible");
  });
}
