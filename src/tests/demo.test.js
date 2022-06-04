describe('Pruebas en el archivo demo.test.js ',() =>{

test('deben de ser iguales los string', () => {
    //1.inicializacion
    const mensaje='HALLO';

    //2.Estimulo
    const mensaje2='HALLO';

    //3.Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
})

})