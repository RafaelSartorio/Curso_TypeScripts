export abstract class Conta {
    private name: string = ""
    private numeroConta: number = 0
    private saldo: number = 0
    

    constructor(name:string ,numeroConta:number ){  
        this.name = name
        this.numeroConta = numeroConta
    }

    Deposito = () =>{
        console.log('Depositado')
    }
    Saque = () =>{
        console.log('Sacado')                
    }
    
    mostrarConta= () => {
        console.log(
            '\nNome:', this.name ,
            '\nConta: ', this.numeroConta,
            '\nsaldo: ', this.saldo
        )
    }

    getName = (): string =>{
        return this.name
    }
    getNumeroConta = ():number =>{
        return this.numeroConta
    }
    getSaldo = (): number =>{
       return this.saldo 
    }
}