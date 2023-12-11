document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content-container');

  //start header
  const header = document.createElement('header');
  header.id = 'myHeader';
  header.className = 'fixed-top';

  const nav = document.createElement('nav');
  nav.className = 'navbar bg-body-tertiary';

  const containerFluid = document.createElement('div');
  containerFluid.className = 'container-fluid';

  const navbarBrand = document.createElement('span');
  navbarBrand.className = 'navbar-brand mb-0 h1 mx-auto d-block';
  navbarBrand.textContent = 'HydratioMate';

  container.appendChild(header);
  header.appendChild(nav);
  nav.appendChild(containerFluid);
  containerFluid.appendChild(navbarBrand);
  //end header

  //start glasses tracker
  const mainPlayContainer = document.createElement('div');
  mainPlayContainer.className = 'container-fluid mb-5';
  container.appendChild(mainPlayContainer);

  const rowContainer = document.createElement('div');
  rowContainer.className = 'row align-items-center';
  mainPlayContainer.appendChild(rowContainer);

  const glassTrackerContainer = document.createElement('div');
  glassTrackerContainer.className = 'col-12 col-md-12 col-lg-4 d-flex justify-content-center glass-container';
  rowContainer.appendChild(glassTrackerContainer);

  const subGlassTrackerContainer = document.createElement('div');
  subGlassTrackerContainer.className = 'd-flex flex-column align-items-center text-center';
  glassTrackerContainer.appendChild(subGlassTrackerContainer);

  const cupImg = document.createElement('img');
  cupImg.className = 'img-fluid mx-auto picture';
  cupImg.src = 'assets/images/cup.svg';
  cupImg.alt = 'cup';
  subGlassTrackerContainer.appendChild(cupImg);

  const zeroElement = document.createElement('p');
  zeroElement.id = 'glasses-tracker';
  zeroElement.textContent = '0';
  subGlassTrackerContainer.appendChild(zeroElement);
  //end glasses tracker

  //start HydratioMate Assistant
  const assistantContainer = document.createElement('div');
  assistantContainer.className = 'col-12 col-md-12 col-lg-4 d-flex flex-column justify-content-center mt-5 mb-5 card-btn align-items-center text-center';
  rowContainer.appendChild(assistantContainer);

  const h1 = document.createElement('h1')
  h1.id = 'title';
  h1.textContent = 'HydratioMate Assistant';
  assistantContainer.appendChild(h1);

  const subAssistantContainer = document.createElement('div')
  subAssistantContainer.className = 'd-flex flex-column align-items-center';
  assistantContainer.appendChild(subAssistantContainer);

  const counterElement = document.createElement('p')
  counterElement.id = 'glass';
  counterElement.className = 'mb-3';
  counterElement.textContent = '0';
  subAssistantContainer.appendChild(counterElement);

  const buttonContainer = document.createElement('div')
  buttonContainer.className = 'd-flex align-items-center';
  subAssistantContainer.appendChild(buttonContainer);

  const incrementButton = document.createElement('button');
  incrementButton.id = 'increment';
  incrementButton.className = 'btn btn-primary mb-2 me-4';
  incrementButton.textContent = '+ Glass';

  const resetButton = document.createElement('button');
  resetButton.id = 'reset';
  resetButton.className = 'btn btn-secondary mb-2 custom-btn';
  resetButton.textContent = 'Reset';

  const decrementButton = document.createElement('button');
  decrementButton.id = 'decrement';
  decrementButton.className = 'btn btn-primary mb-2  ms-4';
  decrementButton.textContent = '- Glass';

  buttonContainer.appendChild(incrementButton);
  buttonContainer.appendChild(resetButton);
  buttonContainer.appendChild(decrementButton);
   //end HydratioMate Assistant

   //start litres tracker
  const litresTrackerContainer = document.createElement('div');
  litresTrackerContainer.className = 'col-12 col-md-12 col-lg-4 d-flex justify-content-center glass-container';
  rowContainer.appendChild(litresTrackerContainer);

  const subLitresTrackerContainer = document.createElement('div');
  subLitresTrackerContainer.className = 'd-flex flex-column align-items-center text-center';
  litresTrackerContainer.appendChild(subLitresTrackerContainer);

  const dropImg = document.createElement('img');
  dropImg.className = 'img-fluid mx-auto picture';
  dropImg.src = 'assets/images/drop.svg';
  dropImg.alt = 'drop';
  subLitresTrackerContainer.appendChild(dropImg);

  const litresElement = document.createElement('p');
  litresElement.id = 'liters-tracker';
  litresElement.textContent = '0';
  subLitresTrackerContainer.appendChild(litresElement);
   //end litres tracker

  //start footer
   const footerContainer = document.createElement('div');
   footerContainer.className = 'container my-5 footer';
   container.appendChild(footerContainer);


   // Create row div
   const row = document.createElement('div');
   row.classList.add('row');
   footerContainer.appendChild(row);

   // Create first column
   const col1 = document.createElement('div');
   col1.classList.add('col-md-6', 'col-12', 'd-flex', 'justify-content-md-start', 'justify-content-center');
   row.appendChild(col1);

   // Create trademark link
   const trademarkLink = document.createElement('a');
   trademarkLink.classList.add('footerTrademark');
   trademarkLink.href = 'https://www.vitalefrancesco.com/';
   trademarkLink.target = '_blank';
   trademarkLink.textContent = '© Vitale Francesco';
   col1.appendChild(trademarkLink);

   // Create second column
   const col2 = document.createElement('div');
   col2.classList.add('col-md-6', 'col-12', 'd-flex', 'justify-content-md-end', 'justify-content-center');
   row.appendChild(col2);

   // Create navigation div
   const navFooter = document.createElement('nav');
   nav.classList.add('footerLogos');
   col2.appendChild(navFooter);

   // Create Instagram link and image
   createSocialLink('instagram-footer', 'https://www.instagram.com/vitale_francesco_/', 'assets/images/instagram-icon.svg', 'Instagram');

   // Create LinkedIn link and image
   createSocialLink('linkedin-footer', 'https://www.linkedin.com/in/francesco-vitale-206765226/', 'assets/images/linkedin-icon.svg', 'LinkedIn');

   // Create GitHub link and image
   createSocialLink('git-footer', 'https://github.com/francescovitale-dev', 'assets/images/github-icon.svg', 'GitHub');

   // Function to create social links
   function createSocialLink(className, href, imgSrc, altText) {
    const link = document.createElement('a');
    link.classList.add(className);
    link.href = href;
    link.target = '_blank';
  
    const img = document.createElement('img');
    img.classList.add('footer-picture-' + className.split('-')[0]);
    img.src = imgSrc;
    img.alt = altText;
  
    link.appendChild(img);
    navFooter.appendChild(link);
  }  
  //end footer

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

  }); 




