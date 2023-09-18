import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas en el archivo 02-template-string.test.js',()=>{
    test('getSaludo debe de retornar Hola fernando', () => {
        const nombre='Fernando';
        const saludo=getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre);
    })
    test('getSaludo debe de retornar Hola Carlos', () => {
        const saludo=getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })
})

