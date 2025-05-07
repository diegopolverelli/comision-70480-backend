const { suma } = require("./suma.js");

describe("Pruebas a la funcion suma", ()=>{
    it("Si recibo 2 argumentos numéricos, retorna la suma de ambos", ()=>{
        expect(suma(3,3)).toBe(6)
        expect(suma(6,10)).toBe(16)
        expect(suma(3,-3)).toBe(0)
        expect(suma(6,4)).toBe(10)
    })

    it("Si no recibo argumentos, retorna null", ()=>{
        expect(suma()).toBeNull()
    })

    it("Si recibo args no numéricos retorna error", ()=>{
        expect(suma(false, 4)).toBe("error")
        expect(suma({name:"Pedro", age:10}, 4)).toBe("error")
        expect(suma(10, "juan")).toBe("error")
    })

    it("Si recibo n numeros, retorna la suma de todos", ()=>{
        expect(suma(1,2,3,4,5)).toBe(15)
        expect(suma(1,2,3,4,5,100)).toBe(115)
    })
})
