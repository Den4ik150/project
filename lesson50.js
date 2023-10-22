"use strict";

const p = document.querySelectorAll('p');
console.log(p); 

const script = document.creatElement('script');
script.src = "js/test.js";
script.assync = false;
document.body.append(script); // помещает элемент в конец себя


function loadScript(src) {
    const script = document.creatElement('script');
    script.src = src;
    script.assync = false;
    document.body.append(script); 
}

loadScript("js/test.js");
loadScript();
