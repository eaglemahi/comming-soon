const count = document.querySelector(".countdown");
const future = new Date("2025,jan 1").getTime();

const counter = () => {

    const present = new Date().getTime();

    let distance = future - present;

    let day = Math.floor((distance / (24 * 60 * 60 * 1000)));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    count.innerHTML = `<p> ${day}D : ${hours}H : ${minutes}M : ${seconds}S </p>`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(counter);
    count.innerHTML = `<p>EXPIRED</p>`;
  }
};

setInterval(counter, 1000);