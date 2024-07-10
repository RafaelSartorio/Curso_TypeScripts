const arrayNuemros: number[] = [1,2,3,4]

const arrayStrings: Array<string> = ['a' , 'b' , 'c', 'd']

// console.log('--------- Antes de mudar---------')
// console.log(arrayNuemros)
// console.log(arrayStrings)
// console.log('---------------------------------')
// arrayNuemros.push(5)
// arrayStrings.pop()

// console.log('--------- depois de mudar---------')
// console.log(arrayNuemros)
// console.log(arrayStrings)

arrayNuemros.forEach(num =>{
    if(num >=2 ){
        console.log(num * 2)
    }
}
)

console.log('---------------------------------')

arrayNuemros.map(num =>{
    if(num >=2 ){
        console.log(num * 2)
    }
}
)