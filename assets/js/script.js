const title = document.querySelector('#glass');
const glasses = document.querySelector('#glasses-tracker');
const liters = document.querySelector('#liters-tracker'); 
let glass = localStorage.getItem('glass') ? parseInt(localStorage.getItem('glass')) : 0;


document.querySelector('#decrement').disabled = true;

function increment() {
  glass += 1;
  ifGlasses()
  updateDecrementButtonState()
  congratulation()
  updateLocalStorage()
}

function decrement() {
  glass -= 1;
  ifGlasses()
  updateDecrementButtonState()
  updateLocalStorage()
}

function reset() {
  glass = 0;
  ifGlasses()
  updateDecrementButtonState()
  updateLocalStorage()
}

function ifGlasses() {
  if (glass >= 2) {
    title.textContent = glass;
    glasses.textContent = `${glass} glasses`;
    liters.textContent = `${glass * 0.25} liters`;
  } else if (glass <= 1) {
    title.textContent = glass;
    glasses.textContent = `${glass} glass`;
    liters.textContent = `${glass * 0.25} liters`;
  } 
}

function updateDecrementButtonState() {
  if (glass === 0) {
    document.querySelector('#decrement').disabled = true;
  } else if (glass >=1) {
    document.querySelector('#decrement').disabled = false;
  }
}

function updateLocalStorage() {
  localStorage.setItem('glass', glass);
}

function congratulation() {
  if (glass === 4) {
    Swal.fire({
      title: "Great job!",
      text: "You've reached 1 liter of water. Keep it up!",
      icon: "success"
    });
  } else if (glass === 6) {
    Swal.fire({
      title: "Well done!",
      text: "You've reached 1.5L of water intake!",
      icon: "success"
    });
  } else if ((glass === 8)) {
    Swal.fire({
      title: "Fantastic!",
      text: "You've successfully achieved a daily water intake of 2 liters!",
      icon: "success"
    });
  } else if (glass === 10) {
    Swal.fire({
      title: "Incredible Achievement!",
      text: "You've reached a milestone of 10 glasses, equivalent to 2.5 liters of water!",
      icon: "success"
    });
  } else if (glass === 12) {
    Swal.fire({
      title: "Congratulations!",
      html: "<p style='font-size: 18px;'>You've achieved an outstanding feat by reaching 3 liters of water intake!</p>" +
            "<p style='font-size: 18px;'>Keep hydrating and maintaining a healthy lifestyle!</p>",
      icon: "success"
    });
  } else if (glass === 14) {
    Swal.fire({
      title: "Info",
      text: "Just a friendly reminder to drink water moderately. You've reached 3.5 liters today.",
      icon: "info"
    });
  } else if (glass === 16) {
    Swal.fire({
      title: "Info",
      text: "Just a friendly reminder to drink water moderately. You've reached 4 liters today.",
      icon: "info"
    });
  } else if (glass === 18) {
    Swal.fire({
      title: "Info",
      text: "Just a friendly reminder to drink water moderately. You've reached 4.5 liters today.",
      icon: "info"
    });
  } else if (glass === 20) {
    Swal.fire({
      title: "Info",
      text: "Just a friendly reminder to drink water moderately. You've reached 5 liters today.",
      icon: "info"
    });
  }
}


document.querySelector('#increment').onclick = increment;
document.querySelector('#decrement').onclick = decrement;
document.querySelector('#reset').onclick = reset;

ifGlasses();
updateDecrementButtonState();




