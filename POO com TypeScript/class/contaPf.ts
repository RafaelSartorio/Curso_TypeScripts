import { Conta } from "./conta"

export class ContaPf extends Conta {
    private id_pessoa: number = 0

    constructor(id_pessoa: number , name:string, numeroConta:number){
        super(name,numeroConta)
        this.id_pessoa = id_pessoa
    }

    mostrarConta= () => {
        console.log(
            'id do usuario: ',this.id_pessoa,
            '\nNome:', this.getName(),
            '\nConta: ', this.getNumeroConta(),
            '\nsaldo: ', this.getSaldo()
        )
    }
    
}