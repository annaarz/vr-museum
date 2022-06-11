
let btnArr = document.querySelectorAll('.btnstyle a');
let catalogLineArr = document.querySelectorAll('.catalog_line_product');

console.log(btnArr);
// console.log(catalogLineArr);

for(let i = 0;i<btnArr.length;i++) {
    btnArr[i].addEventListener('click' , (event) => {
        let id = event.target.id;
        console.log(id)
        openCatalog(id);
    })
}



function  openCatalog(id) {
    catalogLineArr.forEach(item => {
        item.style.display = 'none';
        
        console.log(`${id}-line`);

        if(item.classList.contains(`${id}-line`)) {
            item.style.display = 'flex'
        }


        });
} 