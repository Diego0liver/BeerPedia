document.querySelector('#pestTxt').addEventListener('input', filterList)



function filterList(){
    const inputPesq = document.querySelector('#pestTxt');
    const filter = inputPesq.value.toLowerCase();
    const listItens = document.querySelectorAll('.item-list');

    listItens.forEach((items) =>{
        let text = items.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())){
            items.style.display = '';
        }else{
            items.style.display = 'none';
        }

    })
    
}
