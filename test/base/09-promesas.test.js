import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes';

describe('pruebas en el archivo 09-promesas.test.js',()=>{
    test('debe retornar un heroe asyn', (done) => {
        const id=1;
        getHeroeByIdAsync(id)
        .then(heroe=>{
            expect(heroe).toBe(heroes[0]);
            done();
        })
    });
    test('debe obtener error si no existe heroe', (done) => {
        const id=10;
        getHeroeByIdAsync(id).catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
})