
let bckg = document.body;
bckg.style.background = "url(img/apple_true.jpg)";

let sp = document.querySelectorAll(".menu-item");
console.log(sp);
sp[3].style.order = 3;
sp[2].style.order = 1;
sp[1].style.order = 2;

let p5 = document.createElement("p-5")
p5.classList.add("menu-item");

let col = document.querySelector('.column .adv');
console.log(col);
col.style.display = 'none';

let ttl = document.getElementById('title');
let nwttl = 'Мы продаем только подлинную технику Apple';
ttl.textContent = nwttl;

let prmt = document.getElementById('prompt');
prmt.textContent = prompt("Как вы относитесь к технике Apple?");