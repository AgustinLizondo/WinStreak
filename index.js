let bPhoto = document.querySelectorAll('.bPhoto');
let shadowContainer = document.querySelector('.shadowContainer');

let moveLeft = ()=>{
    shadowContainer.classList.add('moveLeft');
}
let moveRight = ()=>{
    shadowContainer.classList.add('moveRight');
}

for (let i of bPhoto){
    i.addEventListener('click', ()=>{
        window.location.assign('product.html');
    })
    setInterval(() => {
        moveLeft();
    }, 2500);
    setInterval(() => {
        moveRight();
    }, 7500);
}