let productShown = document.querySelectorAll(".productShown");

for (let i of productShown){
    i.addEventListener('click', ()=>{
        window.location.assign('product.html');
    })
}