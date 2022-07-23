//js
//tag script precisa vir no final do DOM //

function meuEscopo(){ // tudo que estiver aqui dentro estara protegido
   
    let form=document.querySelector('.formulario'); // usando a classe
    let resultado=document.querySelector('.resultado'); 

    let pessoas=[];


    function recebeEventoForm (evento){
        evento.preventDefault();

        let nome=document.querySelector(`.nome`);
        let sobrenome=document.querySelector(`.sobrenome`);
        let idade=document.querySelector(`.idade`);
        let peso=document.querySelector(`.peso`);
        let altura=document.querySelector(`.altura`);

        //console.log(nome,sobrenome,altura, peso, idade);
        pessoas.push({nome:nome.value,sobrenome:sobrenome.value,peso:peso.value,idade:idade.value,altura:altura.value});
        
        resultado.innerHTML += `<p>${nome.value} - ${sobrenome.value} - ${idade.value} - ${peso.value} - ${altura.value}</p>`;
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
