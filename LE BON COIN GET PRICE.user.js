// ==UserScript==
// @name         LE BON COIN GET PRICE
// @namespace    LE BON COIN GET PRICE
// @version      1.0
// @description  LE BON COIN GET PRICE
// @author       Probably
// @match        https://www.leboncoin.fr/*
// @icon         https://e7.pngegg.com/pngimages/217/395/png-clipart-leboncoin-fr-classified-advertising-logo-france-life-of-my-little-dinos-france-angle-logo-thumbnail.png
// @grant        none
// @run-at        document-start
// ==/UserScript==

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

let minvalue = 0;
let maxvalue = 45;

var player = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3");

async function main() {
for (let i = minvalue; i < maxvalue; i++) {
    let result = 'Prix: ' + i + ' €.';

 if (document.documentElement.innerHTML.search(result) != -1) {
          console.log( 'Found it! ' + result );
          player.play();
          window.find(i + ' €');
          await sleep(1000);
    }
  }
}

window.addEventListener("load", () => {
main();
});