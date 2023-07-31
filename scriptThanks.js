const time = document.querySelector(".time-stats")


setInterval(() => {
  if (Number(time.innerText) > 0) {
    time.innerText = Number(time.innerText) - 1
  } else {
    window.location.assign("https://gabrielsapucci.github.io/")
  }
}, 1000);
