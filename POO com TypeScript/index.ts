import { ContaPf } from "./class/contaPf"
import { ContaPj } from "./class/contaPj"



const contaPessoa1:ContaPf = new ContaPf(1, 'Rafael', 10)
console.log(contaPessoa1)
console.log('----------------------------------')
contaPessoa1.mostrarConta()

console.log('\n\n')
const contaEmpresa1 = new ContaPj(5, 'Rg' , 50)
contaEmpresa1.mostrarConta()
console.log('----------------------------------')
console.log(contaEmpresa1)