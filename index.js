let bPhoto = document.querySelectorAll('.bPhoto');
let shadowContainer = document.querySelector('.shadowContainer');

let moveLeft = ()=>{
    shadowContainer.classList.toggle('moveLeft');
}
let moveRight = ()=>{
    shadowContainer.classList.toggle('moveRight');
}
let moveCenter = ()=>{
    shadowContainer.classList.toggle('moveCenter')
}


for (let i of bPhoto){
    i.addEventListener('click', ()=>{
        window.location.assign('product.html');
    })
    setInterval(() => {
        moveLeft();
    }, 5000);
    setInterval(() => {
        moveRight();
    }, 10000);
    setInterval(() => {
        moveCenter();
    }, 15000);
}