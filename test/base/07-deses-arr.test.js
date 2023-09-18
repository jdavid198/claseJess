import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('pruebas en el archivo 07-deses-arr.test.test.js',()=>{
    test('debe retornar string y numero', () => {
        const [letras,numeros]=retornaArreglo();//['ABC', 123];
        expect(letras).toEqual('ABC');
        expect(typeof(numeros)).toEqual('number');
    })
})