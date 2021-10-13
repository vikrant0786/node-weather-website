console.log("javascript is love");

const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

messageOne.textContent = "Loading....";
messageTwo.textContent = " ";
weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  

  fetch("http://localhost:3000/weather?address=" + location).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
