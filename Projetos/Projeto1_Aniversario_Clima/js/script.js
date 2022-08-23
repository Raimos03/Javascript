//JS



function TiltEffect(){

    VanillaTilt.init(document.querySelector(".tilt"),{

        max: 5,
        speed: 400,
        
    });


}

function formataHora(hora){
    return hora<10? `0${hora}`:hora;
}
function Mes(nmes){

    switch (nmes){
        
        case 1:
            return 'Janeiro';
        case 2: 
            return 'Fevereiro';
        case 3: 
            return 'Marco';
        case 4:
            return 'Abril';
        case 5: 
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8: 
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        case 12:
            return 'Dezembro';
        
        default:
            diatexto='Error';
            return diatexto;
    }


}

function DiaSemana(dia){
    //console.log(dia);

    switch (dia){
        case 0: 
            diatexto='Domingo';
            return diatexto;
        case 1:
            diatexto='Segunda-Feira';
            return diatexto;
        case 2: 
            diatexto='Terça-Feira';
            return diatexto;
        case 3: 
            diatexto='Quarta-Feira';
            return diatexto;
        case 4:
            diatexto='Quinta-Feira';
            return diatexto;
        case 5: 
            diatexto='Sexta-Feira';
            return diatexto;
        case 6:
            diatexto='Sábado';
            return diatexto;
        
        default:
            diatexto='Error';
            return diatexto;
    }
}

function Datainfo(){

    let div = document.querySelector("#texto");

    let data= new Date();

    let dia=data.getDate();
    let diasemana = data.getDay();
    let txt_mes=Mes(data.getMonth()+1);
    let ano = data.getFullYear();
    let hora= formataHora(data.getHours());
    let min = formataHora(data.getMinutes());

    let txt_diasemana=DiaSemana(diasemana);
    let conteudo= `${txt_diasemana}, ${dia} de ${txt_mes} de ${ano}  - ${hora}:${min}`;

    let h1 = document.createElement('h1');
    h1.innerHTML=conteudo;
    div.appendChild(h1);
    
}

function VerificaBissexto(){

    let data= new Date();
    let bissexto=false;
    let ano = data.getFullYear();

    let btn_verifica=document.querySelector("#botao_bissexto");
    btn_verifica.addEventListener("click", (event) => 
    {
    
        if(ano%100===0 && ano%400===0 && ano%4===0){
            bissexto=true;
        }

        let pai = document.querySelector("#Resposta_bissexto");
        console.log(pai);

        let img= document.querySelector("#img_resposta");
        let h2= document.querySelector("#h2_resposta");

        if (bissexto){
            
            img.setAttribute("src", "./img/svg_ok_1503312210.svg");
            h2.innerHTML=`O ano ${ano} e bissexto`;
            h2.style.color="rgb(36,39,163)";
            pai.style.visibility='visible';
        }

        else{

            img.setAttribute("src", "./img/svg_wrong_1538154540.svg");
            h2.innerHTML=`O ano ${ano} nao e bissexto`;
            h2.style.color="rgb(36,39,163)";
            pai.style.visibility='visible';
        }
    })
}


