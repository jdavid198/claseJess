import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('pruebas en el archivo 05-funciones.test.js',()=>{
    test('prueba de getUser, debe retornar un objeto', () => {
        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user= getUser();
        
        expect(userTest).toEqual(user);
    })

    test('prueba de getUser, debe retornar un objeto', () => {
        const nombre='Juan';
        const userTest={
            uid: 'ABC567',
            username: nombre
        }
        const user= getUsuarioActivo(nombre);
        
        expect(userTest).toEqual(user);
    })
})

