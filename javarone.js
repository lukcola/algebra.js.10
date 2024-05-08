var rijeke = ["Mrežnica", "Dobra", "Korana", "Kupa", "Karlovačko"];

var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Karlovac"));

var bodyElem = document.querySelector("body");
bodyElem.prepend(h1);

var dDescr = document.querySelector(".description");
dDescr.innerHTML = "Grad na <h3>5 rijeka</h3>";

var divInfo = document.createElement("div");
divInfo.classList.add('info');
divInfo.innerText = "Peta rijeka je piva.";

var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);

var ul = document.querySelector("ul");

for (let i = ul.childElementCount; i > 0; i--) {
    let child = ul.children[i - 1];
    ul.removeChild(child);
}

for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = rijeke[i];
    ul.appendChild(li);
}