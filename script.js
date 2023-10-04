function ativasenha(){
    let senha=document.getElementById('senha')
    let teste = document.getElementById('form')

    teste.classList.toggle('ver')
    if(teste.classList.contains('ver')){
        input.type='text'


    }
}
function see(){
    let input = document.getElementById('password');
    let div = document.getElementById('form');

    div.classList.toggle('see')
    if(div.classList.contains('see')){
        input.type = 'text'
        document.getElementById('seepassword').innerHTML = '<span id="seepassword"class="material-symbols-outlined">visibility</span>'
    }
    else{
        
        input.type = 'password'
        document.getElementById('seepassword').innerHTML = '<span id="seepassword"class="material-symbols-outlined">visibility</span>'
    }
}