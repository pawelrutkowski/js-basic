# 00 Wymagania

- NodeJS
- Git

## Przygotowanie środowiska

Sklonuj repozytorium:

`git clone https://github.com/pawelrutkowski/js-basic`

Odtwórz folder z projektem:

`cd js-basic`

Stwórz własną gałąź:

`git checkout -b moja-nazwa`

Po każdym rozdziale z zadaniami zrób commita ze zmianami:

`git commit -m “krótki opis zmian”`

## Instalacja zależności

`npm install`

# 01 Podstawy JavaScript

Testy do naprawy znajdują się w folderze `01 JavaScriptBasic`

Napraw testy z folderu `01 JavaScriptBasic`

Aby to zrobić uruchom testy poleceniem:

`npm run test`

lub

`jest test --watch`

`--watch` - ta flaga umożliwia automatyczne uruchamianie testów, po każdej zmianie testy uruchomią się automatycznie, zamiast każdorazowo wpisywać `jest test`.

Zamiast dostawać wyniki ze wszystkich testów, użyj w terminalu polecenia `p`.
Umożliwia ono uruchomienie tylko testów, których nazwa zaczyna się od podanego wzorca.
Rozpocznij od podania wzorca nazwy `01`, napraw testy, a następnie ponów ten krok inkrementując wartość wzorca nazwy.

Oto przykładowy test:

```
describe("`let` restricts the scope of the variable to the current block", () => {
  describe("`let` vs. `var`", () => {
    it("`var` works as usual", () => {
      if (true) {
        let varX = true;
      }
      expect(varX).toEqual(true);
    });
  });
});
```

Testy zbudowane są z:
- Funkcji `describe` - w której pierwszym argumentem jest opis testu, a drugim test - służy do dodawania dodatkowych opisów do testów.
- Funkcji `it` - w której pierwszym argumentem jest opis testu, a drugim test - służy do opisywania testów.
- Funkcji `expect` - która jako argument przyjmuje wynik testu, można na niej wywoła między innymi takie metody jak:
  - Funkcję toEqual - której argumentem jest oczekiwany wynik, jeżeli jest zgodny z otrzymanym wynikiem to test jest prawidłowy.
  - Funkcję toThrow - która sprawdza czy otrzymany rezultat spowodował wystąpienie błędu, jeśli tak to test jest prawidłowy.

Po naprawieniu wszystkich testów wybierz w terminalu `a`, aby uruchomiły się wszystkie testy, teraz powinny być zielone.

# 02 VanilaJS

Zainstaluj globalnie `http-server` poleceniem:

`npm install http-server -g`

Uruchom server poleceniem:

`http-server .`

Otwórz link z terminala, domyślnie jest to: `http://127.0.0.1:8080`

## 02_1 Zadania

W folderze `02 Exercises` znajdują się pliki:
- `index.html` - z kodem html strony, zapoznaj się z tym kodem i otwórz w przeglądarce poprzez link, który otrzymałeś wyżej.
- `script.js` - z kodem javascript, to miejsce na Twój kod.

Rozwiąż poniższe zadania, po kliknięciu na trójkąt rozwinie się rozwiązanie zadania.
> Uwaga. Pamiętaj, jeżeli chcesz się czegoś nauczyć sam rozwiąz zadania, jak napotkasz trudności sprawdź informacje w internecie, pisz kod zamiast go kopiować, po odpowiedzi sięgaj w ostateczności.

<details>
<summary>Ćwiczenie 01 Dla elementu o id `title` ustaw kolor na `white`. Użyj `getElementById`</summary>

```
const title = document.getElementById("title");
title.style.color = "white";
```
</details>


<details>
<summary>Ćwiczenie 02 Dla elementu o klasie `container` ustaw tło na `grey`. Użyj `getElementsByClassName`</summary>

```
const container = document.getElementsByClassName("container")[0];
container.style.backgroundColor = "grey";
```
</details>


<details>
<summary>03 Dla tagów html `button` ustaw `border-width` na `0`. Użyj `getElementsByTagName`</summary>

```
const buttons = document.getElementsByTagName("button");
for (const element of buttons) {
  element.style.borderWidth = "0";
}
```
</details>


<details>
<summary>Ćwiczenie 04 Dla elementu o klasie `list` ustaw kolor na `lightgrey`. Użyj `querySelector`</summary>

