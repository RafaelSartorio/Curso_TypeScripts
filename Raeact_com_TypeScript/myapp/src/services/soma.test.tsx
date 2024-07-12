import { soma } from "./soma";

describe('soma', () =>{
    it('deve ser somado 1 ao numero informado' , () => {
        const value = soma(1)
        expect(value).toBe(2)
    })
} )