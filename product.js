let addToCart = document.querySelector('.addCart');
let addedSign = document.querySelector('.addedToCart')

let showAdded = ()=>{
    addedSign.classList.toggle('hidden')
}

addToCart.addEventListener('click', ()=>{
    showAdded();
    setTimeout(() => {
        showAdded()
    }, 1000);
})