let bPhoto = document.querySelectorAll('.bPhoto');

for (let i of bPhoto){
    i.addEventListener('click', ()=>{
        window.location.assign('product.html');
    })
}
