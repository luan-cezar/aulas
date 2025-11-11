function getDados(){
    let dados = document.querySelector('#email');
    document.getElementById('mail').innerHtml = dados.value;
}

function getDados2(){
    let dados = document.querySelectorAll('input'); // busca todas as inputs
    document.getElementById('mail').innerHtml = dados[0].value;
    document.getElementById('nasc').innerHtml = dados[1].value;
    for(let i=0; i< dados.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = dados[i].value;
        divDados.appendChild(paragrafo);
    }
}