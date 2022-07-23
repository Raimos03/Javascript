/* objeto Pessoa
    Uma pessoa sabe dizer a idade, o nome e sobrenome bem como 
    o dia do aniversario e ao mesmo tempo, aumentar sua idade quando for aniversario.
*/


function pessoa(nnome,nsobrenome,nidade){

    return {
        nome:nnome,
        sobrenome:nsobrenome,
        idade:nidade,
        corrida:0,
        cpf: 0,

        fala(){
            console.log(`Ola, meu nome e ${this.nome} ${this.sobrenome} e tenho ${this.idade}`);
        },
        fazaniversario(){
            this.idade++;
        },
        correr(n){
            this.corrida+=n;
        },
        minhacorrida(){
            console.log(`Ao todo, corri ${this.corrida} metros`);
        },

        cria_cpf(){ // gerador automatico de cpf totalmente autoral
            let ncpf=0;
            let i = 1;

            while(i<12){
                ncpf+=Math.floor((Math.random()*(10)))
                let base = ncpf+ (10**(i-1)) + ncpf*(10*i-1);
                
                if (i>6){
                    ncpf+= Math.floor((Math.random()*(10)))+(10**(i-3)+(999*10**(i-4)));
                    ncpf+=Math.floor(ncpf/2);
                }
                //console.log(ncpf,base,i);
                i++;
            }
            this.cpf=ncpf;
        },
    }
}

let pessoa1= pessoa('Pedro','Lima','29');

pessoa1.fala();
pessoa1.fazaniversario();
pessoa1.fala();

pessoa1.correr(3300);
pessoa1.minhacorrida();
pessoa1.cria_cpf();
console.log(pessoa1.cpf);