```
const resetButton = document.querySelector(".list");
resetButton.style.backgroundColor = "lightgrey";
```
</details>


<details>
<summary>Ćwiczenie 05 Dla elementu o id `element` ustaw wyrównanie tekstu `textAlign` na `center`. Użyj `querySelector`</summary>

```
const myButtons = document.querySelector("#element");
title.style.textAlign = "center";
```
</details>


<details>
<summary>Ćwiczenie 06 Dla elementu o id `start` ustaw event listener, na zdarzenie `click` który ustawi obecny czas w elemencie o id `time`. Użyj `addEventListener`, `Date` i `toLocaleTimeString`</summary>

```
const start = document.getElementById("start");
const time = document.getElementById("time");
let intervalTime;
start.addEventListener("click", event => {
    time.innerHTML = new Date().toLocaleTimeString().toString();
});
```
</details>


<details>
<summary>Ćwiczenie 07 rozbuduj napisany event listener aby czas odświeżał się co sekundę. Użyj `setInterval`</summary>

```
const start = document.getElementById("start");
const time = document.getElementById("time");
let intervalTime;
start.addEventListener("click", event => {
  intervalTime = setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString().toString();
  }, 1000);
});
```
</details>


<details>
<summary>Ćwiczenie 08 Dla elementu o id `stop` ustaw event listener, na zdarzenie `click`, który będzie usuwał wcześniejszy event listener. Użyj `clearInterval`</summary>

```
const stop = document.getElementById("stop");
stop.addEventListener("click", () => {
  clearInterval(intervalTime);
});
```
</details>


<details>
<summary>Ćwiczenie 09 Dla elementu o id `reset` wyzeruj licznik. Sprawdź czy po kliknięciu `start` i `reset` licznik jest dalej wyzerowany, jeeli nie to popraw.</summary>

```
const reset = document.getElementById("reset");
reset.addEventListener("click", event => {
  time.innerHTML = "00:00:00";
  clearInterval(intervalTime);
});
```
</details>


<details>
<summary>Ćwiczenie 10 Dla elementów znajdujących się w elemencie o klasie `list` ustaw wartości tekstów na same duże litery. Użyj `querySelector`, `children`, `toUpperCase`</summary>

```
var list = document.querySelector(".list");
var getContainerChilds = list.children;

for (const element of getContainerChilds) {
  element.innerHTML = element.innerHTML.toUpperCase();
}
```
</details>


<details>
<summary>Ćwiczenie 11 dla elementów listy dodaj event listenery na zdarzenie kliknięcia, które będą zmieniać styl `textDecorationLine` na `line-through` i po ponownym kliknięciu na pustą wartość tego atrybutu.</summary>

```
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
```
</details>


## 03 TODO List 

W folderze  `02 1 ToDo List` znajdują się pliki:
- index.html - z kodem html aplikacji.
- script.js - z kodem JavaScript aplikacji.
- style.css - ze stylami aplikacji.

W pliku `index.html`
- Dodaj tag html `input` z id `new-task`, oraz przycisk z napisem na przykład `Add`.
- Dodaj tag html `ul` z id `tasks` w którym będą elementy listy z zadaniami
- Poniżej znajduje się przykładowy element listy, dodaj go w nowo dodanym tagu `ul` listy i sprawdź efekt.

```
<li>
    <input type="checkbox">
    <label>Zakupy</label>
</li>

```

W pliku `script.js`
- Po kliknięciu na przycisk `Add` zawartość pola do wprowadzania tekstu powinna zostać wyczyszczona, a lista z zadaniami uzupełniona o nowy element.
- Dodaj możliwość usuwania elementów.
- Po kliknięciu na element tekst powinien zostać przekreślony.
- Zabezpiecz przed wprowadzaniem zadań bez tekstu.

Podpowiedzi:
- Do dostania się do elementów użyj `getElementsByTagName` i `getElementById`
- Do dodawania elementów użyj `createElement` i `appendChild`.
- Do usuwania elementów użyj `removeChild`.
- Do dodawania event listenerów użyj `addEventListener`.

Dodatkowe:
- Zaimplementuj możliwość edycji zadań: dodaj przycisk edytuj.

# 04 Service workery

W katalogu `04 Service workers` znajduje się przykładowy kod z Service workerami. Zapoznaj się z kodem i sprawdź jego działania.
Zaimplementuj mechanizm service workers w aplikacji todo.
