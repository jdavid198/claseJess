import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('pruebas en el archivo 08-imp-exp.test.js',()=>{
    test('obtener heroe X id', () => {
        const id=1;
        const heroe= getHeroeById(id);
        
        const heroeData=heroes.find(h=> h.id===id);
        expect(heroe).toEqual(heroeData);
    })
    test('obtener retornar undefined si no existe', () => {
        const id=10;
        const heroe= getHeroeById(id);
        
        expect(heroe).toBe(undefined);

    })

    test('obtener heroes X owner', () => {
        const owner='DC';
        const heroe= getHeroesByOwner(owner);
        
        const heroeData=heroes.filter(h=> h.owner===owner);
        expect(heroe).toEqual(heroeData);
    })
    test('obtener retornar undefined si no existe', () => {
        const owner='Marvel';
        const heroe= getHeroesByOwner(owner);
        
        expect(heroe.length).toBe(2);

    })
})