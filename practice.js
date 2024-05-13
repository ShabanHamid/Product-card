
function showBigImage(thumbnail){
    let bigimage = document.getElementById('bigimage');
    let thumb = thumbnail.querySelector('img');
    let h2  = document.querySelector('h2');
    let color = thumbnail.dataset.color;
    let text = thumbnail.dataset.text;


    bigimage.src = thumb.src;
    document.body.style.backgroundColor = color;
    h2.textContent = text;
}