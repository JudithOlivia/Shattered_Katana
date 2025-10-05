window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');

    canvasEl.width = 384;
    canvasEl.height = 224;

    canvasEl.style.width = ${384 * 4}px ; 
    canvasEl.style.height = ${224 * 4}px ; 

    console.log('document is ready');
}
