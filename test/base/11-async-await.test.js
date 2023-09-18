import '@testing-library/jest-dom';
import { getImagen } from '../../base-pruebas/11-async-await';

describe('pruebas en el archivo 11-async-await.test.js',()=>{
    test('debe retornar un heroe asyn',async () => {
      const url=await getImagen();
      expect(url.includes("https://")).toBe(true);
    });
})