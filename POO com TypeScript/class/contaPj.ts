import { Conta } from "./conta";

export class ContaPj extends Conta{
    private id_empresa: number = 0

    constructor(id_empresa: number,name: string, numeroConta:number){
        super(name, numeroConta)
        this.id_empresa = id_empresa        
    }
    mostrarConta= () => {
        console.log(
            'id da empresa: ', this.id_empresa,
            '\nNome:', this.getName(),
            '\nConta: ', this.getNumeroConta(),
            '\nsaldo: ', this.getSaldo()
        )
    }
}