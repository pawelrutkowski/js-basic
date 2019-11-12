// Miejsce na kod z rzdziału 02


// 01 Dla elementu o id `title` ustaw kolor na `white`. Użyj `getElementById`
const title = document.getElementById("title");
title.style.color = "white";

// 02 Dla elementu o klasie `container` ustaw tło na `grey`. Użyj `getElementsByClassName`
const container = document.getElementsByClassName("container")[0];
container.style.backgroundColor = "grey";

// 03 Dla tagów html `button` ustaw `border-width` na `0`. Użyj `getElementsByTagName`
const buttons = document.getElementsByTagName("button");
for (const element of buttons) {
  element.style.borderWidth = "0";
}

// 04 Dla elementu o klasie `list` ustaw kolor na `lightgrey`. Użyj `querySelector`
const resetButton = document.querySelector(".list");
resetButton.style.backgroundColor = "lightgrey";

// 05 Dla elementu o id `element` ustaw wyrównanie tekstu `textAlign` na `center`. Użyj `querySelector`
const myButtons = document.querySelector("#element");
title.style.textAlign = "center";

// 06 Dla elementu o id `start` ustaw event listener, na zdarzenie `click` który ustawi obecny czas w elemencie o id `time`. Użyj `addEventListener` i `toLocaleTimeString`
const start = document.getElementById("start");
const time = document.getElementById("time");
let intervalTime;
start.addEventListener("click", event => {
    time.innerHTML = new Date().toLocaleTimeString().toString();
});

// 07 rozbuduj napisany event listener aby odświerzał czas co sekundę. Użyj `setInterval`
const start = document.getElementById("start");
const time = document.getElementById("time");
let intervalTime;
start.addEventListener("click", event => {
  intervalTime = setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString().toString();
  }, 1000);
});

// 08 Dla elementu o id `stop` ustaw event listener, na zdarzenie `click`, który będzie usówał wcześniejszy event listener. Użyj `clearInterval`
const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  clearInterval(intervalTime);
});

// 09 Dla elementu o id `reset` wyzeruj licznik. Sprawdź czy po kliknięciu `start` i `reset` licznik jest dalej wyzerowany, jeeli nie to popraw.
const reset = document.getElementById("reset");
reset.addEventListener("click", event => {
  time.innerHTML = "00:00:00";
  clearInterval(intervalTime);
});

// 10 Dla elementu dzieci w elemencie o klasie `list` ustaw wartości tekstów na same duże litery. Użyj `querySelector` i  `children`
var list = document.querySelector(".list");
var getContainerChilds = list.children;

for (const element of getContainerChilds) {
  element.innerHTML = element.innerHTML.toUpperCase();
}

// 11 dla elementów listy dodaj event listenery na zdarzenie kliknięcia, które będą zmieniać styl `textDecorationLine` na `line-through` i po ponownym kliknięciu na pustą wartość tego atrybutu.
const elementsList = document.getElementsByTagName("li");
for (const element of elementsList) {
  element.addEventListener("click", event => {
    console.log(event);
    if (element.style.textDecorationLine === "line-through") {
      element.style.textDecorationLine = "";
    } else {
      element.style.textDecorationLine = "line-through";
    }
  });
}


