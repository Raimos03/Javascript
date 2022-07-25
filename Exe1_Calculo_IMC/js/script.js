//JS//

function calculaImc(peso,altura){
    return peso/(altura**2);
}

function resultadoImc(imc){

    let res=[];
    let msg;
    
    if(imc <18.5){
        res.push('Abaixo do peso');
        res.push("rgb(229, 230, 145)");
    }
    else if(imc<24.9){
        res.push('Peso normal');
        res.push("rgb(145, 230, 158");
    }
    else if (imc <29.9){

        res.push('Sobrepeso');
        res.push("rgb(229, 230, 145");
    }
    else if(imc<34.9){

        res.push('Obesidade grau 1');
        res.push("rgb(235, 188, 101");
    }
    else if(imc<39.9){

        res.push('Obesidade grau 2');
        res.push("rgb(235, 161, 101");
    }
    else{
        res.push('Obesidade grau 3')
        res.push("rgb(235, 121, 101");
    }

    return res;
}

function enviar(){

    let form=document.querySelector(".form");
    let resultado=document.querySelector("#resultado");
   
    function imc(evento){

        val=false;
        evento.preventDefault();

        let peso=document.querySelector("#ipeso").value;
        let altura=document.querySelector("#ialtura").value;

        if (altura!=0 && altura>0 && peso>0){
            val=true;
        }

        console.log(peso,altura);
        let imc=calculaImc(peso,altura).toFixed(2);
        //console.log(imc);

        if ( !isNaN(imc) && val==true ){

            res=resultadoImc(imc);
            resultado.style.backgroundColor=res[1];
            resultado.innerHTML=(`<h2> IMC: ${imc}   -    ${res[0]}</h2>`);
        }
        else{
            
            resultado.innerHTML=(`<h2>  Erro de digitacao. <br> Entrada incorreta, favor utilizar numeros maiores que 0.  <br> Casas decimais usam ponto.</h2>`);
            resultado.style.backgroundColor="rgba(200, 66, 61,0.5)";
        }

    }
    form.addEventListener('submit', imc);
}


//-------------------//-------------- MAIN -----------------------------------//


enviar();
