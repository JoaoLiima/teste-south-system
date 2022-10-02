const span = document.getElementById('dynamic-text')
const inputs = ['para sua família.', 'para o seu negócio.', 'para você.'];
const speed = 100;
let letterIndex = 0, backwardsCounter = 0, position = 0;
let text = inputs[position];

function autoWriter() {
  if (letterIndex < text.length) {
    span.innerHTML += text.charAt(letterIndex);
    letterIndex++;
    backwardsCounter = letterIndex;
    setTimeout(autoWriter, speed)
  } else if (backwardsCounter !== -1 && position < inputs.length - 1) {
    span.innerHTML = span.textContent.slice(0, backwardsCounter);
    backwardsCounter--;
    setTimeout(autoWriter, speed)
  } else if (position !== inputs.length - 1){
    letterIndex = 0;
    backwardsCounter = 0;
    position++;
    text = inputs[position]
    setTimeout(autoWriter, speed)
  }
}

autoWriter()