function Temperatura(){

    //rio de janeiro 5959;
    //console.log(regiao);
    

    const tk = "14521985ed85e9c6c8694870d622cbaae9c577921";
   
    let url = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5959/current?token=${tk}`;

    fetch(url,{
        method: 'GET',
        headers: {'Content-Type':'application/x-www-form-urlencoded'}, 
    })
    
    .then(response=> response.json())
    .then(data=>showData(data) )
    //.then(data=>console.log(data))
    .catch(e=>console.log(`Erro:`+e,message));

    
    const showData =(result)=>{
        
        //console.log(result.data);
        if(document.querySelector("#img_tempo")){
            document.querySelector("#img_tempo").remove();
        }
    
       let icone =result.data["icon"];

        for( dados in result.data){ // se esse cara existe
            //console.log(dados);
            if(document.querySelector("#"+dados)){
                //console.log(dados);
                let elemento =document.querySelector("#"+dados);

                if (dados === "sensation"){
                    elemento.innerHTML="SST: ";
                    elemento.innerHTML += result.data[dados]+"°";
                }
                else if(dados ==="temperature"){
                    
                    elemento.children[0].innerHTML="";
                    elemento.children[0].innerHTML+=result.data[dados]+"°";
                }
                
                else{
                    elemento.innerHTML="";
                
                    if(dados==="humidity"){
                            elemento.innerHTML="UM: ";
                        }
                    
                    else if (dados==="condition"){
                        elemento.innerHTML="";
                        
                        //console.log(str_condicao);
                    }

                    else if(dados ==="wind_velocity"){
                        elemento.innerHTML="VV: ";
                        }

                    else {
                        elemento.innerHTML="DV: ";
                        }    
                    elemento.innerHTML += result.data[dados];
                }
            }
        }
    
        let div_temp= document.querySelector("#temperature");
        

        let img = document.createElement("img");
        img.setAttribute("id","img_tempo");
        img.src=`./img/weather/${icone}.png`;
        img.style.width="auto";
        img.style.height="65px";
        img.style.padding="5px";
        img.style.margin="0px 0px 5px 18px";

        div_temp.appendChild(img);
    }

}

function criaEstruturaAniversario(){


    let main = document.querySelector("main");
    main.children[0].remove();
    main.children[0].remove();
 
    let h2 = document.createElement("h2");
    let div_dados_aniv = document.createElement("div");
    let div_legenda =document.createElement("div");

    //-------- Preenchendo a DIV  principal--------

    h2.innerText="Faltam";
    main.appendChild(h2);

    
    // ------- prenchendo a div_dados_aniv ----------- 

    div_dados_aniv.setAttribute("id","conteudo_aniversario");
    let id=["r_dia","r_hora","r_minuto","r_segundo","r_semana","r_tempo"];
    let i=0;
    let el;

    for (i;i<6;i++){
        if (i==5){
            el= document.createElement("div");
            el.setAttribute("class","glass tilt"); // card com efeito de vidro
        }
        else{
            el= document.createElement("h2");
        }
        el.setAttribute("id",id[i]);
        div_dados_aniv.appendChild(el);
    }

   // console.log(el);
    let h4 =document.createElement("h4") ;
    h4.setAttribute("id","titulo_tempo");
    h4.innerHTML="Tempo Agora - RJ";
    el.appendChild(h4);

    let div_desc_tempo = document.createElement("div");
    div_desc_tempo.setAttribute("id","desc_tempo");
    el.appendChild(div_desc_tempo);
    
    let id_class_s=[["sensation","f_respostas","SST: "],["condition","f_respostas"," "],["humidity","f_respostas","UM: "],["wind_velocity","f_respostas","VV: "],["wind_direction","f_respostas","DV: "]];

    i=0;
    for (i;i<6;i++){

        if (i==0){
            let div = document.createElement("div");
            div.setAttribute("id","temperature");
            let n_h1 = document.createElement("h1");
            div.appendChild(n_h1);      
            div_desc_tempo.appendChild(div);   
        }

        else {
            let n_h4=document.createElement("h4");

            n_h4.setAttribute("id",id_class_s[i-1][0]);
            n_h4.setAttribute("class",id_class_s[i-1][1]);
            n_h4.innerHTML = id_class_s[i-1][2];
            
            // console.log(id_class_s[i-1][0],id_class_s[i-1][1],id_class_s[i-1][2]);
            
            div_desc_tempo.appendChild(n_h4);  
        }
    }

    // ------- prenchendo a div_legenda ----------- 

    div_legenda.setAttribute("id","legenda");
    let p = document.createElement("p");
    p.innerHTML="SST: Sensacao termica - UM: Umidade - VV: Intensidade do vento em Km/h - DV: Direcao cardial do vento";
    div_legenda.appendChild(p);

// ------- unindo na Div principal -----------

    main.appendChild(div_dados_aniv);
    main.appendChild(div_legenda);

    return;
}

function DiaAniversario(){

    let c_aniv=document.querySelector("#conteudo_aniversario");
    console.log(c_aniv);

    let form = document.querySelector("#envio_aniv");
    let resposta= document.querySelector(".coluna1full");
    
    form.addEventListener('submit', function(evento){

        evento.preventDefault();

        let dia_aniv = (form.querySelector("#idia")).value;
        let mes_aniv= document.getElementById("select").value;
             
        let ano_aniv =(form.querySelector("#iano")).value;
        console.log(dia_aniv,mes_aniv,ano_aniv);

        let data_hoje=new Date();

        let anoatual= data_hoje.getFullYear();

            // console.log(anoatual);
        
        let data_aniv= new Date(anoatual,mes_aniv-1,dia_aniv);
            //console.log(data_hoje);
            

        let diferenca= data_aniv-data_hoje;
        let difdia= parseInt(diferenca/86400000);
        let difhora= parseInt((diferenca%86400000)/3600000);
        let difminutos=parseInt(((diferenca%86400000)%3600000)/60000);
        let difsegundos=parseInt((((diferenca%86400000)%3600000)%60000)/1000);
        let difmes=data_aniv.getMonth()-data_hoje.getMonth();


        let obj_dia=document.querySelector("#r_dia");
        let obj_hora=document.querySelector("#r_hora");
        let obj_minuto=document.querySelector("#r_minuto");
        let obj_segundo=document.querySelector("#r_segundo");
        let obj_semana=document.querySelector("#r_semana");


        if (data_hoje<data_aniv){// Ainda fara aniversario
                
            if((obj_dia==null || obj_dia=="undefined")  && (obj_hora == null || obj_hora=="undefined")){ //nao existir, crio 

                console.log("nao existe conteudo_aniversario");
                criaEstruturaAniversario();

                obj_dia=document.querySelector("#r_dia");
                obj_hora=document.querySelector("#r_hora");
                obj_minuto=document.querySelector("#r_minuto");
                obj_segundo=document.querySelector("#r_segundo");
                obj_semana=document.querySelector("#r_semana");           
            }
            
            obj_dia.innerHTML=`${difdia} dias `;
            obj_hora.innerHTML=`${difhora} horas `;
            obj_minuto.innerHTML=`${difminutos} minutos `;
            obj_segundo.innerHTML=`${difsegundos} segundos `;
            obj_semana.innerHTML=` Cairá em um(a) ${DiaSemana(data_aniv.getDay())} `;
           
            Temperatura();
            TiltEffect();
           
                //console.log(obj_dia,obj_minuto,obj_segundo);        
        }

        else{ // O aniversario ja passou 
                          
                principal=document.querySelector("#conteudo_aniversario");
                let h2_main = document.querySelector("main>h2");
                let main = document.querySelector("main");
                let legenda = document.querySelector("#legenda");


                if(principal ==null ||  principal == undefined){

                    console.log("Elemento nao existe - a data ja ocorreu");
                }

                else{
                    h2_main.remove();

                    //deletando elementos do aniversario

                    obj_dia.remove();
                    obj_hora.remove();
                    obj_minuto.remove();
                    obj_segundo.remove();
                    obj_semana.remove();

                    // principal.children[0].remove();
                    // principal.style.justifyContent = "center";

                    principal.remove();

                    // Criando resposta e div principal

                    let mensagem = document.createElement("h1");
                    let mensagem2 = document.createElement("p");

                    mensagem.innerHTML = "Seu aniversário já passou !";
                    mensagem2.innerHTML = "Insira uma data que ainda ocorrerá este ano";

                    mensagem.setAttribute("class", "passou_aniversario");
                    mensagem2.setAttribute("class", "subtext");

                 
                    main.appendChild(mensagem);
                    main.appendChild(mensagem2);

                    legenda.remove();
                }
               
            }

            let footer = document.querySelector('#rodape');
            footer.style.marginTop="550px";
            resposta.style.visibility="visible"; // deixa a div visivel
            //console.log(diferenca,difdia,difmes,difminutos,difsegundos);

            TiltEffect();
 
    });
}


//----------------------- MAIN ----------------------------------------------------------------



Datainfo();
VerificaBissexto();
DiaAniversario();



    