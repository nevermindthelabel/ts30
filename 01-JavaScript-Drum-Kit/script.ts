function checkKeys(e: KeyboardEvent) {
  const key = document.querySelector(/*html*/ `div[data-key="${e.code}"]`) as HTMLElement;
  const audio = document.querySelector(/*html*/ `audio[data-key="${e.code}"]`) as HTMLAudioElement;
  if (!key && !audio) {
    return;
  }
  key.classList.add('playing');
  audio.play();
  document.addEventListener('transitionend', () => removeClass(key));
}

function removeClass(key: HTMLElement) {
  key.classList.remove('playing');
  cleanup(key);
}

function cleanup(key: HTMLElement) {
  document.removeEventListener('transitionend', () => removeClass(key));
}

const keys = document.addEventListener('keyup', e => checkKeys(e));
