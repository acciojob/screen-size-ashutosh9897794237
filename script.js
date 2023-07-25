//your JS code here. If required.
let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;
let element = document.getElementById('screen-size');

 function handleResize() {
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;   
    let text = `Width: ${windowWidth} and Height: ${windowHeight}`;
    element.innerText = text;
   }
   window.addEventListener('resize', handleResize);
   let text = `Width: ${windowWidth} and Height: ${windowHeight}`;
   element.innerText = text;