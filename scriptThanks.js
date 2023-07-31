const time = document.querySelector(".time-stats")


setInterval(() => {
  if (Number(time.innerText) > 0) {
    time.innerText = Number(time.innerText) - 1
  } else {
    window.location.assign("http://127.0.0.1:5500/")
  }
}, 1000);