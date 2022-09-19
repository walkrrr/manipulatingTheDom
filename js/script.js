var firstListItem = document.querySelector("ul li");
console.log(firstListItem);

firstListItem.style.textTransform = "uppercase";
console.log(firstListItem);

var moreReasons = document.querySelector(".more-reasons");
console.log(moreReasons);

moreReasons.style.fontSize = "2.5em";
console.log(moreReasons);

var whyJS = document.querySelector("h3");
console.log(whyJS);

whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';
console.log(whyJS);

var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
console.log(mainImage);

mainImage.src = "img/js-code.png";
mainImage.alt = "“JavaScript code example”";
